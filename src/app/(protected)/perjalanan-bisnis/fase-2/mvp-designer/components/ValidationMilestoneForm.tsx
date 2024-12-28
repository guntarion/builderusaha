// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/ValidationMilestoneForm.tsx

import { useState } from 'react';
import { ValidationMilestone, StatusType } from '../lib/MVPTypes';

interface ValidationMilestoneFormProps {
  milestone?: ValidationMilestone | null;
  onSubmit: (milestone: ValidationMilestone) => void;
  onCancel: () => void;
}

export default function ValidationMilestoneForm({ milestone, onSubmit, onCancel }: ValidationMilestoneFormProps) {
  const [formData, setFormData] = useState<Omit<ValidationMilestone, 'id'>>({
    description: milestone?.description || '',
    successCriteria: milestone?.successCriteria || [''],
    metrics: milestone?.metrics || [''],
    status: milestone?.status || 'pending',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: milestone?.id || Date.now().toString(),
      ...formData,
    });
  };

  const handleArrayFieldChange = (field: 'successCriteria' | 'metrics', index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const handleAddArrayField = (field: 'successCriteria' | 'metrics') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ''],
    });
  };

  const handleRemoveArrayField = (field: 'successCriteria' | 'metrics', index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-2xl w-full'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>{milestone ? 'Edit Validation Milestone' : 'Tambah Validation Milestone'}</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Deskripsi</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full p-2 border rounded-lg h-24'
                placeholder='Jelaskan milestone validasi ini'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Kriteria Sukses</label>
              {formData.successCriteria.map((criteria, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={criteria}
                    onChange={(e) => handleArrayFieldChange('successCriteria', index, e.target.value)}
                    className='flex-1 p-2 border rounded-lg'
                    placeholder='Contoh: 80% pengguna berhasil menyelesaikan onboarding'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => handleRemoveArrayField('successCriteria', index)}
                    className='text-red-600 hover:text-red-700 px-2'
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => handleAddArrayField('successCriteria')}
                className='text-blue-600 hover:text-blue-700 flex items-center gap-2'
              >
                <span>➕</span>
                Tambah Kriteria
              </button>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Metrik</label>
              {formData.metrics.map((metric, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={metric}
                    onChange={(e) => handleArrayFieldChange('metrics', index, e.target.value)}
                    className='flex-1 p-2 border rounded-lg'
                    placeholder='Contoh: Conversion rate, User satisfaction score'
                    required
                  />
                  <button type='button' onClick={() => handleRemoveArrayField('metrics', index)} className='text-red-600 hover:text-red-700 px-2'>
                    ✕
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => handleAddArrayField('metrics')}
                className='text-blue-600 hover:text-blue-700 flex items-center gap-2'
              >
                <span>➕</span>
                Tambah Metrik
              </button>
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {milestone ? 'Simpan Perubahan' : 'Tambah Milestone'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
