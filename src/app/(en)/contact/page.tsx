import ContactContent from '@/components/ContactContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('contact', 'en');

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('contact', 'en')} />
      <ContactContent />
    </>
  );
}
