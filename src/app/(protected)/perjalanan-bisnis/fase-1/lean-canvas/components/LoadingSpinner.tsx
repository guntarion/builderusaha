// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/components/LoadingSpinner.tsx

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className='relative'>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className='absolute w-full h-full rounded-full border-4 border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent'></div>
      </div>
    </div>
  );
}
