// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/canvasTypes.ts

export type CanvasFieldType =
  | 'problem'
  | 'customerSegments'
  | 'valueProposition'
  | 'solution'
  | 'revenueStreams'
  | 'costStructure'
  | 'keyMetrics'
  | 'unfairAdvantage'
  | 'channels';

export type GeneratedCanvas = {
  refinedProblem: string;
  refinedCustomerSegments: string;
  refinedValueProposition: string;
  proposedSolution: string;
  proposedRevenueStreams: string;
  proposedCostStructure: string;
  proposedKeyMetrics: string;
  proposedUnfairAdvantage: string;
  proposedChannels: string;
  explanation: string;
};

export interface CanvasField {
  id: CanvasFieldType;
  title: string;
  description: string;
  placeholder: string;
  example: string;
  isMandatory: boolean;
  value: string;
  icon: string;
  aiSuggestions?: string[];
}

export interface LeanCanvas {
  id?: string;
  userId: string;
  fields: Record<CanvasFieldType, CanvasField>;
  lastUpdated: Date;
  status: 'draft' | 'generated' | 'completed';
  generatedCanvas?: GeneratedCanvas;
  aiAnalysis?: {
    summary?: string;
    recommendations?: string[];
    risks?: string[];
    nextSteps?: string[];
  };
}

export interface AnalysisResult {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  risks: string[];
  nextSteps: string[];
  assumptions: string[];
}

// New interfaces for generate canvas functionality
export interface GenerateCanvasRequest {
  problem: string;
  customerSegments: string;
  valueProposition: string;
  solution?: string;
  revenueStreams?: string;
  costStructure?: string;
  keyMetrics?: string;
  unfairAdvantage?: string;
  channels?: string;
}

export interface GenerateCanvasResponse {
  canvas: GeneratedCanvas;
  error?: string;
}
