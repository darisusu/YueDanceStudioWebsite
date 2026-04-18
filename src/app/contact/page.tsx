import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with YUE Dance Studio. Located at Beach Road, Singapore. Enquiries via email, WhatsApp, or our registration form.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/contact' },
  openGraph: {
    title: 'Contact Us | YUE Dance Studio Singapore',
    description:
      'Get in touch with YUE Dance Studio. Located at Beach Road, Singapore. Enquiries via email, WhatsApp, or our registration form.',
    url: 'https://www.xiangyueculturearts.com/contact',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Contact Us | YUE Dance Studio Singapore',
    description:
      'Get in touch with YUE Dance Studio. Located at Beach Road, Singapore. Enquiries via email, WhatsApp, or our registration form.',
  },
};

import ContactContent from '@/components/ContactContent';

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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
