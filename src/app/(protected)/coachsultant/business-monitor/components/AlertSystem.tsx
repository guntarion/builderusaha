import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { BusinessMetrics } from '../types';

interface AlertSystemProps {
  metrics: BusinessMetrics;
}

export function AlertSystem({ metrics }: AlertSystemProps) {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const newAlerts: string[] = [];

    // Check revenue target
    if (metrics.kpiMetrics.revenue.current < metrics.kpiMetrics.revenue.target) {
      const percentage = ((metrics.kpiMetrics.revenue.current / metrics.kpiMetrics.revenue.target) * 100).toFixed(1);
      newAlerts.push(`Pendapatan di bawah target (${percentage}%)`);
    }

    // Check customer churn rate
    if (metrics.kpiMetrics.customers.churnRate > 5) {
      newAlerts.push(`Tingkat churn pelanggan tinggi (${metrics.kpiMetrics.customers.churnRate}%)`);
    }

    // Check cash flow runway
    if (metrics.kpiMetrics.cashflow.runway < 3) {
      newAlerts.push(`Cadangan kas rendah (${metrics.kpiMetrics.cashflow.runway} bulan)`);
    }

    setAlerts(newAlerts);
  }, [metrics]);

  if (alerts.length === 0) {
    return (
      <div className='p-4 bg-green-50 rounded-lg'>
        <div className='flex items-center gap-2 text-green-600'>
          <CheckCircle2 className='w-5 h-5' />
          <span>Semua KPI berada dalam rentang target</span>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4 bg-red-50 rounded-lg'>
      <div className='space-y-2'>
        {alerts.map((alert, index) => (
          <div key={index} className='flex items-center gap-2 text-red-600'>
            <AlertCircle className='w-5 h-5' />
            <span>{alert}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
