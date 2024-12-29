// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation.ts

import { TeamScalingAssessment, RoleDefinition, Department, Skill, TrainingNeed } from './TeamScalingTypes';

export class ValidationError extends Error {
  constructor(public errors: string[]) {
    super('Validation failed');
    this.name = 'ValidationError';
  }
}

// Validate company info
export function validateCompanyInfoRequest(info: TeamScalingAssessment['companyInfo']): string[] {
  const errors: string[] = [];

  if (!info) {
    return ['Informasi perusahaan wajib diisi'];
  }

  if (typeof info.currentSize !== 'number' || info.currentSize < 1) {
    errors.push('Ukuran tim saat ini harus minimal 1 orang');
  }

  if (typeof info.targetSize !== 'number' || info.targetSize <= info.currentSize) {
    errors.push('Target ukuran tim harus lebih besar dari ukuran saat ini');
  }

  if (!info.industry?.trim()) {
    errors.push('Industri wajib diisi');
  }

  if (!info.stage) {
    errors.push('Tahap perusahaan wajib diisi');
  }

  if (!Array.isArray(info.mainChallenges) || info.mainChallenges.length === 0) {
    errors.push('Minimal satu tantangan utama harus diisi');
  }

  if (!Array.isArray(info.businessGoals) || info.businessGoals.length === 0) {
    errors.push('Minimal satu tujuan bisnis harus diisi');
  }

  return errors;
}

// Validate role definition request
export function validateRoleRequest(role: Partial<RoleDefinition>): string[] {
  const errors: string[] = [];

  if (!role.title?.trim()) {
    errors.push('Judul peran wajib diisi');
  }

  if (!role.department?.trim()) {
    errors.push('Departemen wajib diisi');
  }

  if (!role.description?.trim() || role.description.length < 50) {
    errors.push('Deskripsi peran harus minimal 50 karakter');
  }

  if (!Array.isArray(role.responsibilities) || role.responsibilities.length < 3) {
    errors.push('Minimal 3 tanggung jawab harus diisi');
  }

  if (!Array.isArray(role.requiredSkills) || role.requiredSkills.length === 0) {
    errors.push('Minimal satu skill wajib harus diisi');
  }

  if (role.experience) {
    if (typeof role.experience.yearsRequired !== 'number' || role.experience.yearsRequired < 0) {
      errors.push('Pengalaman kerja tidak valid');
    }
    if (!role.experience.level) {
      errors.push('Level senioritas wajib diisi');
    }
  } else {
    errors.push('Informasi pengalaman wajib diisi');
  }

  return errors;
}

// Validate skills assessment request
export function validateSkillsRequest(currentSkills: Skill[], requiredSkills: Skill[]): string[] {
  const errors: string[] = [];

  if (!Array.isArray(currentSkills)) {
    errors.push('Format skills saat ini tidak valid');
  }

  if (!Array.isArray(requiredSkills)) {
    errors.push('Format skills yang dibutuhkan tidak valid');
  }

  if (requiredSkills.length === 0) {
    errors.push('Minimal satu skill yang dibutuhkan harus diisi');
  }

  // Validate each required skill
  requiredSkills.forEach((skill, index) => {
    if (!skill.name?.trim()) {
      errors.push(`Nama skill #${index + 1} wajib diisi`);
    }
    if (typeof skill.requiredCount !== 'number' || skill.requiredCount < 1) {
      errors.push(`Jumlah yang dibutuhkan untuk skill "${skill.name}" tidak valid`);
    }
  });

  return errors;
}

// Validate full assessment request
export function validateFullAssessment(assessment: TeamScalingAssessment): string[] {
  const errors: string[] = [];

  // Validate company info
  errors.push(...validateCompanyInfoRequest(assessment.companyInfo));

  // Validate current structure
  if (!assessment.currentStructure.departments || assessment.currentStructure.departments.length === 0) {
    errors.push('Minimal satu departemen harus diisi');
  }

  // Validate scaling plan
  if (!assessment.scalingPlan.timeline.startDate || !assessment.scalingPlan.timeline.endDate) {
    errors.push('Timeline scaling harus diisi');
  }

  if (new Date(assessment.scalingPlan.timeline.endDate) <= new Date(assessment.scalingPlan.timeline.startDate)) {
    errors.push('Tanggal akhir harus setelah tanggal mulai');
  }

  // Validate skills assessment
  errors.push(...validateSkillsRequest(assessment.skillsAssessment.currentSkills, assessment.skillsAssessment.requiredSkills));

  return errors;
}
