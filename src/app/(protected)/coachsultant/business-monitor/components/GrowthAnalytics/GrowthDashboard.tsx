import { mockBusinessData } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function GrowthDashboard() {
  const growthMetrics = mockBusinessData[0].growthMetrics;

  const data = [
    { name: 'Market Share', value: growthMetrics.marketShare },
    { name: 'Employee Growth', value: growthMetrics.employeeGrowth },
    { name: 'Product Development', value: growthMetrics.productDevelopment },
    { name: 'Customer Satisfaction', value: growthMetrics.customerSatisfaction },
  ];

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h3 className='font-medium'>Market Share</h3>
          <p className='text-2xl font-bold'>{growthMetrics.marketShare}%</p>
        </div>
        <div>
          <h3 className='font-medium'>Employee Growth</h3>
          <p className='text-2xl font-bold'>{growthMetrics.employeeGrowth}%</p>
        </div>
        <div>
          <h3 className='font-medium'>Product Development</h3>
          <p className='text-2xl font-bold'>{growthMetrics.productDevelopment}%</p>
        </div>
        <div>
          <h3 className='font-medium'>Customer Satisfaction</h3>
          <p className='text-2xl font-bold'>{growthMetrics.customerSatisfaction}%</p>
        </div>
      </div>

      <div className='mt-4'>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
        </LineChart>
      </div>
    </div>
  );
}
