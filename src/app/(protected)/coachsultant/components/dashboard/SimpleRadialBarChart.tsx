'use client';
// src/app/(protected)/coachsultant/components/dashboard/SimpleRadialBarChart.tsx
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mikro',
    uv: 31.47,
    fill: '#8884d8',
  },
  {
    name: 'Kecil',
    uv: 26.69,
    fill: '#83a6ed',
  },
  {
    name: 'Menengah',
    uv: 15.69,
    fill: '#8dd1e1',
  },
  {
    name: 'Besar',
    uv: 8.22,
    fill: '#82ca9d',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class SimpleRadialBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <RadialBarChart cx='50%' cy='50%' innerRadius='10%' outerRadius='80%' barSize={10} data={data}>
          <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey='uv' />
          <Legend iconSize={10} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
