// src/app/(protected)/materi-pembelajaran/artikel/[slug]/page.tsx
import { auth } from '../../../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

// Types for detailed article
interface DetailedArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string[];
  author: string;
  publishedAt: Date;
  readingTime: number;
  thumbnailUrl?: string;
}

// Dummy articles data
const articlesData: DetailedArticle[] = [
  {
    id: '1',
    slug: 'memulai-bisnis-online',
    title: 'Cara Memulai Bisnis Online dari Nol',
    description: 'Panduan lengkap untuk memulai bisnis online Anda dengan modal minimal.',
    content: `
# Cara Memulai Bisnis Online dari Nol

Memulai bisnis online tidak harus dengan modal besar. Berikut adalah langkah-langkah kunci yang perlu Anda ketahui:

## 1. Tentukan Produk atau Jasa
Pilih produk atau jasa yang sesuai dengan passion dan keahlian Anda. Pastikan ada permintaan pasar untuk apa yang akan Anda tawarkan.

## 2. Riset Pasar
Lakukan riset sederhana:
- Siapa target market Anda?
- Apa yang mereka butuhkan?
- Bagaimana kebiasaan belanja mereka?
- Siapa kompetitor Anda?

## 3. Buat Rencana Bisnis Sederhana
- Target penjualan
- Modal yang dibutuhkan
- Strategi pemasaran
- Timeline pelaksanaan

## 4. Mulai dari Platform yang Ada
Manfaatkan marketplace yang sudah ada seperti Tokopedia, Shopee, atau Instagram untuk mulai berjualan.

## 5. Fokus pada Pelayanan
Berikan pelayanan terbaik untuk mendapatkan review positif dan pelanggan loyal.

Ingat, kesuksesan tidak datang dalam semalam. Fokus pada pembelajaran dan perbaikan berkelanjutan.
    `,
    category: ['Bisnis Online', 'Pemula'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-15'),
    readingTime: 10,
  },
  {
    id: '2',
    slug: 'analisis-kompetitor',
    title: 'Teknik Analisis Kompetitor untuk UKM',
    description: 'Pelajari cara menganalisis kompetitor untuk meningkatkan daya saing bisnis Anda.',
    content: `
# Teknik Analisis Kompetitor untuk UKM

Memahami kompetitor adalah kunci untuk memenangkan pasar. Berikut panduan praktisnya:

## 1. Identifikasi Kompetitor
- Kompetitor langsung: menjual produk/jasa sama
- Kompetitor tidak langsung: menjual produk/jasa substitusi
- Kompetitor potensial: bisa masuk ke pasar Anda

## 2. Analisis Product-Market Fit
- Apa yang membuat produk mereka laku?
- Bagaimana positioning mereka?
- Apa kelebihan dan kekurangan produk mereka?

## 3. Pelajari Strategi Marketing
- Channel marketing yang mereka gunakan
- Gaya komunikasi dengan pelanggan
- Promosi yang sering dilakukan

## 4. Evaluasi Pricing Strategy
- Bandingkan harga produk sejenis
- Pelajari strategi diskon
- Analisis margin yang mungkin mereka dapat

## 5. Identifikasi Peluang
Cari celah yang belum digarap kompetitor:
- Segmen pasar yang terabaikan
- Fitur produk yang belum ada
- Layanan yang bisa ditingkatkan

Gunakan informasi ini untuk memperkuat posisi bisnis Anda di pasar.
    `,
    category: ['Strategi Bisnis', 'Analisis'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-20'),
    readingTime: 8,
  },
  {
    id: '3',
    slug: 'financial-planning-ukm',
    title: 'Financial Planning untuk UKM',
    description: 'Panduan dasar mengelola keuangan bisnis untuk pemula.',
    content: `
# Financial Planning untuk UKM

Pengelolaan keuangan yang baik adalah fondasi bisnis yang sehat. Simak panduannya:

## 1. Pisahkan Keuangan Pribadi & Bisnis
- Buat rekening terpisah
- Catat semua transaksi
- Tetapkan gaji untuk diri sendiri

## 2. Buat Pencatatan Sederhana
Minimal harus ada:
- Catatan pemasukan
- Catatan pengeluaran
- Arus kas (cashflow)
- Laporan laba rugi sederhana

## 3. Kelola Modal Kerja
- Hitung kebutuhan modal kerja
- Atur persediaan dengan efisien
- Kelola piutang dan hutang

## 4. Rencanakan Anggaran
- Buat proyeksi penjualan
- Rencanakan pengeluaran
- Siapkan dana darurat

## 5. Monitor dan Evaluasi
- Periksa laporan keuangan secara rutin
- Bandingkan dengan target
- Lakukan penyesuaian jika perlu

Pengelolaan keuangan yang baik akan membantu bisnis Anda bertahan dan berkembang.
    `,
    category: ['Keuangan', 'Manajemen'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-25'),
    readingTime: 12,
  },
];

// Get article by slug
function getArticleBySlug(slug: string): DetailedArticle | undefined {
  return articlesData.find((article) => article.slug === slug);
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className='max-w-3xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold'>Artikel tidak ditemukan</h1>
        <Link href='/materi-pembelajaran/artikel' className='text-blue-600 hover:underline mt-4 inline-block'>
          Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <Link href='/materi-pembelajaran/artikel' className='text-blue-600 hover:underline mb-6 inline-block'>
        ← Kembali ke daftar artikel
      </Link>

      <article className='prose prose-lg max-w-none'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
          <div className='flex gap-2 mb-4'>
            {article.category.map((cat, index) => (
              <span key={index} className='text-sm bg-gray-100 px-3 py-1 rounded-full'>
                {cat}
              </span>
            ))}
          </div>
          <div className='text-gray-600 text-sm'>
            <span>Oleh {article.author}</span>
            <span className='mx-2'>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span className='mx-2'>•</span>
            <span>{article.readingTime} menit membaca</span>
          </div>
        </div>

        <div className='mt-8'>
          {/* Using markdown-style content */}
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>
      </article>
    </div>
  );
}
