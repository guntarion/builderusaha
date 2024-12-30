// src/app/(protected)/coachsultant/client-business/components/Analytics/ComparisonTools.tsx
import { BarChart } from '../Common/Charts';

interface ComparisonToolsProps {
  comparisonData: {
    name: string;
    revenue: number;
    profit: number;
    customers: number;
  }[];
}

export function ComparisonTools({ comparisonData }: ComparisonToolsProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Business Comparison</h2>
      <div className='grid grid-cols-1 gap-4'>
        <BarChart title='Revenue Comparison' data={comparisonData} dataKeys={['revenue']} xAxisKey='name' colors={['#8884d8']} />
        <BarChart title='Profit Comparison' data={comparisonData} dataKeys={['profit']} xAxisKey='name' colors={['#82ca9d']} />
        <BarChart title='Customer Comparison' data={comparisonData} dataKeys={['customers']} xAxisKey='name' colors={['#ff7300']} />
      </div>
    </div>
  );
}
