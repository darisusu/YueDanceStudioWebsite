import CoursesContent from '@/components/CoursesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, coursesJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('courses', 'zh');

export default function CoursesPageZh() {
  return (
    <>
      <JsonLd data={coursesJsonLd('zh')} />
      <JsonLd data={breadcrumbJsonLd('courses', 'zh')} />
      <CoursesContent />
    </>
  );
}
