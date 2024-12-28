// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/PriorityBadge.tsx

import { PriorityLevel } from '../lib/MVPTypes';

interface PriorityBadgeProps {
  priority: PriorityLevel;
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const styles = {
    must: 'bg-red-100 text-red-700',
    should: 'bg-yellow-100 text-yellow-700',
    could: 'bg-green-100 text-green-700',
    wont: 'bg-gray-100 text-gray-700',
  };

  const labels = {
    must: 'Must Have',
    should: 'Should Have',
    could: 'Could Have',
    wont: "Won't Have",
  };

  return <span className={`px-2 py-1 rounded-full text-sm font-medium ${styles[priority]}`}>{labels[priority]}</span>;
}
