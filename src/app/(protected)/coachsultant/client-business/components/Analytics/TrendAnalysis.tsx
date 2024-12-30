// src/app/(protected)/coachsultant/client-business/components/Analytics/TrendAnalysis.tsx
import { LineChart } from '../Common/Charts';

export function TrendAnalysis() {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Trend Analysis</h2>
      <div className='grid grid-cols-1 gap-4'>
        <LineChart title='Revenue Trend' />
        <LineChart title='Customer Growth Trend' />
        <LineChart title='Profit Trend' />
      </div>
    </div>
  );
}
