'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/Button';
import { useFormContext } from '../../context/FormContext';

interface BusinessContextFormProps {
  onNext: () => void;
}

interface BusinessContextFormData {
  industry: string;
  businessType: 'B2B' | 'B2C' | 'Both';
  businessStage: string;
  mainProducts: string;
  teamSize: number;
  monthlyRevenue: string;
}

export function BusinessContextForm({ onNext }: BusinessContextFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessContextFormData>();

  const { setFormData } = useFormContext();

  const onSubmit: SubmitHandler<BusinessContextFormData> = (data) => {
    setFormData((prev) => ({
      ...prev,
      businessContext: data,
    }));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-1'>Industri/Sektor</label>
        <select {...register('industry', { required: 'Wajib diisi' })} className='w-full p-2 border rounded'>
          <option value=''>Pilih Industri</option>
          <option value='Teknologi'>Teknologi</option>
          <option value='Manufaktur'>Manufaktur</option>
          <option value='Retail'>Retail</option>
          <option value='Jasa'>Jasa</option>
        </select>
        {errors.industry && <p className='text-red-500 text-sm mt-1'>{errors.industry.message}</p>}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Jenis Bisnis</label>
        <div className='space-y-2'>
          <label className='flex items-center'>
            <input type='radio' value='B2B' {...register('businessType', { required: 'Wajib dipilih' })} className='mr-2' />
            B2B
          </label>
          <label className='flex items-center'>
            <input type='radio' value='B2C' {...register('businessType', { required: 'Wajib dipilih' })} className='mr-2' />
            B2C
          </label>
          <label className='flex items-center'>
            <input type='radio' value='Both' {...register('businessType', { required: 'Wajib dipilih' })} className='mr-2' />
            Keduanya
          </label>
        </div>
        {errors.businessType && <p className='text-red-500 text-sm mt-1'>{errors.businessType.message}</p>}
      </div>

      <div className='flex justify-end'>
        <Button type='submit'>Selanjutnya</Button>
      </div>
    </form>
  );
}
