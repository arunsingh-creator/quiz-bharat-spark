import { useState, useEffect } from "react";
import { QuizButton } from "@/components/ui/quiz-button";
import { Question, getRandomQuestions } from "@/data/questions";
import { Clock, Trophy, Star, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizGameProps {
  onBackToHome: () => void;
  onQuizComplete: (score: number, totalQuestions: number) => void;
}

export const QuizGame = ({ onBackToHome, onQuizComplete }: QuizGameProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const quizQuestions = getRandomQuestions(10);
    setQuestions(quizQuestions);
  }, []);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Auto-submit when time runs out
    }
  }, [timeLeft, gameStarted, showResult]);

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(30);
  };

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const newScore = score + currentQuestion.points;
      setScore(newScore);
      toast({
        title: "Correct! 🎉",
        description: `You earned ${currentQuestion.points} points!`,
        className: "bg-success text-success-foreground border-success",
      });
    } else {
      toast({
        title: timeLeft === 0 ? "Time's Up! ⏰" : "Incorrect 😞",
        description: `The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`,
        variant: "destructive",
      });
    }

    // Auto-advance after 3 seconds
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(30);
      } else {
        onQuizComplete(score + (isCorrect ? currentQuestion.points : 0), questions.length);
      }
    }, 3000);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-2xl mx-auto text-center p-8">
          <Trophy className="w-20 h-20 text-accent mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Ready to Begin?</h1>
          <p className="text-xl text-muted-foreground mb-8">
            You'll have 30 seconds per question. Answer wisely to maximize your score!
          </p>
          
          <div className="bg-card rounded-lg p-6 mb-8 border border-border">
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Quiz Rules:</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• 10 random questions from Indian culture & traditional games</li>
              <li>• 30 seconds per question</li>
              <li>• Points: Easy (100), Medium (200), Hard (500)</li>
              <li>• No negative marking</li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <QuizButton variant="secondary" onClick={onBackToHome}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </QuizButton>
            <QuizButton variant="hero" size="lg" onClick={startGame}>
              <Star className="mr-2 h-5 w-5" />
              Start Quiz
            </QuizButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <QuizButton variant="ghost" onClick={onBackToHome}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Exit Quiz
          </QuizButton>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">{score} Points</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className={`font-semibold ${timeLeft <= 10 ? 'text-destructive' : 'text-foreground'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="container mx-auto mt-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Question Card */}
          <div className="bg-card rounded-lg border border-border p-8 mb-8 shadow-primary">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {currentQuestion.category.toUpperCase()}
              </span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {currentQuestion.difficulty.toUpperCase()} - {currentQuestion.points} pts
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => {
                let variant: "option" | "correct" | "incorrect" = "option";
                
                if (showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    variant = "correct";
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                    variant = "incorrect";
                  }
                }

                return (
                  <QuizButton
                    key={index}
                    variant={variant}
                    size="option"
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className="text-left"
                  >
                    <span className="flex items-center">
                      <span className="bg-accent/20 text-accent rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>
                  </QuizButton>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};