// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/DepartmentForm.tsx

import { useState } from 'react';
import { Department } from '../lib/TeamScalingTypes';

interface DepartmentFormProps {
  department?: Department;
  onSubmit: (department: Omit<Department, 'id'>) => void;
  onCancel: () => void;
}

export default function DepartmentForm({ department, onSubmit, onCancel }: DepartmentFormProps) {
  const [formData, setFormData] = useState({
    name: department?.name || '',
    description: department?.description || '',
    headCount: department?.headCount || 0,
    leads: department?.leads || [],
    members: department?.members || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      leads: formData.leads || [],
      members: formData.members || [],
    });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-md w-full'>
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-4'>{department ? 'Edit Departemen' : 'Tambah Departemen Baru'}</h3>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Nama Departemen</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='Contoh: Engineering, Marketing, Sales'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Deskripsi</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24'
                placeholder='Jelaskan tujuan dan fungsi utama departemen ini'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Target Head Count</label>
              <input
                type='number'
                min={0}
                value={formData.headCount}
                onChange={(e) => setFormData({ ...formData, headCount: parseInt(e.target.value) })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='0'
                required
              />
            </div>

            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
                Batal
              </button>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                {department ? 'Simpan Perubahan' : 'Tambah Departemen'}
              </button>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Leads</label>
              <input
                type='text'
                value={formData.leads.join(', ')}
                onChange={(e) => setFormData({ ...formData, leads: e.target.value.split(',').map((lead) => lead.trim()) })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='Masukkan nama leads, pisahkan dengan koma'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Members</label>
              <input
                type='text'
                value={formData.members.join(', ')}
                onChange={(e) => setFormData({ ...formData, members: e.target.value.split(',').map((member) => member.trim()) })}
                className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                placeholder='Masukkan nama anggota, pisahkan dengan koma'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
