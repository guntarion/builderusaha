export interface HistoricalGrowthPoint {
  quarter: string;
  marketShare: number;
  employeeGrowth: number;
  productDevelopment: number;
  customerSatisfaction: number;
}

export interface BusinessMetrics {
  id: string;
  clientId: string;
  clientName: string;
  companyName: string;
  kpiMetrics: {
    revenue: {
      current: number;
      target: number;
      growth: number;
    };
    customers: {
      active: number;
      churnRate: number;
      acquisitionRate: number;
    };
    cashflow: {
      balance: number;
      burnRate: number;
      runway: number;
    };
  };
  milestones: {
    id: string;
    title: string;
    dueDate: Date;
    status: 'completed' | 'ongoing' | 'delayed' | 'upcoming';
    progress: number;
  }[];
  risks: {
    id: string;
    category: string;
    severity: 'high' | 'medium' | 'low';
    probability: number;
    impact: number;
    mitigation: string;
    status: 'active' | 'monitored' | 'resolved';
  }[];
  growthMetrics: {
    marketShare: number;
    employeeGrowth: number;
    productDevelopment: number;
    customerSatisfaction: number;
  };
  historicalGrowth: HistoricalGrowthPoint[];
}
