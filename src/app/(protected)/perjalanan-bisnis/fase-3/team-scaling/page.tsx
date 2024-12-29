'use client';

import { useState } from 'react';
import { TeamScaling, RoleDefinition, HiringTimeline, TeamStructure, SkillsGap, TrainingNeeds } from './lib/TeamScalingTypes';
import { initialTeamScalingState } from './lib/teamScalingValidation';
import RoleDefinitionSection from './components/RoleDefinitionSection';
import HiringTimelineSection from './components/HiringTimelineSection';
import TeamStructureSection from './components/TeamStructureSection';
import SkillsAnalysisSection from './components/SkillsAnalysisSection';
import TrainingNeedsSection from './components/TrainingNeedsSection';
import { useTeamScalingAnalysis } from './hooks/useTeamScalingAnalysis';
import TeamScalingAnalysisResults from './components/TeamScalingAnalysisResults';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/team-scaling.css';

export default function TeamScalingPage() {
  const [teamScaling, setTeamScaling] = useState<TeamScaling>(initialTeamScalingState);
  const [activeSection, setActiveSection] = useState<string>('roleDefinition');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const { analyze, retry, analysis, isAnalyzing, error: analysisError } = useTeamScalingAnalysis();

  const handleRoleDefinitionUpdate = (roleDefinition: RoleDefinition) => {
    setTeamScaling((prev) => ({
      ...prev,
      roleDefinition,
    }));
  };

  const handleHiringTimelineUpdate = (hiringTimeline: HiringTimeline) => {
    setTeamScaling((prev) => ({
      ...prev,
      hiringTimeline,
    }));
  };

  const handleTeamStructureUpdate = (teamStructure: TeamStructure) => {
    setTeamScaling((prev) => ({
      ...prev,
      teamStructure,
    }));
  };

  const handleSkillsAnalysisUpdate = (skillsGap: SkillsGap) => {
    setTeamScaling((prev) => ({
      ...prev,
      skillsGap,
    }));
  };

  const handleTrainingNeedsUpdate = (trainingNeeds: TrainingNeeds) => {
    setTeamScaling((prev) => ({
      ...prev,
      trainingNeeds,
    }));
  };

  const handleSubmit = async () => {
    const result = await analyze(teamScaling);
    if (result) {
      setShowAnalysis(true);
    }
  };

  return (
    <div className='team-scaling-container'>
      <header className='mb-8'>
        <h1 className='text-2xl font-bold'>Team Scaling Assistant</h1>
        <p className='text-gray-600'>Optimalkan tim Anda dengan panduan AI</p>
      </header>

      <div className='mb-6'>
        <nav className='flex space-x-2'>
          {[
            { id: 'roleDefinition', label: 'Role Definition', icon: '👤' },
            { id: 'hiringTimeline', label: 'Hiring Timeline', icon: '📅' },
            { id: 'teamStructure', label: 'Team Structure', icon: '🏢' },
            { id: 'skillsAnalysis', label: 'Skills Analysis', icon: '📊' },
            { id: 'trainingNeeds', label: 'Training Needs', icon: '🎓' },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                px-4 py-2 rounded-lg flex items-center gap-2
                ${activeSection === section.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6'>
        {activeSection === 'roleDefinition' && (
          <RoleDefinitionSection roleDefinition={teamScaling.roleDefinition} onChange={handleRoleDefinitionUpdate} />
        )}

        {activeSection === 'hiringTimeline' && (
          <HiringTimelineSection hiringTimeline={teamScaling.hiringTimeline} onChange={handleHiringTimelineUpdate} />
        )}

        {activeSection === 'teamStructure' && <TeamStructureSection teamStructure={teamScaling.teamStructure} onChange={handleTeamStructureUpdate} />}

        {activeSection === 'skillsAnalysis' && <SkillsAnalysisSection skillsGap={teamScaling.skillsGap} onChange={handleSkillsAnalysisUpdate} />}

        {activeSection === 'trainingNeeds' && <TrainingNeedsSection trainingNeeds={teamScaling.trainingNeeds} onChange={handleTrainingNeedsUpdate} />}

        <div className='mt-8 flex justify-end'>
          <button
            onClick={handleSubmit}
            disabled={isAnalyzing}
            className={`
              bg-blue-600 text-white px-8 py-3 rounded-lg
              hover:bg-blue-700 transition-colors
              disabled:opacity-70 disabled:cursor-not-allowed
              flex items-center gap-3 text-lg
            `}
          >
            {isAnalyzing ? (
              <>
                <LoadingSpinner size='sm' light={true} />
                <span>Menganalisis Tim...</span>
              </>
            ) : (
              <>
                <span className='text-xl'>✨</span>
                <span>Analisis Tim</span>
              </>
            )}
          </button>
        </div>
      </div>

      {showAnalysis && analysis && (
        <TeamScalingAnalysisResults
          analysis={analysis}
          isLoading={isAnalyzing}
          error={analysisError}
          onClose={() => setShowAnalysis(false)}
          onRetry={retry}
        />
      )}
    </div>
  );
}
