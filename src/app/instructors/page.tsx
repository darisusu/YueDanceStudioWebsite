import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Instructors',
  description:
    'Meet the professional dance instructors at YUE Dance Studio — specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/instructors' },
  openGraph: {
    title: 'Our Instructors | YUE Dance Studio Singapore',
    description:
      'Meet the professional dance instructors at YUE Dance Studio — specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
    url: 'https://www.xiangyueculturearts.com/instructors',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Our Instructors | YUE Dance Studio Singapore',
    description:
      'Meet the professional dance instructors at YUE Dance Studio — specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
  },
};

import InstructorsContent from '@/components/InstructorsContent';

export default function InstructorsPage() {
  return <InstructorsContent />;
}
