// src/app/(protected)/penilaian-wirausaha/kesesuaian-bisnis-pmi/data/recommendations.ts
import type { BusinessScore } from '../types';

export type BusinessType = 'importExport' | 'localReseller' | 'translation' | 'onlineCourse' | 'localAssistant' | 'foodBusiness';
export type RecommendationLevel = 'high' | 'medium' | 'low';

export type RecommendationContent = {
  description: string;
  strengthPoints: string[];
  challenges: string[];
  nextSteps: string[];
};

type BusinessRecommendation = {
  [key in RecommendationLevel]: RecommendationContent;
};

export const recommendationDatabase: {
  [key in BusinessType]: BusinessRecommendation;
} = {
  importExport: {
    high: {
      description: 'Anda memiliki potensi sangat baik untuk bisnis Import-Export',
      strengthPoints: [
        'Pemahaman yang baik tentang pasar dan supply chain',
        'Jaringan yang kuat di kedua negara',
        'Kemampuan manajemen yang baik',
        'Kesiapan modal dan resources yang memadai',
      ],
      challenges: ['Regulasi perdagangan internasional', 'Fluktuasi nilai tukar', 'Manajemen inventory', 'Kompetisi dengan importir besar'],
      nextSteps: ['Riset produk potensial', 'Bangun hubungan dengan supplier', 'Pelajari regulasi ekspor-impor', 'Buat rencana bisnis detail'],
    },
    medium: {
      description: 'Anda memiliki potensi cukup baik untuk bisnis Import-Export',
      strengthPoints: ['Memiliki pemahaman dasar tentang perdagangan', 'Ada akses ke pasar potensial', 'Memiliki modal awal yang cukup'],
      challenges: [
        'Keterbatasan jaringan supplier',
        'Pemahaman regulasi masih terbatas',
        'Persaingan dengan pemain lama',
        'Risiko kerugian karena pengalaman terbatas',
      ],
      nextSteps: [
        'Mulai dari skala kecil',
        'Pelajari lebih dalam tentang regulasi',
        'Bangun jaringan dengan importir lain',
        'Ikuti pelatihan terkait',
      ],
    },
    low: {
      description: 'Bisnis Import-Export mungkin belum cocok untuk Anda saat ini',
      strengthPoints: ['Minat dalam perdagangan internasional', 'Keinginan belajar yang tinggi', 'Memiliki beberapa koneksi dasar'],
      challenges: [
        'Modal dan resources masih terbatas',
        'Jaringan bisnis masih minimal',
        'Pengalaman bisnis masih kurang',
        'Pemahaman regulasi masih dasar',
      ],
      nextSteps: ['Mulai sebagai reseller lokal dulu', 'Pelajari dasar-dasar perdagangan', 'Bangun jaringan bisnis', 'Kumpulkan modal yang cukup'],
    },
  },
  localReseller: {
    high: {
      description: 'Anda sangat cocok untuk menjalankan bisnis Local Reseller',
      strengthPoints: [
        'Pemahaman yang baik tentang pasar lokal',
        'Jaringan supplier yang kuat',
        'Kemampuan digital marketing yang baik',
        'Sistem manajemen yang terorganisir',
      ],
      challenges: ['Persaingan dengan reseller lain', 'Menjaga konsistensi stok', 'Fluktuasi harga supplier', 'Manajemen ekspektasi customer'],
      nextSteps: ['Perkuat branding bisnis', 'Optimalkan sistem order', 'Bangun loyalty program', 'Ekspansi ke produk baru'],
    },
    medium: {
      description: 'Anda memiliki potensi yang baik sebagai Local Reseller',
      strengthPoints: ['Memahami dasar bisnis reseller', 'Punya beberapa koneksi supplier', 'Kemampuan marketing dasar', 'Semangat belajar tinggi'],
      challenges: ['Modal masih terbatas', 'Sistem belum terorganisir', 'Network masih terbatas', 'Pengalaman customer service terbatas'],
      nextSteps: ['Fokus pada 1-2 produk unggulan', 'Tingkatkan sistem manajemen', 'Bangun presence online', 'Pelajari digital marketing'],
    },
    low: {
      description: 'Perlu persiapan lebih untuk memulai bisnis Local Reseller',
      strengthPoints: ['Minat dalam bisnis retail', 'Ada akses ke beberapa supplier', 'Kemauan belajar tinggi'],
      challenges: ['Pengalaman bisnis minimal', 'Jaringan terbatas', 'Kemampuan marketing dasar', 'Modal terbatas'],
      nextSteps: [
        'Mulai dari menjual ke lingkungan terdekat',
        'Pelajari dasar bisnis retail',
        'Bangun presence di sosial media',
        'Ikuti komunitas reseller',
      ],
    },
  },
  translation: {
    high: {
      description: 'Anda sangat cocok untuk bisnis Translation & Documentation Service',
      strengthPoints: [
        'Kemampuan bahasa yang sangat baik',
        'Pemahaman dokumentasi yang kuat',
        'Pengalaman membantu PMI',
        'Network yang luas di komunitas',
      ],
      challenges: ['Kompetisi dengan layanan serupa', 'Manajemen waktu untuk proyek', 'Menjaga kualitas konsisten', 'Scaling bisnis'],
      nextSteps: ['Buat portfolio layanan', 'Bangun sistem manajemen proyek', 'Kembangkan tim translator', 'Buat standardisasi layanan'],
    },
    medium: {
      description: 'Anda punya potensi dalam bisnis Translation & Documentation',
      strengthPoints: ['Kemampuan bahasa yang cukup', 'Pengalaman dokumentasi dasar', 'Jaringan di komunitas PMI', 'Kemampuan komunikasi baik'],
      challenges: [
        'Perlu peningkatan skill bahasa',
        'Sistem belum terstandar',
        'Pengalaman proyek terbatas',
        'Persaingan dengan layanan profesional',
      ],
      nextSteps: ['Tingkatkan kemampuan bahasa', 'Mulai dari proyek kecil', 'Bangun portofolio', 'Pelajari tools translation'],
    },
    low: {
      description: 'Perlu pengembangan lebih untuk bisnis Translation & Documentation',
      strengthPoints: ['Minat dalam bahasa dan dokumentasi', 'Kemauan belajar tinggi', 'Ada pengalaman membantu teman'],
      challenges: ['Kemampuan bahasa masih dasar', 'Pengalaman dokumentasi minimal', 'Network terbatas', 'Belum ada sistem kerja'],
      nextSteps: ['Fokus tingkatkan kemampuan bahasa', 'Ikuti kursus translation', 'Volunteer untuk proyek kecil', 'Bergabung komunitas translator'],
    },
  },
  onlineCourse: {
    high: {
      description: 'Anda sangat cocok untuk menjalankan bisnis Online Training/Course',
      strengthPoints: [
        'Kemampuan mengajar yang sangat baik',
        'Penguasaan materi yang kuat',
        'Familiar dengan teknologi pembelajaran online',
        'Kemampuan membuat konten yang baik',
      ],
      challenges: [
        'Konsistensi pembuatan konten',
        'Menjaga engagement peserta',
        'Kompetisi dengan platform besar',
        'Investasi waktu untuk persiapan materi',
      ],
      nextSteps: ['Buat kurikulum terstruktur', 'Siapkan platform pembelajaran', 'Produksi konten berkualitas', 'Bangun komunitas pembelajar'],
    },
    medium: {
      description: 'Anda memiliki potensi yang baik untuk bisnis Online Training/Course',
      strengthPoints: [
        'Pengalaman mengajar informal',
        'Pemahaman materi yang baik',
        'Kemampuan komunikasi yang baik',
        'Familiar dengan teknologi dasar',
      ],
      challenges: [
        'Pengalaman mengajar masih terbatas',
        'Sistem pembelajaran belum terstruktur',
        'Perlu peningkatan kemampuan produksi konten',
        'Kompetisi dengan konten gratis',
      ],
      nextSteps: [
        'Mulai dari workshop singkat',
        'Pelajari platform pembelajaran online',
        'Tingkatkan kemampuan public speaking',
        'Buat konten percobaan',
      ],
    },
    low: {
      description: 'Perlu pengembangan lebih untuk bisnis Online Training/Course',
      strengthPoints: ['Minat dalam berbagi pengetahuan', 'Kemauan belajar yang tinggi', 'Memiliki pengalaman di bidang tertentu'],
      challenges: [
        'Pengalaman mengajar minimal',
        'Belum familiar platform online learning',
        'Kemampuan produksi konten terbatas',
        'Network pembelajar terbatas',
      ],
      nextSteps: [
        'Mulai dengan sharing knowledge informal',
        'Ikuti training for trainer',
        'Pelajari tools pembelajaran online',
        'Bangun presence di media sosial edukatif',
      ],
    },
  },
  localAssistant: {
    high: {
      description: 'Anda sangat cocok untuk bisnis Local Assistant Service',
      strengthPoints: [
        'Pemahaman mendalam tentang sistem lokal',
        'Jaringan yang kuat dengan berbagai institusi',
        'Kemampuan bahasa yang excellent',
        'Pengalaman membantu PMI yang ekstensif',
      ],
      challenges: [
        'Manajemen waktu untuk multiple klien',
        'Ekspektasi klien yang beragam',
        'Kompetisi dengan agensi formal',
        'Update regulasi yang dinamis',
      ],
      nextSteps: [
        'Buat paket layanan terstruktur',
        'Bangun sistem manajemen klien',
        'Kembangkan network dengan institusi',
        'Standardisasi proses layanan',
      ],
    },
    medium: {
      description: 'Anda memiliki potensi yang baik untuk Local Assistant Service',
      strengthPoints: [
        'Pemahaman baik tentang sistem lokal',
        'Beberapa koneksi dengan institusi',
        'Kemampuan bahasa yang cukup',
        'Pengalaman membantu komunitas',
      ],
      challenges: [
        'Sistem layanan belum terstruktur',
        'Network masih terbatas',
        'Pengalaman handling kasus formal terbatas',
        'Perlu peningkatan skill administratif',
      ],
      nextSteps: [
        'Fokus pada layanan spesifik dulu',
        'Tingkatkan kemampuan administratif',
        'Bangun database informasi',
        'Perluas jaringan institusi',
      ],
    },
    low: {
      description: 'Perlu pengembangan lebih untuk Local Assistant Service',
      strengthPoints: ['Keinginan membantu sesama PMI', 'Familiar dengan kehidupan lokal', 'Ada pengalaman mengurus dokumen pribadi'],
      challenges: ['Pengalaman sangat terbatas', 'Network institusi minimal', 'Pemahaman sistem masih dasar', 'Kemampuan bahasa perlu ditingkatkan'],
      nextSteps: [
        'Pelajari sistem dan regulasi lokal',
        'Tingkatkan kemampuan bahasa',
        'Mulai bantu lingkungan terdekat',
        'Bergabung dengan komunitas PMI aktif',
      ],
    },
  },
  foodBusiness: {
    high: {
      description: 'Anda sangat cocok untuk Food Business + Catering',
      strengthPoints: [
        'Kemampuan masak yang sangat baik',
        'Pemahaman food safety yang kuat',
        'Network komunitas yang luas',
        'Kemampuan manajemen bisnis makanan',
      ],
      challenges: ['Konsistensi kualitas makanan', 'Manajemen inventory bahan', 'Regulasi usaha makanan', 'Kompetisi dengan bisnis sejenis'],
      nextSteps: [
        'Buat menu dan standar resep',
        'Siapkan dapur yang memenuhi standar',
        'Urus perizinan usaha makanan',
        'Bangun sistem delivery yang efisien',
      ],
    },
    medium: {
      description: 'Anda memiliki potensi yang baik untuk Food Business',
      strengthPoints: [
        'Kemampuan masak yang baik',
        'Pengalaman masak untuk grup kecil',
        'Beberapa koneksi di komunitas',
        'Pemahaman dasar bisnis makanan',
      ],
      challenges: ['Modal untuk setup professional', 'Sistem produksi belum standar', 'Keterbatasan fasilitas', 'Pengalaman catering terbatas'],
      nextSteps: ['Mulai dari ghost kitchen', 'Standardisasi resep favorit', 'Pelajari food costing', 'Buat sistem pemesanan sederhana'],
    },
    low: {
      description: 'Perlu pengembangan lebih untuk Food Business',
      strengthPoints: ['Minat dalam dunia kuliner', 'Bisa masak untuk kebutuhan pribadi', 'Kemauan belajar tinggi'],
      challenges: ['Pengalaman masak terbatas', 'Belum ada sistem bisnis', 'Modal dan fasilitas minimal', 'Network terbatas'],
      nextSteps: ['Tingkatkan skill memasak', 'Ikuti kursus food safety', 'Mulai jualan ke lingkungan dekat', 'Pelajari dasar bisnis makanan'],
    },
  },
};
