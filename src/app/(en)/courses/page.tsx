import CoursesContent from '@/components/CoursesContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, coursesJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('courses', 'en');

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd('en')} />
      <JsonLd data={breadcrumbJsonLd('courses', 'en')} />
      <CoursesContent />
    </>
  );
}
