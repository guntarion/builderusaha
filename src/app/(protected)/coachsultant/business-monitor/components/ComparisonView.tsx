import { BusinessMetrics } from '../types';

interface ComparisonViewProps {
  currentMetrics: BusinessMetrics;
  previousMetrics: BusinessMetrics;
}

export function ComparisonView({ currentMetrics, previousMetrics }: ComparisonViewProps) {
  return (
    <div className='space-y-8'>
      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='text-lg font-semibold mb-4'>Perbandingan Pendapatan</h3>
        <div className='h-64 flex items-center justify-center'>
          <p className='text-gray-500'>Fungsi grafik saat ini tidak tersedia</p>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='text-lg font-semibold mb-4'>Perbandingan Metrik Pelanggan</h3>
        <div className='h-64 flex items-center justify-center'>
          <p className='text-gray-500'>Fungsi grafik saat ini tidak tersedia</p>
        </div>
      </div>
    </div>
  );
}
