import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YUE Dance Courses | Singapore Dance Classes',
  description:
    'Explore our range of dance courses in Singapore: Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
  alternates: { canonical: '/courses' },
  openGraph: {
    title: 'YUE Dance Courses | Singapore Dance Classes',
    description:
      'Explore our range of dance courses in Singapore: Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
    url: '/courses',
    locale: 'en_SG',
    images: [{ url: '/images/featured/featured-contemporary-3.jpg', width: 1200, height: 630, alt: 'Dance courses at YUE Dance Studio Singapore' }],
  },
  twitter: {
    title: 'YUE Dance Courses | Singapore Dance Classes',
    description:
      'Explore our range of dance courses in Singapore: Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
    images: [{ url: '/images/featured/featured-contemporary-3.jpg', alt: 'Dance courses at YUE Dance Studio Singapore' }],
  },
};

import CoursesContent from '@/components/CoursesContent';
import { courses } from '@/data/courses';
import { SITE_URL, jsonLd, breadcrumbJsonLd } from '@/data/config';

const coursesJsonLd = courses.map(c => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: c.name.en,
  description: c.description.en,
  provider: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'YUE Dance Studio',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    location: jsonLd.address,
  },
}));

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Courses', '/courses')) }}
      />
      <CoursesContent />
    </>
  );
}
