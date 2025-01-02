// src/app/(protected)/coachsultant/client-business/page.tsx
import { IdeationMetrics } from './components/PhaseMonitoring/IdeationMetrics';
import { PlanningMetrics } from './components/PhaseMonitoring/PlanningMetrics';
import { GrowthMetrics } from './components/PhaseMonitoring/GrowthMetrics';
import { MaturityMetrics } from './components/PhaseMonitoring/MaturityMetrics';
import { PerformanceDashboard } from './components/Analytics/PerformanceDashboard';
import { TrendAnalysis } from './components/Analytics/TrendAnalysis';
import { ComparisonTools } from './components/Analytics/ComparisonTools';

export default function ClientBusinessPage() {
  // Example data - in a real application this would come from an API
  const ideationData = {
    totalIdeas: 42,
    ideTervalidasi: 28,
    tingkatValidasi: 66.67,
    rataWaktuValidasi: '3.5 hari',
  };

  const planningData = {
    rencanaDibuat: 15,
    rencanaSelesai: 10,
    tingkatPenyelesaian: 66.67,
    rataWaktuPenyelesaian: '7 hari',
  };

  const growthData = {
    pertumbuhanPendapatan: 15,
    pertumbuhanPelanggan: 10,
    pangsaPasar: 25,
    rataPertumbuhanBulanan: '5%',
  };

  const maturityData = {
    profitabilitas: 20,
    efisiensiOperasional: 85,
    posisiPasar: 60,
    rataMarginKeuntungan: '18%',
  };

  const performanceData = {
    overallPerformance: 78,
    kpiCompletion: 85,
    riskLevel: 35,
    resourceUtilization: 90,
  };

  const comparisonData = [
    { name: 'Business A', revenue: 4000, profit: 2400, customers: 2400 },
    { name: 'Business B', revenue: 3000, profit: 1398, customers: 2210 },
    { name: 'Business C', revenue: 2000, profit: 9800, customers: 2290 },
    { name: 'Business D', revenue: 2780, profit: 3908, customers: 2000 },
    { name: 'Business E', revenue: 1890, profit: 4800, customers: 2181 },
    { name: 'Business F', revenue: 2390, profit: 3800, customers: 2500 },
  ];

  return (
    <div className='space-y-8 p-6'>
      <h1 className='text-2xl font-bold'>Pemantauan Bisnis Klien</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <IdeationMetrics {...ideationData} />
        <PlanningMetrics {...planningData} />
        <GrowthMetrics {...growthData} />
        <MaturityMetrics {...maturityData} />
      </div>

      <PerformanceDashboard {...performanceData} />
      <TrendAnalysis />
      <ComparisonTools comparisonData={comparisonData} />
    </div>
  );
}
