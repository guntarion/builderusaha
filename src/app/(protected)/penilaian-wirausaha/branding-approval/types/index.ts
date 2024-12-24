// src/app/(protected)/penilaian-wirausaha/branding-approval/types/index.ts

// Types untuk QuizSection
export interface QuizSectionProps {
  onQuizComplete: (results: QuizResults) => void;
}

export interface QuizResponses {
  branding: Record<string, number>;
  approval: Record<string, number>;
  reflection: Record<string, string>;
}

export interface LikertScaleProps {
  statement: string;
  value: number | undefined;
  onChange: (value: number) => void;
}

// Types untuk ResultSection
export interface QuizResults {
  branding: {
    purpose: number;
    authenticity: number;
    behavior: number;
    impact: number;
  };
  approval: number;
  reflections: Record<string, string>;
}

export interface ResultSectionProps {
  responses: QuizResults;
  onBackToIntro: () => void;
}

export type ScoreRange = '20-25' | '15-19' | '10-14' | '5-9';
export type ApprovalScoreRange = '8-16' | '17-24' | '25-32' | '33-40';

export interface ScoreInterpretation {
  label: string;
  description: string;
  recommendations: string[];
}

export interface BrandingScoreRanges {
  [dimension: string]: {
    [range in ScoreRange]: ScoreInterpretation;
  };
}

export interface ApprovalScoreRanges {
  [key: string]: ScoreInterpretation;
}
