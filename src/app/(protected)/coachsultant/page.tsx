import ClientOverview from './components/dashboard/ClientOverview';
import RecentActivities from './components/dashboard/RecentActivities';
import UpcomingSessions from './components/dashboard/UpcomingSessions';
import Alerts from './components/dashboard/Alerts';
import StackedAreaChart from './components/dashboard/StackedAreaChart';
import LineBarAreaComposedChart from './components/dashboard/LineBarAreaComposedChart';
import PieChartWithNeedle from './components/dashboard/PieChartWithNeedle';
import SpecifiedDomainRadarChart from './components/dashboard/SpecifiedDomainRadarChart';
import SimpleRadialBarChart from './components/dashboard/SimpleRadialBarChart';
import KpiCard from './components/dashboard/KpiCard';

export default function DashboardPage() {
  const kpiData = [
    {
      title: 'Pendapatan Mingguan',
      total: 75000000,
      target: 50000000,
      trendData: [
        { date: 'Senin', value: 10000000 },
        { date: 'Selasa', value: 15000000 },
        { date: 'Rabu', value: 25000000 },
        { date: 'Kamis', value: 40000000 },
        { date: 'Jumat', value: 60000000 },
        { date: 'Sabtu', value: 70000000 },
        { date: 'Minggu', value: 75000000 },
      ],
    },
    {
      title: 'Pelanggan Baru',
      total: 120,
      target: 100,
      trendData: [
        { date: 'Senin', value: 10 },
        { date: 'Selasa', value: 25 },
        { date: 'Rabu', value: 45 },
        { date: 'Kamis', value: 70 },
        { date: 'Jumat', value: 90 },
        { date: 'Sabtu', value: 110 },
        { date: 'Minggu', value: 120 },
      ],
    },
    {
      title: 'Retensi Pelanggan',
      total: 85,
      target: 90,
      trendData: [
        { date: 'Senin', value: 80 },
        { date: 'Selasa', value: 82 },
        { date: 'Rabu', value: 83 },
        { date: 'Kamis', value: 84 },
        { date: 'Jumat', value: 85 },
        { date: 'Sabtu', value: 85 },
        { date: 'Minggu', value: 85 },
      ],
    },
    {
      title: 'Kepuasan Pelanggan',
      total: 92,
      target: 90,
      trendData: [
        { date: 'Senin', value: 88 },
        { date: 'Selasa', value: 89 },
        { date: 'Rabu', value: 90 },
        { date: 'Kamis', value: 91 },
        { date: 'Jumat', value: 92 },
        { date: 'Sabtu', value: 92 },
        { date: 'Minggu', value: 92 },
      ],
    },
  ];

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {kpiData.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <ClientOverview />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <RecentActivities />
        </div>
        <div className='space-y-6'>
          <UpcomingSessions />
          <Alerts />
        </div>
      </div>

      {/* Business Metrics Section */}
      <div className='space-y-6'>
        <h2 className='text-xl font-semibold text-gray-800'>Metrik Bisnis</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-4'>Pertumbuhan Bisnis</h3>
            <StackedAreaChart />
          </div>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-4'>Kinerja Bisnis</h3>
            <LineBarAreaComposedChart />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-4'>Kesehatan Bisnis</h3>
            <div className='text-sm text-gray-600 mb-4'>
              <ul className='list-disc list-inside space-y-1'>
                <li>Likuiditas: Kemampuan memenuhi kewajiban jangka pendek</li>
                <li>Solvabilitas: Kemampuan memenuhi kewajiban jangka panjang</li>
                <li>Profitabilitas: Kemampuan menghasilkan keuntungan</li>
              </ul>
              <SimpleRadialBarChart />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-4'>Aspek Bisnis</h3>
            <SpecifiedDomainRadarChart />
          </div>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-lg font-medium mb-4'>Segmentasi Bisnis</h3>
            <SimpleRadialBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}
