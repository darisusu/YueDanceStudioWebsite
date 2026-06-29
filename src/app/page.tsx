import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { jsonLd } from '@/data/config';

export const metadata: Metadata = {
  title: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
  description:
    'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com' },
  openGraph: {
    title: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
    description:
      'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
    url: 'https://www.xiangyueculturearts.com',
    locale: 'en_SG',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', width: 1200, height: 630, alt: 'YUE Dance Studio — elegant dance classes in Singapore' }],
  },
  twitter: {
    title: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
    description:
      'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', alt: 'YUE Dance Studio — elegant dance classes in Singapore' }],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
