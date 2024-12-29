import { useState } from 'react';
import { TeamScaling, TeamScalingAnalysis } from '../lib/TeamScalingTypes';

export function useTeamScalingAnalysis() {
  const [analysis, setAnalysis] = useState<TeamScalingAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyze = async (data: TeamScaling) => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch('/api/team-scaling/analyze-full', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      setAnalysis(result);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsAnalyzing(false);
    }
  };

  const retry = async () => {
    setError(null);
    setAnalysis(null);
  };

  return {
    analyze,
    retry,
    analysis,
    isAnalyzing,
    error,
  };
}
