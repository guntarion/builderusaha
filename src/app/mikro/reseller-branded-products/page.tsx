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

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>2. PERSIAPAN OPERASIONAL</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Rekomendasi Channel Penjualan</h3>
            <p className='text-gray-600'>Untuk modal di bawah 100 juta, strategi hybrid dengan fokus online adalah yang paling optimal:</p>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Channel Online Utama:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Marketplace (Tokopedia, Shopee)</li>
                  <li>Instagram Shopping</li>
                  <li>WhatsApp Business</li>
                  <li>Website sendiri (opsional, untuk tahap lanjutan)</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Channel Offline Pendukung:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Pop-up booth di mal atau event</li>
                  <li>Konsinyasi di toko partner</li>
                  <li>Display produk di rumah/kantor (appointment basis)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Panduan Setup Tempat Usaha/Platform</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Setup Physical Space:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Area penyimpanan dengan suhu ruang yang terkontrol</li>
                  <li>Meja/area untuk packaging</li>
                  <li>Area display mini untuk foto produk</li>
                  <li>Lemari/rak dengan sistem kategorisasi yang jelas</li>
                  <li>Pencahayaan yang baik untuk dokumentasi produk</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Setup Digital Platform:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Profil marketplace yang profesional dan terverifikasi</li>
                  <li>Bio Instagram yang informatif dengan highlight stories terorganisir</li>
                  <li>Katalog WhatsApp Business yang terstruktur</li>
                  <li>Template foto dan deskripsi produk yang konsisten</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Inventori</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Sistem Pencatatan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Spreadsheet terstruktur dengan formula otomatis</li>
                  <li>Kategorisasi produk yang jelas</li>
                  <li>Update stok real-time setiap ada transaksi</li>
                  <li>Sistem alert untuk reorder point</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Penyimpanan Fisik:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Pengelompokan berdasarkan kategori dan brand</li>
                  <li>Label yang jelas untuk setiap produk</li>
                  <li>First In First Out (FIFO) untuk produk dengan tanggal kadaluarsa</li>
                  <li>Area terpisah untuk produk retur/rusak</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Kriteria Pemilihan Supplier</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Kriteria Utama:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Status resmi/legalitas supplier</li>
                  <li>Track record dan reputasi</li>
                  <li>Konsistensi ketersediaan stok</li>
                  <li>Sistem garansi yang jelas</li>
                  <li>Harga dan minimum order yang kompetitif</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Pertimbangan Tambahan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Fleksibilitas pembayaran</li>
                  <li>Dukungan marketing dari supplier</li>
                  <li>Respon time untuk pemesanan</li>
                  <li>Kebijakan retur yang fair</li>
                  <li>Lokasi dan biaya pengiriman</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Packaging dan Pengiriman</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Standar Packaging:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Double wrapping untuk keamanan</li>
                  <li>Bubble wrap untuk produk fragile</li>
                  <li>Box/paperbag branded untuk nilai tambah</li>
                  <li>Kartu ucapan dan panduan perawatan produk</li>
                  <li>Segel keamanan yang jelas</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Sistem Pengiriman:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Kerjasama dengan minimal 2-3 ekspedisi</li>
                  <li>SOP pengecekan barang sebelum kirim</li>
                  <li>Asuransi untuk produk bernilai tinggi</li>
                  <li>Tracking number yang selalu diupdate</li>
                  <li>Follow up status pengiriman</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Setup Sistem Pembayaran</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Metode Pembayaran:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Transfer bank (minimal 2 rekening berbeda bank)</li>
                  <li>E-wallet (OVO, GoPay, DANA)</li>
                  <li>Virtual Account</li>
                  <li>QRIS</li>
                  <li>BNPL untuk transaksi tertentu</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Sistem Verifikasi:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>SOP pengecekan pembayaran</li>
                  <li>Template konfirmasi pembayaran</li>
                  <li>Sistem reminder untuk pembayaran pending</li>
                  <li>Pencatatan transaksi yang terstruktur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>3. STANDAR PRODUK & QUALITY CONTROL</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Kriteria Pemilihan Produk</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Aspek Produk:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Keaslian dan kualitas terjamin</li>
                  <li>Margin minimal 15-30%</li>
                  <li>Permintaan pasar yang stabil</li>
                  <li>Daya tahan produk</li>
                  <li>Kemudahan penyimpanan</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Aspek Bisnis:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Volume penjualan potensial</li>
                  <li>Biaya penyimpanan</li>
                  <li>Risiko kerusakan/kadaluarsa</li>
                  <li>Kompetisi pasar</li>
                  <li>Potensi repeat order</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Quality Control</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Prosedur Penerimaan Barang:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Verifikasi keaslian produk</li>
                  <li>Pengecekan kondisi fisik dan packaging</li>
                  <li>Pemeriksaan tanggal produksi/kadaluarsa</li>
                  <li>Dokumentasi kondisi barang</li>
                  <li>Input data ke sistem inventory</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Monitoring Kualitas:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Inspeksi rutin stok yang tersimpan</li>
                  <li>Pengecekan kondisi penyimpanan</li>
                  <li>Rotasi stok berdasar FIFO</li>
                  <li>Pencatatan produk reject/rusak</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Standar Display/Foto Produk</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Standar Fotografi:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Minimal 5-7 foto per produk</li>
                  <li>Background putih/neutral</li>
                  <li>Detail produk yang jelas</li>
                  <li>Size comparison dengan objek umum</li>
                  <li>Foto actual product</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Informasi Produk:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Deskripsi lengkap spesifikasi</li>
                  <li>Ukuran dan dimensi detail</li>
                  <li>Material dan care instruction</li>
                  <li>Garansi dan original guarantee</li>
                  <li>Disclaimer yang relevan</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Kebijakan Retur</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Syarat Retur:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Periode maksimal 3-7 hari</li>
                  <li>Produk belum digunakan</li>
                  <li>Tag dan segel masih utuh</li>
                  <li>Packaging lengkap</li>
                  <li>Bukti pembelian tersedia</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Prosedur Retur:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Form pengajuan retur</li>
                  <li>Dokumentasi kondisi produk</li>
                  <li>Verifikasi alasan retur</li>
                  <li>Opsi refund/exchange</li>
                  <li>Timeline penyelesaian yang jelas</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem After-Sales</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Layanan Pasca Pembelian:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Panduan perawatan produk</li>
                  <li>Garansi dan klaim</li>
                  <li>Consultation service</li>
                  <li>Reminder perawatan berkala</li>
                  <li>Program membership</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Follow Up Service:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Survey kepuasan pelanggan</li>
                  <li>Request review/testimoni</li>
                  <li>Update produk terbaru</li>
                  <li>Program referral</li>
                  <li>Penanganan komplain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>4. MANAJEMEN OPERASIONAL</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Rekomendasi Sistem POS</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Basic System (Modal &lt; 50 juta):</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Spreadsheet terstruktur</li>
                  <li>WhatsApp Business</li>
                  <li>Aplikasi pencatatan sederhana</li>
                  <li>Nota digital</li>
                  <li>Sistem reminder manual</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Advanced System (Modal 50-100 juta):</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Software POS terintegrasi</li>
                  <li>Sistem inventory otomatis</li>
                  <li>Payment gateway</li>
                  <li>CRM sederhana</li>
                  <li>Analytic tools</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Metode Inventory Tracking</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Sistem Pencatatan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Update real-time setiap transaksi</li>
                  <li>Kartu stok digital</li>
                  <li>Reorder point alerts</li>
                  <li>Batch tracking</li>
                  <li>Historical data</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Monitor Performa:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Analisis fast/slow moving items</li>
                  <li>Perhitungan stockturn</li>
                  <li>Wastage tracking</li>
                  <li>Seasonal trend analysis</li>
                  <li>Stock optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>SOP Order Fulfillment</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Penerimaan Order:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Verifikasi ketersediaan stok</li>
                  <li>Konfirmasi spesifikasi dengan pembeli</li>
                  <li>Pengecekan alamat pengiriman</li>
                  <li>Kalkulasi ongkos kirim</li>
                  <li>Konfirmasi total pembayaran</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Proses Order:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Quality check produk</li>
                  <li>Dokumentasi kondisi barang</li>
                  <li>Packaging sesuai standar</li>
                  <li>Input resi pengiriman</li>
                  <li>Update status ke pembeli</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Protokol Customer Service</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Standar Komunikasi:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Respon maksimal 1 jam di jam kerja</li>
                  <li>Template respon untuk FAQ</li>
                  <li>Bahasa yang profesional dan ramah</li>
                  <li>Problem solving yang solutif</li>
                  <li>Eskalasi masalah yang terstruktur</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Penanganan Keluhan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Dokumentasi setiap kasus</li>
                  <li>Timeline penyelesaian yang jelas</li>
                  <li>Follow up berkala</li>
                  <li>Kompensasi yang fair</li>
                  <li>Evaluasi untuk perbaikan sistem</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Pembukuan Sederhana</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Pencatatan Harian:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Penjualan per transaksi</li>
                  <li>Biaya operasional</li>
                  <li>Pembelian stok</li>
                  <li>Retur dan refund</li>
                  <li>Biaya marketing</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Laporan Berkala:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Rekap penjualan mingguan</li>
                  <li>Profit & loss bulanan</li>
                  <li>Analisis margin per produk</li>
                  <li>Cash flow statement</li>
                  <li>Proyeksi keuangan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>5. STRATEGI PEMASARAN</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Strategi Product Mix dan Pricing</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Product Mix:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Kategori produk yang saling melengkapi</li>
                  <li>Variasi price point</li>
                  <li>Kombinasi fast-moving dan high-margin items</li>
                  <li>Produk seasonal</li>
                  <li>Limited edition items</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Strategi Pricing:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Cost-plus pricing (margin 15-30%)</li>
                  <li>Competitive pricing analysis</li>
                  <li>Bundle pricing</li>
                  <li>Seasonal discount structure</li>
                  <li>Member price program</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Teknik Visual Merchandising</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Online Display:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Foto produk profesional</li>
                  <li>Video product review</li>
                  <li>Layouting yang eye-catching</li>
                  <li>Style inspiration</li>
                  <li>Mix and match suggestion</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Offline Display (jika ada):</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Eye-level display priority</li>
                  <li>Color blocking</li>
                  <li>Cross merchandising</li>
                  <li>Point of purchase display</li>
                  <li>Weekly display update</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Strategi Digital Marketing</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Social Media Marketing:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Content calendar terstruktur</li>
                  <li>Mix konten (60% value, 40% promosi)</li>
                  <li>Instagram Story daily update</li>
                  <li>Live streaming produk baru</li>
                  <li>Kolaborasi dengan micro-influencer</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Performance Marketing:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Instagram/Facebook Ads dengan target spesifik</li>
                  <li>Google Shopping Ads</li>
                  <li>Marketplace ads untuk produk unggulan</li>
                  <li>Retargeting campaign</li>
                  <li>Email marketing untuk member</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Program Promosi</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Regular Promotion:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Flash sale mingguan</li>
                  <li>Bundle deal</li>
                  <li>Purchase with purchase</li>
                  <li>Seasonal discount</li>
                  <li>Member special price</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Special Program:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Early bird offer untuk produk baru</li>
                  <li>Pre-order discount</li>
                  <li>Referral reward</li>
                  <li>Birthday special</li>
                  <li>Loyalty point reward</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Membership</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Struktur Member:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Free membership</li>
                  <li>Berbasis poin atau level</li>
                  <li>Upgrade berdasar akumulasi pembelian</li>
                  <li>Special benefit tiap level</li>
                  <li>Anniversary reward</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Member Benefits:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Exclusive price</li>
                  <li>Early access produk baru</li>
                  <li>Free shipping quota</li>
                  <li>Birthday discount</li>
                  <li>Point redemption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>6. PENGEMBANGAN BISNIS</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Peluang Ekspansi Produk</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Vertical Expansion:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Penambahan varian produk sejenis</li>
                  <li>Kolaborasi eksklusif dengan brand</li>
                  <li>Private label development</li>
                  <li>Premium line</li>
                  <li>Limited edition series</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Horizontal Expansion:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Kategori produk komplementer</li>
                  <li>Brand baru dengan target market sama</li>
                  <li>Seasonal items</li>
                  <li>Accessories dan add-ons</li>
                  <li>Service tambahan</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Opsi Pengembangan Channel</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Online Channel:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Website pribadi dengan e-commerce</li>
                  <li>Marketplace premium</li>
                  <li>Social commerce platform baru</li>
                  <li>Mobile app development</li>
                  <li>International marketplace</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Offline Channel:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Pop-up store</li>
                  <li>Shop-in-shop</li>
                  <li>Konsinyasi strategis</li>
                  <li>Franchise system</li>
                  <li>Exhibition participation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Potensi Partnership</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Brand Partnership:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Exclusive distributor agreement</li>
                  <li>Co-branding project</li>
                  <li>Official reseller status</li>
                  <li>Marketing collaboration</li>
                  <li>Product development</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Business Partnership:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Kolaborasi dengan complementary business</li>
                  <li>Joint promotion</li>
                  <li>Resource sharing</li>
                  <li>Community building</li>
                  <li>Event collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Strategi Branding</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Brand Development:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Unique value proposition</li>
                  <li>Brand story yang kuat</li>
                  <li>Visual identity yang konsisten</li>
                  <li>Brand voice guidelines</li>
                  <li>Customer experience standard</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Brand Growth:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Community engagement</li>
                  <li>Brand advocacy program</li>
                  <li>Content marketing</li>
                  <li>PR activities</li>
                  <li>CSR initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Sistem Reseller/Dropship</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Program Struktur:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Tier system berbasis performa</li>
                  <li>Margin yang kompetitif (10-20%)</li>
                  <li>Minimal order yang terjangkau</li>
                  <li>Support system lengkap</li>
                  <li>Insentif berbasis target</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Reseller Support:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Marketing kit digital</li>
                  <li>Product knowledge training</li>
                  <li>Group sharing platform</li>
                  <li>Regular update katalog</li>
                  <li>Sales skill training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>7. BEST PRACTICES & TIPS</h2>

        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-medium mb-2'>Tips Manajemen Modal Kerja</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Pengaturan Modal:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Alokasi 60% untuk stok</li>
                  <li>Emergency fund 20%</li>
                  <li>Marketing budget 10%</li>
                  <li>Operasional 10%</li>
                  <li>Buffer untuk seasonal stocking</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Cash Flow Management:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Monitor cash conversion cycle</li>
                  <li>Negosiasi term pembayaran supplier</li>
                  <li>Optimasi inventory level</li>
                  <li>Control biaya operasional</li>
                  <li>Reinvestasi profit terukur</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Cara Kontrol Stok Efektif</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Inventory Management:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Weekly stock count</li>
                  <li>ABC Analysis untuk prioritas</li>
                  <li>Setup minimum stock level</li>
                  <li>Forecasting berdasar historis</li>
                  <li>Antisipasi seasonal demand</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Loss Prevention:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Sistem dokumentasi ketat</li>
                  <li>Regular audit</li>
                  <li>Access control</li>
                  <li>Quality check rutin</li>
                  <li>Waste management</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Strategi Retensi Pelanggan</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Customer Engagement:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Personalized communication</li>
                  <li>Regular feedback collection</li>
                  <li>Loyalty program yang menarik</li>
                  <li>After-sales follow up</li>
                  <li>Problem resolution yang cepat</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Value Addition:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Product knowledge sharing</li>
                  <li>Style tips dan panduan</li>
                  <li>Exclusive member event</li>
                  <li>Birthday celebration</li>
                  <li>Priority customer service</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Manajemen Peak Season</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Persiapan:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Stock planning lebih awal</li>
                  <li>Additional temporary staff</li>
                  <li>System stress test</li>
                  <li>Marketing calendar</li>
                  <li>Contingency plan</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Eksekusi:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Extended operation hours</li>
                  <li>Priority handling system</li>
                  <li>Real-time monitoring</li>
                  <li>Crisis management protocol</li>
                  <li>Customer communication plan</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium mb-2'>Adaptasi Terhadap Tren</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium'>Market Monitoring:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Trend analysis rutin</li>
                  <li>Competitor watching</li>
                  <li>Customer feedback analysis</li>
                  <li>Industry report review</li>
                  <li>Social media monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium'>Business Adaptation:</h4>
                <ul className='list-disc pl-6 mt-2 text-gray-600'>
                  <li>Agile inventory management</li>
                  <li>Flexible marketing strategy</li>
                  <li>Product mix adjustment</li>
                  <li>Technology adoption</li>
                  <li>Service enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
