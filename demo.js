import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center animate-scale-in shadow-[var(--shadow-card)]">
        <div className="mb-6 flex justify-center">
          <div className="p-6 rounded-full bg-gradient-to-br from-primary to-secondary animate-bounce-subtle">
            <Brain className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Quiz Master
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Test your knowledge with our exciting quiz! Answer questions across various topics and see how well you score.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>10 Questions</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span>Multiple Choice</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span>Instant Results</span>
          </div>
        </div>
        
        <Button 
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-6"
        >
          Start Quiz
        </Button>
      </Card>
    </div>
  );
};

export default QuizStart;