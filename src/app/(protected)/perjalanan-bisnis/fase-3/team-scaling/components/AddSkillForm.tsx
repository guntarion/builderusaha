// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/AddSkillForm.tsx

import { useState } from 'react';
import { Skill, PriorityLevel } from '../lib/TeamScalingTypes';

interface AddSkillFormProps {
  skill?: Skill;
  categories: string[];
  onSubmit: (skill: Omit<Skill, 'id'>) => void;
  onCancel: () => void;
}

export default function AddSkillForm({ skill, categories, onSubmit, onCancel }: AddSkillFormProps) {
  const [formData, setFormData] = useState({
    name: skill?.name || '',
    category: skill?.category || '',
    description: skill?.description || '',
    priority: skill?.priority || ('medium' as PriorityLevel),
    requiredCount: skill?.requiredCount || 1,
    currentTeamCount: skill?.currentTeamCount || 0,
  });

  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-md w-full'>
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-4'>{skill ? 'Edit Skill' : 'Add New Skill'}</h3>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Skill Name</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='e.g., React.js, Project Management'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
              <div className='flex gap-2'>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className='flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                  required
                >
                  <option value=''>Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                  <option value='new'>+ Add new category</option>
                </select>
              </div>
            </div>

            {formData.category === 'new' && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>New Category</label>
                <input
                  type='text'
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter new category name'
                  required
                />
              </div>
            )}

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24'
                placeholder='Brief description of the skill'
                required
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Required Count</label>
                <input
                  type='number'
                  min={1}
                  value={formData.requiredCount}
                  onChange={(e) => setFormData({ ...formData, requiredCount: parseInt(e.target.value) })}
                  className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value as PriorityLevel })}
                  className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                  required
                >
                  <option value='critical'>Critical</option>
                  <option value='high'>High</option>
                  <option value='medium'>Medium</option>
                  <option value='low'>Low</option>
                </select>
              </div>
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Cancel
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {skill ? 'Save Changes' : 'Add Skill'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
