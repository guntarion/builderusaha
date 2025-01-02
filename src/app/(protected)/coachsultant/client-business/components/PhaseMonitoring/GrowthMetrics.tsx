// src/app/(protected)/coachsultant/client-business/components/PhaseMonitoring/GrowthMetrics.tsx
import MetricCard from '../Common/MetricCard';
import ProgressBar from '../Common/ProgressBar';

interface GrowthMetricsProps {
  pertumbuhanPendapatan: number;
  pertumbuhanPelanggan: number;
  pangsaPasar: number;
  rataPertumbuhanBulanan: string;
}

export function GrowthMetrics({ pertumbuhanPendapatan, pertumbuhanPelanggan, pangsaPasar, rataPertumbuhanBulanan }: GrowthMetricsProps) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Metrik Pertumbuhan</h3>
      <div className='grid grid-cols-2 gap-4'>
        <MetricCard title='Pertumbuhan Pendapatan' value={`${pertumbuhanPendapatan}%`} trend='↑ 15%' />
        <MetricCard title='Pertumbuhan Pelanggan' value={`${pertumbuhanPelanggan}%`} trend='↑ 10%' />
      </div>
      <ProgressBar value={pangsaPasar} label='Pangsa Pasar' />
      <MetricCard title='Rata Pertumbuhan Bulanan' value={rataPertumbuhanBulanan} trend='→ 0%' />
    </div>
  );
}
