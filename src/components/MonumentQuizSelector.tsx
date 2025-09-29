import { QuizButton } from "@/components/ui/quiz-button";
import { MonumentQuiz } from "@/data/monumentQuizzes";
import { Eye, Play, Clock, Trophy } from "lucide-react";
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

interface MonumentQuizSelectorProps {
  quiz: MonumentQuiz;
  onSelect: () => void;
}

export const MonumentQuizSelector = ({ quiz, onSelect }: MonumentQuizSelectorProps) => {
  const [showImageViewer, setShowImageViewer] = useState(false);
  
  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
  const imageUrl = monumentImages[quiz.id] || quiz.imageUrl;

  const handleViewImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowImageViewer(true);
  };

  return (
    <>
      <div className="group bg-card rounded-lg border border-border overflow-hidden shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={quiz.monument}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* View Image Button */}
          <button
            onClick={handleViewImage}
            className="absolute top-3 right-3 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Eye className="h-4 w-4" />
          </button>
          
          {/* Monument Name Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-lg font-bold text-white mb-1">{quiz.monument}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{quiz.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats */}
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>10 Questions</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              <span>{totalPoints} Points</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <QuizButton
              variant="hero"
              size="default"
              onClick={onSelect}
              className="flex-1"
            >
              <Play className="mr-2 h-4 w-4" />
              Start Quiz
            </QuizButton>
            <QuizButton
              variant="secondary"
              size="default"
              onClick={handleViewImage}
            >
              <Eye className="h-4 w-4" />
            </QuizButton>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {showImageViewer && (
        <MonumentImageViewer
          monument={quiz.monument}
          imageUrl={imageUrl}
          description={quiz.description}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </>
  );
};