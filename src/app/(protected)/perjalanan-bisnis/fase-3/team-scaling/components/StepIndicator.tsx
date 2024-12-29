// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/StepIndicator.tsx

interface StepIndicatorProps {
  currentStep: number;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center'>
        <div className='h-0.5 w-full bg-gray-200'></div>
      </div>
      <div className='relative flex justify-between'>
        {steps.map((step, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 relative z-10
                ${
                  index < currentStep
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : index === currentStep
                    ? 'border-blue-600 bg-white text-blue-600'
                    : 'border-gray-300 bg-white text-gray-500'
                }`}
            >
              {index < currentStep ? <CheckIcon className='h-5 w-5' /> : <span>{index + 1}</span>}
            </div>
            <div className='mt-2 text-center'>
              <p className='text-sm font-medium'>{step.title}</p>
              <p className='text-xs text-gray-500'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
    </svg>
  );
}
