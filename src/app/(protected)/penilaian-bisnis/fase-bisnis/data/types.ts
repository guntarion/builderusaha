// src/app/(protected)/penilaian-bisnis/fase-bisnis/data/types.ts

export type BusinessPhase = 'PHASE_1_1' | 'PHASE_1_2' | 'PHASE_2_1' | 'PHASE_2_2' | 'PHASE_3_1' | 'PHASE_3_2' | 'PHASE_4_1' | 'PHASE_4_2';

export interface PhaseDefinition {
  id: BusinessPhase;
  name: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  requirements: string[];
  indicators: {
    businessOwnership: string;
    managementFocus: string;
    managementStyle: string;
    organizationForm: string;
    systemFormalization: string;
    mainStrategy: string;
    controlSystem: string;
  };
  keyMetrics: string[];
  nextPhaseRequirements: string[];
}

export interface AssessmentQuestion {
  id: string;
  category: string;
  question: string;
  responseType: 'multiple' | 'numeric';
  options?: string[];
  phaseRelevance: BusinessPhase[];
  weight: number;
}

export interface AssessmentCategory {
  id: string;
  name: string;
  description: string;
  questions: AssessmentQuestion[];
}

export interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  actionItems: string[];
  resources?: string[];
}

export interface AssessmentResponse {
  [questionId: string]: string | number;
}

export interface AssessmentResult {
  currentPhase: BusinessPhase;
  overallScore: number;
  categoryScores: {
    [category: string]: number;
  };
  recommendations: RecommendationItem[];
  nextPhaseGap: {
    missingRequirements: string[];
    improvementAreas: string[];
  };
}
