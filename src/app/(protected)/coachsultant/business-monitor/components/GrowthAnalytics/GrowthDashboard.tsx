'use client';
import { mockBusinessData } from '../../data/mockData';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function GrowthDashboard() {
  const growthMetrics = mockBusinessData[0].growthMetrics;
  const historicalData = mockBusinessData[0].historicalGrowth;

  const chartData = {
    labels: historicalData.map((data) => data.quarter),
    datasets: [
      {
        label: 'Market Share',
        data: historicalData.map((data) => data.marketShare),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Employee Growth',
        data: historicalData.map((data) => data.employeeGrowth),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Product Development',
        data: historicalData.map((data) => data.productDevelopment),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Customer Satisfaction',
        data: historicalData.map((data) => data.customerSatisfaction),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Growth Metrics Over Time',
      },
    },
  };

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

      <div className='mt-4 h-64 bg-white rounded-lg shadow p-4'>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
}
