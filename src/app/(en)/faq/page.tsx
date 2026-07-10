import FaqContent from '@/components/FaqContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('faq', 'en');

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd('en')} />
      <JsonLd data={breadcrumbJsonLd('faq', 'en')} />
      <FaqContent />
    </>
  );
}
