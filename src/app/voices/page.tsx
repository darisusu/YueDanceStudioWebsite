import type { Metadata } from 'next';
import VoicesContent from '@/components/VoicesContent';
import { breadcrumbJsonLd } from '@/data/config';

export const metadata: Metadata = {
  title: 'Student Voices',
  description:
    'In their own words: reflections, messages, and poems from the students of YUE Dance Studio (Xiang Yue Culture Arts) in Singapore.',
  alternates: { canonical: '/voices' },
  openGraph: {
    title: 'Student Voices | YUE Dance Studio Singapore',
    description:
      'In their own words: reflections, messages, and poems from the students of YUE Dance Studio.',
    url: '/voices',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Student Voices | YUE Dance Studio Singapore',
    description:
      'In their own words: reflections, messages, and poems from the students of YUE Dance Studio.',
  },
};

export default function VoicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Student Voices', '/voices')) }}
      />
      <VoicesContent />
    </>
  );
}
