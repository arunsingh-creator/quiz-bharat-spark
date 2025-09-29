import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const quizButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary",
        hero: "bg-gradient-hero text-foreground hover:shadow-glow border border-accent/20 shadow-primary animate-glow-pulse",
        option: "bg-card text-card-foreground border-2 border-border hover:border-accent hover:bg-accent/10 hover:shadow-golden",
        correct: "bg-success text-success-foreground hover:bg-success/90 shadow-glow border border-success",
        incorrect: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-primary border border-destructive",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-golden",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        option: "h-16 px-6 py-4 text-left justify-start w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof quizButtonVariants> {
  asChild?: boolean;
}

const QuizButton = React.forwardRef<HTMLButtonElement, QuizButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(quizButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
QuizButton.displayName = "QuizButton";

export { QuizButton, quizButtonVariants };