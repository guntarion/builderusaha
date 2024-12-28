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

export interface CanvasField {
  id: CanvasFieldType;
  title: string;
  description: string;
  placeholder: string;
  example: string;
  isMandatory: boolean;
  value: string;
  aiSuggestions?: string[];
}

export interface LeanCanvas {
  id?: string;
  userId: string;
  fields: Record<CanvasFieldType, CanvasField>;
  lastUpdated: Date;
  status: 'draft' | 'completed';
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
