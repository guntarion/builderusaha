import { BusinessMetrics } from '../types';

export const mockBusinessData: BusinessMetrics[] = [
  {
    id: 'bm1',
    clientId: 'c1',
    clientName: 'John Doe',
    companyName: 'Tech Startup X',
    kpiMetrics: {
      revenue: {
        current: 150000,
        target: 200000,
        growth: 15.5,
      },
      customers: {
        active: 1200,
        churnRate: 2.5,
        acquisitionRate: 8.3,
      },
      cashflow: {
        balance: 300000,
        burnRate: 25000,
        runway: 12,
      },
    },
    milestones: [
      {
        id: 'm1',
        title: 'Product Launch v2.0',
        dueDate: new Date('2024-03-15'),
        status: 'ongoing',
        progress: 65,
      },
      {
        id: 'm2',
        title: 'Market Expansion',
        dueDate: new Date('2024-04-01'),
        status: 'upcoming',
        progress: 0,
      },
    ],
    risks: [
      {
        id: 'r1',
        category: 'Market Competition',
        severity: 'high',
        probability: 0.7,
        impact: 0.8,
        mitigation: 'Differentiation strategy implementation',
        status: 'active',
      },
    ],
    growthMetrics: {
      marketShare: 12.5,
      employeeGrowth: 25,
      productDevelopment: 80,
      customerSatisfaction: 85,
    },
    historicalGrowth: [
      {
        quarter: 'Q1 2023',
        marketShare: 8.5,
        employeeGrowth: 15,
        productDevelopment: 60,
        customerSatisfaction: 75,
      },
      {
        quarter: 'Q2 2023',
        marketShare: 9.8,
        employeeGrowth: 18,
        productDevelopment: 65,
        customerSatisfaction: 78,
      },
      {
        quarter: 'Q3 2023',
        marketShare: 11.2,
        employeeGrowth: 22,
        productDevelopment: 72,
        customerSatisfaction: 82,
      },
      {
        quarter: 'Q4 2023',
        marketShare: 12.5,
        employeeGrowth: 25,
        productDevelopment: 80,
        customerSatisfaction: 85,
      },
    ],
  },
];
