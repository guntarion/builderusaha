// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/ComplexityBadge.tsx

import { ComplexityLevel } from '../lib/MVPTypes';

interface ComplexityBadgeProps {
  complexity: ComplexityLevel;
}

export default function ComplexityBadge({ complexity }: ComplexityBadgeProps) {
  const styles = {
    low: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${styles[complexity]}`}>
      {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
    </span>
  );
}
