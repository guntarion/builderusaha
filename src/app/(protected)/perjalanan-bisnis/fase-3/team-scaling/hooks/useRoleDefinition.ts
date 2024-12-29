// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/hooks/useRoleDefinition.ts

import { useState, useCallback } from 'react';
import { RoleDefinition } from '../lib/TeamScalingTypes';

export function useRoleDefinition() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRole = useCallback(async (companyInfo: any, currentStructure: any, roleRequest: Partial<RoleDefinition>) => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/team-scaling/generate-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyInfo,
          currentStructure,
          roleRequest,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal membuat definisi peran');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return {
    isGenerating,
    error,
    generateRole,
  };
}
