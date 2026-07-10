import ScheduleContent from '@/components/ScheduleContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('schedule', 'en');

export default function SchedulePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('schedule', 'en')} />
      <ScheduleContent />
    </>
  );
}
