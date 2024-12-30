// src/app/(protected)/coachsultant/client-business/components/Common/Charts.tsx
interface LineChartProps {
  title: string;
}

interface BarChartProps {
  title: string;
  data: { [key: string]: string | number }[];
  dataKeys: string[];
  xAxisKey: string;
  colors: string[];
}

export function LineChart({ title }: LineChartProps) {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <div className='h-64 flex items-center justify-center'>
        <p className='text-gray-500'>Chart functionality is currently unavailable</p>
      </div>
    </div>
  );
}

export function BarChart({ title }: BarChartProps) {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <div className='h-64 flex items-center justify-center'>
        <p className='text-gray-500'>Chart functionality is currently unavailable</p>
      </div>
    </div>
  );
}
