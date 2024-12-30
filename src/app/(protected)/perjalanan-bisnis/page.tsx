// src/app/(protected)/perjalanan-bisnis/page.tsx
import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function BusinessJourneyPage() {
  const session = await auth();

  if (!session) {
    redirect('/auth/signin');
  }

  const phases = [
    {
      phase: 'Temukan & Validasi Ide',
      icon: '💡',
      description: 'Validasi ide bisnis Anda dan pahami pasar',
      link: '/perjalanan-bisnis/fase-1',
      isAvailable: true,
    },
    {
      phase: 'Perencanaan & Peluncuran',
      icon: '📝',
      description: 'Siapkan rencana dan luncurkan bisnis Anda',
      link: '/perjalanan-bisnis/fase-2',
      isAvailable: true,
    },
    {
      phase: 'Pertumbuhan & Pengembangan',
      icon: '📈',
      description: 'Kembangkan dan tingkatkan skala bisnis',
      link: '/perjalanan-bisnis/fase-3',
      isAvailable: true,
    },
    {
      phase: 'Maturitas & Exit',
      icon: '🎯',
      description: 'Optimalkan dan rencanakan masa depan',
      link: '/perjalanan-bisnis/fase-4',
      isAvailable: false,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Perjalanan Bisnis Anda</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {phases.map((phase, index) => (
          <div key={index} className='relative'>
            {phase.isAvailable ? (
              <Link href={phase.link}>
                <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer'>
                  <div className='text-4xl mb-4'>{phase.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>{phase.phase}</h3>
                  <p className='text-gray-600'>{phase.description}</p>
                </div>
              </Link>
            ) : (
              <div className='bg-white p-6 rounded-xl shadow-sm opacity-75 relative'>
                <div className='absolute inset-0 bg-gray-50 bg-opacity-90 flex items-center justify-center rounded-xl'>
                  <span className='bg-white px-4 py-2 rounded-full text-gray-600 text-sm font-medium shadow-sm'>Segera Hadir</span>
                </div>
                <div className='text-4xl mb-4'>{phase.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{phase.phase}</h3>
                <p className='text-gray-600'>{phase.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className='text-3xl font-bold mt-16 mb-8'>Alat Produktivitas Bisnis</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {[
          {
            category: 'Ideation & Problem Solving',
            tools: [
              {
                name: 'Design Thinking Assistant',
                emoji: '🧠',
                description: 'Guide through design thinking process',
                link: '/perjalanan-bisnis/power-tools/design-thinking-assistant',
                isAvailable: true,
              },
              {
                name: 'Brainstorming Facilitator',
                emoji: '💡',
                description: 'Enhance creative thinking',
                link: '/perjalanan-bisnis/power-tools/brainstorming-facilitator',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Planning & Strategy',
            tools: [
              {
                name: 'SMART Goals Generator',
                emoji: '🎯',
                description: 'Create effective goals',
                link: '/perjalanan-bisnis/power-tools/smart-goals-generator',
                isAvailable: true,
              },
              {
                name: 'Strategic Planning Assistant',
                emoji: '📊',
                description: 'Business strategy development',
                link: '/perjalanan-bisnis/power-tools/strategic-planning-assistant',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Decision Making',
            tools: [
              {
                name: 'Decision Matrix Builder',
                emoji: '📋',
                description: 'Structured decision making',
                link: '/perjalanan-bisnis/power-tools/decision-matrix-builder',
                isAvailable: false,
              },
              {
                name: 'Pro-Con Analysis Tool',
                emoji: '⚖️',
                description: 'Balanced decision evaluation',
                link: '/perjalanan-bisnis/power-tools/pro-con-analysis-tool',
                isAvailable: true,
              },
            ],
          },
          {
            category: 'Productivity & Execution',
            tools: [
              {
                name: 'Eisenhower Matrix Assistant',
                emoji: '⏳',
                description: 'Task prioritization',
                link: '/perjalanan-bisnis/power-tools/eisenhower-matrix-assistant',
                isAvailable: false,
              },
              {
                name: 'OKR Developer',
                emoji: '📌',
                description: 'Goal alignment',
                link: '/perjalanan-bisnis/power-tools/okr-developer',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Innovation & Product Development',
            tools: [
              {
                name: 'Value Proposition Designer',
                emoji: '💎',
                description: 'Product-market fit',
                link: '/perjalanan-bisnis/power-tools/value-proposition-designer',
                isAvailable: false,
              },
              {
                name: 'Business Model Canvas Generator',
                emoji: '🖼️',
                description: 'Business model innovation',
                link: '/perjalanan-bisnis/power-tools/business-model-canvas-generator',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Problem Solving',
            tools: [
              {
                name: 'Root Cause Analyzer',
                emoji: '🔍',
                description: 'Problem diagnosis',
                link: '/perjalanan-bisnis/power-tools/root-cause-analyzer',
                isAvailable: true,
              },
              {
                name: 'SCAMPER Method Assistant',
                emoji: '🛠️',
                description: 'Product/service improvement',
                link: '/perjalanan-bisnis/power-tools/scamper-method-assistant',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Team & Leadership',
            tools: [
              {
                name: 'Meeting Facilitator',
                emoji: '🤝',
                description: 'Effective meetings',
                link: '/perjalanan-bisnis/power-tools/meeting-facilitator',
                isAvailable: false,
              },
              {
                name: 'Feedback Framework',
                emoji: '📝',
                description: 'Team development',
                link: '/perjalanan-bisnis/power-tools/feedback-framework',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Market Research',
            tools: [
              {
                name: 'Customer Insight Generator',
                emoji: '📈',
                description: 'Market understanding',
                link: '/perjalanan-bisnis/power-tools/customer-insight-generator',
                isAvailable: false,
              },
            ],
          },
          {
            category: 'Risk Management',
            tools: [
              {
                name: 'Risk Assessment Matrix',
                emoji: '⚠️',
                description: 'Risk evaluation',
                link: '/perjalanan-bisnis/power-tools/risk-assessment-matrix',
                isAvailable: false,
              },
            ],
          },
        ].map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className='text-xl font-semibold mb-4'>{category.category}</h3>
            <div className='space-y-4'>
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className='relative'>
                  {tool.isAvailable ? (
                    <Link href={tool.link}>
                      <div className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer'>
                        <div className='flex items-center gap-3'>
                          <div className='text-2xl'>{tool.emoji}</div>
                          <div>
                            <h4 className='font-medium'>{tool.name}</h4>
                            <p className='text-sm text-gray-600'>{tool.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className='bg-yellow-50 p-4 rounded-lg shadow-sm relative border border-yellow-100'>
                      <div className='absolute -top-2 -right-2 bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 text-xs font-medium shadow-sm'>
                        Segera Hadir
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='text-2xl'>{tool.emoji}</div>
                        <div>
                          <h4 className='font-medium'>{tool.name}</h4>
                          <p className='text-sm text-gray-600'>{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
