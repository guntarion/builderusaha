export interface RoleDefinition {
  title: string;
  responsibilities: string[];
  requiredSkills: string[];
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
}

export interface HiringTimeline {
  phases: Array<{
    phase: string;
    startDate: string;
    endDate: string;
    rolesToHire: string[];
  }>;
}

export interface TeamStructure {
  departments: Array<{
    name: string;
    roles: string[];
    reportingTo: string;
  }>;
}

export interface SkillsGap {
  existingSkills: string[];
  requiredSkills: string[];
  gapAnalysis: Array<{
    skill: string;
    gapLevel: 'Low' | 'Medium' | 'High';
  }>;
}

export interface TrainingNeeds {
  trainingPrograms: Array<{
    name: string;
    targetRoles: string[];
    duration: string;
    objectives: string[];
  }>;
}

export interface TeamScaling {
  roleDefinition: RoleDefinition;
  hiringTimeline: HiringTimeline;
  teamStructure: TeamStructure;
  skillsGap: SkillsGap;
  trainingNeeds: TrainingNeeds;
}

export interface TeamScalingAnalysis {
  roleRecommendations: string[];
  hiringPlan: string[];
  structureOptimization: string[];
  skillsDevelopmentPlan: string[];
  trainingPrograms: string[];
}
