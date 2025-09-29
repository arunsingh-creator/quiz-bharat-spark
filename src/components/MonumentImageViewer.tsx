import { QuizButton } from "@/components/ui/quiz-button";
import { X, Download, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MonumentImageViewerProps {
  monument: string;
  imageUrl: string;
  description: string;
  onClose: () => void;
}

export const MonumentImageViewer = ({ 
  monument, 
  imageUrl, 
  description, 
  onClose 
}: MonumentImageViewerProps) => {
  const { toast } = useToast();

  const handleShare = () => {
    const shareText = `Check out this beautiful image of ${monument} from the Swadeshi Heritage Quiz! 🏛️`;
    
    if (navigator.share) {
      navigator.share({
        title: `${monument} - Heritage Monument`,
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard! 📋",
        description: "Share this beautiful monument with others!",
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${monument.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started! 📥",
      description: "Image is being downloaded to your device.",
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-card rounded-lg border border-border overflow-hidden shadow-glow animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground">{monument}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <QuizButton
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="hover:bg-accent/10"
            >
              <Share2 className="h-4 w-4" />
            </QuizButton>
            
            <QuizButton
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="hover:bg-accent/10"
            >
              <Download className="h-4 w-4" />
            </QuizButton>
            
            <QuizButton
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </QuizButton>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex items-center justify-center p-4 bg-muted/20">
          <img
            src={imageUrl}
            alt={monument}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-primary"
          />
          
          {/* Gradient Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none rounded-lg" />
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border bg-muted/10">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Click outside or press ESC to close
            </div>
            
            <div className="flex gap-2">
              <QuizButton
                variant="secondary"
                size="sm"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </QuizButton>
              
              <QuizButton
                variant="hero"
                size="sm"
                onClick={onClose}
              >
                Close
              </QuizButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};