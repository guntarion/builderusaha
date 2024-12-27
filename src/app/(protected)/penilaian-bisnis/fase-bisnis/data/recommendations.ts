// src/app/(protected)/penilaian-bisnis/fase-bisnis/data/recommendations.ts
import type { BusinessPhase, RecommendationItem } from './types';

// Base recommendations mapped by business phase
export const phaseRecommendations: Record<BusinessPhase, RecommendationItem[]> = {
  PHASE_1_1: [
    {
      id: 'idea_validation',
      title: 'Validasi Ide Bisnis',
      description: 'Validasi ide bisnis Anda dengan melakukan riset pasar dan customer interview',
      priority: 'high',
      category: 'business_foundation',
      actionItems: [
        'Lakukan minimal 10 customer interviews',
        'Identifikasi pain points utama customer',
        'Validasi asumsi harga dengan target market',
        'Analisis kompetitor yang ada di pasar',
        'Buat prototype produk minimal',
      ],
      resources: ['Template Customer Interview', 'Panduan Validasi Produk', 'Checklist Riset Pasar'],
    },
    {
      id: 'business_model',
      title: 'Pengembangan Model Bisnis',
      description: 'Kembangkan model bisnis yang jelas dan tervalidasi',
      priority: 'high',
      category: 'business_foundation',
      actionItems: [
        'Definisikan value proposition',
        'Identifikasi revenue streams potensial',
        'Petakan struktur biaya dasar',
        'Tentukan channel distribusi',
        'Buat financial projection sederhana',
      ],
    },
  ],

  PHASE_1_2: [
    {
      id: 'mvp_development',
      title: 'Pengembangan MVP',
      description: 'Kembangkan dan uji Minimum Viable Product',
      priority: 'high',
      category: 'product_development',
      actionItems: [
        'Definisikan fitur minimal produk',
        'Buat timeline pengembangan MVP',
        'Setup feedback collection system',
        'Lakukan user testing',
        'Iterasi berdasarkan feedback',
      ],
    },
    {
      id: 'market_preparation',
      title: 'Persiapan Market Entry',
      description: 'Siapkan strategi memasuki pasar',
      priority: 'high',
      category: 'market_presence',
      actionItems: [
        'Develop go-to-market strategy',
        'Siapkan marketing materials',
        'Setup channel distribusi awal',
        'Buat pricing strategy',
        'Tentukan target market spesifik',
      ],
    },
  ],

  PHASE_2_1: [
    {
      id: 'operations_setup',
      title: 'Setup Operasional Dasar',
      description: 'Bangun sistem operasional yang terstruktur',
      priority: 'high',
      category: 'operational_maturity',
      actionItems: [
        'Buat SOP produksi/layanan',
        'Setup sistem inventory management',
        'Implementasi quality control dasar',
        'Buat customer service workflow',
        'Dokumentasikan proses utama',
      ],
    },
    {
      id: 'sales_optimization',
      title: 'Optimasi Penjualan',
      description: 'Tingkatkan dan stabilkan proses penjualan',
      priority: 'high',
      category: 'market_presence',
      actionItems: [
        'Buat sales funnel yang jelas',
        'Implementasi CRM sederhana',
        'Tracking metrics penjualan',
        'Develop repeat customer strategy',
        'Optimasi conversion rate',
      ],
    },
  ],

  PHASE_2_2: [
    {
      id: 'team_development',
      title: 'Pengembangan Tim',
      description: 'Bangun dan kembangkan tim inti',
      priority: 'high',
      category: 'team_organization',
      actionItems: [
        'Buat struktur organisasi formal',
        'Definisikan roles dan responsibilities',
        'Develop training program',
        'Implementasi performance metrics',
        'Setup recruitment process',
      ],
    },
    {
      id: 'financial_systems',
      title: 'Penguatan Sistem Keuangan',
      description: 'Tingkatkan manajemen keuangan bisnis',
      priority: 'high',
      category: 'financial_health',
      actionItems: [
        'Implementasi sistem akuntansi formal',
        'Buat budgeting system',
        'Setup financial controls',
        'Develop cash flow management',
        'Buat financial reporting regular',
      ],
    },
  ],

  PHASE_3_1: [
    {
      id: 'scaling_preparation',
      title: 'Persiapan Scaling',
      description: 'Siapkan bisnis untuk scaling',
      priority: 'high',
      category: 'operational_maturity',
      actionItems: [
        'Audit sistem operasional',
        'Optimasi proses bisnis',
        'Strengthen supply chain',
        'Develop scaling roadmap',
        'Assess resource requirements',
      ],
    },
    {
      id: 'market_expansion',
      title: 'Ekspansi Pasar',
      description: 'Perluas market presence',
      priority: 'high',
      category: 'market_presence',
      actionItems: [
        'Identifikasi target market baru',
        'Develop expansion strategy',
        'Build market entry plans',
        'Setup expansion metrics',
        'Allocate expansion resources',
      ],
    },
  ],

  PHASE_3_2: [
    {
      id: 'innovation_management',
      title: 'Manajemen Inovasi',
      description: 'Bangun sistem inovasi berkelanjutan',
      priority: 'high',
      category: 'operational_maturity',
      actionItems: [
        'Setup R&D department',
        'Create innovation pipeline',
        'Develop testing framework',
        'Implement feedback systems',
        'Allocate innovation budget',
      ],
    },
    {
      id: 'growth_optimization',
      title: 'Optimasi Pertumbuhan',
      description: 'Optimasi untuk pertumbuhan berkelanjutan',
      priority: 'high',
      category: 'business_foundation',
      actionItems: [
        'Diversifikasi revenue streams',
        'Optimize resource allocation',
        'Strengthen market position',
        'Develop strategic partnerships',
        'Build competitive moats',
      ],
    },
  ],

  PHASE_4_1: [
    {
      id: 'market_leadership',
      title: 'Penguatan Market Leadership',
      description: 'Kuatkan posisi sebagai market leader',
      priority: 'high',
      category: 'market_presence',
      actionItems: [
        'Develop industry standards',
        'Lead market initiatives',
        'Build industry coalitions',
        'Influence regulatory framework',
        'Drive market innovation',
      ],
    },
    {
      id: 'corporate_governance',
      title: 'Penguatan Governance',
      description: 'Tingkatkan corporate governance',
      priority: 'high',
      category: 'team_organization',
      actionItems: [
        'Establish board structure',
        'Implement governance policies',
        'Setup audit procedures',
        'Develop succession planning',
        'Create accountability framework',
      ],
    },
  ],

  PHASE_4_2: [
    {
      id: 'legacy_building',
      title: 'Pembangunan Legacy',
      description: 'Bangun legacy bisnis yang berkelanjutan',
      priority: 'high',
      category: 'business_foundation',
      actionItems: [
        'Define legacy vision',
        'Create sustainability framework',
        'Develop social impact programs',
        'Build enduring institutions',
        'Establish foundation/programs',
      ],
    },
    {
      id: 'future_proofing',
      title: 'Future Proofing',
      description: 'Pastikan keberlanjutan jangka panjang',
      priority: 'high',
      category: 'operational_maturity',
      actionItems: [
        'Develop future scenarios',
        'Create adaptation strategies',
        'Build innovation ecosystems',
        'Establish knowledge management',
        'Ensure technology leadership',
      ],
    },
  ],
};

// Helper function to get recommendations based on phase and gaps
export function getPhaseRecommendations(phase: BusinessPhase, improvementAreas: string[]): RecommendationItem[] {
  const baseRecommendations = phaseRecommendations[phase] || [];

  // Add additional recommendations based on improvement areas
  const additionalRecommendations = improvementAreas.map((area) => generateImprovementRecommendation(area, phase));

  return [...baseRecommendations, ...additionalRecommendations];
}

// Helper function to generate improvement recommendations
function generateImprovementRecommendation(area: string, phase: BusinessPhase): RecommendationItem {
  // Add custom recommendations based on specific improvement areas
  // This is a simplified example - expand based on your needs
  return {
    id: `improve_${area}`,
    title: `Peningkatan ${area.replace(/_/g, ' ')}`,
    description: `Tingkatkan kinerja di area ${area.replace(/_/g, ' ')}`,
    priority: 'medium',
    category: area,
    actionItems: [
      'Analisis kondisi saat ini',
      'Identifikasi gap dengan standar industri',
      'Buat rencana pengembangan',
      'Implementasi perbaikan',
      'Monitor dan evaluasi hasil',
    ],
  };
}
