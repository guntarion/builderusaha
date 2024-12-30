// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/PlanningMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface PlanningMetricsProps {
  plansCreated: number;
  plansCompleted: number;
  completionRate: number;
  avgCompletionTime: string;
}

export function PlanningMetrics({ plansCreated, plansCompleted, completionRate, avgCompletionTime }: PlanningMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Planning Metrics</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Plans Created' value={plansCreated.toString()} trend='↑ 8%' />
        <MetricCard title='Plans Completed' value={plansCompleted.toString()} trend='↓ 3%' />
      </div>
      <ProgressBar value={completionRate} label='Completion Progress' />
      <MetricCard title='Average Completion Time' value={avgCompletionTime} trend='→ 0%' />
    </div>
  );
}
