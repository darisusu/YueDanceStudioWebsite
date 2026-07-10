import PerformancesContent from '@/components/PerformancesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('performances', 'zh');

export default function PerformancesPageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('performances', 'zh')} />
      <PerformancesContent />
    </>
  );
}
