// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/MaturityMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface MaturityMetricsProps {
  profitabilitas: number;
  efisiensiOperasional: number;
  posisiPasar: number;
  rataMarginKeuntungan: string;
}

export function MaturityMetrics({ profitabilitas, efisiensiOperasional, posisiPasar, rataMarginKeuntungan }: MaturityMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Metrik Kematangan</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Profitabilitas' value={`${profitabilitas}%`} trend='↑ 5%' />
        <MetricCard title='Efisiensi Operasional' value={`${efisiensiOperasional}%`} trend='↑ 3%' />
      </div>
      <ProgressBar value={posisiPasar} label='Posisi Pasar' />
      <MetricCard title='Rata Margin Keuntungan' value={rataMarginKeuntungan} trend='→ 0%' />
    </div>
  );
}
