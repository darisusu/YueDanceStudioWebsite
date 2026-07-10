import PerformancesContent from '@/components/PerformancesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('performances', 'en');

export default function PerformancesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('performances', 'en')} />
      <PerformancesContent />
    </>
  );
}
