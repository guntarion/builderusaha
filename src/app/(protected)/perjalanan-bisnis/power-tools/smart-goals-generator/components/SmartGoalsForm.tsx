// src/app/(protected)/perjalanan-bisnis/power-tools/smart-goals-generator/components/SmartGoalsForm.tsx

'use client';

import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { DatePicker } from '@/components/ui/DatePicker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { useSmartGoals } from '../hooks/useSmartGoals';
import type { GoalCategory, Industry, Resource, SmartGoalFormData } from '../types';

const goalCategories: GoalCategory[] = [
  'Pertumbuhan Bisnis',
  'Keuangan',
  'Operasional',
  'Pemasaran',
  'Pengembangan Tim',
  'Pengembangan Diri',
  'Layanan Pelanggan',
  'Pengembangan Produk',
];

const industries: Industry[] = [
  'Teknologi',
  'Ritel',
  'Manufaktur',
  'Kesehatan',
  'Jasa Keuangan',
  'Pendidikan',
  'Properti',
  'Konstruksi',
  'Transportasi',
  'Hiburan',
  'Makanan & Minuman',
  'Pertanian',
  'Energi',
  'Pariwisata',
  'Jasa Profesional',
];

const resources: Resource[] = ['Anggaran', 'Ukuran Tim', 'Alat', 'Komitmen Waktu'];

export function SmartGoalsForm() {
  const [formData, setFormData] = useState<SmartGoalFormData>({
    goalStatement: '',
    category: 'Pertumbuhan Bisnis',
    timeline: {
      startDate: new Date(),
      endDate: new Date(),
    },
    industry: undefined,
    currentMetrics: undefined,
    resources: undefined,
    constraints: undefined,
  });

  const { generateSmartGoal, isLoading, error, data } = useSmartGoals();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await generateSmartGoal(formData);
      console.log('API Response:', response);
    } catch (error) {
      console.error('API Error:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
        });
      }
    }
  };

  return (
    <div className='w-full max-w-4xl mx-auto p-6'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Goal Statement */}
        <div className='space-y-2'>
          <label htmlFor='goalStatement' className='block text-sm font-medium text-gray-700'>
            Pernyataan Tujuan
          </label>
          <input
            type='text'
            id='goalStatement'
            maxLength={100}
            required
            value={formData.goalStatement}
            onChange={(e) => setFormData({ ...formData, goalStatement: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='Contoh: Meningkatkan penjualan'
          />
        </div>

        {/* Category */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Kategori Tujuan</label>
          <Select value={formData.category} onValueChange={(value: GoalCategory) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder='Pilih kategori' />
            </SelectTrigger>
            <SelectContent>
              {goalCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Timeline */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Tanggal Mulai</label>
            <DatePicker
              value={formData.timeline.startDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  timeline: { ...formData.timeline, startDate: date || new Date() },
                })
              }
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Tanggal Selesai</label>
            <DatePicker
              value={formData.timeline.endDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  timeline: { ...formData.timeline, endDate: date || new Date() },
                })
              }
            />
          </div>
        </div>

        {/* Industry */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Industri (Opsional)</label>
          <Select value={formData.industry} onValueChange={(value: Industry) => setFormData({ ...formData, industry: value })}>
            <SelectTrigger>
              <SelectValue placeholder='Pilih industri' />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Current Metrics */}
        <div className='space-y-2'>
          <label htmlFor='currentMetrics' className='block text-sm font-medium text-gray-700'>
            Metrik Saat Ini (Opsional)
          </label>
          <input
            type='text'
            id='currentMetrics'
            value={formData.currentMetrics || ''}
            onChange={(e) => setFormData({ ...formData, currentMetrics: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='Contoh: Rp 1.000.000.000 pendapatan bulanan berulang'
          />
        </div>

        {/* Resources */}
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-700'>Sumber Daya Tersedia (Opsional)</label>
          <div className='grid grid-cols-2 gap-2'>
            {resources.map((resource) => (
              <label key={resource} className='flex items-center space-x-2 text-sm'>
                <input
                  type='checkbox'
                  checked={formData.resources?.includes(resource) || false}
                  onChange={(e) => {
                    const newResources = e.target.checked
                      ? [...(formData.resources || []), resource]
                      : formData.resources?.filter((r) => r !== resource) || [];
                    setFormData({ ...formData, resources: newResources });
                  }}
                  className='rounded border-gray-300'
                />
                <span>{resource}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Constraints */}
        <div className='space-y-2'>
          <label htmlFor='constraints' className='block text-sm font-medium text-gray-700'>
            Kendala (Opsional)
          </label>
          <textarea
            id='constraints'
            value={formData.constraints || ''}
            onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
            className='w-full p-2 border rounded-md'
            placeholder='Contoh: Kehadiran pasar terbatas di Eropa'
            rows={3}
          />
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50'
        >
          {isLoading ? (
            <div className='flex items-center justify-center gap-2'>
              <LoadingSpinner size='sm' />
              <span>Membuat...</span>
            </div>
          ) : (
            'Buat SMART Goal'
          )}
        </button>
      </form>

      {error && <div className='mt-4 p-4 bg-red-50 text-red-700 rounded-md'>{error}</div>}

      {data && (
        <div className='mt-8 p-6 bg-white rounded-lg shadow'>
          <h2 className='text-2xl font-bold mb-4'>SMART Goal yang Dihasilkan</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Spesifik</h3>
              <p className='text-gray-700'>{data.smart_goal.specific.refined_statement}</p>
              <ul className='mt-2 list-disc list-inside'>
                {data.smart_goal.specific.clarifying_details.map((detail, i) => (
                  <li key={i} className='text-gray-600'>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Terukur</h3>
              <div className='space-y-2'>
                <div>
                  <p className='font-medium'>Metrik Utama:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.measurable.primary_metrics.map((metric, i) => (
                      <li key={i} className='text-gray-600'>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className='font-medium'>Metrik Sekunder:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.measurable.secondary_metrics.map((metric, i) => (
                      <li key={i} className='text-gray-600'>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Dapat Dicapai</h3>
              <div className='space-y-2'>
                <div>
                  <p className='font-medium'>Rincian Target:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.achievable.target_breakdown.map((target, i) => (
                      <li key={i} className='text-gray-600'>
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className='font-medium'>Sumber Daya yang Dibutuhkan:</p>
                  <ul className='list-disc list-inside'>
                    {data.smart_goal.achievable.required_resources.map((resource, i) => (
                      <li key={i} className='text-gray-600'>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Relevan</h3>
              <p className='text-gray-700'>{data.smart_goal.relevant.business_impact}</p>
              <div className='mt-2'>
                <p className='font-medium'>Manfaat Stakeholder:</p>
                <ul className='list-disc list-inside'>
                  {data.smart_goal.relevant.stakeholder_benefits.map((benefit, i) => (
                    <li key={i} className='text-gray-600'>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Terikat Waktu</h3>
              <p className='font-medium'>Batas Waktu Akhir: {data.smart_goal.time_bound.final_deadline}</p>
              <div className='mt-2'>
                <p className='font-medium'>Tonggak Pencapaian:</p>
                <ul className='space-y-2'>
                  {data.smart_goal.time_bound.milestones.map((milestone, i) => (
                    <li key={i} className='text-gray-600'>
                      <span className='font-medium'>{milestone.date}:</span> {milestone.description} ({milestone.target})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Rencana Pelacakan</h3>
              <p className='font-medium'>Frekuensi: {data.smart_goal.tracking_plan.frequency}</p>
              <div className='mt-2'>
                <p className='font-medium'>Metode:</p>
                <ul className='list-disc list-inside'>
                  {data.smart_goal.tracking_plan.methods.map((method, i) => (
                    <li key={i} className='text-gray-600'>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
