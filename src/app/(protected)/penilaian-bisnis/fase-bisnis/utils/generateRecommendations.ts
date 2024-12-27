// src/app/(protected)/penilaian-bisnis/fase-bisnis/utils/generateRecommendations.ts
import type { BusinessPhase, RecommendationItem } from '../data/types';
import { phaseDefinitions } from '../data/phases';
import { phaseRecommendations, getPhaseRecommendations } from '../data/recommendations';

export function generateRecommendations(
  currentPhase: BusinessPhase,
  nextPhaseGap: {
    missingRequirements: string[];
    improvementAreas: string[];
  }
): RecommendationItem[] {
  const currentPhaseInfo = phaseDefinitions[currentPhase];
  const recommendations: RecommendationItem[] = [];

  // Generate recommendations based on missing requirements
  nextPhaseGap.missingRequirements.forEach((requirement) => {
    recommendations.push(generateRequirementRecommendation(requirement));
  });

  // Generate recommendations based on improvement areas
  nextPhaseGap.improvementAreas.forEach((area) => {
    recommendations.push(generateImprovementRecommendation(area, currentPhase));
  });

  // Add phase-specific recommendations
  const phaseRecommendations = getPhaseSpecificRecommendations(currentPhase);
  recommendations.push(...phaseRecommendations);

  return recommendations;
}

function generateRequirementRecommendation(requirement: string): RecommendationItem {
  const requirementMappings: Record<string, Partial<RecommendationItem>> = {
    business_foundation: {
      title: 'Penguatan Fondasi Bisnis',
      description: 'Perkuat dasar bisnis Anda untuk memastikan pertumbuhan yang berkelanjutan',
      actionItems: [
        'Lakukan audit menyeluruh terhadap model bisnis saat ini',
        'Dokumentasikan value proposition dan unique selling points',
        'Validasi product-market fit dengan minimal 20 pelanggan',
        'Buat rencana pengembangan produk berbasis feedback pasar',
        'Implementasikan sistem tracking metrik bisnis utama',
      ],
      resources: [
        'Template Business Model Canvas',
        'Panduan Validasi Product-Market Fit',
        'Checklist Evaluasi Bisnis',
        'Tools Tracking Metrik Bisnis',
      ],
    },
    market_presence: {
      title: 'Pengembangan Kehadiran Pasar',
      description: 'Tingkatkan visibilitas dan penetrasi pasar bisnis Anda',
      actionItems: [
        'Lakukan analisis kompetitor dan posisi pasar',
        'Buat strategi diferensiasi yang jelas',
        'Kembangkan rencana pemasaran multi-channel',
        'Bangun program loyalitas pelanggan',
        'Implementasikan sistem feedback pelanggan',
      ],
      resources: ['Template Analisis Kompetitor', 'Panduan Strategi Marketing Digital', 'Framework Customer Journey', 'Tools Customer Feedback'],
    },
    operational_maturity: {
      title: 'Peningkatan Maturitas Operasional',
      description: 'Tingkatkan efisiensi dan efektivitas operasional bisnis',
      actionItems: [
        'Dokumentasikan seluruh proses bisnis utama',
        'Implementasikan sistem manajemen kualitas',
        'Buat SOP untuk setiap fungsi bisnis',
        'Terapkan sistem monitoring operasional',
        'Lakukan optimasi proses berkelanjutan',
      ],
      resources: ['Template SOP Bisnis', 'Panduan Quality Management', 'Tools Manajemen Operasional', 'Checklist Audit Proses'],
    },
    financial_health: {
      title: 'Penguatan Kesehatan Finansial',
      description: 'Pastikan fundamental keuangan bisnis yang kuat',
      actionItems: [
        'Setup sistem pencatatan keuangan yang terstruktur',
        'Buat proyeksi cash flow untuk 12 bulan ke depan',
        'Implementasikan sistem budgeting per departemen',
        'Lakukan analisis profitabilitas per produk/layanan',
        'Bangun cadangan modal kerja yang cukup',
      ],
      resources: ['Template Financial Reporting', 'Tools Cashflow Management', 'Panduan Budgeting', 'Framework Analisis Keuangan'],
    },
    team_organization: {
      title: 'Pengembangan Organisasi Tim',
      description: 'Bangun struktur dan kapabilitas tim yang kuat',
      actionItems: [
        'Buat struktur organisasi yang jelas',
        'Definisikan roles dan responsibilities',
        'Kembangkan sistem rekrutmen terstruktur',
        'Implementasikan program training berkala',
        'Bangun sistem performance management',
      ],
      resources: ['Template Job Descriptions', 'Panduan Rekrutmen', 'Framework Performance Review', 'Tools Team Management'],
    },
  };

  const mappedReq = requirementMappings[requirement] || {
    title: `Penuhi Persyaratan: ${requirement}`,
    description: 'Perkuat area ini untuk meningkatkan kapabilitas bisnis',
    actionItems: [
      'Lakukan evaluasi mendalam terhadap kondisi saat ini',
      'Identifikasi gap dengan standar industri',
      'Buat rencana pengembangan terstruktur',
      'Implementasikan perbaikan secara sistematis',
      'Monitor dan evaluasi hasil secara berkala',
    ],
    resources: ['Panduan Pengembangan Bisnis', 'Template Action Plan', 'Tools Evaluasi Progress'],
  };

  return {
    id: `req_${requirement.toLowerCase().replace(/\s+/g, '_')}`,
    title: mappedReq.title!,
    description: mappedReq.description!,
    priority: 'high',
    category: requirement,
    actionItems: mappedReq.actionItems!,
    resources: mappedReq.resources,
  };
}

function generateImprovementRecommendation(area: string, phase: BusinessPhase): RecommendationItem {
  const phaseSpecificActions: Record<BusinessPhase, Record<string, string[]>> = {
    PHASE_1_1: {
      business_foundation: [
        'Validasi ide bisnis dengan minimal 10 potential customers',
        'Buat prototype atau MVP untuk testing',
        'Definisikan unique value proposition',
        'Lakukan analisis kompetitor awal',
        'Buat proyeksi finansial sederhana',
      ],
      market_presence: [
        'Identifikasi target market spesifik',
        'Lakukan customer interviews',
        'Analisis kebutuhan pasar',
        'Buat rencana go-to-market awal',
        'Test berbagai channel komunikasi',
      ],
    },
    PHASE_1_2: {
      operational_maturity: [
        'Buat SOP dasar untuk proses utama',
        'Setup sistem inventory sederhana',
        'Implementasi quality control dasar',
        'Dokumentasikan proses produksi',
        'Buat sistem pelayanan pelanggan',
      ],
      financial_health: [
        'Setup sistem pencatatan keuangan basic',
        'Monitor cash flow harian',
        'Buat struktur biaya yang jelas',
        'Tentukan pricing strategy',
        'Alokasikan budget marketing',
      ],
    },
    PHASE_2_1: {
      business_foundation: [
        'Validasi product-market fit',
        'Kembangkan lini produk berdasar feedback',
        'Optimalkan revenue model',
        'Implementasi sistem CRM dasar',
        'Buat rencana scaling awal',
      ],
      market_presence: [
        'Bangun brand awareness',
        'Optimalkan channel marketing',
        'Develop customer acquisition strategy',
        'Buat program loyalitas sederhana',
        'Lakukan analisis kompetitor mendalam',
      ],
      team_organization: [
        'Rekrut tim inti',
        'Definisikan struktur organisasi awal',
        'Buat job descriptions',
        'Implementasi sistem HR dasar',
        'Bangun budaya perusahaan',
      ],
    },
    PHASE_2_2: {
      operational_maturity: [
        'Standarisasi seluruh proses bisnis',
        'Implementasi sistem manajemen mutu',
        'Optimalkan supply chain',
        'Buat disaster recovery plan',
        'Tingkatkan efisiensi operasional',
      ],
      financial_health: [
        'Implementasi sistem akuntansi formal',
        'Buat financial controls',
        'Optimalkan working capital',
        'Develop budgeting system',
        'Buat strategi pendanaan',
      ],
      team_organization: [
        'Kembangkan sistem manajemen kinerja',
        'Implementasi program training',
        'Buat succession planning',
        'Tingkatkan employee engagement',
        'Bangun sistem rewards',
      ],
    },
    PHASE_3_1: {
      business_foundation: [
        'Diversifikasi revenue streams',
        'Develop strategic partnerships',
        'Buat rencana ekspansi',
        'Optimalkan business model',
        'Strengthen competitive advantages',
      ],
      market_presence: [
        'Expand ke pasar baru',
        'Develop market leadership',
        'Buat strategic alliances',
        'Strengthen brand positioning',
        'Develop international presence',
      ],
      operational_maturity: [
        'Implementasi enterprise systems',
        'Optimalkan business processes',
        'Develop innovation pipeline',
        'Strengthen quality management',
        'Implement automation',
      ],
    },
    PHASE_3_2: {
      financial_health: [
        'Setup advanced financial planning',
        'Develop investment strategy',
        'Optimize capital structure',
        'Implement risk management',
        'Prepare for potential IPO/exit',
      ],
      team_organization: [
        'Develop leadership pipeline',
        'Build global teams',
        'Strengthen corporate culture',
        'Implement talent management',
        'Build innovation capabilities',
      ],
      operational_maturity: [
        'Scale operations globally',
        'Implement advanced technologies',
        'Build integrated systems',
        'Develop R&D capabilities',
        'Optimize resource allocation',
      ],
    },
    PHASE_4_1: {
      business_foundation: [
        'Lead market innovation',
        'Build industry ecosystems',
        'Develop multiple business units',
        'Create industry standards',
        'Build sustainable advantages',
      ],
      market_presence: [
        'Maintain market leadership',
        'Shape industry trends',
        'Build global brand',
        'Influence policy making',
        'Lead industry initiatives',
      ],
      financial_health: [
        'Optimize capital allocation',
        'Manage multiple revenue streams',
        'Develop acquisition strategy',
        'Strengthen shareholder value',
        'Build investment portfolio',
      ],
    },
    PHASE_4_2: {
      operational_maturity: [
        'Build future-proof systems',
        'Lead industry innovation',
        'Develop sustainable practices',
        'Create industry benchmarks',
        'Build resilient operations',
      ],
      team_organization: [
        'Build enduring institution',
        'Develop future leaders',
        'Create knowledge management',
        'Build learning organization',
        'Lead industry talent',
      ],
      business_foundation: [
        'Build lasting legacy',
        'Create social impact',
        'Develop sustainability framework',
        'Build enduring institutions',
        'Lead industry transformation',
      ],
    },
  };

  const defaultActions = [
    'Evaluasi kondisi saat ini secara menyeluruh',
    'Identifikasi gap dengan standar industri',
    'Buat rencana pengembangan terstruktur',
    'Implementasi perbaikan secara sistematis',
    'Monitor dan evaluasi hasil secara berkala',
  ];

  const actions = phaseSpecificActions[phase]?.[area] || defaultActions;

  const areaDisplayNames: Record<string, string> = {
    business_foundation: 'Fondasi Bisnis',
    market_presence: 'Kehadiran Pasar',
    operational_maturity: 'Maturitas Operasional',
    financial_health: 'Kesehatan Finansial',
    team_organization: 'Organisasi Tim',
  };

  const areaDescription: Record<string, string> = {
    business_foundation: 'Perkuat fundamental bisnis untuk pertumbuhan berkelanjutan',
    market_presence: 'Tingkatkan penetrasi dan posisi pasar',
    operational_maturity: 'Tingkatkan efisiensi dan efektivitas operasional',
    financial_health: 'Pastikan kesehatan dan sustainabilitas finansial',
    team_organization: 'Kembangkan kapabilitas dan struktur organisasi',
  };

  return {
    id: `imp_${area.toLowerCase()}`,
    title: `Tingkatkan ${areaDisplayNames[area] || area}`,
    description: areaDescription[area] || `Fokus pada peningkatan ${area} untuk memperkuat posisi bisnis`,
    priority: 'medium',
    category: area,
    actionItems: actions,
    resources: [`Panduan Pengembangan ${areaDisplayNames[area]}`, 'Template Action Plan', 'Tools Monitoring Progress', 'Framework Evaluasi'],
  };
}

function getPhaseSpecificRecommendations(phase: BusinessPhase): RecommendationItem[] {
  return phaseRecommendations[phase] || [];
}
