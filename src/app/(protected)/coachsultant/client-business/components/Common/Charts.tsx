'use client';
// src/app/(protected)/coachsultant/client-business/components/Common/Charts.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, ChartTooltip, Legend);

interface LineChartProps {
  title: string;
  data: { [key: string]: string | number }[];
  dataKey: string;
  xAxisKey: string;
  color: string;
}

interface BarChartProps {
  title: string;
  data: { [key: string]: string | number }[];
  dataKeys: string[];
  xAxisKey: string;
  colors: string[];
}

export function LineChart({ title, data, dataKey, xAxisKey, color }: LineChartProps) {
  const chartData = {
    labels: data.map((item) => item[xAxisKey]),
    datasets: [
      {
        label: dataKey,
        data: data.map((item) => item[dataKey]),
        borderColor: color,
        backgroundColor: color,
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
        display: false,
      },
    },
  };

  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <div className='h-64'>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
}

export function BarChart({ title, data, dataKeys, xAxisKey, colors }: BarChartProps) {
  const chartData = {
    labels: data.map((item) => item[xAxisKey]),
    datasets: dataKeys.map((key, index) => ({
      label: key,
      data: data.map((item) => item[key]),
      backgroundColor: colors[index % colors.length],
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <div className='h-64'>
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
}
