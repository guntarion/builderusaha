// src/app/(marketing)/template-usaha/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from 'src/components/layout/marketing/Navbar';

export default function TemplateUsahaPage() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        {/* PMI Section */}
        <section className='mb-16'>
          <div className='relative h-64 w-full mb-8 rounded-lg overflow-hidden'>
            <Image src='/images/templateusaha/header-usahapmi.jpg' alt='Usaha Khas Pekerja Migran Indonesia' fill className='object-cover' />
          </div>
          <h2 className='text-3xl font-bold mb-6'>USAHA KHAS PEKERJA MIGRAN INDONESIA</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { title: 'Import-Export', slug: 'import-export' },
              { title: 'Local Reseller', slug: 'local-reseller' },
              { title: 'Translation & Documentation Service', slug: 'translation-documentation-service' },
              { title: 'Online Training/Course', slug: 'online-training-course' },
              { title: 'Local Assistant Service', slug: 'local-assistant-service' },
              { title: 'Food Business + Catering', slug: 'food-business-catering' },
            ].map((item) => (
              <Link key={item.slug} href={`/pmi/${item.slug}/`} className='block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Mikro Section */}
        <section>
          <div className='relative h-64 w-full mb-8 rounded-lg overflow-hidden'>
            <Image src='/images/templateusaha/header-usahamikro.jpg' alt='Usaha Micro dan Kecil' fill className='object-cover' />
          </div>
          <h2 className='text-3xl font-bold mb-6'>USAHA MICRO DAN KECIL</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                category: 'Food & Beverage',
                items: [
                  { title: 'Kedai minuman', slug: 'kedai-minuman' },
                  { title: 'Katering rumahan', slug: 'katering-rumahan' },
                  { title: 'Cloud kitchen', slug: 'cloud-kitchen' },
                  { title: 'Makanan ringan/snack', slug: 'makanan-ringan-snack' },
                  { title: 'Dessert & bakery skala kecil', slug: 'dessert-bakery-skala-kecil' },
                  { title: 'Frozen food', slug: 'frozen-food' },
                ],
              },
              {
                category: 'Retail & Trading',
                items: [
                  { title: 'Toko online', slug: 'toko-online' },
                  { title: 'Reseller branded products', slug: 'reseller-branded-products' },
                  { title: 'Toko kelontong', slug: 'toko-kelontong' },
                  { title: 'Specialty store', slug: 'specialty-store' },
                  { title: 'Dropshipping', slug: 'dropshipping' },
                ],
              },
              {
                category: 'Personal Services',
                items: [
                  { title: 'Jasa kecantikan/salon', slug: 'jasa-kecantikan-salon' },
                  { title: 'Pet grooming', slug: 'pet-grooming' },
                  { title: 'Laundry', slug: 'laundry' },
                  { title: 'Cleaning service', slug: 'cleaning-service' },
                  { title: 'Wedding organizer skala kecil', slug: 'wedding-organizer-skala-kecil' },
                  { title: 'Photography/videography', slug: 'photography-videography' },
                ],
              },
              {
                category: 'Professional Services',
                items: [
                  { title: 'Konsultan independen', slug: 'konsultan-independen' },
                  { title: 'Jasa design', slug: 'jasa-design' },
                  { title: 'Digital marketing agency', slug: 'digital-marketing-agency' },
                  { title: 'Content creation', slug: 'content-creation' },
                  { title: 'Copywriting', slug: 'copywriting' },
                  { title: 'Translation service', slug: 'translation-service' },
                ],
              },
              {
                category: 'Creative & Craft',
                items: [
                  { title: 'Handmade products', slug: 'handmade-products' },
                  { title: 'Custom merchandise', slug: 'custom-merchandise' },
                  { title: 'Printing & sablon', slug: 'printing-sablon' },
                  { title: 'Craft workshop', slug: 'craft-workshop' },
                  { title: 'Souvenir & gift', slug: 'souvenir-gift' },
                  { title: 'Digital art', slug: 'digital-art' },
                ],
              },
              {
                category: 'Education Services',
                items: [
                  { title: 'Bimbingan belajar', slug: 'bimbingan-belajar' },
                  { title: 'Kursus keterampilan', slug: 'kursus-keterampilan' },
                  { title: 'Les privat', slug: 'les-privat' },
                  { title: 'Workshop & training', slug: 'workshop-training' },
                  { title: 'Online course creator', slug: 'online-course-creator' },
                ],
              },
              {
                category: 'Home & Living Services',
                items: [
                  { title: 'Interior stylist', slug: 'interior-stylist' },
                  { title: 'Jasa pindahan', slug: 'jasa-pindahan' },
                  { title: 'Home organizing', slug: 'home-organizing' },
                  { title: 'Tukang/handyman service', slug: 'tukang-handyman-service' },
                  { title: 'Landscape & gardening', slug: 'landscape-gardening' },
                ],
              },
              {
                category: 'Health & Wellness',
                items: [
                  { title: 'Personal trainer', slug: 'personal-trainer' },
                  { title: 'Yoga instructor', slug: 'yoga-instructor' },
                  { title: 'Pijat/terapi', slug: 'pijat-terapi' },
                  { title: 'Konsultan gizi', slug: 'konsultan-gizi' },
                  { title: 'Herbal/supplement reseller', slug: 'herbal-supplement-reseller' },
                ],
              },
            ].map((category) => (
              <div key={category.category} className='space-y-4'>
                <h3 className='text-xl font-semibold'>{category.category}</h3>
                <div className='space-y-2'>
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/mikro/${item.slug}/`}
                      className='block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
