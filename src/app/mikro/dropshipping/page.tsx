// src/app/mikro/dropshipping/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dropshipping',
};

export default function DropshippingPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white'>
      <a href='http://localhost:3050/template-usaha' className='text-blue-600 hover:text-blue-800 mb-8 inline-block'>
        &larr; Kembali ke daftar template usaha
      </a>
      <h1 className='text-4xl font-bold mb-8'>Panduan bisnis dropshipping</h1>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>1. PENDAHULUAN</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Definisi Model Bisnis Dropshipping</h3>
            <p className='text-gray-600'>
              Dropshipping adalah model bisnis retail dimana penjual tidak menyimpan stok fisik produk, melainkan meneruskan pesanan pelanggan kepada
              supplier/wholesaler yang akan mengirim langsung ke pembeli. Karakteristik utamanya:
            </p>
            <ul className='list-disc pl-6 mt-2 text-gray-600'>
              <li>Modal awal minimal karena tidak perlu stok</li>
              <li>Risiko inventory rendah</li>
              <li>Fokus pada pemasaran dan customer service</li>
              <li>Margin lebih kecil (10-25%) dibanding model retail tradisional</li>
              <li>Sangat bergantung pada kualitas supplier</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Analisis Tren Pasar</h3>
            <p className='text-gray-600'>Beberapa tren terkini yang mempengaruhi bisnis dropshipping:</p>
            <ul className='list-disc pl-6 mt-2 text-gray-600'>
              <li>Peningkatan adopsi e-commerce akibat pandemi</li>
              <li>Integrasi marketplace dengan sistem dropship</li>
              <li>Automatisasi proses order fulfillment</li>
              <li>Peningkatan kompetisi dan penurunan barrier to entry</li>
              <li>Tuntutan kecepatan pengiriman yang semakin tinggi</li>
              <li>Preferensi konsumen terhadap one-stop shopping</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Target Market Potensial</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Segmentasi Primer:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Usia: 18-35 tahun</li>
                  <li>Familiar dengan belanja online</li>
                  <li>Mengutamakan kenyamanan berbelanja</li>
                  <li>Price-sensitive</li>
                  <li>Aktif di media sosial</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Segmentasi Sekunder:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Usia: 35-50 tahun</li>
                  <li>Memiliki daya beli lebih tinggi</li>
                  <li>Mencari produk spesifik</li>
                  <li>Menghargai layanan personal</li>
                  <li>Loyal jika puas dengan layanan</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Regulasi dan Perizinan</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Dokumen Wajib:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>NIB (Nomor Induk Berusaha)</li>
                  <li>NPWP</li>
                  <li>Akun marketplace terverifikasi</li>
                  <li>Rekening bank khusus bisnis</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Regulasi Penting:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>UU ITE untuk transaksi online</li>
                  <li>Peraturan perlindungan konsumen</li>
                  <li>Regulasi marketplace terkait dropshipping</li>
                  <li>Ketentuan pajak UMKM</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Compliance:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Kebijakan privasi data pelanggan</li>
                  <li>Terms & conditions yang jelas</li>
                  <li>Perjanjian kerjasama dengan supplier</li>
                  <li>Standar penanganan komplain</li>
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
