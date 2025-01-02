import { useState } from 'react';
import { BusinessMetrics } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BusinessOverviewProps {
  metrics: BusinessMetrics;
}

export function BusinessOverview({ metrics }: BusinessOverviewProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4'>Ikhtisar Bisnis</h2>

      {/* Revenue Section */}
      <div className='mb-4'>
        <div className='p-4 bg-gray-50 rounded-lg cursor-pointer' onClick={() => toggleSection('revenue')}>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-sm font-medium text-gray-500'>Pendapatan</h3>
              <p className='text-2xl font-bold'>Rp{metrics.kpiMetrics.revenue.current.toLocaleString()}</p>
            </div>
            {expandedSection === 'revenue' ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
          </div>
        </div>
        {expandedSection === 'revenue' && (
          <div className='mt-2 p-4 bg-gray-100 rounded-lg'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-gray-600'>Target</p>
                <p className='text-lg font-medium'>Rp{metrics.kpiMetrics.revenue.target.toLocaleString()}</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Growth</p>
                <p className='text-lg font-medium'>{metrics.kpiMetrics.revenue.growth}%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Customers Section */}
      <div className='mb-4'>
        <div className='p-4 bg-gray-50 rounded-lg cursor-pointer' onClick={() => toggleSection('customers')}>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-sm font-medium text-gray-500'>Pelanggan</h3>
              <p className='text-2xl font-bold'>{metrics.kpiMetrics.customers.active.toLocaleString()}</p>
            </div>
            {expandedSection === 'customers' ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
          </div>
        </div>
        {expandedSection === 'customers' && (
          <div className='mt-2 p-4 bg-gray-100 rounded-lg'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-gray-600'>Tingkat Churn</p>
                <p className='text-lg font-medium'>{metrics.kpiMetrics.customers.churnRate}%</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Tingkat Akuisisi</p>
                <p className='text-lg font-medium'>{metrics.kpiMetrics.customers.acquisitionRate}%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cash Flow Section */}
      <div>
        <div className='p-4 bg-gray-50 rounded-lg cursor-pointer' onClick={() => toggleSection('cashflow')}>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-sm font-medium text-gray-500'>Saldo Kas</h3>
              <p className='text-2xl font-bold'>Rp{metrics.kpiMetrics.cashflow.balance.toLocaleString()}</p>
            </div>
            {expandedSection === 'cashflow' ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
          </div>
        </div>
        {expandedSection === 'cashflow' && (
          <div className='mt-2 p-4 bg-gray-100 rounded-lg'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-gray-600'>Tingkat Pembakaran</p>
                <p className='text-lg font-medium'>Rp{metrics.kpiMetrics.cashflow.burnRate.toLocaleString()}/bulan</p>
              </div>
              <div>
                <p className='text-sm text-gray-600'>Runway</p>
                <p className='text-lg font-medium'>{metrics.kpiMetrics.cashflow.runway} bulan</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
