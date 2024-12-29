import { SkillsGap } from '../lib/TeamScalingTypes';

interface SkillsAnalysisSectionProps {
  skillsGap: SkillsGap;
  onChange: (skillsGap: SkillsGap) => void;
}

export default function SkillsAnalysisSection({ skillsGap, onChange }: SkillsAnalysisSectionProps) {
  const handleChange = (field: keyof SkillsGap, value: string[] | Array<{ skill: string; gapLevel: 'Low' | 'Medium' | 'High' }>) => {
    const updatedSkillsGap = {
      ...skillsGap,
      [field]: value,
    };

    // If existing or required skills change, update gap analysis
    if (field === 'existingSkills' || field === 'requiredSkills') {
      const allSkills = Array.from(new Set([...updatedSkillsGap.existingSkills, ...updatedSkillsGap.requiredSkills]));
      updatedSkillsGap.gapAnalysis = allSkills.map((skill) => {
        const existingGap = updatedSkillsGap.gapAnalysis.find((g) => g.skill === skill);
        return {
          skill,
          gapLevel: existingGap?.gapLevel || 'Medium',
        };
      });
    }

    onChange(updatedSkillsGap);
  };

  const handleInitializeGaps = () => {
    const allSkills = Array.from(new Set([...skillsGap.existingSkills, ...skillsGap.requiredSkills]));
    const updatedGapAnalysis = allSkills.map((skill) => ({
      skill,
      gapLevel: 'Medium' as 'Low' | 'Medium' | 'High',
    }));
    handleChange('gapAnalysis', updatedGapAnalysis);
  };

  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium mb-1'>Skill yang Dimiliki</label>
        <textarea
          value={skillsGap.existingSkills.join('\n')}
          onChange={(e) => handleChange('existingSkills', e.target.value.split('\n'))}
          className='w-full px-3 py-2 border rounded-lg'
          placeholder='Masukkan skill yang dimiliki, satu per baris'
          rows={4}
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>Skill yang Dibutuhkan</label>
        <textarea
          value={skillsGap.requiredSkills.join('\n')}
          onChange={(e) => handleChange('requiredSkills', e.target.value.split('\n'))}
          className='w-full px-3 py-2 border rounded-lg'
          placeholder='Masukkan skill yang dibutuhkan, satu per baris'
          rows={4}
        />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-1'>Analisis Gap Skill</h3>
        <div className='space-y-2'>
          {skillsGap.gapAnalysis.map((gap, index) => (
            <div key={index} className='flex items-center gap-2'>
              <span className='w-1/3'>{gap.skill}</span>
              <select
                value={gap.gapLevel}
                onChange={(e) => {
                  const updatedGaps = [...skillsGap.gapAnalysis];
                  updatedGaps[index].gapLevel = e.target.value as 'Low' | 'Medium' | 'High';
                  handleChange('gapAnalysis', updatedGaps);
                }}
                className='w-1/3 px-3 py-2 border rounded-lg'
              >
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
