// src/app/(protected)/coachsultant/client-business/types/client-business.ts
interface CompetitorData {
  name: string;
  strength: string;
  weakness: string;
}

interface CustomerInterview {
  date: Date;
  insights: string[];
}

interface Milestone {
  name: string;
  targetDate: Date;
  status: 'not-started' | 'in-progress' | 'completed';
}

interface Risk {
  description: string;
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
}

interface MonthlyMetric {
  month: string;
  value: number;
}

interface ChannelPerformance {
  channel: string;
  roi: number;
  conversionRate: number;
}

export default interface ClientBusiness {
  id: string;
  clientId: string;
  businessName: string;
  phase: 'ideation' | 'planning' | 'growth' | 'maturity';
  startDate: Date;
  lastAssessment: Date;

  ideationPhase?: {
    problemValidation: number;
    marketResearch: {
      marketSize: number;
      targetSegment: string;
      competitorAnalysis: CompetitorData[];
      customerInterviews: CustomerInterview[];
    };
    valueProposition: {
      clarity: number;
      uniqueness: number;
      feasibility: number;
    };
  };

  planningPhase?: {
    businessPlan: {
      completeness: number;
      milestones: Milestone[];
      risks: Risk[];
    };
    financials: {
      initialInvestment: number;
      projectedRevenue: number;
      breakEvenPoint: number;
      runwayMonths: number;
    };
    launchReadiness: {
      legal: number;
      operational: number;
      marketing: number;
      product: number;
    };
  };

  growthPhase?: {
    performance: {
      revenue: MonthlyMetric[];
      customers: MonthlyMetric[];
      churnRate: number;
      acquisitionCost: number;
      unitEconomics: {
        cac: number;
        ltv: number;
        margin: number;
      };
    };
    teamMetrics: {
      headcount: number;
      productivity: number;
      satisfaction: number;
    };
    marketingMetrics: {
      channels: ChannelPerformance[];
      conversion: number;
      roi: number;
    };
  };

  maturityPhase?: {
    businessValue: {
      currentValuation: number;
      growthRate: number;
      marketShare: number;
    };
    systemMaturity: {
      operations: number;
      management: number;
      technology: number;
    };
    exitReadiness: {
      documentation: number;
      succession: number;
      transferability: number;
    };
  };
}
