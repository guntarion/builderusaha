// src/components/ui/AssessmentImage.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AssessmentImageProps {
  imageUrl: string;
  title: string;
  isAvailable: boolean;
}

export function AssessmentImage({ imageUrl, title, isAvailable }: AssessmentImageProps) {
  const [imageExists, setImageExists] = useState(true);

  // If image fails to load, we'll show the placeholder div instead
  const handleImageError = () => {
    setImageExists(false);
  };

  return (
    <div className='relative w-full aspect-video'>
      {imageExists ? (
        <div className='relative w-full h-full'>
          <Image src={imageUrl} alt={title} fill className='object-cover' onError={handleImageError} />
        </div>
      ) : (
        // Placeholder div with gray background
        <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
          <span className='bg-gray-700 text-white px-4 py-2 rounded-full text-sm'>{isAvailable ? 'Gambar segera hadir' : 'Segera Hadir'}</span>
        </div>
      )}

      {/* Overlay for unavailable assessments */}
      {!isAvailable && imageExists && (
        <div className='absolute inset-0 bg-gray-900/50 flex items-center justify-center'>
          <span className='bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm'>Segera Hadir</span>
        </div>
      )}
    </div>
  );
}
