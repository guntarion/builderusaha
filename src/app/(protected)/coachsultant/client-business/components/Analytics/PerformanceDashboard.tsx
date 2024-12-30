// src/app/(protected)/coachsultant/client-business/components/Analytics/PerformanceDashboard.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface PerformanceDashboardProps {
  overallPerformance: number;
  kpiCompletion: number;
  riskLevel: number;
  resourceUtilization: number;
}

export function PerformanceDashboard({ overallPerformance, kpiCompletion, riskLevel, resourceUtilization }: PerformanceDashboardProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Performance Dashboard</h2>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Overall Performance' value={`${overallPerformance}%`} trend='↑ 2%' />
        <MetricCard title='KPI Completion' value={`${kpiCompletion}%`} trend='↑ 5%' />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <ProgressBar value={riskLevel} label='Risk Level' />
        <ProgressBar value={resourceUtilization} label='Resource Utilization' />
      </div>
    </div>
  );
}
