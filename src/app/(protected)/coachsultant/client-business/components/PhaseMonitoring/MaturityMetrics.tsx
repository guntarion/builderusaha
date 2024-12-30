// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/MaturityMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface MaturityMetricsProps {
  profitability: number;
  operationalEfficiency: number;
  marketPosition: number;
  avgProfitMargin: string;
}

export function MaturityMetrics({ profitability, operationalEfficiency, marketPosition, avgProfitMargin }: MaturityMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Maturity Metrics</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Profitability' value={`${profitability}%`} trend='↑ 5%' />
        <MetricCard title='Operational Efficiency' value={`${operationalEfficiency}%`} trend='↑ 3%' />
      </div>
      <ProgressBar value={marketPosition} label='Market Position' />
      <MetricCard title='Avg Profit Margin' value={avgProfitMargin} trend='→ 0%' />
    </div>
  );
}
