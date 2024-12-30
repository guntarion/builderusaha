import { Client } from './types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    company: 'PT Teknologi Maju',
    avatar: 'https://via.placeholder.com/150',
    industry: 'Teknologi',
    program: 'Premium',
    startDate: new Date('2023-01-15'),
    status: 'active',
    progress: 75,
    nextSession: new Date('2023-10-20T10:00:00'),
    recentActivity: [
      {
        type: 'Sesi Coaching',
        description: 'Diskusi strategi bisnis',
        date: new Date('2023-10-15'),
      },
    ],
    contacts: [
      {
        email: 'budi@teknologimaju.com',
        phone: '081234567890',
        position: 'CEO',
      },
    ],
  },
  {
    id: '2',
    name: 'Ani Wijaya',
    company: 'Retail Indonesia',
    avatar: 'https://via.placeholder.com/150',
    industry: 'Retail',
    program: 'Basic',
    startDate: new Date('2023-03-10'),
    status: 'pending',
    progress: 30,
    nextSession: null,
    recentActivity: [],
    contacts: [
      {
        email: 'ani@retailindonesia.com',
        phone: '081298765432',
        position: 'Manajer Operasional',
      },
    ],
  },
  {
    id: '3',
    name: 'Cahyo Pratama',
    company: 'Manufaktur Jaya',
    avatar: 'https://via.placeholder.com/150',
    industry: 'Manufaktur',
    program: 'Enterprise',
    startDate: new Date('2022-11-01'),
    status: 'completed',
    progress: 100,
    nextSession: null,
    recentActivity: [
      {
        type: 'Review Progress',
        description: 'Evaluasi program coaching',
        date: new Date('2023-09-30'),
      },
    ],
    contacts: [
      {
        email: 'cahyo@manufakturjaya.com',
        phone: '081223344556',
        position: 'Direktur Utama',
      },
    ],
  },
];
