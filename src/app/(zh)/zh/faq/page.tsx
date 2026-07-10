import FaqContent from '@/components/FaqContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('faq', 'zh');

export default function FAQPageZh() {
  return (
    <>
      <JsonLd data={faqJsonLd('zh')} />
      <JsonLd data={breadcrumbJsonLd('faq', 'zh')} />
      <FaqContent />
    </>
  );
}
