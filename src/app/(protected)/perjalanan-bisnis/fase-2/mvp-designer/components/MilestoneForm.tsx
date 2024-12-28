// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/MilestoneForm.tsx

import { useState } from 'react';
import { Feature, MVPDesign } from '../lib/MVPTypes';

interface MilestoneFormProps {
  features: Feature[];
  onSubmit: (milestone: MVPDesign['timeline']['majorMilestones'][0]) => void;
  onCancel: () => void;
}

export default function MilestoneForm({ features, onSubmit, onCancel }: MilestoneFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    targetDate: new Date().toISOString().split('T')[0],
    features: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: Date.now().toString(),
      ...formData,
      targetDate: new Date(formData.targetDate),
    });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-md w-full'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Tambah Milestone</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Nama Milestone</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-2 border rounded-lg'
                placeholder='Contoh: MVP Alpha Release'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Target Tanggal</label>
              <input
                type='date'
                value={formData.targetDate}
                onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                className='w-full p-2 border rounded-lg'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Fitur</label>
              <div className='max-h-48 overflow-y-auto border rounded-lg p-2'>
                {features.map((feature) => (
                  <label key={feature.id} className='flex items-center gap-2 p-2 hover:bg-gray-50'>
                    <input
                      type='checkbox'
                      checked={formData.features.includes(feature.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            features: [...formData.features, feature.id],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            features: formData.features.filter((id) => id !== feature.id),
                          });
                        }
                      }}
                    />
                    <span>{feature.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button
                type='submit'
                className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                disabled={formData.features.length === 0}
              >
                Tambah Milestone
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
