// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/types/index.ts

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    scores: {
      importExport: number;
      localReseller: number;
      translation: number;
      onlineCourse: number;
      localAssistant: number;
      foodBusiness: number;
    };
  }[];
}

export interface QuizResults {
  branding: {
    importExport: number;
    localReseller: number;
    translation: number;
    onlineCourse: number;
    localAssistant: number;
    foodBusiness: number;
  };
  approval: number;
  reflections: Record<string, string>;
}

export interface BusinessScore {
  type: string;
  score: number;
  percentage: number;
  description: string;
  strengthPoints: string[];
  challenges: string[];
  nextSteps: string[];
}

export interface QuizSectionProps {
  onQuizComplete: (results: QuizResults) => void;
}

export interface ResultSectionProps {
  responses: QuizResults;
  onBackToIntro: () => void;
}

export interface LikertScaleProps {
  statement: string;
  value: number | undefined;
  onChange: (value: number) => void;
}
