// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/GrowthMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface GrowthMetricsProps {
  revenueGrowth: number;
  customerGrowth: number;
  marketShare: number;
  avgMonthlyGrowth: string;
}

export function GrowthMetrics({ revenueGrowth, customerGrowth, marketShare, avgMonthlyGrowth }: GrowthMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Growth Metrics</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Revenue Growth' value={`${revenueGrowth}%`} trend='↑ 15%' />
        <MetricCard title='Customer Growth' value={`${customerGrowth}%`} trend='↑ 10%' />
      </div>
      <ProgressBar value={marketShare} label='Market Share' />
      <MetricCard title='Avg Monthly Growth' value={avgMonthlyGrowth} trend='→ 0%' />
    </div>
  );
}
