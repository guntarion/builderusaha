'use client';
// src/app/(protected)/coachsultant/components/dashboard/LineBarAreaComposedChart.tsx
import React, { PureComponent } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    bulan: 'Jan',
    pendapatan: 590,
    pengeluaran: 800,
    laba: -210,
  },
  {
    bulan: 'Feb',
    pendapatan: 868,
    pengeluaran: 967,
    laba: -99,
  },
  {
    bulan: 'Mar',
    pendapatan: 1397,
    pengeluaran: 1098,
    laba: 299,
  },
  {
    bulan: 'Apr',
    pendapatan: 1480,
    pengeluaran: 1200,
    laba: 280,
  },
  {
    bulan: 'Mei',
    pendapatan: 1520,
    pengeluaran: 1108,
    laba: 412,
  },
  {
    bulan: 'Jun',
    pendapatan: 1400,
    pengeluaran: 680,
    laba: 720,
  },
];

export default class LineBarAreaComposedChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='bulan' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='laba' fill='#8884d8' stroke='#8884d8' />
          <Bar dataKey='pengeluaran' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='pendapatan' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
