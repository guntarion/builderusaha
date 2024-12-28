// src/app/(protected)/perjalanan-bisnis/fase-2/mvp-designer/components/BaseInfoSection.tsx

import { MVPDesign } from '../lib/MVPTypes';

interface BaseInfoSectionProps {
  baseInfo: MVPDesign['baseInfo'];
  onChange: (field: keyof MVPDesign['baseInfo'], value: string) => void;
}

export default function BaseInfoSection({ baseInfo, onChange }: BaseInfoSectionProps) {
  return (
    <div className='space-y-6'>
      <h2 className='text-xl font-semibold'>Informasi Dasar MVP</h2>
      <p className='text-gray-600'>
        Informasi ini akan menjadi dasar dalam perancangan MVP Anda. Jika Anda sudah membuat Lean Canvas, Anda dapat menggunakan informasi tersebut di
        sini.
      </p>

      <div className='space-y-4'>
        <div>
          <label className='block text-gray-700 font-medium mb-2'>Masalah yang Ingin Diselesaikan</label>
          <textarea
            value={baseInfo.problem}
            onChange={(e) => onChange('problem', e.target.value)}
            placeholder='Jelaskan masalah utama yang ingin Anda selesaikan'
            className='w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <p className='mt-1 text-sm text-gray-500'>Contoh: UKM kesulitan mengelola inventory secara akurat dan real-time</p>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-2'>Target Pengguna</label>
          <textarea
            value={baseInfo.customerSegments}
            onChange={(e) => onChange('customerSegments', e.target.value)}
            placeholder='Siapa target pengguna utama dari solusi Anda?'
            className='w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <p className='mt-1 text-sm text-gray-500'>Contoh: Pemilik toko retail kecil dengan 1-5 karyawan di kota besar</p>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-2'>Value Proposition</label>
          <textarea
            value={baseInfo.valueProposition}
            onChange={(e) => onChange('valueProposition', e.target.value)}
            placeholder='Apa nilai unik yang Anda tawarkan?'
            className='w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <p className='mt-1 text-sm text-gray-500'>Contoh: Sistem inventory realtime yang mudah digunakan dan terjangkau</p>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-2'>Solusi yang Diusulkan</label>
          <textarea
            value={baseInfo.solution}
            onChange={(e) => onChange('solution', e.target.value)}
            placeholder='Bagaimana solusi Anda akan bekerja?'
            className='w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <p className='mt-1 text-sm text-gray-500'>Contoh: Aplikasi mobile dengan barcode scanning dan dashboard web</p>
        </div>
      </div>

      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h3 className='text-blue-800 font-medium'>💡 Tips Pengisian</h3>
        <ul className='mt-2 space-y-2 text-blue-700'>
          <li>• Fokus pada masalah yang paling mendesak dan spesifik</li>
          <li>• Jelaskan target pengguna secara detail termasuk karakteristik khusus</li>
          <li>• Value proposition harus jelas dan berbeda dari kompetitor</li>
          <li>• Solusi harus realistis untuk dikembangkan sebagai MVP</li>
        </ul>
      </div>
    </div>
  );
}
