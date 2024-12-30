'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
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
  } = useForm<BusinessContextFormData>({
    defaultValues: {
      industry: 'Teknologi',
      businessType: 'B2B',
      businessStage: 'Growth',
      mainProducts: 'Software as a Service (SaaS)',
      teamSize: 15,
      monthlyRevenue: '50-100 juta',
    },
  });

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
      <div className='space-y-6'>
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

        <div>
          <label className='block text-sm font-medium mb-1'>Tahap Bisnis</label>
          <select {...register('businessStage', { required: 'Wajib diisi' })} className='w-full p-2 border rounded'>
            <option value=''>Pilih Tahap</option>
            <option value='Startup'>Startup</option>
            <option value='Growth'>Growth</option>
            <option value='Expansion'>Expansion</option>
            <option value='Mature'>Mature</option>
          </select>
          {errors.businessStage && <p className='text-red-500 text-sm mt-1'>{errors.businessStage.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Produk/Layanan Utama</label>
          <textarea {...register('mainProducts', { required: 'Wajib diisi' })} className='w-full p-2 border rounded' rows={3} />
          {errors.mainProducts && <p className='text-red-500 text-sm mt-1'>{errors.mainProducts.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Jumlah Tim</label>
          <input type='number' {...register('teamSize', { required: 'Wajib diisi', min: 1 })} className='w-full p-2 border rounded' />
          {errors.teamSize && <p className='text-red-500 text-sm mt-1'>{errors.teamSize.message}</p>}
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Pendapatan Bulanan</label>
          <select {...register('monthlyRevenue', { required: 'Wajib diisi' })} className='w-full p-2 border rounded'>
            <option value=''>Pilih Range</option>
            <option value='< 50 juta'>&lt; 50 juta</option>
            <option value='50-100 juta'>50-100 juta</option>
            <option value='100-500 juta'>100-500 juta</option>
            <option value='> 500 juta'>&gt; 500 juta</option>
          </select>
          {errors.monthlyRevenue && <p className='text-red-500 text-sm mt-1'>{errors.monthlyRevenue.message}</p>}
        </div>

        <div className='flex justify-end'>
          <Button type='submit'>Selanjutnya</Button>
        </div>
      </div>
    </form>
  );
}
