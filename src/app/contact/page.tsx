import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with YUE Dance Studio. Located at Beach Road, Singapore. Enquiries via email, WhatsApp, or our registration form.',
  alternates: { canonical: '/contact' },
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
import { breadcrumbJsonLd } from '@/data/config';

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Contact Us', '/contact')) }}
      />
      <ContactContent />
    </>
  );
}
