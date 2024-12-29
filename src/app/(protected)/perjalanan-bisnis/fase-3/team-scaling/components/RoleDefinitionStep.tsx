// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/RoleDefinitionStep.tsx

import { useState } from 'react';
import { RoleDefinition, PriorityLevel } from '../lib/TeamScalingTypes';
import { useRoleDefinition } from '../hooks/useRoleDefinition';

interface RoleDefinitionStepProps {
  roles: RoleDefinition[];
  departments: string[];
  onChange: (roles: RoleDefinition[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function RoleDefinitionStep({ roles, departments, onChange, onNext, onBack }: RoleDefinitionStepProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingRole, setEditingRole] = useState<RoleDefinition | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<PriorityLevel | 'all'>('all');
  const { generateRole, isGenerating } = useRoleDefinition();

  const filteredRoles = selectedPriority === 'all' ? roles : roles.filter((role) => role.priority === selectedPriority);

  const handleRoleGenerate = async (roleData: Partial<RoleDefinition>) => {
    const generatedRole = await generateRole({
      ...roleData,
      id: Date.now().toString(),
      priority: roleData.priority || 'medium',
      timeline: roleData.timeline || 'short_term',
    });

    if (generatedRole) {
      onChange([...roles, generatedRole]);
    }
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Definisi Peran</h2>
        <p className='text-gray-600'>Tentukan peran-peran baru yang dibutuhkan untuk mendukung pertumbuhan tim</p>
      </div>

      {/* Priority Filter */}
      <div className='flex gap-2'>
        {[
          { value: 'all', label: 'Semua', icon: '📋' },
          { value: 'critical', label: 'Critical', icon: '🔥' },
          { value: 'high', label: 'High', icon: '⭐' },
          { value: 'medium', label: 'Medium', icon: '📈' },
          { value: 'low', label: 'Low', icon: '📋' },
        ].map((priority) => (
          <button
            key={priority.value}
            onClick={() => setSelectedPriority(priority.value as PriorityLevel | 'all')}
            className={`
              px-4 py-2 rounded-lg flex items-center gap-2
              ${selectedPriority === priority.value ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <span>{priority.icon}</span>
            <span>{priority.label}</span>
          </button>
        ))}
      </div>

      {/* Quick Add Form */}
      <div className='bg-gray-50 p-4 rounded-lg'>
        <h3 className='text-sm font-medium text-gray-700 mb-3'>Quick Add Role</h3>
        <div className='flex gap-4'>
          <input type='text' placeholder='Judul peran' className='flex-1 p-2 border rounded-lg' />
          <select className='p-2 border rounded-lg'>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <button onClick={() => setShowForm(true)} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
            Generate Role
          </button>
        </div>
      </div>

      {/* Roles List */}
      <div className='grid grid-cols-2 gap-4'>
        {filteredRoles.map((role) => (
          <div key={role.id} className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
            <div className='flex justify-between items-start'>
              <div>
                <h4 className='font-medium'>{role.title}</h4>
                <p className='text-sm text-gray-600'>{role.department}</p>
              </div>
              <div className='flex gap-2'>
                <button onClick={() => setEditingRole(role)} className='text-blue-600 hover:text-blue-700'>
                  Edit
                </button>
                <button
                  onClick={() => {
                    onChange(roles.filter((r) => r.id !== role.id));
                  }}
                  className='text-red-600 hover:text-red-700'
                >
                  Delete
                </button>
              </div>
            </div>

            <div className='mt-4 space-y-2'>
              <div>
                <p className='text-xs text-gray-500'>Responsibilities</p>
                <ul className='mt-1 space-y-1'>
                  {role.responsibilities.map((resp, index) => (
                    <li key={index} className='text-sm flex items-start gap-2'>
                      <span className='text-blue-500'>•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className='text-xs text-gray-500'>Required Skills</p>
                <div className='mt-1 flex flex-wrap gap-1'>
                  {role.requiredSkills.map((skill) => (
                    <span key={skill} className='bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {role.preferredSkills && role.preferredSkills.length > 0 && (
                <div>
                  <p className='text-xs text-gray-500'>Preferred Skills</p>
                  <div className='mt-1 flex flex-wrap gap-1'>
                    {role.preferredSkills.map((skill) => (
                      <span key={skill} className='bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='mt-4 flex items-center gap-4'>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium
                ${
                  role.priority === 'critical'
                    ? 'bg-red-100 text-red-800'
                    : role.priority === 'high'
                    ? 'bg-orange-100 text-orange-800'
                    : role.priority === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {role.priority.charAt(0).toUpperCase() + role.priority.slice(1)}
              </span>
              <span className='text-sm text-gray-600'>
                {role.experience.yearsRequired}+ years • {role.experience.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className='flex justify-between pt-6'>
        <button onClick={onBack} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
          Back
        </button>
        <button onClick={onNext} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Next
        </button>
      </div>
    </div>
  );
}
