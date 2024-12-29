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
      // Transform TeamScaling into TeamScalingAssessment
      const assessmentData = {
        companyInfo: data.companyInfo,
        currentStructure: data.teamStructure,
        roleDefinitions: [data.roleDefinition],
        hiringTimelines: [data.hiringTimeline],
        teamStructures: [data.teamStructure],
        skillsGaps: [data.skillsGap],
        trainingNeeds: [data.trainingNeeds],
      };

      const response = await fetch('/api/team-scaling/analyze-full', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assessment: assessmentData }),
      });

      if (!response.ok) {
        // Try to parse the error response
        const errorResponse = await response.json().catch(() => null);
        console.error('API Error Response:', errorResponse);
        console.error('Request Payload:', { assessment: assessmentData });
        throw new Error(errorResponse?.message || 'Analysis failed');
      }

      console.log('Request Payload:', { assessment: assessmentData });

      const result = await response.json();
      console.log('Raw API Response:', result);
      console.log('Response Status:', response.status);
      console.log('Response Headers:', Object.fromEntries(response.headers.entries()));

      // Transform GeneratedScalingPlan to TeamScalingAnalysis with defensive checks
      console.log('Before Transformation:', result);
      const transformedAnalysis: TeamScalingAnalysis = {
        roleRecommendations: result?.summary?.keyRecommendations || ['No role recommendations available'],
        hiringPlan: result?.timeline?.phases?.map(
          (phase: { phase: string; rolesToHire: string[] }) => `${phase.phase}: ${phase.rolesToHire?.join(', ') || 'No roles specified'}`
        ) || ['No hiring plan available'],
        structureOptimization: result?.structure?.departments?.map(
          (dept: { name: string; roles: string[] }) => `${dept.name}: ${dept.roles?.join(', ') || 'No roles specified'}`
        ) || ['No structure optimization available'],
        skillsDevelopmentPlan: result?.skillsDevelopment?.requiredSkills?.map((skill: string) => `Develop: ${skill}`) || [
          'No skills development plan available',
        ],
        trainingPrograms: result?.trainingPrograms?.map(
          (program: { name: string; objectives: string[] }) => `${program.name}: ${program.objectives?.join(', ') || 'No objectives specified'}`
        ) || ['No training programs available'],
      };

      setAnalysis(transformedAnalysis);
      console.log('Transformed Analysis:', transformedAnalysis);
      return true;
    } catch (err) {
      console.error('Analysis Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
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
