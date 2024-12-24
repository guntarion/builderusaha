// src\app\(protected)\penilaian-wirausaha\ujian-hidup\types.ts

export type CategoryType = 'harta' | 'tahta' | 'wanita';

export interface Subsection {
  subtitle: string;
  questions: string[];
}

export interface Section {
  title: string;
  category: CategoryType;
  subsections: Subsection[];
}
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

export type CategoryLevels = Record<LevelType, LevelInfo>;

export interface CategoryInfo {
  title: string;
  description: string;
  levels: CategoryLevels;
  subsections: Record<string, SubsectionInfo>;
}

export type CategoryDescriptions = Record<CategoryType, CategoryInfo>;

export type SubsectionKeysHarta = 'relasiMateri' | 'polaKonsumsi' | 'riskBehavior';
export type SubsectionKeysTahta = 'relasiKekuasaan' | 'polaKompetisi' | 'ambisi';
export type SubsectionKeysWanita = 'relasiRomantis' | 'relasiKeluarga' | 'polaAttachment';
export type SubsectionKeys = SubsectionKeysHarta | SubsectionKeysTahta | SubsectionKeysWanita;

export interface CategoryScores {
  harta: {
    total: number;
    relasiMateri: number;
    polaKonsumsi: number;
    riskBehavior: number;
  };
  tahta: {
    total: number;
    relasiKekuasaan: number;
    polaKompetisi: number;
    ambisi: number;
  };
  wanita: {
    total: number;
    relasiRomantis: number;
    relasiKeluarga: number;
    polaAttachment: number;
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
