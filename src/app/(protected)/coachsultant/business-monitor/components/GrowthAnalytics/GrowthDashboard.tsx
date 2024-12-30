import { mockBusinessData } from '../../data/mockData';

export function GrowthDashboard() {
  const growthMetrics = mockBusinessData[0].growthMetrics;

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

      <div className='mt-4 h-64 flex items-center justify-center bg-white rounded-lg shadow p-4'>
        <p className='text-gray-500'>Chart functionality is currently unavailable</p>
      </div>
    </div>
  );
}
