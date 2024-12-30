// src/app/(protected)/coachsultant/client-business/page.tsx
import { IdeationMetrics } from './components/PhaseMonitoring/IdeationMetrics';
import { PlanningMetrics } from './components/PhaseMonitoring/PlanningMetrics';
import { GrowthMetrics } from './components/PhaseMonitoring/GrowthMetrics';
import { MaturityMetrics } from './components/PhaseMonitoring/MaturityMetrics';
import { PerformanceDashboard } from './components/Analytics/PerformanceDashboard';
import { TrendAnalysis } from './components/Analytics/TrendAnalysis';
import { ComparisonTools } from './components/Analytics/ComparisonTools';

export default function ClientBusinessPage() {
  // Example data - in a real application this would come from an API
  const ideationData = {
    totalIdeas: 42,
    validatedIdeas: 28,
    validationRate: 66.67,
    avgValidationTime: '3.5 days',
  };

  const planningData = {
    plansCreated: 15,
    plansCompleted: 10,
    completionRate: 66.67,
    avgCompletionTime: '7 days',
  };

  const growthData = {
    revenueGrowth: 15,
    customerGrowth: 10,
    marketShare: 25,
    avgMonthlyGrowth: '5%',
  };

  const maturityData = {
    profitability: 20,
    operationalEfficiency: 85,
    marketPosition: 60,
    avgProfitMargin: '18%',
  };

  const performanceData = {
    overallPerformance: 78,
    kpiCompletion: 85,
    riskLevel: 35,
    resourceUtilization: 90,
  };

  const comparisonData = [
    { name: 'Business A', revenue: 4000, profit: 2400, customers: 2400 },
    { name: 'Business B', revenue: 3000, profit: 1398, customers: 2210 },
    { name: 'Business C', revenue: 2000, profit: 9800, customers: 2290 },
    { name: 'Business D', revenue: 2780, profit: 3908, customers: 2000 },
    { name: 'Business E', revenue: 1890, profit: 4800, customers: 2181 },
    { name: 'Business F', revenue: 2390, profit: 3800, customers: 2500 },
  ];

  return (
    <div className='space-y-8 p-6'>
      <h1 className='text-2xl font-bold'>Client Business Monitoring</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <IdeationMetrics {...ideationData} />
        <PlanningMetrics {...planningData} />
        <GrowthMetrics {...growthData} />
        <MaturityMetrics {...maturityData} />
      </div>

      <PerformanceDashboard {...performanceData} />
      <TrendAnalysis />
      <ComparisonTools comparisonData={comparisonData} />
    </div>
  );
}
