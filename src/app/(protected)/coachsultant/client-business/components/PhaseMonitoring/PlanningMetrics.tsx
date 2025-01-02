// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/PlanningMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface PlanningMetricsProps {
  rencanaDibuat: number;
  rencanaSelesai: number;
  tingkatPenyelesaian: number;
  rataWaktuPenyelesaian: string;
}

export function PlanningMetrics({ rencanaDibuat, rencanaSelesai, tingkatPenyelesaian, rataWaktuPenyelesaian }: PlanningMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Metrik Perencanaan</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Rencana Dibuat' value={rencanaDibuat.toString()} trend='↑ 8%' />
        <MetricCard title='Rencana Selesai' value={rencanaSelesai.toString()} trend='↓ 3%' />
      </div>
      <ProgressBar value={tingkatPenyelesaian} label='Progres Penyelesaian' />
      <MetricCard title='Rata-rata Waktu Penyelesaian' value={rataWaktuPenyelesaian} trend='→ 0%' />
    </div>
  );
}
