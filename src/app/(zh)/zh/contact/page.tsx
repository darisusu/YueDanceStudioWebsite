import ContactContent from '@/components/ContactContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('contact', 'zh');

export default function ContactPageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('contact', 'zh')} />
      <ContactContent />
    </>
  );
}
