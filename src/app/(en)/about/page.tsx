import AboutContent from '@/components/AboutContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('about', 'en');

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('about', 'en')} />
      <AboutContent />
    </>
  );
}
