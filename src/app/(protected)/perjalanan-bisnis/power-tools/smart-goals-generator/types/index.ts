// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/types/index.ts

export type GoalCategory =
  | 'Business Growth'
  | 'Financial'
  | 'Operations'
  | 'Marketing'
  | 'Team Development'
  | 'Personal Development'
  | 'Customer Service'
  | 'Product Development';

export type Industry =
  | 'Technology'
  | 'Retail'
  | 'Manufacturing'
  | 'Healthcare'
  | 'Financial Services'
  | 'Education'
  | 'Real Estate'
  | 'Construction'
  | 'Transportation'
  | 'Entertainment'
  | 'Food & Beverage'
  | 'Agriculture'
  | 'Energy'
  | 'Tourism'
  | 'Professional Services';

export type Resource = 'Budget' | 'Team size' | 'Tools' | 'Time commitment';

export interface SmartGoalFormData {
  goalStatement: string;
  category: GoalCategory;
  timeline: {
    startDate: Date;
    endDate: Date;
  };
  industry?: Industry;
  currentMetrics?: string;
  resources?: Resource[];
  constraints?: string;
}

export interface Milestone {
  date: string;
  description: string;
  target: string;
}

export interface SmartGoal {
  original_goal: string;
  specific: {
    refined_statement: string;
    clarifying_details: string[];
  };
  measurable: {
    primary_metrics: string[];
    secondary_metrics: string[];
    measurement_method: string;
  };
  achievable: {
    target_breakdown: string[];
    required_resources: string[];
    risk_factors: string[];
  };
  relevant: {
    business_impact: string;
    stakeholder_benefits: string[];
    strategic_alignment: string;
  };
  time_bound: {
    final_deadline: string;
    milestones: Milestone[];
  };
  tracking_plan: {
    frequency: string;
    methods: string[];
    responsible_parties: string[];
  };
}

export interface SmartGoalResponse {
  smart_goal: SmartGoal;
}
