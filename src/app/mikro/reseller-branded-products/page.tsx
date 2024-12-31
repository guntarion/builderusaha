// src/app/mikro/reseller-branded-products/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reseller Branded Products',
};

export default function ResellerBrandedProductsPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white'>
      <a href='http://localhost:3050/template-usaha' className='text-blue-600 hover:text-blue-800 mb-8 inline-block'>
        &larr; Kembali ke daftar template usaha
      </a>
      <h1 className='text-4xl font-bold mb-8'>Panduan bisnis Reseller Branded Products</h1>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>1. PENDAHULUAN</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Definisi Model Bisnis Reseller Branded Products</h3>
            <p className='text-gray-600'>
              Model bisnis ini merupakan bentuk usaha retail dimana pelaku usaha membeli produk branded (bermerek) dari distributor resmi atau
              supplier terpercaya untuk dijual kembali kepada konsumen akhir. Karakteristik utamanya:
            </p>
            <ul className='list-disc pl-6 mt-2 text-gray-600'>
              <li>Menjual produk dengan brand yang sudah dikenal</li>
              <li>Memiliki margin yang relatif lebih kecil (15-30%) dibanding produk non-branded</li>
              <li>Membutuhkan modal awal yang cukup karena harga produk branded umumnya lebih tinggi</li>
              <li>Berfokus pada keaslian dan garansi produk sebagai nilai jual utama</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Analisis Tren Pasar</h3>
            <p className='text-gray-600'>Beberapa tren terkini yang perlu diperhatikan:</p>
            <ul className='list-disc pl-6 mt-2 text-gray-600'>
              <li>Peningkatan kesadaran akan produk original vs KW</li>
              <li>Pergeseran preferensi konsumen ke platform digital/social commerce</li>
              <li>Meningkatnya permintaan akan produk premium namun terjangkau</li>
              <li>Tumbuhnya segmen konsumen yang value-conscious</li>
              <li>Berkembangnya sistem pembayaran BNPL (Buy Now Pay Later)</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Target Market Potensial</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Demografis:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Usia: 25-40 tahun</li>
                  <li>SES: B dan C+</li>
                  <li>Pekerjaan: Profesional muda, karyawan swasta</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Psikografis:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Brand conscious tapi price sensitive</li>
                  <li>Mengutamakan keaslian produk</li>
                  <li>Aktif di media sosial</li>
                  <li>Mementingkan kepraktisan berbelanja</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Regulasi dan Perizinan</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Perizinan Dasar:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>NIB (Nomor Induk Berusaha) melalui OSS</li>
                  <li>NPWP pribadi atau badan</li>
                  <li>Surat Keterangan Domisili Usaha</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Perizinan Khusus:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>SIUP untuk skala mikro (jika omzet di atas ketentuan UMK)</li>
                  <li>Surat izin dari brand/distributor (jika diperlukan)</li>
                  <li>Sertifikat Halal (untuk produk tertentu)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Aspek Legal Tambahan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Terms & Conditions untuk platform online</li>
                  <li>Kebijakan privasi untuk data pelanggan</li>
                  <li>Dokumen perjanjian dengan supplier</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would follow the same pattern */}
    </div>
  );
}
