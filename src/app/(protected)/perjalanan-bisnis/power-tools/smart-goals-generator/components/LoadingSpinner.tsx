// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/components/LoadingSpinner.tsx

export default function LoadingSpinner({ size = 'md', light = false }: { size?: 'sm' | 'md' | 'lg'; light?: boolean }) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className='relative flex items-center justify-center'>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div
          className={`absolute w-full h-full rounded-full border-4 
            ${
              light
                ? 'border-t-white border-r-transparent border-b-white border-l-transparent'
                : 'border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent'
            }
          `}
        />
      </div>
    </div>
  );
}
