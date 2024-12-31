// src/app/pmi/import-export/page.tsx
import Link from 'next/link';

export default function ImportExportPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Import-Export Business Template</h1>

      {/* Customer Understanding Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>1. Customer Understanding (JTBD)</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Functional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Mendapatkan produk Indonesia untuk konsumsi pribadi</li>
              <li>Membeli produk Indonesia untuk dijual</li>
              <li>Mengirim produk lokal ke Indonesia</li>
              <li>Mengorganisir pengiriman barang secara berkala</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Emotional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Merasa terhubung dengan Indonesia melalui produk</li>
              <li>Bangga menjadi &quot;jembatan&quot; produk Indonesia</li>
              <li>Percaya diri dengan kualitas produk yang dijual</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Social Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Dikenal sebagai supplier produk Indonesia terpercaya</li>
              <li>Menjadi bagian dari komunitas PMI</li>
              <li>Membantu sesama PMI mendapat produk Indonesia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lean Canvas Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>2. Lean Canvas Detail</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              title: 'Problem',
              content: [
                'PMI kesulitan mendapat produk Indonesia:',
                '- Toko Indonesia terbatas',
                '- Harga mahal di toko Asia',
                '- Kualitas tidak terjamin',
                'Pengiriman tidak teratur:',
                '- Biaya kirim tinggi untuk quantity kecil',
                '- Tidak ada jadwal tetap',
                '- Resiko barang tertahan di customs',
                'Supplier tidak terpercaya:',
                '- Sulit verifikasi supplier Indonesia',
                '- Pembayaran beresiko',
                '- Kualitas tidak sesuai ekspektasi',
              ],
            },
            {
              title: 'Solution',
              content: [
                'Sistem Pre-Order Terorganisir:',
                '- Jadwal PO bulanan tetap',
                '- Sistem tracking order',
                '- Estimasi waktu pengiriman jelas',
                'Kerjasama Supplier:',
                '- Database supplier terpercaya',
                '- Kontrak harga khusus',
                '- Quality control process',
                'Jaringan Pengiriman:',
                '- Kolaborasi dengan PMI yang pulang',
                '- Kerjasama dengan jasa kargo',
                '- Sistem pembagian container',
              ],
            },
            {
              title: 'Unique Value Proposition',
              content: ['"Produk Indonesia Terpercaya, Pengiriman Terjadwal, Harga Terjangkau"', 'Fokus: Kemudahan, Kepercayaan, Komunitas'],
            },
            {
              title: 'Unfair Advantage',
              content: [
                'Jaringan PMI di berbagai negara',
                'Koneksi langsung dengan supplier Indonesia',
                'Sistem pre-order yang sudah terorganisir',
                'Pengalaman handle customs',
              ],
            },
            {
              title: 'Customer Segments',
              content: [
                'Target Utama:',
                '- PMI yang rindu produk Indonesia',
                '- PMI yang ingin mulai bisnis sampingan',
                '- Komunitas Indonesia di luar negeri',
                '- Toko Asia yang menjual produk Indonesia',
              ],
            },
            {
              title: 'Key Metrics',
              content: [
                'Jumlah pre-order per bulan',
                'Nilai transaksi per pengiriman',
                'Jumlah customer repeat order',
                'Rating kepuasan customer',
                'Ketepatan waktu pengiriman',
              ],
            },
            {
              title: 'Channels',
              content: [
                'Online:',
                '- WhatsApp Group komunitas',
                '- Facebook Group PMI',
                '- Instagram katalog produk',
                '- Website simple untuk order',
                'Offline:',
                '- Pertemuan komunitas PMI',
                '- Event Indonesia',
                '- Word of mouth',
              ],
            },
            {
              title: 'Cost Structure',
              content: [
                'Biaya Tetap:',
                '- Website maintenance',
                '- Packaging supplies',
                '- Storage/gudang kecil',
                '- Marketing online',
                'Biaya Variabel:',
                '- Modal produk',
                '- Biaya pengiriman',
                '- Customs clearance',
                '- Handling & quality check',
              ],
            },
            {
              title: 'Revenue Streams',
              content: [
                'Direct Sales:',
                '- Margin produk (20-30%)',
                '- Handling fee (5-10%)',
                '- Service fee pengiriman',
                'Value Added Services:',
                '- Rush order premium',
                '- Custom packaging',
                '- Door-to-door delivery',
              ],
            },
          ].map((section, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>{section.title}</h3>
              <ul className='list-disc pl-5 space-y-2'>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Guide Section */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>3. Implementation Guide</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Tahap Persiapan (1-2 bulan)</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Riset Produk:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Survey kebutuhan PMI</li>
                  <li>Identifikasi produk populer</li>
                  <li>Analisis competitor</li>
                </ul>
              </li>
              <li>
                Supplier Setup:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Verifikasi minimal 3 supplier</li>
                  <li>Negosiasi harga & MOQ</li>
                  <li>Setup sistem pembayaran</li>
                </ul>
              </li>
              <li>
                Sistem Pengiriman:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Identifikasi opsi cargo</li>
                  <li>Buat jadwal pengiriman</li>
                  <li>Setup tracking system</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Tahap Launch (1 bulan)</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Marketing Awal:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Buat grup WhatsApp</li>
                  <li>Post di komunitas PMI</li>
                  <li>Promo first order</li>
                </ul>
              </li>
              <li>
                Sistem Order:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Form order simple</li>
                  <li>Sistem konfirmasi</li>
                  <li>Payment collection</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='mt-12'>
        <Link href='/template-usaha/' className='text-blue-600 hover:text-blue-800'>
          &larr; Back to PMI Business Templates
        </Link>
      </div>
    </div>
  );
}
