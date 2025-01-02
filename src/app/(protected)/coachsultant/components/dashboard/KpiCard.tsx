'use client';
// src/app/(protected)/coachsultant/components/dashboard/KpiCard.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white p-2 border rounded shadow'>
        <p className='text-sm'>{`${payload[0].payload.date}`}</p>
        <p className='text-sm font-medium'>{`Value: ${payload[0].value.toLocaleString('id-ID')}`}</p>
      </div>
    );
  }
  return null;
};

interface KpiCardProps {
  title: string;
  total: number;
  target: number;
  trendData: { date: string; value: number }[];
}

const KpiCard = ({ title, total, target, trendData }: KpiCardProps) => {
  const trend = total >= target ? 'success' : 'danger';

  const [tooltipData, setTooltipData] = useState<{ active: boolean; payload: any[] }>({
    active: false,
    payload: [],
  });

  const handleMouseMove = (e: any) => {
    if (e.activePayload && e.activePayload.length) {
      setTooltipData({
        active: true,
        payload: e.activePayload,
      });
    } else {
      setTooltipData({
        active: false,
        payload: [],
      });
    }
  };

  return (
    <div className='bg-white p-4 rounded-lg shadow relative'>
      {tooltipData.active && (
        <div
          className='absolute z-10'
          style={{
            left: tooltipData.payload[0].payload.cx,
            top: tooltipData.payload[0].payload.cy,
          }}
        >
          <CustomTooltip active={tooltipData.active} payload={tooltipData.payload} />
        </div>
      )}
      <h3 className='text-lg font-medium text-gray-800'>{title}</h3>
      <h2 className={`text-2xl font-bold ${trend === 'success' ? 'text-green-600' : 'text-red-600'}`}>{total.toLocaleString('id-ID')}</h2>
      <p className='text-sm text-gray-600'>Target: {target.toLocaleString('id-ID')}</p>
      <div className='mt-2 h-20'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={trendData} onMouseMove={handleMouseMove} onMouseLeave={() => setTooltipData({ active: false, payload: [] })}>
            <XAxis dataKey='date' hide />
            <YAxis hide />
            <Line type='monotone' dataKey='value' stroke={trend === 'success' ? '#16a34a' : '#dc2626'} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KpiCard;
