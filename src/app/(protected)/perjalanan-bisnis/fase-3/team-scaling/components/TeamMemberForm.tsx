// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/TeamMemberForm.tsx

import { useState } from 'react';
import { TeamMember, Department, SeniorityLevel } from '../lib/TeamScalingTypes';

interface TeamMemberFormProps {
  member?: TeamMember;
  departments: Department[];
  onSubmit: (member: Omit<TeamMember, 'id'>) => void;
  onCancel: () => void;
}

export default function TeamMemberForm({ member, departments, onSubmit, onCancel }: TeamMemberFormProps) {
  const [formData, setFormData] = useState({
    name: member?.name || '',
    role: member?.role || '',
    department: member?.department || departments[0]?.name || '',
    skills: member?.skills || [],
    seniorityLevel: member?.seniorityLevel || ('mid_level' as SeniorityLevel),
    startDate: member?.startDate.toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
  });

  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      startDate: new Date(formData.startDate),
    });
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-md w-full'>
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-4'>{member ? 'Edit Anggota Tim' : 'Tambah Anggota Tim'}</h3>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Nama</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='Nama lengkap'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Departemen</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                required
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Jabatan</label>
              <input
                type='text'
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='Contoh: Software Engineer, Product Manager'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Level</label>
              <select
                value={formData.seniorityLevel}
                onChange={(e) => setFormData({ ...formData, seniorityLevel: e.target.value as SeniorityLevel })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                required
              >
                <option value='junior'>Junior</option>
                <option value='mid_level'>Mid Level</option>
                <option value='senior'>Senior</option>
                <option value='lead'>Lead</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Tanggal Bergabung</label>
              <input
                type='date'
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Skills</label>
              <div className='flex gap-2 mb-2'>
                <input
                  type='text'
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className='flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                  placeholder='Tambah skill baru'
                />
                <button type='button' onClick={addSkill} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                  Tambah
                </button>
              </div>
              <div className='flex flex-wrap gap-2 mt-2'>
                {formData.skills.map((skill) => (
                  <span key={skill} className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center gap-1'>
                    {skill}
                    <button type='button' onClick={() => removeSkill(skill)} className='text-blue-600 hover:text-blue-800'>
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {member ? 'Simpan Perubahan' : 'Tambah Anggota'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
