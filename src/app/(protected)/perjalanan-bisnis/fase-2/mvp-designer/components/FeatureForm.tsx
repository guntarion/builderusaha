// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/FeatureForm.tsx

import { useState } from 'react';
import { Feature, PriorityLevel, ComplexityLevel } from '../lib/MVPTypes';
import { validateFeature } from '../lib/mvpValidation';

interface FeatureFormProps {
  feature?: Feature | null;
  onSubmit: (feature: Feature) => void;
  onCancel: () => void;
}

export default function FeatureForm({ feature, onSubmit, onCancel }: FeatureFormProps) {
  const [formData, setFormData] = useState<Omit<Feature, 'id'>>({
    name: feature?.name || '',
    description: feature?.description || '',
    priority: feature?.priority || 'should',
    complexity: feature?.complexity || 'medium',
    estimatedEffort: feature?.estimatedEffort || 1,
    validationCriteria: feature?.validationCriteria || [''],
    dependencies: feature?.dependencies || [],
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFeature({
      id: feature?.id || '',
      ...formData,
    });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      id: feature?.id || Date.now().toString(),
      ...formData,
    });
  };

  const handleCriteriaChange = (index: number, value: string) => {
    const newCriteria = [...formData.validationCriteria];
    newCriteria[index] = value;
    setFormData({ ...formData, validationCriteria: newCriteria });
  };

  const addCriteria = () => {
    setFormData({
      ...formData,
      validationCriteria: [...formData.validationCriteria, ''],
    });
  };

  const removeCriteria = (index: number) => {
    const newCriteria = formData.validationCriteria.filter((_, i) => i !== index);
    setFormData({ ...formData, validationCriteria: newCriteria });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>{feature ? 'Edit Fitur' : 'Tambah Fitur Baru'}</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Nama Fitur</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-2 border rounded-lg'
                placeholder='Contoh: User Authentication'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Deskripsi</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full p-2 border rounded-lg h-24'
                placeholder='Jelaskan detail fitur ini'
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>Prioritas</label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority: e.target.value as PriorityLevel,
                    })
                  }
                  className='w-full p-2 border rounded-lg'
                >
                  <option value='must'>Must Have</option>
                  <option value='should'>Should Have</option>
                  <option value='could'>Could Have</option>
                  <option value='wont'>Won&apos;t Have</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>Kompleksitas</label>
                <select
                  value={formData.complexity}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      complexity: e.target.value as ComplexityLevel,
                    })
                  }
                  className='w-full p-2 border rounded-lg'
                >
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                </select>
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Estimasi Waktu (hari)</label>
              <input
                type='number'
                min='0.5'
                step='0.5'
                value={formData.estimatedEffort}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimatedEffort: parseFloat(e.target.value),
                  })
                }
                className='w-full p-2 border rounded-lg'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Kriteria Validasi</label>
              {formData.validationCriteria.map((criteria, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={criteria}
                    onChange={(e) => handleCriteriaChange(index, e.target.value)}
                    className='flex-1 p-2 border rounded-lg'
                    placeholder='Contoh: User dapat login dengan email'
                  />
                  <button // src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/FeatureForm.tsx (continued)
                    type='button'
                    onClick={() => removeCriteria(index)}
                    className='text-red-600 hover:text-red-700 px-2'
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button type='button' onClick={addCriteria} className='text-blue-600 hover:text-blue-700 flex items-center gap-2'>
                <span>➕</span>
                Tambah Kriteria
              </button>
            </div>

            {errors.length > 0 && (
              <div className='bg-red-50 text-red-700 p-4 rounded-lg'>
                <ul className='list-disc list-inside'>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {feature ? 'Simpan Perubahan' : 'Tambah Fitur'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
