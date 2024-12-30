// src/app/(protected)/coachsultant/client-business/components/Common/MetricCard.tsx
interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
}

export default function MetricCard({ title, value, trend }: MetricCardProps) {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h3 className='text-sm font-medium text-gray-500'>{title}</h3>
      <div className='mt-2'>
        <span className='text-2xl font-bold'>{value}</span>
        <span className='ml-2 text-sm text-green-500'>{trend}</span>
      </div>
    </div>
  );
}
