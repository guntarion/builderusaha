'use client';
// src/app/(protected)/coachsultant/components/dashboard/StackedAreaChart.tsx
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    bulan: 'Jan',
    pendapatan: 4000,
    pengeluaran: 2400,
    laba: 1600,
  },
  {
    bulan: 'Feb',
    pendapatan: 3000,
    pengeluaran: 1398,
    laba: 1602,
  },
  {
    bulan: 'Mar',
    pendapatan: 2000,
    pengeluaran: 9800,
    laba: -7800,
  },
  {
    bulan: 'Apr',
    pendapatan: 2780,
    pengeluaran: 3908,
    laba: -1128,
  },
  {
    bulan: 'Mei',
    pendapatan: 1890,
    pengeluaran: 4800,
    laba: -2910,
  },
  {
    bulan: 'Jun',
    pendapatan: 2390,
    pengeluaran: 3800,
    laba: -1410,
  },
  {
    bulan: 'Jul',
    pendapatan: 3490,
    pengeluaran: 4300,
    laba: -810,
  },
];

export default class StackedAreaChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='bulan' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='pendapatan' stackId='1' stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='pengeluaran' stackId='1' stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='laba' stackId='1' stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
