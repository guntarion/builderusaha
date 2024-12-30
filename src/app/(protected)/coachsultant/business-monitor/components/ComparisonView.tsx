import { BusinessMetrics } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComparisonViewProps {
  currentMetrics: BusinessMetrics;
  previousMetrics: BusinessMetrics;
}

export function ComparisonView({ currentMetrics, previousMetrics }: ComparisonViewProps) {
  const revenueComparison = [
    {
      name: 'Current',
      revenue: currentMetrics.kpiMetrics.revenue.current,
      target: currentMetrics.kpiMetrics.revenue.target,
    },
    {
      name: 'Previous',
      revenue: previousMetrics.kpiMetrics.revenue.current,
      target: previousMetrics.kpiMetrics.revenue.target,
    },
  ];

  const customerComparison = [
    {
      name: 'Current',
      active: currentMetrics.kpiMetrics.customers.active,
      churnRate: currentMetrics.kpiMetrics.customers.churnRate,
    },
    {
      name: 'Previous',
      active: previousMetrics.kpiMetrics.customers.active,
      churnRate: previousMetrics.kpiMetrics.customers.churnRate,
    },
  ];

  return (
    <div className='space-y-8'>
      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='text-lg font-semibold mb-4'>Revenue Comparison</h3>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={revenueComparison}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='revenue' stroke='#8884d8' />
              <Line type='monotone' dataKey='target' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='text-lg font-semibold mb-4'>Customer Metrics Comparison</h3>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={customerComparison}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='active' stroke='#8884d8' />
              <Line type='monotone' dataKey='churnRate' stroke='#ff7300' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
