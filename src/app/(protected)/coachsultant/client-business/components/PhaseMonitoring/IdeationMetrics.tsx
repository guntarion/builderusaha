// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/IdeationMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface IdeationMetricsProps {
  totalIdeas: number;
  validatedIdeas: number;
  validationRate: number;
  avgValidationTime: string;
}

export function IdeationMetrics({ totalIdeas, validatedIdeas, validationRate, avgValidationTime }: IdeationMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Ideation Metrics</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Total Ideas' value={totalIdeas.toString()} trend='↑ 12%' />
        <MetricCard title='Validated Ideas' value={validatedIdeas.toString()} trend='↓ 5%' />
      </div>
      <ProgressBar value={validationRate} label='Validation Progress' />
      <MetricCard title='Average Validation Time' value={avgValidationTime} trend='→ 0%' />
    </div>
  );
}
