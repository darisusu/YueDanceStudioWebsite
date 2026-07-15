import BlogIndexContent from '@/components/BlogIndexContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('blog', 'en');

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('blog', 'en')} />
      <BlogIndexContent lang="en" />
    </>
  );
}
