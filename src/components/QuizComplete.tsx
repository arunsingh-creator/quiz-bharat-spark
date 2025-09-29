import { QuizButton } from "@/components/ui/quiz-button";
import { Trophy, Star, RotateCcw, Home, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizCompleteProps {
  score: number;
  totalQuestions: number;
  maxPossibleScore: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

export const QuizComplete = ({ 
  score, 
  totalQuestions, 
  maxPossibleScore,
  onPlayAgain, 
  onBackToHome 
}: QuizCompleteProps) => {
  const { toast } = useToast();
  const percentage = Math.round((score / maxPossibleScore) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🏆", color: "text-accent" };
    if (percentage >= 75) return { message: "Excellent! 🌟", color: "text-success" };
    if (percentage >= 60) return { message: "Great Job! 👏", color: "text-primary" };
    if (percentage >= 40) return { message: "Good Effort! 👍", color: "text-secondary" };
    return { message: "Keep Learning! 📚", color: "text-muted-foreground" };
  };

  const performance = getPerformanceMessage();

  const handleShare = () => {
    const shareText = `I just scored ${score} points (${percentage}%) in the Swadeshi Quiz Challenge! Test your knowledge of Indian culture and traditional games. 🇮🇳`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Swadeshi Quiz Challenge',
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard! 📋",
        description: "Share your score with friends!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        {/* Trophy Animation */}
        <div className="relative mb-8">
          <Trophy className="w-24 h-24 text-accent mx-auto animate-glow-pulse" />
          <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
            {Math.round((score / maxPossibleScore) * 100)}%
          </div>
        </div>

        {/* Results */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Quiz Complete!
        </h1>
        
        <p className={`text-2xl font-semibold mb-6 ${performance.color}`}>
          {performance.message}
        </p>

        {/* Score Details */}
        <div className="bg-card rounded-lg border border-border p-8 mb-8 shadow-primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">{score}</div>
              <div className="text-muted-foreground">Total Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{percentage}%</div>
              <div className="text-muted-foreground">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">{totalQuestions}</div>
              <div className="text-muted-foreground">Questions</div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {score > 0 && (
            <div className="bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Quiz Completed
            </div>
          )}
          {percentage >= 75 && (
            <div className="bg-success/20 text-success border border-success/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              High Scorer
            </div>
          )}
          {percentage >= 90 && (
            <div className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Quiz Master
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuizButton variant="hero" size="lg" onClick={onPlayAgain}>
            <RotateCcw className="mr-2 h-5 w-5" />
            Play Again
          </QuizButton>
          
          <QuizButton variant="secondary" size="lg" onClick={handleShare}>
            <Share className="mr-2 h-5 w-5" />
            Share Score
          </QuizButton>
          
          <QuizButton variant="ghost" size="lg" onClick={onBackToHome}>
            <Home className="mr-2 h-5 w-5" />
            Back Home
          </QuizButton>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-muted">
          <p className="text-muted-foreground">
            "Learning about our rich cultural heritage makes us stronger as a nation. 
            Keep exploring the wisdom of our ancestors! 🇮🇳"
          </p>
        </div>
      </div>
    </div>
  );
};