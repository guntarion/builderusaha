import { TrainingNeeds } from '../lib/TeamScalingTypes';

interface TrainingNeedsSectionProps {
  trainingNeeds: TrainingNeeds;
  onChange: (trainingNeeds: TrainingNeeds) => void;
}

export default function TrainingNeedsSection({ trainingNeeds, onChange }: TrainingNeedsSectionProps) {
  const handleProgramChange = (index: number, field: string, value: string | string[]) => {
    const updatedPrograms = [...trainingNeeds.trainingPrograms];
    updatedPrograms[index] = {
      ...updatedPrograms[index],
      [field]: value,
    };
    onChange({ trainingPrograms: updatedPrograms });
  };

  const addProgram = () => {
    onChange({
      trainingPrograms: [
        ...trainingNeeds.trainingPrograms,
        {
          name: '',
          targetRoles: [],
          duration: '',
          objectives: [],
        },
      ],
    });
  };

  const removeProgram = (index: number) => {
    const updatedPrograms = trainingNeeds.trainingPrograms.filter((_, i) => i !== index);
    onChange({ trainingPrograms: updatedPrograms });
  };

  return (
    <div className='space-y-4'>
      {trainingNeeds.trainingPrograms.map((program, index) => (
        <div key={index} className='border p-4 rounded-lg'>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>Nama Program</label>
              <input
                type='text'
                value={program.name}
                onChange={(e) => handleProgramChange(index, 'name', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Contoh: React Training'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Durasi</label>
              <input
                type='text'
                value={program.duration}
                onChange={(e) => handleProgramChange(index, 'duration', e.target.value)}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Contoh: 2 minggu'
              />
            </div>

            <div className='col-span-2'>
              <label className='block text-sm font-medium mb-1'>Peran Target</label>
              <textarea
                value={program.targetRoles.join('\n')}
                onChange={(e) => handleProgramChange(index, 'targetRoles', e.target.value.split('\n'))}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Masukkan peran target, satu per baris'
                rows={3}
              />
            </div>

            <div className='col-span-2'>
              <label className='block text-sm font-medium mb-1'>Tujuan</label>
              <textarea
                value={program.objectives.join('\n')}
                onChange={(e) => handleProgramChange(index, 'objectives', e.target.value.split('\n'))}
                className='w-full px-3 py-2 border rounded-lg'
                placeholder='Masukkan tujuan, satu per baris'
                rows={3}
              />
            </div>
          </div>

          <button onClick={() => removeProgram(index)} className='text-red-500 hover:text-red-700 text-sm'>
            Hapus Program
          </button>
        </div>
      ))}

      <button onClick={addProgram} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
        Tambah Program
      </button>
    </div>
  );
}
