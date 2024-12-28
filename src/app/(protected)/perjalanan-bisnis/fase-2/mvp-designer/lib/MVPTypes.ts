// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/MVPTypes.ts

export type PriorityLevel = 'must' | 'should' | 'could' | 'wont';
export type ComplexityLevel = 'low' | 'medium' | 'high';
export type RiskLevel = 'low' | 'medium' | 'high';
export type StatusType = 'pending' | 'inProgress' | 'completed' | 'blocked';

export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: PriorityLevel;
  complexity: ComplexityLevel;
  estimatedEffort: number; // in person-days
  dependencies?: string[]; // IDs of dependent features
  validationCriteria: string[];
}

export interface Risk {
  id: string;
  description: string;
  impact: RiskLevel;
  probability: RiskLevel;
  mitigationStrategy: string;
  contingencyPlan: string;
}

export interface ValidationMilestone {
  id: string;
  description: string;
  successCriteria: string[];
  metrics: string[];
  status: StatusType;
}

export interface MVPDesign {
  // Base Information (from Lean Canvas)
  baseInfo: {
    problem: string;
    customerSegments: string;
    valueProposition: string;
    solution: string;
  };

  // Feature Matrix
  features: Feature[];

  // Development Planning
  timeline: {
    estimatedDuration: number; // in weeks
    majorMilestones: {
      id: string;
      name: string;
      features: string[]; // Feature IDs
      targetDate: Date;
    }[];
  };

  // Risk Assessment
  risks: Risk[];

  // Validation Plan
  validationMilestones: ValidationMilestone[];

  // MVP Summary
  summary: {
    coreFeatures: string[];
    targetTimeline: string;
    keyRisks: string[];
    validationStrategy: string;
    estimatedCost: {
      development: number;
      infrastructure: number;
      marketing: number;
      total: number;
    };
  };
}

export interface GeneratedMVP {
  refinedFeatures: Feature[];
  suggestedTimeline: any;
  riskAssessment: Risk[];
  validationPlan: ValidationMilestone[];
  mvpSummary: {
    tldr: string;
    detailed: {
      features: string;
      timeline: string;
      risks: string;
      validation: string;
      costs: string;
    };
  };
}
