import { useState, useEffect } from "react";
import { QuizButton } from "@/components/ui/quiz-button";
import { MonumentQuiz as MonumentQuizType, MonumentQuestion } from "@/data/monumentQuizzes";
import { Clock, Trophy, Star, ArrowLeft, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MonumentImageViewer } from "@/components/MonumentImageViewer";

// Import monument images
import tajMahalImg from "@/assets/taj-mahal.jpg";
import redFortImg from "@/assets/red-fort.jpg";
import qutubMinarImg from "@/assets/qutub-minar.jpg";
import hampiImg from "@/assets/hampi.jpg";
import ajantaElloraImg from "@/assets/ajanta-ellora.jpg";
import konarkImg from "@/assets/konark.jpg";
import khajurahoImg from "@/assets/khajuraho.jpg";
import fatehpurSikriImg from "@/assets/fatehpur-sikri.jpg";

const monumentImages: Record<string, string> = {
  'taj-mahal': tajMahalImg,
  'red-fort': redFortImg,
  'qutub-minar': qutubMinarImg,
  'hampi': hampiImg,
  'ajanta-ellora': ajantaElloraImg,
  'konark': konarkImg,
  'khajuraho': khajurahoImg,
  'fatehpur-sikri': fatehpurSikriImg,
};

interface MonumentQuizProps {
  quiz: MonumentQuizType;
  onBackToSelection: () => void;
  onQuizComplete: (score: number, totalQuestions: number) => void;
}

export const MonumentQuiz = ({ quiz, onBackToSelection, onQuizComplete }: MonumentQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45); // 45 seconds per question for monuments
  const [gameStarted, setGameStarted] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const { toast } = useToast();

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  const monumentImageUrl = monumentImages[quiz.id] || quiz.imageUrl;

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
    setTimeLeft(45);
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
      if (currentQuestionIndex + 1 < quiz.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(45);
      } else {
        onQuizComplete(score + (isCorrect ? currentQuestion.points : 0), quiz.questions.length);
      }
    }, 3000);
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <QuizButton variant="ghost" onClick={onBackToSelection}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Selection
              </QuizButton>
              
              <QuizButton variant="secondary" onClick={() => setShowImageViewer(true)}>
                <Eye className="mr-2 h-5 w-5" />
                View Monument
              </QuizButton>
            </div>

            {/* Quiz Preview */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <img
                  src={monumentImageUrl}
                  alt={quiz.monument}
                  className="w-80 h-48 object-cover rounded-lg shadow-primary"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-lg" />
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">{quiz.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{quiz.description}</p>
              
              <div className="bg-card rounded-lg p-6 mb-8 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Quiz Rules:</h3>
                <ul className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
                  <li>• 10 questions about {quiz.monument}</li>
                  <li>• 45 seconds per question</li>
                  <li>• Points based on difficulty level</li>
                  <li>• Learn fascinating historical facts</li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center">
                <QuizButton variant="secondary" onClick={onBackToSelection}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </QuizButton>
                <QuizButton variant="hero" size="lg" onClick={startGame}>
                  <Star className="mr-2 h-5 w-5" />
                  Start {quiz.monument} Quiz
                </QuizButton>
              </div>
            </div>
          </div>
        </div>

        {/* Image Viewer */}
        {showImageViewer && (
          <MonumentImageViewer
            monument={quiz.monument}
            imageUrl={monumentImageUrl}
            description={quiz.description}
            onClose={() => setShowImageViewer(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <QuizButton variant="ghost" onClick={onBackToSelection}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Exit Quiz
            </QuizButton>
            
            <h2 className="text-lg font-semibold text-card-foreground">{quiz.monument}</h2>
            
            <div className="flex items-center gap-6">
              <QuizButton variant="ghost" size="sm" onClick={() => setShowImageViewer(true)}>
                <Eye className="mr-2 h-4 w-4" />
                View
              </QuizButton>
              
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
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 shadow-primary">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {quiz.monument.toUpperCase()}
              </span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {currentQuestion.points} POINTS
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

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

      {/* Image Viewer */}
      {showImageViewer && (
        <MonumentImageViewer
          monument={quiz.monument}
          imageUrl={monumentImageUrl}
          description={quiz.description}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </div>
  );
};