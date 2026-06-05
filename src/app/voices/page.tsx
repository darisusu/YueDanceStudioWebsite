import type { Metadata } from 'next';
import VoicesContent from '@/components/VoicesContent';

export const metadata: Metadata = {
  title: 'Student Voices',
  description:
    'In their own words — reflections, messages, and poems from the students of YUE Dance Studio (Xiang Yue Culture Arts) in Singapore.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/voices' },
  openGraph: {
    title: 'Student Voices | YUE Dance Studio Singapore',
    description:
      'In their own words — reflections, messages, and poems from the students of YUE Dance Studio.',
    url: 'https://www.xiangyueculturearts.com/voices',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Student Voices | YUE Dance Studio Singapore',
    description:
      'In their own words — reflections, messages, and poems from the students of YUE Dance Studio.',
  },
};

export default function VoicesPage() {
  return <VoicesContent />;
}
