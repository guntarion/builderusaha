// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/lib/mvpPrompts.ts

import { MVPDesign, Feature, GeneratedMVP, Risk, ValidationMilestone } from './MVPTypes';

export const SYSTEM_PROMPT = `You are an experienced business consultant helping 
Indonesian entrepreneurs design their Minimum Viable Product (MVP). Your responses should be in 
Bahasa Indonesia, except for technical terms when necessary.

Guidelines:
1. Use clear, professional Bahasa Indonesia
2. Format output with clear sections and proper line breaks
3. Use numbered lists for sequential items
4. Use bullet points for non-sequential items
5. Separate different topics with clear headings
6. Keep sections organized and easy to read

When providing lists or steps:
- Use numbers (1., 2., 3.) for sequential items
- Use bullet points (•) for non-sequential items
- Start each item on a new line
- Add a blank line between different sections

Example format:

Fitur Utama:
1. Fitur pertama
2. Fitur kedua
3. Fitur ketiga

Prioritas:
- Must Have: [deskripsi]
- Should Have: [deskripsi]
- Could Have: [deskripsi]

Risiko:
- Risiko 1: [deskripsi]
  Mitigasi: [strategi]
- Risiko 2: [deskripsi]
  Mitigasi: [strategi]

Response format:
<mvp_analysis>
[Your structured analysis following the tags below]
</mvp_analysis>

<tldr>
[2-3 sentence summary of key points]
</tldr>`;

/**
 * Generates prompt for initial MVP analysis
 */
export function generateMVPAnalysisPrompt(design: MVPDesign): string {
  return `Analyze and refine this MVP design for an Indonesian startup:

INFORMASI DASAR:
Masalah: ${design.baseInfo.problem}
Target Pengguna: ${design.baseInfo.customerSegments}
Value Proposition: ${design.baseInfo.valueProposition}
Solusi: ${design.baseInfo.solution}

FITUR YANG DIUSULKAN:
${design.features
  .map(
    (f) => `- ${f.name}: ${f.description}
  Prioritas: ${f.priority}
  Kompleksitas: ${f.complexity}
  Estimasi Waktu: ${f.estimatedEffort} hari`
  )
  .join('\n')}

Please provide:
1. Feature refinement and prioritization
2. Development timeline and milestones
3. Risk assessment and mitigation strategies
4. Validation plan and success metrics
5. Cost estimation for Indonesian market

Your response should follow this XML structure:

<mvp_analysis>
<refined_features>
[List of refined and prioritized features with rationale]
</refined_features>

<timeline>
[Development timeline with major milestones]
</timeline>

<risks>
[Key risks and mitigation strategies]
</risks>

<validation_plan>
[Validation milestones and success metrics]
</validation_plan>

<cost_estimation>
[Estimated costs breakdown in IDR]
</cost_estimation>
</mvp_analysis>

<tldr>
[Brief summary of key recommendations]
</tldr>`;
}

// Tambahkan utility function untuk memformat teks
function formatSection(text: string): string {
  // Membersihkan whitespace berlebih
  text = text.trim();

  // Memformat list bernomor
  text = text.replace(/(\d+\.) /g, '\n$1 ');

  // Memformat list dengan bullet points
  text = text.replace(/([•\-]) /g, '\n$1 ');

  // Memisahkan bagian berbeda dengan double line break
  text = text.replace(/\n(Prioritas|Mitigasi|Risiko|Timeline|Validasi):/g, '\n\n$1:\n');

  // Menambahkan line break setelah judul section
  text = text.replace(/(.*?):\n([^\n])/g, '$1:\n\n$2');

  // Membersihkan multiple line breaks berlebih
  text = text.replace(/\n{3,}/g, '\n\n');

  return text;
}

/**
 * Generates prompt for feature refinement
 */
export function generateFeatureRefinementPrompt(features: Feature[]): string {
  return `Review and optimize these MVP features:

${features
  .map(
    (f) => `FITUR: ${f.name}
DESKRIPSI: ${f.description}
PRIORITAS: ${f.priority}
KOMPLEKSITAS: ${f.complexity}
ESTIMASI: ${f.estimatedEffort} hari
KRITERIA VALIDASI:
${f.validationCriteria.map((c) => `- ${c}`).join('\n')}
`
  )
  .join('\n---\n')}

Please analyze and suggest:
1. Feature optimization opportunities
2. Missing critical features
3. Potential simplifications
4. Dependencies and technical considerations
5. Alternative approaches for complex features

Use this format:
<feature_analysis>
[Feature by feature analysis]
</feature_analysis>

<suggestions>
[Specific improvement suggestions]
</suggestions>

<dependencies>
[Technical dependencies and considerations]
</dependencies>`;
}

/**
 * Generates prompt for validation plan
 */
export function generateValidationPrompt(design: MVPDesign): string {
  return `Help create a validation plan for this MVP:

PRODUCT SUMMARY:
${design.baseInfo.valueProposition}

TARGET USERS:
${design.baseInfo.customerSegments}

CORE FEATURES:
${design.features
  .filter((f) => f.priority === 'must')
  .map((f) => `- ${f.name}`)
  .join('\n')}

Please suggest:
1. Key validation milestones
2. Success metrics for each milestone
3. Testing methods appropriate for Indonesian market
4. Timeline for validation activities
5. Budget-friendly testing approaches

Use this format:
<validation_plan>
[Detailed validation plan]
</validation_plan>

<metrics>
[Specific success metrics]
</metrics>

<testing_methods>
[Recommended testing approaches]
</testing_methods>`;
}

/**
 * Parses the AI response into structured format
 */
export function parseAIResponse(response: string): GeneratedMVP {
  try {
    // Extract analysis sections
    const mvpAnalysisMatch = response.match(/<mvp_analysis>([\s\S]*?)<\/mvp_analysis>/);
    const tldrMatch = response.match(/<tldr>([\s\S]*?)<\/tldr>/);

    if (!mvpAnalysisMatch) {
      throw new Error('Invalid response format');
    }

    const analysis = mvpAnalysisMatch[1];

    // Extract individual sections
    const extractSection = (tag: string) => {
      const match = analysis.match(new RegExp(`<${tag}>[\\s\\S]*?([\\s\\S]*?)<\/${tag}>`, 'm'));
      return match ? match[1].trim() : '';
    };

    // Parse features section into Feature objects
    const featuresSection = extractSection('refined_features');
    const features = parseFeaturesSection(featuresSection);

    // Format setiap section sebelum mengembalikan hasil
    return {
      refinedFeatures: features,
      suggestedTimeline: parseTimelineSection(extractSection('timeline')),
      riskAssessment: parseRisksSection(extractSection('risks')),
      validationPlan: parseValidationSection(extractSection('validation_plan')),
      mvpSummary: {
        tldr: formatSection(tldrMatch ? tldrMatch[1].trim() : ''),
        detailed: {
          features: formatSection(extractSection('refined_features')),
          timeline: formatSection(extractSection('timeline')),
          risks: formatSection(extractSection('risks')),
          validation: formatSection(extractSection('validation_plan')),
          costs: formatSection(extractSection('cost_estimation')),
        },
      },
    };
  } catch (error) {
    console.error('Error parsing AI response:', error);
    throw new Error('Failed to parse AI response');
  }
}

// Helper functions for parsing specific sections
function parseFeaturesSection(section: string): Feature[] {
  const features: Feature[] = [];

  // Split the section into feature blocks
  const featureBlocks = section.split('\n\n').filter(Boolean);

  featureBlocks.forEach((block) => {
    const nameMatch = block.match(/Nama: (.+)/);
    const descMatch = block.match(/Deskripsi: (.+)/);
    const priorityMatch = block.match(/Prioritas: (must|should|could|wont)/);
    const complexityMatch = block.match(/Kompleksitas: (low|medium|high)/);
    const effortMatch = block.match(/Estimasi: (\d+)/);
    const criteriaMatch = block.match(/Kriteria:\n((?:- .+\n?)+)/);

    if (nameMatch && descMatch && priorityMatch && complexityMatch) {
      features.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: nameMatch[1].trim(),
        description: descMatch[1].trim(),
        priority: priorityMatch[1] as Feature['priority'],
        complexity: complexityMatch[1] as Feature['complexity'],
        estimatedEffort: effortMatch ? parseInt(effortMatch[1]) : 1,
        validationCriteria: criteriaMatch
          ? criteriaMatch[1]
              .split('\n')
              .filter((c) => c.startsWith('- '))
              .map((c) => c.slice(2).trim())
          : [],
        dependencies: [],
      });
    }
  });

  return features;
}

function parseTimelineSection(section: string): {
  estimatedDuration: number;
  majorMilestones: Array<{
    id: string;
    name: string;
    features: string[];
    targetDate: Date;
  }>;
} {
  const durationMatch = section.match(/Durasi: (\d+) minggu/);
  const milestonesMatch = section.match(/Milestones:\n((?:- .+\n?)+)/);

  return {
    estimatedDuration: durationMatch ? parseInt(durationMatch[1]) : 0,
    majorMilestones: milestonesMatch
      ? milestonesMatch[1]
          .split('\n')
          .filter((m) => m.startsWith('- '))
          .map((m) => {
            const [name, dateStr, features] = m.slice(2).split(' | ');
            return {
              id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
              name: name.trim(),
              features: features ? features.split(',').map((f) => f.trim()) : [],
              targetDate: dateStr ? new Date(dateStr) : new Date(),
            };
          })
      : [],
  };
}

function parseRisksSection(section: string): Risk[] {
  const risks: Risk[] = [];

  const riskBlocks = section.split('\n\n').filter(Boolean);

  riskBlocks.forEach((block) => {
    const descMatch = block.match(/Risiko: (.+)/);
    const impactMatch = block.match(/Impact: (low|medium|high)/);
    const probMatch = block.match(/Probability: (low|medium|high)/);
    const mitigationMatch = block.match(/Mitigasi: (.+)/);
    const contingencyMatch = block.match(/Kontingensi: (.+)/);

    if (descMatch && impactMatch && probMatch && mitigationMatch) {
      risks.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        description: descMatch[1].trim(),
        impact: impactMatch[1] as Risk['impact'],
        probability: probMatch[1] as Risk['probability'],
        mitigationStrategy: mitigationMatch[1].trim(),
        contingencyPlan: contingencyMatch ? contingencyMatch[1].trim() : '',
      });
    }
  });

  return risks;
}

function parseValidationSection(section: string): ValidationMilestone[] {
  const milestones: ValidationMilestone[] = [];

  const milestoneBlocks = section.split('\n\n').filter(Boolean);

  milestoneBlocks.forEach((block) => {
    const descMatch = block.match(/Milestone: (.+)/);
    const criteriaMatch = block.match(/Kriteria:\n((?:- .+\n?)+)/);
    const metricsMatch = block.match(/Metrik:\n((?:- .+\n?)+)/);

    if (descMatch) {
      milestones.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        description: descMatch[1].trim(),
        successCriteria: criteriaMatch
          ? criteriaMatch[1]
              .split('\n')
              .filter((c) => c.startsWith('- '))
              .map((c) => c.slice(2).trim())
          : [],
        metrics: metricsMatch
          ? metricsMatch[1]
              .split('\n')
              .filter((m) => m.startsWith('- '))
              .map((m) => m.slice(2).trim())
          : [],
        status: 'pending',
      });
    }
  });

  return milestones;
}
