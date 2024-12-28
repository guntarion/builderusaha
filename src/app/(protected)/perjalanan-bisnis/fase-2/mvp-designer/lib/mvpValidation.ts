// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/mvpValidation.ts

import { MVPDesign, Feature, Risk, ValidationMilestone, PriorityLevel, ComplexityLevel, RiskLevel } from './MVPTypes';

// Initial state for MVP Design
export const initialMVPState: MVPDesign = {
  baseInfo: {
    problem: '',
    customerSegments: '',
    valueProposition: '',
    solution: '',
  },
  features: [],
  timeline: {
    estimatedDuration: 0,
    majorMilestones: [],
  },
  risks: [],
  validationMilestones: [],
  summary: {
    coreFeatures: [],
    targetTimeline: '',
    keyRisks: [],
    validationStrategy: '',
    estimatedCost: {
      development: 0,
      infrastructure: 0,
      marketing: 0,
      total: 0,
    },
  },
};

// Feature template with example and instructions
export const featureTemplate: Omit<Feature, 'id'> = {
  name: '',
  description: '',
  priority: 'should' as PriorityLevel,
  complexity: 'medium' as ComplexityLevel,
  estimatedEffort: 0,
  dependencies: [],
  validationCriteria: [],
};

// Example features for reference
export const exampleFeatures: Feature[] = [
  {
    id: 'auth',
    name: 'User Authentication',
    description: 'Basic login/register functionality with email and password',
    priority: 'must',
    complexity: 'medium',
    estimatedEffort: 5,
    validationCriteria: ['Users can successfully register', 'Users can login with correct credentials', 'Users can reset password'],
  },
  {
    id: 'inventory',
    name: 'Basic Inventory Management',
    description: 'Add, edit, delete inventory items with basic fields',
    priority: 'must',
    complexity: 'high',
    estimatedEffort: 8,
    dependencies: ['auth'],
    validationCriteria: ['Users can add new items', 'Users can edit existing items', 'Users can delete items', 'Stock levels update correctly'],
  },
];

// Field validation rules
export const mvpValidationRules = {
  baseInfo: {
    minLength: 20,
    maxLength: 500,
  },
  feature: {
    name: {
      minLength: 3,
      maxLength: 100,
    },
    description: {
      minLength: 10,
      maxLength: 500,
    },
    estimatedEffort: {
      min: 0.5,
      max: 100,
    },
  },
  risk: {
    description: {
      minLength: 10,
      maxLength: 300,
    },
    mitigationStrategy: {
      minLength: 20,
      maxLength: 500,
    },
  },
  validation: {
    description: {
      minLength: 10,
      maxLength: 300,
    },
    successCriteria: {
      minItems: 1,
      maxItems: 5,
    },
  },
};

// Helper functions for validation
export function validateFeature(feature: Feature): string[] {
  const errors: string[] = [];

  if (feature.name.length < mvpValidationRules.feature.name.minLength) {
    errors.push('Nama fitur terlalu pendek');
  }
  if (feature.name.length > mvpValidationRules.feature.name.maxLength) {
    errors.push('Nama fitur terlalu panjang');
  }
  if (feature.description.length < mvpValidationRules.feature.description.minLength) {
    errors.push('Deskripsi fitur terlalu pendek');
  }
  if (feature.estimatedEffort < mvpValidationRules.feature.estimatedEffort.min) {
    errors.push('Estimasi effort tidak boleh kurang dari 0.5 hari');
  }
  if (feature.validationCriteria.length === 0) {
    errors.push('Minimal harus ada 1 kriteria validasi');
  }

  return errors;
}

// Calculate MoSCoW score for prioritization
export function calculateMoSCoWScore(feature: Feature): number {
  const priorityScores: Record<PriorityLevel, number> = {
    must: 4,
    should: 3,
    could: 2,
    wont: 1,
  };

  const complexityScores: Record<ComplexityLevel, number> = {
    low: 3,
    medium: 2,
    high: 1,
  };

  return priorityScores[feature.priority] * complexityScores[feature.complexity];
}

// Calculate risk severity
export function calculateRiskSeverity(risk: Risk): 'critical' | 'high' | 'medium' | 'low' {
  const impactScores: Record<RiskLevel, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };

  const probabilityScores: Record<RiskLevel, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };

  const severity = impactScores[risk.impact] * probabilityScores[risk.probability];

  if (severity >= 9) return 'critical';
  if (severity >= 6) return 'high';
  if (severity >= 3) return 'medium';
  return 'low';
}

// Sort features by priority and complexity
export function sortFeaturesByPriority(features: Feature[]): Feature[] {
  return [...features].sort((a, b) => {
    const scoreA = calculateMoSCoWScore(a);
    const scoreB = calculateMoSCoWScore(b);
    return scoreB - scoreA;
  });
}

// Validate entire MVP design
export function validateMVPDesign(mvp: MVPDesign): {
  isValid: boolean;
  errors: Record<string, string[]>;
} {
  const errors: Record<string, string[]> = {};

  // Validate base info
  Object.entries(mvp.baseInfo).forEach(([key, value]) => {
    if (!value || value.length < mvpValidationRules.baseInfo.minLength) {
      errors[key] = [`${key} terlalu pendek`];
    }
  });

  // Validate features
  mvp.features.forEach((feature, index) => {
    const featureErrors = validateFeature(feature);
    if (featureErrors.length > 0) {
      errors[`feature_${index}`] = featureErrors;
    }
  });

  // Must have at least one must-have feature
  const mustHaveFeatures = mvp.features.filter((f) => f.priority === 'must');
  if (mustHaveFeatures.length === 0) {
    errors.features = ['Harus memiliki minimal 1 fitur Must-Have'];
  }

  // Validate risks
  if (mvp.risks.length === 0) {
    errors.risks = ['Harus memiliki minimal 1 risk assessment'];
  }

  // Validate validation milestones
  if (mvp.validationMilestones.length === 0) {
    errors.validation = ['Harus memiliki minimal 1 validation milestone'];
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
