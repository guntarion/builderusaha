'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/Button';
import { useFormContext } from '../../context/FormContext';

interface ChallengesFormProps {
  onNext: () => void;
  onBack: () => void;
}

interface ChallengesFormData {
  challenges: string[];
  otherChallenge?: string;
  goals: string[];
  otherGoal?: string;
}

export function ChallengesForm({ onNext, onBack }: ChallengesFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChallengesFormData>();

  const { setFormData } = useFormContext();

  const onSubmit: SubmitHandler<ChallengesFormData> = (data) => {
    setFormData((prev) => ({
      ...prev,
      challenges: data,
    }));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Tantangan Saat Ini</h3>
        <div className='space-y-2'>
          {[
            'Beban kerja tinggi',
            'Keahlian yang kurang',
            'Masalah kualitas',
            'Pengiriman lambat',
            'Keterlambatan layanan pelanggan',
            'Keterbatasan teknis',
          ].map((challenge) => (
            <label key={challenge} className='flex items-center'>
              <input type='checkbox' value={challenge} {...register('challenges')} className='mr-2' />
              {challenge}
            </label>
          ))}
          <div className='mt-2'>
            <input type='text' placeholder='Lainnya (sebutkan)' {...register('otherChallenge')} className='w-full p-2 border rounded' />
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Tujuan Bisnis</h3>
        <div className='space-y-2'>
          {[
            'Memperluas jangkauan pasar',
            'Meluncurkan produk baru',
            'Meningkatkan kualitas layanan',
            'Meningkatkan kapasitas produksi',
            'Masuk ke pasar baru',
          ].map((goal) => (
            <label key={goal} className='flex items-center'>
              <input type='checkbox' value={goal} {...register('goals')} className='mr-2' />
              {goal}
            </label>
          ))}
          <div className='mt-2'>
            <input type='text' placeholder='Lainnya (sebutkan)' {...register('otherGoal')} className='w-full p-2 border rounded' />
          </div>
        </div>
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
