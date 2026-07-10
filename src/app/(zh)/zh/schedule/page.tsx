import ScheduleContent from '@/components/ScheduleContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('schedule', 'zh');

export default function SchedulePageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('schedule', 'zh')} />
      <ScheduleContent />
    </>
  );
}
