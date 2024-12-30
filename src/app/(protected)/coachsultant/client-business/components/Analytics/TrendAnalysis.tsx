// src/app/(protected)/coachsultant/client-business/components/Analytics/TrendAnalysis.tsx
import { LineChart } from '../Common/Charts';

export function TrendAnalysis() {
  const revenueData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 2000 },
    { month: 'Apr', value: 2780 },
    { month: 'May', value: 1890 },
    { month: 'Jun', value: 2390 },
  ];

  const customerData = [
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 1398 },
    { month: 'Mar', value: 9800 },
    { month: 'Apr', value: 3908 },
    { month: 'May', value: 4800 },
    { month: 'Jun', value: 3800 },
  ];

  const profitData = [
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 1398 },
    { month: 'Mar', value: 9800 },
    { month: 'Apr', value: 3908 },
    { month: 'May', value: 4800 },
    { month: 'Jun', value: 3800 },
  ];

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Trend Analysis</h2>
      <div className='grid grid-cols-1 gap-4'>
        <LineChart title='Revenue Trend' data={revenueData} dataKey='value' xAxisKey='month' color='#8884d8' />
        <LineChart title='Customer Growth Trend' data={customerData} dataKey='value' xAxisKey='month' color='#82ca9d' />
        <LineChart title='Profit Trend' data={profitData} dataKey='value' xAxisKey='month' color='#ff7300' />
      </div>
    </div>
  );
}
