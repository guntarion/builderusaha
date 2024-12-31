// src/app/mikro/cleaning-service/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Service',
};

export default function CleaningServicePage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white'>
      <a href='http://localhost:3050/template-usaha' className='text-blue-600 hover:text-blue-800 mb-8 inline-block'>
        &larr; Kembali ke daftar template usaha
      </a>
      <h1 className='text-4xl font-bold mb-8'>Panduan bisnis untuk usaha Cleaning Service skala mikro/kecil</h1>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>Bagian 1: Pendahuluan & Persiapan Operasional</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>1. Pendahuluan</h3>

            <div className='space-y-4'>
              <div>
                <h4 className='font-medium mb-2'>Definisi Layanan dan Cakupan</h4>
                <div className='space-y-2'>
                  <h5 className='font-medium'>Layanan Dasar:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>General cleaning (lantai, jendela, furniture)</li>
                    <li>Bathroom cleaning</li>
                    <li>Kitchen cleaning</li>
                    <li>Dust removal</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Layanan Spesialis:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Deep cleaning</li>
                    <li>Post-construction cleaning</li>
                    <li>Move in/out cleaning</li>
                    <li>Spring cleaning</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Layanan Premium:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Disinfection service</li>
                    <li>Carpet & upholstery cleaning</li>
                    <li>Floor maintenance</li>
                    <li>High-rise window cleaning</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className='font-medium mb-2'>Analisis Kebutuhan dan Tren</h4>
                <div className='space-y-2'>
                  <h5 className='font-medium'>Tren Pasar:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Peningkatan kesadaran kebersihan pasca pandemi</li>
                    <li>Tren work from home meningkatkan kebutuhan</li>
                    <li>Gaya hidup praktis perkotaan</li>
                    <li>Kesadaran green cleaning</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Market Drivers:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Pertumbuhan apartemen & perumahan</li>
                    <li>Perkantoran & bisnis UMKM</li>
                    <li>Layanan berbasis aplikasi</li>
                    <li>Kebutuhan profesional muda</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className='font-medium mb-2'>Target Pelanggan</h4>
                <div className='space-y-2'>
                  <h5 className='font-medium'>Segmen Residensial:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Keluarga profesional</li>
                    <li>Pemilik apartemen</li>
                    <li>Expat & professional asing</li>
                    <li>Single professional</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Segmen Komersial:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Small office</li>
                    <li>Klinik & praktik dokter</li>
                    <li>Cafe & resto kecil</li>
                    <li>Toko ritel</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className='font-medium mb-2'>Regulasi dan Sertifikasi</h4>
                <ul className='list-disc pl-6 text-gray-600'>
                  <li>SIUP Mikro/Kecil</li>
                  <li>NIB (Nomor Induk Berusaha)</li>
                  <li>Sertifikasi K3 dasar</li>
                  <li>BPJS Ketenagakerjaan untuk karyawan</li>
                  <li>Sertifikasi penggunaan bahan pembersih (opsional)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>2. Persiapan Operasional</h3>

            <div className='space-y-4'>
              <div>
                <h4 className='font-medium mb-2'>Mode Layanan</h4>
                <p className='text-gray-600'>Rekomendasi: Mobile service dengan home office</p>
                <ul className='list-disc pl-6 text-gray-600'>
                  <li>Sistem berbasis lokasi</li>
                  <li>Tim mobile dengan peralatan portable</li>
                  <li>Scheduling system berbasis zona</li>
                  <li>Support office untuk administrasi</li>
                </ul>
              </div>

              <div>
                <h4 className='font-medium mb-2'>Setup Home Office (15-20m²)</h4>
                <div className='space-y-2'>
                  <h5 className='font-medium'>Area Administrasi:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Meja kerja</li>
                    <li>Storage dokumen</li>
                    <li>Area meeting mini</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Storage Equipment:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Rak peralatan</li>
                    <li>Area supplies</li>
                    <li>Charging station</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Area Persiapan:</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Preparation counter</li>
                    <li>Chemical mixing area</li>
                    <li>Equipment check area</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className='font-medium mb-2'>Peralatan Esensial (Budget &lt; 100 juta)</h4>
                <div className='space-y-2'>
                  <h5 className='font-medium'>Cleaning Equipment (40 juta):</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Professional vacuum cleaner (2 unit)</li>
                    <li>Floor polisher</li>
                    <li>Steam cleaner</li>
                    <li>High-pressure washer</li>
                    <li>Extension poles & accessories</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Basic Tools (15 juta):</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Cleaning trolley sets</li>
                    <li>Mop set profesional</li>
                    <li>Window cleaning kit</li>
                    <li>Microfiber tools</li>
                    <li>Safety equipment</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Supplies Awal (10 juta):</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Chemical supplies</li>
                    <li>Cleaning agents</li>
                    <li>Disposable items</li>
                    <li>Safety supplies</li>
                  </ul>
                </div>
                <div className='space-y-2 mt-4'>
                  <h5 className='font-medium'>Operational Support (20 juta):</h5>
                  <ul className='list-disc pl-6 text-gray-600'>
                    <li>Mobile phones/tablets</li>
                    <li>Basic office equipment</li>
                    <li>Seragam dan APD</li>
                    <li>Marketing materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would follow the same pattern */}
    </div>
  );
}
