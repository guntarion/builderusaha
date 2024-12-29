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
  companyInfo: CompanyInfo;
  roleDefinition: RoleDefinition;
  hiringTimeline: HiringTimeline;
  teamStructure: TeamStructure;
  skillsGap: SkillsGap;
  trainingNeeds: TrainingNeeds;
}

export interface CompanyInfo {
  industry: string;
  size: string;
  stage: string;
}

export interface TeamScalingAssessment {
  companyInfo: CompanyInfo;
  currentStructure: TeamStructure;
  roleDefinitions: RoleDefinition[];
  hiringTimelines: HiringTimeline[];
  teamStructures: TeamStructure[];
  skillsGaps: SkillsGap[];
  trainingNeeds: TrainingNeeds[];
}

export interface ScalingPlanSummary {
  tldr: string;
  keyRecommendations: string[];
}

export interface DetailedAnalysis {
  roles: string;
  timeline: string;
  structure: string;
  skills: string;
  training: string;
  budget: string;
  risks: string;
}

export interface ActionPlan {
  steps: string[];
  timeline: string;
  responsibilities: string[];
  immediate: string[];
  shortTerm: string[];
  midTerm: string[];
  longTerm: string[];
}

export interface GeneratedScalingPlan {
  summary: ScalingPlanSummary;
  detailedAnalysis: DetailedAnalysis;
  roles: RoleDefinition[];
  timeline: HiringTimeline;
  structure: TeamStructure;
  skillsDevelopment: SkillsGap;
  trainingPrograms: TrainingNeeds[];
  actionPlan: ActionPlan;
}

export interface TeamScalingAnalysis {
  roleRecommendations: string[];
  hiringPlan: string[];
  structureOptimization: string[];
  skillsDevelopmentPlan: string[];
  trainingPrograms: string[];
}
