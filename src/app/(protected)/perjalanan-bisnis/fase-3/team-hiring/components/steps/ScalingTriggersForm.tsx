'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/Button';
import { useFormContext } from '../../context/FormContext';

interface ScalingTriggersFormProps {
  onNext: () => void;
  onBack: () => void;
}

interface ScalingTriggersFormData {
  painPoints: string;
  urgentTasks: string;
  customerFeedback: string;
  missedOpportunities: string;
}

export function ScalingTriggersForm({ onNext, onBack }: ScalingTriggersFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScalingTriggersFormData>();

  const { setFormData } = useFormContext();

  const onSubmit: SubmitHandler<ScalingTriggersFormData> = (data) => {
    setFormData((prev) => ({
      ...prev,
      scalingTriggers: data,
    }));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-1'>Masalah Utama Tim Saat Ini</label>
        <textarea {...register('painPoints', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.painPoints && <p className='text-red-500 text-sm mt-1'>{errors.painPoints.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Tugas Mendesak yang Belum Tertangani</label>
        <textarea {...register('urgentTasks', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.urgentTasks && <p className='text-red-500 text-sm mt-1'>{errors.urgentTasks.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Keluhan/Feedback Pelanggan</label>
        <textarea {...register('customerFeedback', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.customerFeedback && <p className='text-red-500 text-sm mt-1'>{errors.customerFeedback.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Peluang Pertumbuhan yang Terlewat</label>
        <textarea {...register('missedOpportunities', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
        {errors.missedOpportunities && <p className='text-red-500 text-sm mt-1'>{errors.missedOpportunities.message}</p>}
      </div>

      <div className='flex justify-between'>
        <Button type='button' onClick={onBack}>
          Kembali
        </Button>
        <Button type='submit'>Selanjutnya</Button>
      </div>
    </form>
  );
}
