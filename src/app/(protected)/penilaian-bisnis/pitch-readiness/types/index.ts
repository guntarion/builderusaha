// src/app/(protected)/penilaian-bisnis/pitch-readiness/types/index.ts

export interface AssessmentSection {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  value: number;
  label: string;
}

export interface AssessmentResponse {
  [key: string]: number; // question id -> selected option value
}

export interface SectionScore {
  score: number;
  maxScore: number;
  percentage: number;
  level: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export interface AssessmentResult {
  overallScore: number;
  overallPercentage: number;
  overallLevel: 'low' | 'medium' | 'high';
  sectionScores: {
    [key: string]: SectionScore;
  };
  generalRecommendations: string[];
}

export interface AssessmentSectionProps {
  onComplete: (responses: AssessmentResponse) => void;
}

export interface ResultSectionProps {
  result: AssessmentResult;
  onBackToIntro: () => void;
}