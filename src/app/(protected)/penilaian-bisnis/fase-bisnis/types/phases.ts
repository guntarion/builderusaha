// src/app/(protected)/penilaian-bisnis/types/phases.ts

export type BusinessPhase = 'PHASE_1_1' | 'PHASE_1_2' | 'PHASE_2_1' | 'PHASE_2_2' | 'PHASE_3_1' | 'PHASE_3_2' | 'PHASE_4_1' | 'PHASE_4_2';

export interface PhaseDefinition {
  id: BusinessPhase;
  name: string;
  description: string;
  characteristics: string[];
  requirements: string[];
  keyMetrics: string[];
  nextPhaseRequirements: string[];
}

export interface BusinessAssessment {
  id: string;
  userId: string;
  businessId: string;
  currentPhase: BusinessPhase;
  completedAt: Date;
  answers: Record<string, any>;
  metrics: BusinessMetrics;
  recommendedActions: string[];
}

export interface BusinessMetrics {
  revenue: number;
  customerCount: number;
  employeeCount: number;
  productCount: number;
  systemsImplemented: string[];
  marketPenetration: number;
}
