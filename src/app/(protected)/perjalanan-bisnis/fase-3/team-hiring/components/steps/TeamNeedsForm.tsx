'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/Button';
import { useFormContext } from '../../context/FormContext';

interface TeamNeedsFormProps {
  onBack: () => void;
}

interface TeamNeedsFormData {
  currentSkills: string[];
  missingSkills: string;
  bottlenecks: string;
  hiringBudget: string;
  shortTermGoals: string;
  mediumTermGoals: string;
  longTermGoals: string;
  successMetrics: string;
}

interface TeamNeedsFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function TeamNeedsForm({ onBack, onSubmit }: TeamNeedsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamNeedsFormData>();

  const { setFormData } = useFormContext();

  const onSubmit: SubmitHandler<TeamNeedsFormData> = (data) => {
    setFormData((prev) => ({
      ...prev,
      teamNeeds: data,
    }));
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Keterampilan Tim Saat Ini</h3>
        <div className='space-y-2'>
          {['Manajemen Proyek', 'Pengembangan Produk', 'Pemasaran Digital', 'Analisis Data', 'Customer Service', 'Keuangan'].map((skill) => (
            <label key={skill} className='flex items-center'>
              <input type='checkbox' value={skill} {...register('currentSkills')} className='mr-2' />
              {skill}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Keterampilan Kritis yang Kurang</label>
        <textarea {...register('missingSkills', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.missingSkills && <p className='text-red-500 text-sm mt-1'>{errors.missingSkills.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Hambatan Saat Ini</label>
        <textarea {...register('bottlenecks', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.bottlenecks && <p className='text-red-500 text-sm mt-1'>{errors.bottlenecks.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Anggaran Perekrutan</label>
        <select {...register('hiringBudget', { required: 'Wajib diisi' })} className='w-full p-2 border rounded'>
          <option value=''>Pilih Anggaran</option>
          <option value='< 50 juta'>&amp;lt; 50 juta</option>
          <option value='50 - 100 juta'>50 - 100 juta</option>
          <option value='100 - 500 juta'>100 - 500 juta</option>
          <option value='> 500 juta'>&amp;gt; 500 juta</option>
        </select>
        {errors.hiringBudget && <p className='text-red-500 text-sm mt-1'>{errors.hiringBudget.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Tujuan 3 Bulan</label>
        <textarea {...register('shortTermGoals', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.shortTermGoals && <p className='text-red-500 text-sm mt-1'>{errors.shortTermGoals.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Tujuan 6 Bulan</label>
        <textarea {...register('mediumTermGoals', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.mediumTermGoals && <p className='text-red-500 text-sm mt-1'>{errors.mediumTermGoals.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Tujuan 12 Bulan</label>
        <textarea {...register('longTermGoals', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.longTermGoals && <p className='text-red-500 text-sm mt-1'>{errors.longTermGoals.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Metrik Keberhasilan</label>
        <textarea {...register('successMetrics', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.successMetrics && <p className='text-red-500 text-sm mt-1'>{errors.successMetrics.message}</p>}
      </div>

      <div className='flex justify-between'>
        <Button type='button' onClick={onBack}>
          Kembali
        </Button>
        <Button type='submit'>Selesai</Button>
      </div>
    </form>
  );
}
