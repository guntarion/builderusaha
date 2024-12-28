// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/RiskForm.tsx

import { useState } from 'react';
import { Risk, RiskLevel } from '../lib/MVPTypes';

interface RiskFormProps {
  risk?: Risk | null;
  onSubmit: (risk: Risk) => void;
  onCancel: () => void;
}

export default function RiskForm({ risk, onSubmit, onCancel }: RiskFormProps) {
  const [formData, setFormData] = useState<Omit<Risk, 'id'>>({
    description: risk?.description || '',
    impact: risk?.impact || 'medium',
    probability: risk?.probability || 'medium',
    mitigationStrategy: risk?.mitigationStrategy || '',
    contingencyPlan: risk?.contingencyPlan || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: risk?.id || Date.now().toString(),
      ...formData,
    });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-2xl w-full'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>{risk ? 'Edit Risiko' : 'Tambah Risiko Baru'}</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Deskripsi Risiko</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full p-2 border rounded-lg h-24'
                placeholder='Jelaskan risiko yang diidentifikasi'
                required
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>Impact</label>
                <select
                  value={formData.impact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      impact: e.target.value as RiskLevel,
                    })
                  }
                  className='w-full p-2 border rounded-lg'
                  required
                >
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>Probability</label>
                <select
                  value={formData.probability}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      probability: e.target.value as RiskLevel,
                    })
                  }
                  className='w-full p-2 border rounded-lg'
                  required
                >
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                </select>
              </div>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Strategi Mitigasi</label>
              <textarea
                value={formData.mitigationStrategy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mitigationStrategy: e.target.value,
                  })
                }
                className='w-full p-2 border rounded-lg h-24'
                placeholder='Jelaskan strategi untuk meminimalisir risiko'
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-2'>Rencana Kontingensi</label>
              <textarea
                value={formData.contingencyPlan}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contingencyPlan: e.target.value,
                  })
                }
                className='w-full p-2 border rounded-lg h-24'
                placeholder='Rencana cadangan jika risiko terjadi'
                required
              />
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {risk ? 'Simpan Perubahan' : 'Tambah Risiko'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
