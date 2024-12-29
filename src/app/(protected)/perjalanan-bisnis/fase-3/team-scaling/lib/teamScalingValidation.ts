import { TeamScaling } from './TeamScalingTypes';

export const initialTeamScalingState: TeamScaling = {
  roleDefinition: {
    title: '',
    responsibilities: [],
    requiredSkills: [],
    experienceLevel: 'Mid',
  },
  hiringTimeline: {
    phases: [],
  },
  teamStructure: {
    departments: [],
  },
  skillsGap: {
    existingSkills: [],
    requiredSkills: [],
    gapAnalysis: [],
  },
  trainingNeeds: {
    trainingPrograms: [],
  },
};

export function validateTeamScaling(data: TeamScaling): boolean {
  // Basic validation rules
  if (!data.roleDefinition.title.trim()) return false;
  if (data.hiringTimeline.phases.length === 0) return false;
  if (data.teamStructure.departments.length === 0) return false;
  if (data.skillsGap.requiredSkills.length === 0) return false;
  if (data.trainingNeeds.trainingPrograms.length === 0) return false;

  return true;
}
