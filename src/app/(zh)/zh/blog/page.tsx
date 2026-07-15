import BlogIndexContent from '@/components/BlogIndexContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata = pageMetadata('blog', 'zh');

export default function BlogPageZh() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd('blog', 'zh')} />
      <BlogIndexContent lang="zh" />
    </>
  );
}
