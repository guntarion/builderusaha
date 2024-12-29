// src/app/api/team-scaling/generate-role/route.ts

import { NextResponse } from 'next/server';
import { RoleDefinition } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/TeamScalingTypes';
import { generateRoleDefinition } from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/teamScalingService';
import { checkRateLimit, getCachedValue, setCachedValue } from '../../../(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/rateLimit';
import {
  validateCompanyInfoRequest,
  validateRoleRequest,
  ValidationError,
} from '@/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/lib/apiValidation';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Rate limit check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Terlalu banyak permintaan',
          message: 'Silakan coba lagi dalam beberapa menit.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Invalid request', message: 'Format request tidak valid' }, { status: 400 });
    }

    const { companyInfo, currentStructure, roleRequest } = body;

    // Validate company info
    const companyInfoErrors = validateCompanyInfoRequest(companyInfo);
    if (companyInfoErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: companyInfoErrors }, { status: 400 });
    }

    // Validate role request
    const roleErrors = validateRoleRequest(roleRequest);
    if (roleErrors.length > 0) {
      return NextResponse.json({ error: 'Validation Error', message: roleErrors }, { status: 400 });
    }

    // Generate cache key
    const cacheKey = `role-def-${JSON.stringify({
      title: roleRequest.title,
      department: roleRequest.department,
      companySize: companyInfo.currentSize,
    })}`;

    // Check cache
    const cached = getCachedValue(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    // Generate role definition
    const roleDefinition = await generateRoleDefinition(companyInfo, currentStructure, roleRequest);

    if (!roleDefinition) {
      throw new Error('Failed to generate role definition');
    }

    // Cache the result
    setCachedValue(cacheKey, roleDefinition);

    return NextResponse.json(roleDefinition);
  } catch (error) {
    console.error('Role Generation Error:', error);

    if (error instanceof ValidationError) {
      return NextResponse.json({ error: 'Validation Error', message: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      {
        error: 'Server Error',
        message: 'Gagal membuat definisi peran. Silakan coba lagi.',
      },
      { status: 500 }
    );
  }
}
