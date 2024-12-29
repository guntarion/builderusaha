// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/CompanyInfoStep.tsx

import { TeamScalingAssessment } from '../lib/TeamScalingTypes';

interface CompanyInfoStepProps {
  value: TeamScalingAssessment['companyInfo'];
  onChange: (value: TeamScalingAssessment['companyInfo']) => void;
  onNext: () => void;
}

export default function CompanyInfoStep({ value, onChange, onNext }: CompanyInfoStepProps) {
  const updateField = (field: keyof typeof value, newValue: any) => {
    onChange({
      ...value,
      [field]: newValue,
    });
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Informasi Perusahaan</h2>
        <p className='text-gray-600'>Berikan informasi tentang kondisi dan target pertumbuhan perusahaan Anda</p>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Jumlah Tim Saat Ini</label>
          <input
            type='number'
            min={1}
            value={value.currentSize}
            onChange={(e) => updateField('currentSize', parseInt(e.target.value))}
            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
            placeholder='Contoh: 10'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Target Jumlah Tim</label>
          <input
            type='number'
            min={value.currentSize + 1}
            value={value.targetSize}
            onChange={(e) => updateField('targetSize', parseInt(e.target.value))}
            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
            placeholder='Contoh: 25'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Industri</label>
        <input
          type='text'
          value={value.industry}
          onChange={(e) => updateField('industry', e.target.value)}
          className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
          placeholder='Contoh: Teknologi, E-commerce, Fintech'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Tahap Perusahaan</label>
        <select
          value={value.stage}
          onChange={(e) => updateField('stage', e.target.value)}
          className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
        >
          <option value='seed'>Seed Stage</option>
          <option value='early'>Early Stage</option>
          <option value='growth'>Growth Stage</option>
          <option value='expansion'>Expansion Stage</option>
        </select>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Tantangan Utama</label>
        <textarea
          value={value.mainChallenges.join('\n')}
          onChange={(e) => updateField('mainChallenges', e.target.value.split('\n').filter(Boolean))}
          className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32'
          placeholder='Masukkan setiap tantangan dalam baris baru&#10;Contoh:&#10;Kesulitan menemukan talent senior&#10;Proses onboarding belum terstruktur'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Tujuan Bisnis</label>
        <textarea
          value={value.businessGoals.join('\n')}
          onChange={(e) => updateField('businessGoals', e.target.value.split('\n').filter(Boolean))}
          className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32'
          placeholder='Masukkan setiap tujuan dalam baris baru&#10;Contoh:&#10;Ekspansi ke 3 kota baru dalam 6 bulan&#10;Tingkatkan revenue 3x dalam 1 tahun'
        />
      </div>

      <div className='flex justify-end'>
        <button onClick={onNext} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Lanjut
        </button>
      </div>
    </div>
  );
}
