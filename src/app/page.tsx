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
  },
  twitter: {
    title: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
    description:
      'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
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
