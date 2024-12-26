// src/app/(protected)/penilaian-wirausaha/financial-literacy/types/index.ts

// Quiz Section Types
export interface QuizSectionProps {
  onQuizComplete: (results: QuizResults) => void;
}

export interface QuizResults {
  scores: {
    basicConcepts: number;
    planning: number;
    businessPractices: number;
    taxCompliance: number;
  };
  reflections: Record<string, string>;
}

export interface ResultSectionProps {
  responses: QuizResults;
  onBackToIntro: () => void;
}

export type CompetencyLevel = 'pemula' | 'berkembang' | 'mahir' | 'ahli';

export interface CategoryScore {
  score: number;
  level: CompetencyLevel;
  recommendations: string[];
}

export interface AssessmentSection {
  title: string;
  description: string;
  questions: Array<{
    id: number;
    question: string;
    options: Array<{
      text: string;
      score: number;
    }>;
  }>;
}

export interface ReflectionQuestion {
  id: string;
  question: string;
}

export interface CompetencyDefinition {
  level: CompetencyLevel;
  label: string;
  description: string;
  scoreRange: {
    min: number;
    max: number;
  };
  recommendations: string[];
}

export interface CategoryDefinition {
  title: string;
  description: string;
  competencyLevels: Record<CompetencyLevel, CompetencyDefinition>;
}

export interface ReflectionQuestion {
  id: string;
  question: string;
}
