import type { Metadata } from 'next';
import FaqContent from '@/components/FaqContent';
import { t } from '@/lib/translations';

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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: t.faq.categories.flatMap(cat =>
    cat.items.map(item => ({
      '@type': 'Question',
      name: item.q.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a.en,
      },
    })),
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}
