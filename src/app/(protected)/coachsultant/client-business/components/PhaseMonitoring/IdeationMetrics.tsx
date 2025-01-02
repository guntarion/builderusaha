// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/IdeationMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface IdeationMetricsProps {
  totalIdeas: number;
  ideTervalidasi: number;
  tingkatValidasi: number;
  rataWaktuValidasi: string;
}

export function IdeationMetrics({ totalIdeas, ideTervalidasi, tingkatValidasi, rataWaktuValidasi }: IdeationMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Metrik Ideasi</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Total Ide' value={totalIdeas.toString()} trend='↑ 12%' />
        <MetricCard title='Ide Tervalidasi' value={ideTervalidasi.toString()} trend='↓ 5%' />
      </div>
      <ProgressBar value={tingkatValidasi} label='Progres Validasi' />
      <MetricCard title='Rata-rata Waktu Validasi' value={rataWaktuValidasi} trend='→ 0%' />
    </div>
  );
}
