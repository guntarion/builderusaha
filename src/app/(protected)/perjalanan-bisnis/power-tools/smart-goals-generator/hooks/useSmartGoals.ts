// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/hooks/useSmartGoals.ts

import { useState } from 'react';
import { SmartGoalFormData, SmartGoalResponse } from '../types';

export const useSmartGoals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SmartGoalResponse | null>(null);

  const generateSmartGoal = async (formData: SmartGoalFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/power-tools/smart-goals-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          goalStatement: formData.goalStatement,
          category: formData.category,
          timeline: `${formData.timeline.startDate.toLocaleDateString()} - ${formData.timeline.endDate.toLocaleDateString()}`,
          industry: formData.industry,
          currentMetrics: formData.currentMetrics,
          resources: formData.resources,
          constraints: formData.constraints,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate SMART goal');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
  };

  return {
    generateSmartGoal,
    reset,
    isLoading,
    error,
    data,
  };
};
