// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/ValidationSection.tsx

import { useState } from 'react';
import { ValidationMilestone, StatusType } from '../lib/MVPTypes';
import ValidationMilestoneForm from './ValidationMilestoneForm';

interface ValidationSectionProps {
  validationMilestones: ValidationMilestone[];
  onChange: (milestones: ValidationMilestone[]) => void;
}

export default function ValidationSection({ validationMilestones, onChange }: ValidationSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState<ValidationMilestone | null>(null);

  // Group milestones by status
  const groupedMilestones = validationMilestones.reduce((acc, milestone) => {
    if (!acc[milestone.status]) {
      acc[milestone.status] = [];
    }
    acc[milestone.status].push(milestone);
    return acc;
  }, {} as Record<StatusType, ValidationMilestone[]>);

  const handleMilestoneAdd = (milestone: ValidationMilestone) => {
    onChange([...validationMilestones, { ...milestone, id: Date.now().toString() }]);
    setShowForm(false);
  };

  const handleMilestoneEdit = (milestone: ValidationMilestone) => {
    onChange(validationMilestones.map((m) => (m.id === milestone.id ? milestone : m)));
    setEditingMilestone(null);
  };

  const handleMilestoneDelete = (milestoneId: string) => {
    onChange(validationMilestones.filter((m) => m.id !== milestoneId));
  };

  const handleStatusChange = (milestoneId: string, newStatus: StatusType) => {
    onChange(validationMilestones.map((m) => (m.id === milestoneId ? { ...m, status: newStatus } : m)));
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='text-xl font-semibold'>Validation Plan</h2>
          <p className='text-gray-600'>Tentukan dan monitor milestone validasi MVP Anda</p>
        </div>
        <button onClick={() => setShowForm(true)} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
          <span className='flex items-center gap-2'>
            <span>➕</span>
            Tambah Validation Milestone
          </span>
        </button>
      </div>

      {/* Validation Progress Overview */}
      <div className='grid grid-cols-4 gap-4'>
        {[
          { status: 'pending', label: 'Pending', color: 'gray' },
          { status: 'inProgress', label: 'In Progress', color: 'yellow' },
          { status: 'completed', label: 'Completed', color: 'green' },
          { status: 'blocked', label: 'Blocked', color: 'red' },
        ].map(({ status, label, color }) => (
          <div key={status} className={`p-4 rounded-lg border bg-${color}-50 border-${color}-200`}>
            <h3 className={`text-${color}-700 font-medium`}>{label}</h3>
            <p className='text-2xl font-bold mt-1'>{groupedMilestones[status as StatusType]?.length || 0}</p>
          </div>
        ))}
      </div>

      {/* Validation Milestones List */}
      <div className='space-y-4'>
        {validationMilestones.length === 0 ? (
          <div className='text-center py-8 text-gray-500'>Belum ada milestone validasi yang ditambahkan</div>
        ) : (
          validationMilestones.map((milestone) => (
            <div key={milestone.id} className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium'>{milestone.description}</h3>
                  <div className='flex items-center gap-4 mt-2'>
                    <select
                      value={milestone.status}
                      onChange={(e) => handleStatusChange(milestone.id, e.target.value as StatusType)}
                      className='text-sm border rounded-lg px-2 py-1'
                    >
                      <option value='pending'>Pending</option>
                      <option value='inProgress'>In Progress</option>
                      <option value='completed'>Completed</option>
                      <option value='blocked'>Blocked</option>
                    </select>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <button onClick={() => setEditingMilestone(milestone)} className='text-blue-600 hover:text-blue-700'>
                    Edit
                  </button>
                  <button onClick={() => handleMilestoneDelete(milestone.id)} className='text-red-600 hover:text-red-700'>
                    Hapus
                  </button>
                </div>
              </div>

              <div className='mt-4 space-y-3'>
                <div>
                  <h4 className='text-sm font-medium text-gray-700'>Kriteria Sukses:</h4>
                  <ul className='mt-2 space-y-1'>
                    {milestone.successCriteria.map((criteria, index) => (
                      <li key={index} className='text-gray-600 flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='text-sm font-medium text-gray-700'>Metrik:</h4>
                  <ul className='mt-2 space-y-1'>
                    {milestone.metrics.map((metric, index) => (
                      <li key={index} className='text-gray-600 flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Validation Milestone Form Modal */}
      {(showForm || editingMilestone) && (
        <ValidationMilestoneForm
          milestone={editingMilestone}
          onSubmit={editingMilestone ? handleMilestoneEdit : handleMilestoneAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingMilestone(null);
          }}
        />
      )}

      {/* Tips Section */}
      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <h3 className='text-blue-800 font-medium'>💡 Tips Validation Plan</h3>
        <ul className='mt-2 space-y-2 text-blue-700'>
          <li>• Fokus pada validasi asumsi kritis bisnis</li>
          <li>• Gunakan metrik kuantitatif dan kualitatif</li>
          <li>• Mulai dengan validasi skala kecil</li>
          <li>• Dokumentasikan feedback dan pembelajaran</li>
        </ul>
      </div>
    </div>
  );
}
