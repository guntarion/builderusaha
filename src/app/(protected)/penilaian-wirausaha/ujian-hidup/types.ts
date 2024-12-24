// src/app/(protected)/penilaian-wirausaha/ujian-hidup/types.ts
// (Note: moved from /types/index.ts to /types.ts)

export type CategoryType = 'harta' | 'tahta' | 'wanita';
export type LevelType = 'low' | 'moderate' | 'high';

export interface SubsectionInfo {
  title: string;
  description: string;
}

export interface LevelInfo {
  label: string;
  description: string;
  recommendations: string[];
}

export interface CategoryLevels {
  [key in LevelType]: LevelInfo;
}

export interface CategoryInfo {
  title: string;
  description: string;
  levels: CategoryLevels;
  subsections: Record<string, SubsectionInfo>;
}

export interface CategoryDescriptions {
  [key in CategoryType]: CategoryInfo;
}

export type SubsectionKeysHarta = 'relasiMateri' | 'polaKonsumsi' | 'riskBehavior';
export type SubsectionKeysTahta = 'relasiKekuasaan' | 'polaKompetisi' | 'ambisi';
export type SubsectionKeysWanita = 'relasiRomantis' | 'relasiKeluarga' | 'polaAttachment';
export type SubsectionKeys = SubsectionKeysHarta | SubsectionKeysTahta | SubsectionKeysWanita;

export interface CategoryScores {
  [key in CategoryType]: {
    total: number;
    [key: string]: number;
  };
}

export interface QuizResults {
  categoryScores: CategoryScores;
}

export interface QuizSectionProps {
  onQuizComplete: (results: QuizResults) => void;
}

export interface ResultSectionProps {
  responses: QuizResults;
  onBackToIntro: () => void;
}
