import InstructorsContent from '@/components/InstructorsContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, instructorsJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('instructors', 'zh');

export default function InstructorsPageZh() {
  return (
    <>
      <JsonLd data={instructorsJsonLd('zh')} />
      <JsonLd data={breadcrumbJsonLd('instructors', 'zh')} />
      <InstructorsContent />
    </>
  );
}
