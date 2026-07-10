import AboutContent from '@/components/AboutContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('about', 'zh');

export default function AboutPageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('about', 'zh')} />
      <AboutContent />
    </>
  );
}
