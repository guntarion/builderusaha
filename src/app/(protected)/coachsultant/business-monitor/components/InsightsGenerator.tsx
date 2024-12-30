import { BusinessMetrics } from '../types';
import { Lightbulb } from 'lucide-react';

interface InsightsGeneratorProps {
  metrics: BusinessMetrics;
}

export function InsightsGenerator({ metrics }: InsightsGeneratorProps) {
  const generateInsights = () => {
    const insights: string[] = [];

    // Revenue insights
    if (metrics.kpiMetrics.revenue.current < metrics.kpiMetrics.revenue.target) {
      const percentage = ((metrics.kpiMetrics.revenue.current / metrics.kpiMetrics.revenue.target) * 100).toFixed(1);
      insights.push(`Revenue is at ${percentage}% of target. Consider strategies to boost sales.`);
    }

    // Customer insights
    if (metrics.kpiMetrics.customers.churnRate > 5) {
      insights.push(`High churn rate detected (${metrics.kpiMetrics.customers.churnRate}%). Focus on customer retention.`);
    }

    // Cash flow insights
    if (metrics.kpiMetrics.cashflow.runway < 6) {
      insights.push(`Low cash runway (${metrics.kpiMetrics.cashflow.runway} months). Consider fundraising or cost optimization.`);
    }

    // Growth insights
    if (metrics.growthMetrics.customerSatisfaction < 80) {
      insights.push(`Customer satisfaction is below 80%. Improve product quality and customer support.`);
    }

    return insights.length > 0 ? insights : ['All key metrics are performing well. Keep up the good work!'];
  };

  const insights = generateInsights();

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
        <Lightbulb className='w-5 h-5 text-yellow-500' />
        Automated Insights
      </h2>
      <div className='space-y-3'>
        {insights.map((insight, index) => (
          <div key={index} className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-sm text-gray-700'>{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
