// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/hooks/useMVPAnalysis.ts

import { useState, useCallback } from 'react';
import { MVPDesign, GeneratedMVP } from '../lib/MVPTypes';

export function useMVPAnalysis() {
  const [analysis, setAnalysis] = useState<GeneratedMVP | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentDesign, setCurrentDesign] = useState<MVPDesign | null>(null);

  const analyze = useCallback(async (design: MVPDesign) => {
    setIsAnalyzing(true);
    setError(null);
    setCurrentDesign(design);

    try {
      const response = await fetch('/api/mvp-designer/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ design }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal menganalisis MVP');
      }

      const result = await response.json();
      setAnalysis(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menganalisis MVP');
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const retry = useCallback(() => {
    if (currentDesign) {
      analyze(currentDesign);
    }
  }, [currentDesign, analyze]);

  return {
    analyze,
    retry,
    analysis,
    isAnalyzing,
    error,
  };
}
