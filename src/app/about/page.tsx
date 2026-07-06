import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import { breadcrumbJsonLd } from '@/data/config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Established in 2018 on Beach Road, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | YUE Dance Studio Singapore',
    description:
      'Established in 2018 on Beach Road, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
    url: 'https://www.xiangyueculturearts.com/about',
    locale: 'en_SG',
    images: [{ url: '/images/about/about-performance-1.jpg', width: 1200, height: 630, alt: 'YUE Dance Studio performance showcase' }],
  },
  twitter: {
    title: 'About Us | YUE Dance Studio Singapore',
    description:
      'Established in 2018 on Beach Road, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
    images: [{ url: '/images/about/about-performance-1.jpg', alt: 'YUE Dance Studio performance showcase' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('About Us', '/about')) }}
      />
      <AboutContent />
    </>
  );
}
