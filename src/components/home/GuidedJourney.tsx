import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ChevronRight, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guidedJourney, ENABLE_SPEECH_ASSISTANT } from "@/data/content";

type Step = "closed" | "sector" | "goal" | "sensitivity" | "result";

export function GuidedJourney() {
  const [step, setStep] = useState<Step>("closed");
  const [answers, setAnswers] = useState({
    sector: "",
    goal: "",
    sensitivity: "",
  });

  const handleAnswer = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    
    if (field === "sector") setStep("goal");
    else if (field === "goal") setStep("sensitivity");
    else if (field === "sensitivity") setStep("result");
  };

  const reset = () => {
    setStep("closed");
    setAnswers({ sector: "", goal: "", sensitivity: "" });
  };

  const recommendation = answers.goal
    ? guidedJourney.recommendations[answers.goal as keyof typeof guidedJourney.recommendations]
    : null;

  if (step === "closed") {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setStep("sector")}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:brightness-110 transition-all"
      >
        <Compass className="w-5 h-5" />
        <span className="font-semibold">Find Your Path</span>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-[360px] max-w-[calc(100vw-48px)] bg-navy-elevated border border-border rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">{guidedJourney.title}</span>
          </div>
          <button
            onClick={reset}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {step === "sector" && (
            <QuestionStep
              question={guidedJourney.questions.sector}
              onSelect={(value) => handleAnswer("sector", value)}
            />
          )}

          {step === "goal" && (
            <QuestionStep
              question={guidedJourney.questions.goal}
              onSelect={(value) => handleAnswer("goal", value)}
            />
          )}

          {step === "sensitivity" && (
            <QuestionStep
              question={guidedJourney.questions.sensitivity}
              onSelect={(value) => handleAnswer("sensitivity", value)}
            />
          )}

          {step === "result" && recommendation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-sm">
                Based on your answers, we recommend:
              </p>
              <Button variant="hero" className="w-full" asChild>
                <Link to={recommendation.page} onClick={reset}>
                  {recommendation.cta}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <button
                onClick={reset}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Start over
              </button>
            </motion.div>
          )}

          {/* Speech Assistant Placeholder */}
          {ENABLE_SPEECH_ASSISTANT && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Speech assistant coming soon</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

interface QuestionStepProps {
  question: {
    label: string;
    options: { value: string; label: string }[];
  };
  onSelect: (value: string) => void;
}

function QuestionStep({ question, onSelect }: QuestionStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-3"
    >
      <p className="text-foreground font-medium">{question.label}</p>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="w-full text-left px-4 py-3 rounded-lg bg-secondary/50 text-foreground hover:bg-secondary hover:border-primary/30 border border-transparent transition-all text-sm"
          >
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
