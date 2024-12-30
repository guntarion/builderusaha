// src/app/(protected)/coachsultant/client-business/components/Common/MetricDisplay.tsx
interface MetricDisplayProps {
  label: string;
  value?: number | string;
}

export default function MetricDisplay({ label, value }: MetricDisplayProps) {
  return (
    <div className='space-y-1'>
      <div className='text-sm text-gray-500'>{label}</div>
      <div className='font-medium'>{value ?? '-'}</div>
    </div>
  );
}
