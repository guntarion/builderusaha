// src/app/(protected)/penilaian-bisnis/fase-bisnis/types/index.ts

export type BusinessPhase = 'PHASE_1_1' | 'PHASE_1_2' | 'PHASE_2_1' | 'PHASE_2_2' | 'PHASE_3_1' | 'PHASE_3_2' | 'PHASE_4_1' | 'PHASE_4_2';

export type ResponseType = 'likert' | 'binary' | 'multiple' | 'numeric' | 'text';
export type Priority = 'high' | 'medium' | 'low';

export interface AssessmentQuestion {
  id: string;
  category: string;
  question: string;
  description?: string;
  responseType: ResponseType;
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

export interface CategoryScore {
  categoryId: string;
  score: number;
  maxPossible: number;
  percentage: number;
}

export interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: string;
  actionItems: string[];
  resources?: string[];
}

export interface AssessmentResult {
  currentPhase: BusinessPhase;
  overallScore: number;
  maxPossibleScore: number;
  percentageComplete: number;
  categoryScores: CategoryScore[];
  strengthAreas: string[];
  improvementAreas: string[];
  recommendedActions: string[];
  readinessForNextPhase: {
    nextPhase: BusinessPhase | null;
    readinessScore: number;
    missingRequirements: string[];
  };
}

export interface AssessmentResponse {
  id?: string;
  userId: string;
  completedAt: Date;
  responses: Record<string, number | string>;
  result: AssessmentResult;
}

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

export interface PhaseTransitionCriteria {
  minScore: number;
  maxScore: number;
  requiredCriteria: string[];
}

// For categorizing and managing the user's assessment history
export interface AssessmentHistory {
  id: string;
  userId: string;
  assessmentType: string;
  completedAt: Date;
  phase: BusinessPhase;
  score: number;
  percentageComplete: number;
}

// For tracking progress on recommendations
export interface RecommendationProgress {
  id: string;
  userId: string;
  assessmentId: string;
  recommendationId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progress: number;
  notes?: string;
  updatedAt: Date;
}
