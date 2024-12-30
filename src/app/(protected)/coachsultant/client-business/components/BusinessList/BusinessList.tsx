// src/app/(protected)/coachsultant/client-business/components/BusinessList/BusinessList.tsx
import BusinessCard from './BusinessCard';
import ClientBusiness from '../types/client-business';

const sampleBusinesses: ClientBusiness[] = [
  {
    id: '1',
    clientId: 'c1',
    businessName: 'Tech Startup',
    phase: 'ideation',
    startDate: new Date(),
    lastAssessment: new Date(),
    ideationPhase: {
      problemValidation: 75,
      marketResearch: {
        marketSize: 1000000,
        targetSegment: 'Young Professionals',
        competitorAnalysis: [],
        customerInterviews: [],
      },
      valueProposition: {
        clarity: 80,
        uniqueness: 90,
        feasibility: 70,
      },
    },
  },
  {
    id: '2',
    clientId: 'c2',
    businessName: 'E-commerce Platform',
    phase: 'growth',
    startDate: new Date(),
    lastAssessment: new Date(),
    growthPhase: {
      performance: {
        revenue: [],
        customers: [],
        churnRate: 5,
        acquisitionCost: 50,
        unitEconomics: {
          cac: 50,
          ltv: 300,
          margin: 25,
        },
      },
      teamMetrics: {
        headcount: 15,
        productivity: 80,
        satisfaction: 90,
      },
      marketingMetrics: {
        channels: [],
        conversion: 3,
        roi: 200,
      },
    },
  },
];

export default function BusinessList() {
  const businesses = sampleBusinesses;

  return (
    <div className='space-y-4'>
      {businesses.length > 0 ? (
        businesses.map((business) => <BusinessCard key={business.id} business={business} />)
      ) : (
        <div className='text-center text-gray-500'>Tidak ada bisnis yang ditemukan</div>
      )}
    </div>
  );
}
