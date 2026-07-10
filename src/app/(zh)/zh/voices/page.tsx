import VoicesContent from '@/components/VoicesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('voices', 'zh');

export default function VoicesPageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('voices', 'zh')} />
      <VoicesContent />
    </>
  );
}
