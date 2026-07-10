import InstructorsContent from '@/components/InstructorsContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, instructorsJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('instructors', 'en');

export default function InstructorsPage() {
  return (
    <>
      <JsonLd data={instructorsJsonLd('en')} />
      <JsonLd data={breadcrumbJsonLd('instructors', 'en')} />
      <InstructorsContent />
    </>
  );
}
