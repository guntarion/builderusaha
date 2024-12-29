import { TeamScalingAnalysis } from '../lib/TeamScalingTypes';

interface TeamScalingAnalysisResultsProps {
  analysis: TeamScalingAnalysis;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
  onRetry: () => void;
}

export default function TeamScalingAnalysisResults({ analysis, isLoading, error, onClose, onRetry }: TeamScalingAnalysisResultsProps) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-2xl p-6'>
        <h2 className='text-xl font-bold mb-4'>Hasil Analisis Tim</h2>

        {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
            <p>{error}</p>
            <button onClick={onRetry} className='mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
              Coba Lagi
            </button>
          </div>
        )}

        {!error && (
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold'>Rekomendasi Peran</h3>
              <ul className='list-disc pl-5'>
                {analysis.roleRecommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-semibold'>Rencana Perekrutan</h3>
              <ul className='list-disc pl-5'>
                {analysis.hiringPlan.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-semibold'>Optimisasi Struktur</h3>
              <ul className='list-disc pl-5'>
                {analysis.structureOptimization.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-semibold'>Rencana Pengembangan Skill</h3>
              <ul className='list-disc pl-5'>
                {analysis.skillsDevelopmentPlan.map((plan, i) => (
                  <li key={i}>{plan}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-semibold'>Program Pelatihan</h3>
              <ul className='list-disc pl-5'>
                {analysis.trainingPrograms.map((program, i) => (
                  <li key={i}>{program}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className='mt-6 flex justify-end space-x-2'>
          <button onClick={onClose} className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
