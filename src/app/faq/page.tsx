import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about our courses, fees, attire and performance opportunities at YUE Dance Studio Singapore.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/faq' },
  openGraph: {
    title: 'FAQ | YUE Dance Studio Singapore',
    description:
      'Answers to common questions about our courses, fees, attire and performance opportunities at YUE Dance Studio Singapore.',
    url: 'https://www.xiangyueculturearts.com/faq',
    locale: 'en_SG',
  },
  twitter: {
    title: 'FAQ | YUE Dance Studio Singapore',
    description:
      'Answers to common questions about our courses, fees, attire and performance opportunities at YUE Dance Studio Singapore.',
  },
};

import FaqContent from '@/components/FaqContent';

export default function FAQPage() {
  return <FaqContent />;
}
