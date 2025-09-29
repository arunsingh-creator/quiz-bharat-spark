import { QuizButton } from "@/components/ui/quiz-button";
import { Trophy, Gamepad2, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-kbc-stage.jpg";

interface HeroSectionProps {
  onStartQuiz: () => void;
  onExploreGames: () => void;
}

export const HeroSection = ({ onStartQuiz, onExploreGames }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="KBC Style Quiz Stage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-accent font-semibold">#BharatQuest</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 leading-tight">
            Bharat<br />
            <span className="text-accent">Quest</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Test your knowledge of Indian culture, traditional games, and heritage
          </p>
          <p className="text-lg text-accent/80 mb-12 max-w-2xl mx-auto">
            Discover the wisdom of our ancestors through interactive learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <QuizButton
              variant="hero"
              size="xl"
              onClick={onStartQuiz}
              className="w-full sm:w-auto"
            >
              <Trophy className="mr-2 h-6 w-6" />
              Start Quiz Challenge
            </QuizButton>
            
            <QuizButton
              variant="secondary"
              size="xl"
              className="w-full sm:w-auto"
              onClick={onExploreGames}
            >
              <Gamepad2 className="mr-2 h-6 w-6" />
              Explore Heritage Monuments
            </QuizButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">Unique Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Traditional Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Students Learning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-glow-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-glow-pulse" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-glow-pulse" />
    </section>
  );
};
