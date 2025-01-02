'use client';

import { useState } from 'react';
import { BusinessOverview } from './components/BusinessOverview';
import { KPIDashboard } from './components/KPITracker/KPIDashboard';
import { MilestoneList } from './components/MilestoneTracker/MilestoneList';
import { RiskMatrix } from './components/RiskAssessment/RiskMatrix';
import { GrowthDashboard } from './components/GrowthAnalytics/GrowthDashboard';
import { AlertSystem } from './components/AlertSystem';
import { InsightsGenerator } from './components/InsightsGenerator';
import { DashboardConfig } from './components/DashboardConfig';
import { mockBusinessData } from './data/mockData';

import { handleExport } from './utils/exportUtils';

export default function BusinessMonitor() {
  const metrics = mockBusinessData[0];
  const [dashboardConfig, setDashboardConfig] = useState({
    showKPI: true,
    showMilestones: true,
    showRisks: true,
    showGrowth: true,
  });

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold'>Monitor Bisnis</h1>

      {/* Quick Stats Overview */}
      <BusinessOverview metrics={metrics} />

      {/* Alert System */}
      <AlertSystem metrics={metrics} />

      {/* Insights Generator */}
      <InsightsGenerator metrics={metrics} />

      {/* Dashboard Configuration */}
      <DashboardConfig onSave={setDashboardConfig} />

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* KPI Section */}
        {dashboardConfig.showKPI && (
          <div className='bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>Metrik KPI</h2>
            <KPIDashboard />
          </div>
        )}

        {/* Milestones Section */}
        {dashboardConfig.showMilestones && (
          <div className='bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>Pelacak Pencapaian</h2>
            <MilestoneList />
          </div>
        )}

        {/* Risk Assessment */}
        {dashboardConfig.showRisks && (
          <div className='bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>Penilaian Risiko</h2>
            <RiskMatrix />
          </div>
        )}

        {/* Growth Analytics */}
        {dashboardConfig.showGrowth && (
          <div className='bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>Analisis Pertumbuhan</h2>
            <GrowthDashboard />
          </div>
        )}
      </div>
    </div>
  );
}
