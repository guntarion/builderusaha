// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/TimelineMilestone.tsx

import { Feature, MVPDesign } from '../lib/MVPTypes';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface TimelineMilestoneProps {
  milestone: MVPDesign['timeline']['majorMilestones'][0];
  features: Feature[];
  onDelete: () => void;
  onChange: (milestone: MVPDesign['timeline']['majorMilestones'][0]) => void;
}

export default function TimelineMilestone({ milestone, features, onDelete, onChange }: TimelineMilestoneProps) {
  const selectedFeatures = features.filter((f) => milestone.features.includes(f.id));
  const totalEffort = selectedFeatures.reduce((sum, f) => sum + f.estimatedEffort, 0);

  return (
    <div className='bg-white p-4 rounded-lg border hover:shadow-sm transition-shadow'>
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='font-medium'>{milestone.name}</h3>
          <p className='text-gray-600 text-sm'>{format(new Date(milestone.targetDate), 'd MMMM yyyy', { locale: id })}</p>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-gray-600 text-sm'>{totalEffort} hari</span>
          <button onClick={onDelete} className='text-red-600 hover:text-red-700'>
            ✕
          </button>
        </div>
      </div>

      <div className='space-y-2'>
        <h4 className='text-sm font-medium text-gray-700'>Fitur:</h4>
        {selectedFeatures.map((feature) => (
          <div key={feature.id} className='flex items-center gap-2 text-sm text-gray-600'>
            <span className='text-blue-500'>•</span>
            <span>{feature.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
