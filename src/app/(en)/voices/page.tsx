import VoicesContent from '@/components/VoicesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('voices', 'en');

export default function VoicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('voices', 'en')} />
      <VoicesContent />
    </>
  );
}
