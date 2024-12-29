import { HiringTimeline } from '../lib/TeamScalingTypes';

interface HiringTimelineSectionProps {
  hiringTimeline: HiringTimeline;
  onChange: (hiringTimeline: HiringTimeline) => void;
}

export default function HiringTimelineSection({ hiringTimeline, onChange }: HiringTimelineSectionProps) {
  const handlePhaseChange = (index: number, field: string, value: string | string[]) => {
    const updatedPhases = [...hiringTimeline.phases];
    updatedPhases[index] = {
      ...updatedPhases[index],
      [field]: value,
    };
    onChange({ phases: updatedPhases });
  };

  const addPhase = () => {
    onChange({
      phases: [
        ...hiringTimeline.phases,
        {
          phase: '',
          startDate: '',
          endDate: '',
          rolesToHire: [],
        },
      ],
    });
  };

  const removePhase = (index: number) => {
    const updatedPhases = hiringTimeline.phases.filter((_, i) => i !== index);
    onChange({ phases: updatedPhases });
  };

  return (
    <div className='space-y-4'>
      {hiringTimeline.phases.map((phase, index) => (
        <div key={index} className='border p-4 rounded-lg'>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Fase</label>
              <input
                type='text'
                value={phase.phase}
                onChange={(e) => handlePhaseChange(index, 'phase', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Contoh: Fase Inisiasi'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Tanggal Mulai</label>
              <input
                type='date'
                value={phase.startDate}
                onChange={(e) => handlePhaseChange(index, 'startDate', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Tanggal Selesai</label>
              <input
                type='date'
                value={phase.endDate}
                onChange={(e) => handlePhaseChange(index, 'endDate', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Peran yang Direkrut</label>
              <textarea
                value={phase.rolesToHire.join('\n')}
                onChange={(e) => handlePhaseChange(index, 'rolesToHire', e.target.value.split('\n'))}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Masukkan peran, satu per baris'
                rows={3}
              />
            </div>
          </div>

          <button onClick={() => removePhase(index)} className='text-red-500 hover:text-red-700 text-sm'>
            Hapus Fase
          </button>
        </div>
      ))}

      <button onClick={addPhase} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
        Tambah Fase
      </button>
    </div>
  );
}
