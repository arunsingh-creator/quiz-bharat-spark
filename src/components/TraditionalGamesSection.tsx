import { useState } from "react";
import { QuizButton } from "@/components/ui/quiz-button";
import { MonumentQuizSelector } from "@/components/MonumentQuizSelector";
import { MonumentQuiz } from "@/components/MonumentQuiz";
import { MonumentQuizComplete } from "@/components/MonumentQuizComplete";
import { getAllMonumentQuizzes, MonumentQuiz as MonumentQuizType } from "@/data/monumentQuizzes";
import { ArrowLeft, Castle, Trophy, Star } from "lucide-react";

interface TraditionalGamesSectionProps {
  onBackToHome: () => void;
}

type GameState = 'selection' | 'quiz' | 'complete';

export const TraditionalGamesSection = ({ onBackToHome }: TraditionalGamesSectionProps) => {
  const [gameState, setGameState] = useState<GameState>('selection');
  const [selectedQuiz, setSelectedQuiz] = useState<MonumentQuizType | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const monumentQuizzes = getAllMonumentQuizzes();

  const handleSelectQuiz = (quiz: MonumentQuizType) => {
    setSelectedQuiz(quiz);
    setGameState('quiz');
  };

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore(score);
    setTotalQuestions(total);
    setGameState('complete');
  };

  const handleBackToSelection = () => {
    setGameState('selection');
    setSelectedQuiz(null);
    setQuizScore(0);
    setTotalQuestions(0);
  };

  const handlePlayAgain = () => {
    setQuizScore(0);
    setTotalQuestions(0);
    setGameState('quiz');
  };

  if (gameState === 'quiz' && selectedQuiz) {
    return (
      <MonumentQuiz
        quiz={selectedQuiz}
        onBackToSelection={handleBackToSelection}
        onQuizComplete={handleQuizComplete}
      />
    );
  }

  if (gameState === 'complete' && selectedQuiz) {
    return (
      <MonumentQuizComplete
        quiz={selectedQuiz}
        score={quizScore}
        totalQuestions={totalQuestions}
        maxPossibleScore={selectedQuiz.questions.reduce((sum, q) => sum + q.points, 0)}
        onPlayAgain={handlePlayAgain}
        onBackToSelection={handleBackToSelection}
        onBackToHome={onBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <QuizButton variant="ghost" onClick={onBackToHome}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </QuizButton>
            
            <div className="flex items-center gap-2">
              <Castle className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold text-accent">Heritage Monuments</span>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Heritage Monument Quizzes
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Explore India's magnificent monuments through interactive quizzes
            </p>
            <p className="text-accent/80">
              Each quiz contains 10 questions about historical facts, architecture, and cultural significance
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {monumentQuizzes.map((quiz) => (
            <MonumentQuizSelector
              key={quiz.id}
              quiz={quiz}
              onSelect={() => handleSelectQuiz(quiz)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-primary">
          <h2 className="text-2xl font-bold text-center mb-6 text-card-foreground">
            Heritage Learning Stats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-2">8</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Castle className="h-4 w-4" />
                UNESCO World Heritage Sites
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-secondary mb-2">80</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Trophy className="h-4 w-4" />
                Total Questions Available
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground flex items-center justify-center gap-2">
                <Star className="h-4 w-4" />
                Years of History Covered
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-muted/20 rounded-lg border border-muted p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">About Heritage Monument Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Learning Objectives:</h4>
              <ul className="space-y-1">
                <li>• Understand architectural styles and techniques</li>
                <li>• Learn about historical periods and rulers</li>
                <li>• Discover cultural significance and stories</li>
                <li>• Appreciate UNESCO World Heritage values</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Quiz Features:</h4>
              <ul className="space-y-1">
                <li>• 10 carefully curated questions per monument</li>
                <li>• High-quality images for visual learning</li>
                <li>• Detailed explanations for each answer</li>
                <li>• Progressive difficulty levels and scoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};