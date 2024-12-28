// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/FeatureMatrixSection.tsx

import { useState } from 'react';
import { Feature, PriorityLevel, ComplexityLevel } from '../lib/MVPTypes';
import { validateFeature } from '../lib/mvpValidation';
import FeatureForm from './FeatureForm';
import PriorityBadge from './PriorityBadge';
import ComplexityBadge from './ComplexityBadge';

interface FeatureMatrixSectionProps {
  features: Feature[];
  onChange: (features: Feature[]) => void;
}

export default function FeatureMatrixSection({ features, onChange }: FeatureMatrixSectionProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingFeature, setEditingFeature] = useState<Feature | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<PriorityLevel | 'all'>('all');

  // Group features by priority
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.priority]) {
      acc[feature.priority] = [];
    }
    acc[feature.priority].push(feature);
    return acc;
  }, {} as Record<PriorityLevel, Feature[]>);

  const handleFeatureAdd = (feature: Feature) => {
    onChange([...features, { ...feature, id: Date.now().toString() }]);
    setShowForm(false);
  };

  const handleFeatureEdit = (feature: Feature) => {
    onChange(features.map((f) => (f.id === feature.id ? feature : f)));
    setEditingFeature(null);
  };

  const handleFeatureDelete = (featureId: string) => {
    onChange(features.filter((f) => f.id !== featureId));
  };

  const filteredFeatures = selectedPriority === 'all' ? features : features.filter((f) => f.priority === selectedPriority);

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-xl font-semibold'>Feature Matrix</h2>
          <p className='text-gray-600'>Tentukan dan prioritaskan fitur-fitur MVP Anda menggunakan metode MoSCoW</p>
        </div>
        <button onClick={() => setShowForm(true)} className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
          <span className='flex items-center gap-2'>
            <span>➕</span>
            Tambah Fitur
          </span>
        </button>
      </div>

      {/* Priority Filter */}
      <div className='flex gap-2'>
        {[
          { value: 'all', label: 'Semua', icon: '📋' },
          { value: 'must', label: 'Must Have', icon: '🎯' },
          { value: 'should', label: 'Should Have', icon: '⭐' },
          { value: 'could', label: 'Could Have', icon: '✨' },
          { value: 'wont', label: "Won't Have", icon: '⏳' },
        ].map((priority) => (
          <button
            key={priority.value}
            onClick={() => setSelectedPriority(priority.value as PriorityLevel | 'all')}
            className={`
              px-4 py-2 rounded-lg flex items-center gap-2
              ${selectedPriority === priority.value ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <span>{priority.icon}</span>
            <span>{priority.label}</span>
          </button>
        ))}
      </div>

      {/* Features List */}
      <div className='space-y-4'>
        {filteredFeatures.length === 0 ? (
          <div className='text-center py-8 text-gray-500'>Belum ada fitur yang ditambahkan</div>
        ) : (
          filteredFeatures.map((feature) => (
            <div key={feature.id} className='border rounded-lg p-4 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium'>{feature.name}</h3>
                  <p className='text-gray-600 mt-1'>{feature.description}</p>
                </div>
                <div className='flex gap-2'>
                  <PriorityBadge priority={feature.priority} />
                  <ComplexityBadge complexity={feature.complexity} />
                </div>
              </div>

              <div className='mt-4'>
                <h4 className='text-sm font-medium text-gray-700'>Kriteria Validasi:</h4>
                <ul className='mt-2 space-y-1'>
                  {feature.validationCriteria.map((criteria, index) => (
                    <li key={index} className='text-gray-600 text-sm flex items-start gap-2'>
                      <span className='text-blue-500'>•</span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-4 flex justify-end gap-2'>
                <button onClick={() => setEditingFeature(feature)} className='text-blue-600 hover:text-blue-700'>
                  Edit
                </button>
                <button onClick={() => handleFeatureDelete(feature.id)} className='text-red-600 hover:text-red-700'>
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Feature Form Modal */}
      {(showForm || editingFeature) && (
        <FeatureForm
          feature={editingFeature}
          onSubmit={editingFeature ? handleFeatureEdit : handleFeatureAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingFeature(null);
          }}
        />
      )}

      {/* Tips Section */}
      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <h3 className='text-blue-800 font-medium'>💡 Tips Prioritas Fitur</h3>
        <ul className='mt-2 space-y-2 text-blue-700'>
          <li>• Must Have: Fitur kritis yang harus ada di MVP</li>
          <li>• Should Have: Fitur penting tapi tidak kritis</li>
          <li>• Could Have: Fitur yang baik untuk dimiliki</li>
          <li>• Won&apos;t Have: Fitur yang ditunda untuk versi berikutnya</li>
        </ul>
      </div>
    </div>
  );
}
