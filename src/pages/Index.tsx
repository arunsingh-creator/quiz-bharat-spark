import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { QuizGame } from "@/components/QuizGame";
import { QuizComplete } from "@/components/QuizComplete";

type AppState = 'home' | 'quiz' | 'complete';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [quizScore, setQuizScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStartQuiz = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore(score);
    setTotalQuestions(total);
    setAppState('complete');
  };

  const handleBackToHome = () => {
    setAppState('home');
    setQuizScore(0);
    setTotalQuestions(0);
  };

  const handlePlayAgain = () => {
    setQuizScore(0);
    setTotalQuestions(0);
    setAppState('quiz');
  };

  if (appState === 'quiz') {
    return (
      <QuizGame
        onBackToHome={handleBackToHome}
        onQuizComplete={handleQuizComplete}
      />
    );
  }

  if (appState === 'complete') {
    return (
      <QuizComplete
        score={quizScore}
        totalQuestions={totalQuestions}
        maxPossibleScore={3000} // Theoretical max for 10 questions
        onPlayAgain={handlePlayAgain}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onStartQuiz={handleStartQuiz} />
    </div>
  );
};

export default Index;
