import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['DanceSchool', 'LocalBusiness'],
  name: 'YUE Dance Studio / Xiang Yue Culture Arts',
  url: 'https://www.xiangyueculturearts.com',
  telephone: '+6596885938',
  email: 'xiangyue.culturearts@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '47 Beach Road, #02-04',
    addressLocality: 'Singapore',
    postalCode: '189683',
    addressCountry: 'SG',
  },
  sameAs: [
    'https://www.facebook.com/xiangyue.dance/',
    'https://www.instagram.com/xiangyue100/',
  ],
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
