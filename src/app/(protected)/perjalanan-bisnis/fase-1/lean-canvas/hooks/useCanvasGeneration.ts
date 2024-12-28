// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/hooks/useCanvasGeneration.ts

import { useState, useCallback } from 'react';
import { GeneratedCanvas, GenerateCanvasRequest } from '../lib/canvasTypes';

export function useCanvasGeneration() {
  const [generatedCanvas, setGeneratedCanvas] = useState<GeneratedCanvas | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCanvas = useCallback(async (request: GenerateCanvasRequest) => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/lean-canvas/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal membuat canvas');
      }

      const result = await response.json();
      setGeneratedCanvas(result.canvas);
      return result.canvas;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat membuat canvas');
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return {
    generateCanvas,
    generatedCanvas,
    isGenerating,
    error,
    setGeneratedCanvas,
  };
}
