// src/app/(protected)/penilaian-bisnis/fase-bisnis/components/ActionItems.tsx
import { useState } from 'react';
import type { RecommendationItem } from '../data/types';

interface ActionItemsProps {
  recommendations: RecommendationItem[];
  nextPhaseGap: {
    missingRequirements: string[];
    improvementAreas: string[];
  };
}

export default function ActionItems({ recommendations, nextPhaseGap }: ActionItemsProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const priorityColor = {
    high: 'bg-red-50 text-red-700',
    medium: 'bg-yellow-50 text-yellow-700',
    low: 'bg-green-50 text-green-700',
  };

  return (
    <div className='space-y-8'>
      {/* Missing Requirements */}
      {nextPhaseGap.missingRequirements.length > 0 && (
        <section>
          <h3 className='text-xl font-semibold mb-4'>Persyaratan yang Perlu Dipenuhi</h3>
          <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
            <ul className='space-y-2'>
              {nextPhaseGap.missingRequirements.map((req, index) => (
                <li key={index} className='flex items-start gap-2 text-yellow-800'>
                  <span>•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Improvement Areas */}
      <section>
        <h3 className='text-xl font-semibold mb-4'>Area Pengembangan</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          {nextPhaseGap.improvementAreas.map((area, index) => (
            <div key={index} className='bg-gray-50 rounded-lg p-4'>
              <h4 className='font-medium'>{area.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h3 className='text-xl font-semibold mb-4'>Rekomendasi Tindakan</h3>
        <div className='space-y-4'>
          {recommendations.map((rec) => (
            <div key={rec.id} className='border rounded-lg overflow-hidden'>
              {/* Header */}
              <button
                onClick={() => setExpandedItem(expandedItem === rec.id ? null : rec.id)}
                className='w-full flex items-center justify-between p-4 hover:bg-gray-50'
              >
                <div className='flex items-center gap-4'>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColor[rec.priority]}`}>
                    {rec.priority === 'high' ? 'Prioritas Tinggi' : rec.priority === 'medium' ? 'Prioritas Sedang' : 'Prioritas Rendah'}
                  </span>
                  <h4 className='font-medium'>{rec.title}</h4>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${expandedItem === rec.id ? 'rotate-180' : ''}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              {/* Content */}
              {expandedItem === rec.id && (
                <div className='p-4 border-t bg-gray-50'>
                  <p className='text-gray-600 mb-4'>{rec.description}</p>

                  <h5 className='font-medium mb-2'>Langkah-langkah:</h5>
                  <ul className='space-y-2 mb-4'>
                    {rec.actionItems.map((item, index) => (
                      <li key={index} className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {rec.resources && (
                    <>
                      <h5 className='font-medium mb-2'>Sumber Daya:</h5>
                      <ul className='space-y-2'>
                        {rec.resources.map((resource, index) => (
                          <li key={index} className='flex items-start gap-2'>
                            <span className='text-blue-500'>📄</span>
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
