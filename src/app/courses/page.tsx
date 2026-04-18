import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUE Dance Courses | Singapore Dance Classes',
  description:
    'Explore our range of dance courses in Singapore — Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/courses' },
  openGraph: {
    title: 'YUE Dance Courses | Singapore Dance Classes',
    description:
      'Explore our range of dance courses in Singapore — Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
    url: 'https://www.xiangyueculturearts.com/courses',
    locale: 'en_SG',
  },
  twitter: {
    title: 'YUE Dance Courses | Singapore Dance Classes',
    description:
      'Explore our range of dance courses in Singapore — Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
  },
};

import CoursesContent from '@/components/CoursesContent';

export default function CoursesPage() {
  return <CoursesContent />;
}
