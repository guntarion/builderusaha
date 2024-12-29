interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

export default function LoadingSpinner({ size = 'md', light = false }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={`inline-block ${
        sizeClasses[size]
      } animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${
        light ? 'text-white' : 'text-blue-600'
      }`}
      role='status'
    >
      <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>Loading...</span>
    </div>
  );
}
