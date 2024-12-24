// src/app/(protected)/materi-pembelajaran/artikel/page.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

// Types for articles
interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string[];
  author: string;
  publishedAt: Date;
  readingTime: number;
  thumbnailUrl?: string;
}

// Menggunakan artikel yang sama dengan yang ada di detail page
const articles: Article[] = [
  {
    id: '1',
    slug: 'memulai-bisnis-online',
    title: 'Cara Memulai Bisnis Online dari Nol',
    description: 'Panduan lengkap untuk memulai bisnis online Anda dengan modal minimal.',
    category: ['Bisnis Online', 'Pemula'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-15'),
    readingTime: 10,
    thumbnailUrl: '/placeholder-business-online.jpg', // Nanti bisa diganti dengan gambar sebenarnya
  },
  {
    id: '2',
    slug: 'analisis-kompetitor',
    title: 'Teknik Analisis Kompetitor untuk UKM',
    description: 'Pelajari cara menganalisis kompetitor untuk meningkatkan daya saing bisnis Anda.',
    category: ['Strategi Bisnis', 'Analisis'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-20'),
    readingTime: 8,
    thumbnailUrl: '/placeholder-competitor.jpg',
  },
  {
    id: '3',
    slug: 'financial-planning-ukm',
    title: 'Financial Planning untuk UKM',
    description: 'Panduan dasar mengelola keuangan bisnis untuk pemula.',
    category: ['Keuangan', 'Manajemen'],
    author: 'Tim Business Journey',
    publishedAt: new Date('2024-01-25'),
    readingTime: 12,
    thumbnailUrl: '/placeholder-finance.jpg',
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/materi-pembelajaran/artikel/${article.slug}`}>
      <div className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all'>
        <div className='mb-4 h-48 bg-gray-200 rounded-md overflow-hidden'>
          {/* Placeholder div dengan background color */}
          <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-400'>Thumbnail</span>
          </div>
        </div>
        <div className='flex gap-2 mb-2'>
          {article.category.map((cat, index) => (
            <span key={index} className='text-xs bg-gray-100 px-2 py-1 rounded-full'>
              {cat}
            </span>
          ))}
        </div>
        <h3 className='text-xl font-semibold mb-2'>{article.title}</h3>
        <p className='text-gray-600 mb-4'>{article.description}</p>
        <div className='flex items-center text-sm text-gray-500'>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span className='mx-2'>•</span>
          <span>{article.readingTime} menit membaca</span>
        </div>
      </div>
    </Link>
  );
}

export default async function ArticlesPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold'>Artikel Panduan</h1>
          <p className='text-gray-600 mt-2'>Pelajari berbagai panduan dan studi kasus bisnis</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
