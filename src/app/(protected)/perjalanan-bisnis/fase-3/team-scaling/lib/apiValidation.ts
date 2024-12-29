// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation.ts

import { TeamScalingAssessment, RoleDefinition, CompanyInfo, TeamStructure, SkillsGap, TrainingNeeds } from './TeamScalingTypes';

export class ValidationError extends Error {
  constructor(public errors: string[]) {
    super('Validation failed');
    this.name = 'ValidationError';
  }
}

// Validate company info
export function validateCompanyInfoRequest(info: TeamScalingAssessment['companyInfo']): string[] | null {
  const errors: string[] = [];

  if (!info) {
    throw new ValidationError(['Informasi perusahaan wajib diisi']);
  }

  if (!info.size) {
    errors.push('Ukuran perusahaan wajib diisi');
  }

  if (!info.industry?.trim()) {
    errors.push('Industri wajib diisi');
  }

  if (!info.stage) {
    errors.push('Tahap perusahaan wajib diisi');
  }

  if (!info.stage) {
    errors.push('Tahap perusahaan wajib diisi');
  }

  return errors.length > 0 ? errors : null;
}

// Validate role definition request
export function validateRoleRequest(role: Partial<RoleDefinition>): string[] | null {
  const errors: string[] = [];

  if (!role.title?.trim()) {
    errors.push('Judul peran wajib diisi');
  }

  if (!role.responsibilities || role.responsibilities.length < 3) {
    errors.push('Minimal 3 tanggung jawab harus diisi');
  }

  if (!Array.isArray(role.responsibilities) || role.responsibilities.length < 3) {
    errors.push('Minimal 3 tanggung jawab harus diisi');
  }

  if (!Array.isArray(role.requiredSkills) || role.requiredSkills.length === 0) {
    errors.push('Minimal satu skill wajib harus diisi');
  }

  if (!role.experienceLevel) {
    errors.push('Level pengalaman wajib diisi');
  }

  return errors.length > 0 ? errors : null;
}

// Validate skills assessment request
export function validateSkillsRequest(skillsGap: SkillsGap): string[] | null {
  const errors: string[] = [];

  if (!skillsGap.existingSkills || skillsGap.existingSkills.length === 0) {
    errors.push('Skills saat ini wajib diisi');
  }

  if (!skillsGap.requiredSkills || skillsGap.requiredSkills.length === 0) {
    errors.push('Skills yang dibutuhkan wajib diisi');
  }

  if (!skillsGap.gapAnalysis || skillsGap.gapAnalysis.length === 0) {
    errors.push('Analisis gap skills wajib diisi');
  }

  return errors.length > 0 ? errors : null;
}

// Validate full assessment request
export function validateFullAssessment(assessment: TeamScalingAssessment): string[] | null {
  const errors: string[] = [];

  // Validate company info
  const companyInfoErrors = validateCompanyInfoRequest(assessment.companyInfo);
  if (companyInfoErrors) {
    errors.push(...companyInfoErrors);
  }

  // Validate current structure
  if (!assessment.currentStructure.departments || assessment.currentStructure.departments.length === 0) {
    errors.push('Minimal satu departemen harus diisi');
  }

  // Validate skills assessment
  if (assessment.skillsGaps.length === 0) {
    errors.push('Minimal satu skills gap harus diisi');
  }

  assessment.skillsGaps.forEach((skillsGap) => {
    const skillsErrors = validateSkillsRequest(skillsGap);
    if (skillsErrors) {
      errors.push(...skillsErrors);
    }
  });

  return errors.length > 0 ? errors : null;
}
