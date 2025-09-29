import { QuizButton } from "@/components/ui/quiz-button";
import { MonumentQuiz } from "@/data/monumentQuizzes";
import { Trophy, Star, RotateCcw, ArrowLeft, Home, Share, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
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

interface MonumentQuizCompleteProps {
  quiz: MonumentQuiz;
  score: number;
  totalQuestions: number;
  maxPossibleScore: number;
  onPlayAgain: () => void;
  onBackToSelection: () => void;
  onBackToHome: () => void;
}

export const MonumentQuizComplete = ({ 
  quiz,
  score, 
  totalQuestions, 
  maxPossibleScore,
  onPlayAgain, 
  onBackToSelection,
  onBackToHome
}: MonumentQuizCompleteProps) => {
  const { toast } = useToast();
  const [showImageViewer, setShowImageViewer] = useState(false);
  const percentage = Math.round((score / maxPossibleScore) * 100);
  const monumentImageUrl = monumentImages[quiz.id] || quiz.imageUrl;
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Heritage Master! 🏛️", color: "text-accent" };
    if (percentage >= 75) return { message: "Cultural Expert! 🌟", color: "text-success" };
    if (percentage >= 60) return { message: "History Enthusiast! 👏", color: "text-primary" };
    if (percentage >= 40) return { message: "Good Explorer! 👍", color: "text-secondary" };
    return { message: "Keep Learning! 📚", color: "text-muted-foreground" };
  };

  const performance = getPerformanceMessage();

  const handleShare = () => {
    const shareText = `I just scored ${score} points (${percentage}%) on the ${quiz.monument} heritage quiz! 🏛️ Test your knowledge of India's magnificent monuments! 🇮🇳`;
    
    if (navigator.share) {
      navigator.share({
        title: `${quiz.monument} Quiz Result`,
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard! 📋",
        description: "Share your heritage knowledge!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Monument Image */}
          <div className="relative mb-8">
            <img
              src={monumentImageUrl}
              alt={quiz.monument}
              className="w-full max-w-md mx-auto h-48 object-cover rounded-lg shadow-primary"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-lg" />
            <QuizButton
              variant="ghost"
              size="sm"
              onClick={() => setShowImageViewer(true)}
              className="absolute top-3 right-3 bg-background/80 hover:bg-background"
            >
              <Eye className="h-4 w-4" />
            </QuizButton>
          </div>

          {/* Trophy Animation */}
          <div className="relative mb-8">
            <Trophy className="w-24 h-24 text-accent mx-auto animate-glow-pulse" />
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
              {percentage}%
            </div>
          </div>

          {/* Results */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {quiz.monument} Quiz Complete!
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
            <div className="bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              {quiz.monument} Explorer
            </div>
            {percentage >= 75 && (
              <div className="bg-success/20 text-success border border-success/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Heritage Expert
              </div>
            )}
            {percentage >= 90 && (
              <div className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Monument Master
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <QuizButton variant="hero" size="lg" onClick={onPlayAgain}>
              <RotateCcw className="mr-2 h-5 w-5" />
              Play Again
            </QuizButton>
            
            <QuizButton variant="secondary" size="lg" onClick={handleShare}>
              <Share className="mr-2 h-5 w-5" />
              Share Score
            </QuizButton>
            
            <QuizButton variant="ghost" size="lg" onClick={() => setShowImageViewer(true)}>
              <Eye className="mr-2 h-5 w-5" />
              View Monument
            </QuizButton>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuizButton variant="secondary" onClick={onBackToSelection}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Try Another Monument
            </QuizButton>
            
            <QuizButton variant="ghost" onClick={onBackToHome}>
              <Home className="mr-2 h-5 w-5" />
              Back Home
            </QuizButton>
          </div>

          {/* Motivational Message */}
          <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-muted">
            <p className="text-muted-foreground">
              "Every monument tells a story of our glorious past. Keep exploring our rich heritage! 🏛️"
            </p>
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