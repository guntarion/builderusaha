// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/hooks/useCanvasAnalysis.ts

import { useState, useCallback } from 'react';
import { LeanCanvas, AnalysisResult } from '../lib/canvasTypes';

export function useCanvasAnalysis() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCanvas, setCurrentCanvas] = useState<LeanCanvas | null>(null);

  const analyze = useCallback(async (canvas: LeanCanvas) => {
    setIsAnalyzing(true);
    setError(null);
    setCurrentCanvas(canvas);

    try {
      const response = await fetch('/api/lean-canvas/analyze-full', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ canvas }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal menganalisis canvas');
      }

      const result = await response.json();
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menganalisis');
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const retry = useCallback(() => {
    if (currentCanvas) {
      analyze(currentCanvas);
    }
  }, [currentCanvas, analyze]);

  return {
    analyze,
    retry,
    analysis,
    isAnalyzing,
    error,
  };
}
