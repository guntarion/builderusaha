// src/app/(protected)/perjalanan-bisnis/fase-3/team-hiring/components/steps/TeamNeedsForm.tsx
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/Button';
import { useFormContext } from '../../context/FormContext';
import LoadingSpinner from '../LoadingSpinner';

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

export function TeamNeedsForm({ onBack, onSubmit: handleFormSubmit }: TeamNeedsFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamNeedsFormData>({
    defaultValues: {
      currentSkills: ['Manajemen Proyek', 'Pengembangan Produk', 'Customer Service'],
      missingSkills: 'Kami membutuhkan keahlian dalam analisis data dan machine learning untuk meningkatkan kemampuan prediktif produk kami.',
      bottlenecks: 'Proses rekrutmen yang lambat dan kurangnya kandidat berkualitas di bidang teknologi menjadi hambatan utama kami.',
      hiringBudget: '100 - 500 juta',
      shortTermGoals: 'Merekrut 2 data scientist dan 1 product manager dalam 3 bulan ke depan.',
      mediumTermGoals: 'Membangtim tim R&D yang solid dan meluncurkan fitur AI pertama kami dalam 6 bulan.',
      longTermGoals: 'Menjadi pemimpin pasar dalam solusi berbasis AI di industri kami dalam 12 bulan.',
      successMetrics:
        'Meningkatkan retensi pelanggan sebesar 20%, mengurangi waktu pengembangan produk sebesar 30%, dan mencapai 1 juta pengguna aktif bulanan.',
    },
  });

  const { setFormData } = useFormContext();

  const onSubmit: SubmitHandler<TeamNeedsFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      setFormData((prev) => ({
        ...prev,
        teamNeeds: data,
      }));
      await handleFormSubmit();
    } finally {
      setIsSubmitting(false);
    }
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
        {isSubmitting ? (
          <LoadingSpinner />
        ) : (
          <Button type='submit' disabled={isSubmitting}>
            Selesai
          </Button>
        )}
      </div>
    </form>
  );
}
