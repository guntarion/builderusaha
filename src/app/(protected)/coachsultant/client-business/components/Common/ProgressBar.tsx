// src/app/(protected)/coachsultant/client-business/components/Common/ProgressBar.tsx
interface ProgressBarProps {
  value: number;
  label: string;
}

export default function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className='h-2 bg-gray-200 rounded-full'>
        <div className='h-full bg-blue-500 rounded-full' style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
