// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/hooks/useTeamScaling.ts

import { useState, useCallback } from 'react';
import { TeamScalingAssessment, GeneratedScalingPlan } from '../lib/TeamScalingTypes';
import { initialTeamScalingState } from '../lib/teamScalingValidation';

export function useTeamScaling() {
  const [assessment, setAssessment] = useState<TeamScalingAssessment>(initialTeamScalingState);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<GeneratedScalingPlan | null>(null);

  const analyzeTeamScaling = useCallback(async () => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/team-scaling/analyze-full', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assessment }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Analisis gagal');
      }

      const result = await response.json();
      setPlan(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  }, [assessment]);

  const updateAssessment = useCallback((field: keyof TeamScalingAssessment, value: any) => {
    setAssessment((prev) => ({
      ...prev,
      [field]: value,
      lastUpdated: new Date(),
      version: prev.version + 1,
    }));
  }, []);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  return {
    assessment,
    currentStep,
    isAnalyzing,
    error,
    plan,
    updateAssessment,
    analyzeTeamScaling,
    goToNextStep,
    goToPreviousStep,
  };
}
