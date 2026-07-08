import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Instructors',
  description:
    'Meet the professional dance instructors at YUE Dance Studio, specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
  alternates: { canonical: '/instructors' },
  openGraph: {
    title: 'Our Instructors | YUE Dance Studio Singapore',
    description:
      'Meet the professional dance instructors at YUE Dance Studio, specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
    url: 'https://www.xiangyueculturearts.com/instructors',
    locale: 'en_SG',
    images: [{ url: '/images/hero/hero-banner-3.jpg', width: 1200, height: 630, alt: 'Professional dance instructors at YUE Dance Studio' }],
  },
  twitter: {
    title: 'Our Instructors | YUE Dance Studio Singapore',
    description:
      'Meet the professional dance instructors at YUE Dance Studio, specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
    images: [{ url: '/images/hero/hero-banner-3.jpg', alt: 'Professional dance instructors at YUE Dance Studio' }],
  },
};

import InstructorsContent from '@/components/InstructorsContent';
import { instructors } from '@/data/instructors';
import { SITE_URL, breadcrumbJsonLd } from '@/data/config';

const instructorsJsonLd = instructors.map(i => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: i.name,
  alternateName: i.nameZh,
  jobTitle: i.title.en,
  description: i.bio.en,
  image: `${SITE_URL}${i.photo}`,
  url: `${SITE_URL}/instructors`,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: i.teaches.en.split('·').map(s => s.trim()),
}));

export default function InstructorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Our Instructors', '/instructors')) }}
      />
      <InstructorsContent />
    </>
  );
}
