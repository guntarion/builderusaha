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
  const [teamScaling, setTeamScaling] = useState<TeamScaling>({
    companyInfo: {
      industry: 'Education Technology',
      size: 'Medium',
      stage: 'Growth',
    },
    roleDefinition: {
      title: 'Senior Developer',
      responsibilities: ['Develop core features', 'Mentor junior developers'],
      requiredSkills: ['JavaScript', 'React', 'Node.js'],
      experienceLevel: 'Senior',
    },
    hiringTimeline: {
      phases: [
        {
          phase: 'Q1 2024',
          startDate: '2024-01-01',
          endDate: '2024-03-31',
          rolesToHire: ['Frontend Developer', 'Backend Developer'],
        },
      ],
    },
    teamStructure: {
      departments: [
        {
          name: 'Engineering',
          roles: ['Senior Developer', 'Junior Developer'],
          reportingTo: 'CTO',
        },
      ],
    },
    skillsGap: {
      existingSkills: ['JavaScript', 'HTML'],
      requiredSkills: ['React', 'Node.js'],
      gapAnalysis: [
        {
          skill: 'React',
          gapLevel: 'High',
        },
      ],
    },
    trainingNeeds: {
      trainingPrograms: [
        {
          name: 'React Training',
          targetRoles: ['Frontend Developers'],
          duration: '2 weeks',
          objectives: ['Learn React fundamentals', 'Build React components'],
        },
      ],
    },
  });
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

      {/* Company Info Section */}
      <div className='bg-white rounded-xl shadow-sm p-6 mb-6'>
        <h2 className='text-xl font-semibold mb-4'>Informasi Perusahaan</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Industri</label>
            <input
              type='text'
              value={teamScaling.companyInfo?.industry || ''}
              onChange={(e) =>
                setTeamScaling((prev) => ({
                  ...prev,
                  companyInfo: {
                    ...prev.companyInfo,
                    industry: e.target.value,
                  },
                }))
              }
              className='w-full px-3 py-2 border rounded-lg'
              placeholder='Masukkan industri perusahaan'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Ukuran Perusahaan</label>
            <select
              value={teamScaling.companyInfo?.size || ''}
              onChange={(e) =>
                setTeamScaling((prev) => ({
                  ...prev,
                  companyInfo: {
                    ...prev.companyInfo,
                    size: e.target.value,
                  },
                }))
              }
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value=''>Pilih ukuran</option>
              <option value='Small'>Kecil (1-50)</option>
              <option value='Medium'>Menengah (51-200)</option>
              <option value='Large'>Besar (201+)</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Tahap Perusahaan</label>
            <select
              value={teamScaling.companyInfo?.stage || ''}
              onChange={(e) =>
                setTeamScaling((prev) => ({
                  ...prev,
                  companyInfo: {
                    ...prev.companyInfo,
                    stage: e.target.value,
                  },
                }))
              }
              className='w-full px-3 py-2 border rounded-lg'
            >
              <option value=''>Pilih tahap</option>
              <option value='Startup'>Startup</option>
              <option value='Growth'>Growth</option>
              <option value='Mature'>Mature</option>
            </select>
          </div>
        </div>
      </div>

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
          onClose={() => {
            console.log('Closing analysis modal');
            setShowAnalysis(false);
          }}
          onRetry={retry}
        />
      )}
    </div>
  );
}
