// src/app/pmi/local-reseller/page.tsx
import Link from 'next/link';

export default function LocalResellerPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Local Reseller Business Template</h1>

      {/* Customer Understanding Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-6'>1. Customer Understanding (JTBD)</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Functional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Mendapatkan produk lokal berkualitas untuk pasar Indonesia</li>
              <li>Memverifikasi keaslian produk</li>
              <li>Mengorganisir pengiriman ke Indonesia</li>
              <li>Menjamin produk sampai dengan aman</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Emotional Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Percaya diri menjual produk original</li>
              <li>Bangga bisa memenuhi permintaan pasar Indonesia</li>
              <li>Aman dari resiko penipuan</li>
              <li>Puas bisa memberikan harga terbaik</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Social Jobs</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Dikenal sebagai reseller terpercaya</li>
              <li>Menjadi sumber produk original</li>
              <li>Membantu pembeli Indonesia dapat produk asli</li>
              <li>Menjadi referensi untuk produk tertentu</li>
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
                'Kesulitan Verifikasi Produk:',
                '- Banyak produk palsu beredar',
                '- Sulit membedakan asli vs palsu',
                '- Resiko tertipu supplier',
                'Harga Tidak Kompetitif:',
                '- Terlalu banyak perantara',
                '- Biaya operasional tinggi',
                '- Kompetisi dengan produk KW',
                'Logistik Kompleks:',
                '- Pengiriman mahal',
                '- Resiko barang rusak',
                '- Proses customs rumit',
              ],
            },
            {
              title: 'Solution',
              content: [
                'Sistem Verifikasi Produk:',
                '- Hubungan langsung dengan brand/toko resmi',
                '- Sertifikat keaslian',
                '- Garansi produk',
                'Optimasi Harga:',
                '- Beli langsung dari source',
                '- Sistem pre-order untuk kurangi stok',
                '- Bundle pengiriman',
                'Manajemen Pengiriman:',
                '- Kerjasama forwarder terpercaya',
                '- Asuransi pengiriman',
                '- Tracking system',
              ],
            },
            {
              title: 'Unique Value Proposition',
              content: ['"Produk Original, Harga Source, Pengiriman Aman"', 'Fokus: Keaslian, Harga Wajar, Kepercayaan'],
            },
            {
              title: 'Unfair Advantage',
              content: ['Akses langsung ke supplier resmi', 'Lokasi di negara source', 'Network PMI untuk distribusi', 'Pemahaman pasar Indonesia'],
            },
            {
              title: 'Customer Segments',
              content: [
                'Target Utama:',
                '- Online shop Indonesia',
                '- Pembeli individual',
                '- Komunitas penggemar produk tertentu',
                '- Reseller Indonesia',
              ],
            },
            {
              title: 'Key Metrics',
              content: [
                'Volume penjualan bulanan',
                'Profit margin per produk',
                'Customer retention rate',
                'Rating kepuasan',
                'Jumlah komplain/retur',
              ],
            },
            {
              title: 'Channels',
              content: [
                'Online:',
                '- Instagram Shop',
                '- WhatsApp Katalog',
                '- TikTok Shop',
                '- Facebook Marketplace',
                'Offline:',
                '- Meet-up komunitas',
                '- Bazaar PMI',
                '- Referral sistem',
              ],
            },
            {
              title: 'Cost Structure',
              content: [
                'Biaya Tetap:',
                '- Platform online fee',
                '- Biaya penyimpanan',
                '- Marketing tools',
                '- Admin support',
                'Biaya Variabel:',
                '- Modal produk',
                '- Packaging',
                '- Shipping cost',
                '- Insurance',
              ],
            },
            {
              title: 'Revenue Streams',
              content: [
                'Primary Revenue:',
                '- Margin produk (15-25%)',
                '- Service fee (3-5%)',
                '- Shipping fee',
                'Additional Services:',
                '- Personal shopper fee',
                '- Express handling',
                '- Product authentication',
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
            <h3 className='text-xl font-semibold mb-4'>Tahap Persiapan (2-3 bulan)</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Market Research:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Identifikasi produk populer</li>
                  <li>Survey harga pasar</li>
                  <li>Analisis kompetitor</li>
                  <li>Tentukan target market spesifik</li>
                </ul>
              </li>
              <li>
                Supplier Setup:
                <ul className='list-disc pl-5 mt-2'>
                  <li>List toko resmi potensial</li>
                  <li>Verifikasi supplier</li>
                  <li>Negotiasi terms</li>
                  <li>Setup sistem pembayaran</li>
                </ul>
              </li>
              <li>
                Sistem Operasional:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Buat SOP pembelian</li>
                  <li>Setup sistem order</li>
                  <li>Proses quality control</li>
                  <li>Sistem packaging</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Tahap Launch (1-2 bulan)</h3>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                Platform Setup:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Buat konten marketing</li>
                  <li>Setup social media</li>
                  <li>Foto katalog produk</li>
                  <li>Buat price list</li>
                </ul>
              </li>
              <li>
                Customer Service:
                <ul className='list-disc pl-5 mt-2'>
                  <li>Template respon</li>
                  <li>FAQ list</li>
                  <li>Return policy</li>
                  <li>Garansi sistem</li>
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
