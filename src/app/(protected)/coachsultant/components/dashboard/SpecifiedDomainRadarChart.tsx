'use client';
// src/app/(protected)/coachsultant/components/dashboard/SpecifiedDomainRadarChart.tsx
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Operasional',
    A: 80,
    B: 60,
    fullMark: 100,
  },
  {
    subject: 'Pemasaran',
    A: 70,
    B: 90,
    fullMark: 100,
  },
  {
    subject: 'Keuangan',
    A: 90,
    B: 70,
    fullMark: 100,
  },
  {
    subject: 'SDM',
    A: 60,
    B: 80,
    fullMark: 100,
  },
  {
    subject: 'Inovasi',
    A: 85,
    B: 75,
    fullMark: 100,
  },
];

export default class SpecifiedDomainRadarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name='Target' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
          <Radar name='Aktual' dataKey='B' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
