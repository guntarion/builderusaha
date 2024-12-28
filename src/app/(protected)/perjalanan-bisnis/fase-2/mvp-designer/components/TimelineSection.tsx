// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/TimelineSection.tsx

import { useState } from 'react';
import { Feature, MVPDesign } from '../lib/MVPTypes';
import { sortFeaturesByPriority } from '../lib/mvpValidation';
import TimelineMilestone from './TimelineMilestone';
import MilestoneForm from './MilestoneForm';

interface TimelineSectionProps {
  timeline: MVPDesign['timeline'];
  features: Feature[];
  onChange: (timeline: MVPDesign['timeline']) => void;
}

export default function TimelineSection({ timeline, features, onChange }: TimelineSectionProps) {
  const [showMilestoneForm, setShowMilestoneForm] = useState(false);

  const prioritizedFeatures = sortFeaturesByPriority(features);
  const totalEffort = features.reduce((sum, f) => sum + f.estimatedEffort, 0);
  const estimatedWeeks = Math.ceil(totalEffort / 5); // Assuming 5 working days per week

  const handleDurationChange = (weeks: number) => {
    onChange({
      ...timeline,
      estimatedDuration: weeks,
    });
  };

  const handleAddMilestone = (milestone: MVPDesign['timeline']['majorMilestones'][0]) => {
    onChange({
      ...timeline,
      majorMilestones: [...timeline.majorMilestones, milestone],
    });
    setShowMilestoneForm(false);
  };

  const handleDeleteMilestone = (milestoneId: string) => {
    onChange({
      ...timeline,
      majorMilestones: timeline.majorMilestones.filter((m) => m.id !== milestoneId),
    });
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='text-xl font-semibold'>Timeline Pengembangan</h2>
          <p className='text-gray-600'>Rencanakan timeline dan milestone pengembangan MVP Anda</p>
        </div>
        <button onClick={() => setShowMilestoneForm(true)} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
          <span className='flex items-center gap-2'>
            <span>➕</span>
            Tambah Milestone
          </span>
        </button>
      </div>

      {/* Duration Estimator */}
      <div className='bg-white p-6 rounded-lg border'>
        <h3 className='font-medium mb-4'>Estimasi Durasi</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-gray-600 mb-2'>Total Effort</p>
            <p className='text-2xl font-semibold'>{totalEffort} hari</p>
          </div>
          <div>
            <p className='text-gray-600 mb-2'>Estimasi Durasi</p>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                min={1}
                value={timeline.estimatedDuration || estimatedWeeks}
                onChange={(e) => handleDurationChange(parseInt(e.target.value))}
                className='w-20 p-2 border rounded-lg'
              />
              <span>minggu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className='relative'>
        <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200' />

        {timeline.majorMilestones.map((milestone, index) => (
          <div key={milestone.id} className='relative pl-8 py-4'>
            <div className='absolute left-2 top-6 w-4 h-4 rounded-full bg-blue-600' />
            <TimelineMilestone
              milestone={milestone}
              features={features}
              onDelete={() => handleDeleteMilestone(milestone.id)}
              onChange={(updated) => {
                const newMilestones = [...timeline.majorMilestones];
                newMilestones[index] = updated;
                onChange({
                  ...timeline,
                  majorMilestones: newMilestones,
                });
              }}
            />
          </div>
        ))}

        {timeline.majorMilestones.length === 0 && <div className='text-center py-8 text-gray-500'>Belum ada milestone yang ditambahkan</div>}
      </div>

      {/* Milestone Form Modal */}
      {showMilestoneForm && (
        <MilestoneForm
          features={features.filter((f) => !timeline.majorMilestones.some((m) => m.features.includes(f.id)))}
          onSubmit={handleAddMilestone}
          onCancel={() => setShowMilestoneForm(false)}
        />
      )}

      {/* Tips Section */}
      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <h3 className='text-blue-800 font-medium'>💡 Tips Timeline</h3>
        <ul className='mt-2 space-y-2 text-blue-700'>
          <li>• Bagi pengembangan dalam milestone 2-4 minggu</li>
          <li>• Prioritaskan fitur &quot;Must Have&quot; di milestone awal</li>
          <li>• Sertakan waktu untuk testing di setiap milestone</li>
          <li>• Pertimbangkan dependencies antar fitur</li>
        </ul>
      </div>
    </div>
  );
}
