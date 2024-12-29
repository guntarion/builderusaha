// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/components/CurrentStructureStep.tsx

import { useState } from 'react';
import { Department, TeamMember } from '../lib/TeamScalingTypes';
import DepartmentCard from './DepartmentCard';
import TeamMemberCard from './TeamMemberCard';
import DepartmentForm from './DepartmentForm';
import TeamMemberForm from './TeamMemberForm';

interface CurrentStructureStepProps {
  departments: Department[];
  teamMembers: TeamMember[];
  onUpdate: (departments: Department[], teamMembers: TeamMember[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function CurrentStructureStep({ departments, teamMembers, onUpdate, onNext, onBack }: CurrentStructureStepProps) {
  const [showDepartmentForm, setShowDepartmentForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);

  const addDepartment = (department: Omit<Department, 'id'>) => {
    const newDepartment: Department = {
      ...department,
      id: Date.now().toString(),
      members: [],
      leads: [],
    };
    onUpdate([...departments, newDepartment], teamMembers);
  };

  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString(),
    };

    // Update department members
    const updatedDepartments = departments.map((dept) => {
      if (dept.name === member.department) {
        return {
          ...dept,
          members: [...dept.members, newMember.id],
          headCount: dept.headCount + 1,
        };
      }
      return dept;
    });

    onUpdate(updatedDepartments, [...teamMembers, newMember]);
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Struktur Tim Saat Ini</h2>
        <p className='text-gray-600'>Jelaskan struktur organisasi dan pembagian tim Anda saat ini</p>
      </div>

      {/* Departments Section */}
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-medium'>Departemen</h3>
          <button
            onClick={() => setShowDepartmentForm(true)}
            className='px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2'
          >
            <span>+</span>
            <span>Tambah Departemen</span>
          </button>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              department={dept}
              teamMembers={teamMembers.filter((m) => m.department === dept.name)}
              onDelete={() => {
                const updatedDepartments = departments.filter((d) => d.id !== dept.id);
                onUpdate(updatedDepartments, teamMembers);
              }}
            />
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-medium'>Anggota Tim</h3>
          <button
            onClick={() => setShowMemberForm(true)}
            className='px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2'
            disabled={departments.length === 0}
          >
            <span>+</span>
            <span>Tambah Anggota</span>
          </button>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onDelete={() => {
                const updatedMembers = teamMembers.filter((m) => m.id !== member.id);
                onUpdate(departments, updatedMembers);
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-between pt-6'>
        <button onClick={onBack} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
          Kembali
        </button>
        <button onClick={onNext} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
          Lanjut
        </button>
      </div>

      {/* Forms */}
      {showDepartmentForm && (
        <DepartmentForm
          onSubmit={(dept) => {
            addDepartment(dept);
            setShowDepartmentForm(false);
          }}
          onCancel={() => setShowDepartmentForm(false)}
        />
      )}

      {showMemberForm && (
        <TeamMemberForm
          departments={departments}
          onSubmit={(member) => {
            addTeamMember(member);
            setShowMemberForm(false);
          }}
          onCancel={() => setShowMemberForm(false)}
        />
      )}
    </div>
  );
}
