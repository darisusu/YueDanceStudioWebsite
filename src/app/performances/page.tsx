import type { Metadata } from 'next';
import PerformancesContent from '@/components/PerformancesContent';
import { breadcrumbJsonLd } from '@/data/config';

export const metadata: Metadata = {
  title: 'Performances & Awards',
  description:
    'From Chingay Parade to the Singapore Golden Lion Cup: YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
  alternates: { canonical: '/performances' },
  openGraph: {
    title: 'Performances & Awards | YUE Dance Studio Singapore',
    description:
      'From Chingay Parade to the Singapore Golden Lion Cup: YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
    url: '/performances',
    locale: 'en_SG',
    images: [{ url: '/images/about/about-performance-6.jpg', width: 1200, height: 630, alt: 'YUE Dance Studio stage performance' }],
  },
  twitter: {
    title: 'Performances & Awards | YUE Dance Studio Singapore',
    description:
      'From Chingay Parade to the Singapore Golden Lion Cup: YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
    images: [{ url: '/images/about/about-performance-6.jpg', alt: 'YUE Dance Studio stage performance' }],
  },
};

export default function PerformancesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Performances & Awards', '/performances')) }}
      />
      <PerformancesContent />
    </>
  );
}
