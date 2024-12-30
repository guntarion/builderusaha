'use client';

import { mockBusinessData } from '../../data/mockData';

export function KPIDashboard() {
  const data = mockBusinessData[0].kpiMetrics;

  return (
    <div className='space-y-4'>
      {/* Revenue Metrics */}
      <div className='p-4 border rounded-lg'>
        <h3 className='font-medium mb-2'>Revenue</h3>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <p className='text-sm text-gray-600'>Current</p>
            <p className='text-xl font-bold'>${data.revenue.current.toLocaleString()}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Target</p>
            <p className='text-xl font-bold'>${data.revenue.target.toLocaleString()}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Growth</p>
            <p className='text-xl font-bold text-green-500'>+{data.revenue.growth}%</p>
          </div>
        </div>
      </div>

      {/* Customer Metrics */}
      <div className='p-4 border rounded-lg'>
        <h3 className='font-medium mb-2'>Customers</h3>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <p className='text-sm text-gray-600'>Active</p>
            <p className='text-xl font-bold'>{data.customers.active}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Churn Rate</p>
            <p className='text-xl font-bold text-red-500'>{data.customers.churnRate}%</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Acquisition</p>
            <p className='text-xl font-bold text-green-500'>{data.customers.acquisitionRate}%</p>
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className='mt-4'>{/* Add your charts here using Recharts or your preferred charting library */}</div>
    </div>
  );
}
