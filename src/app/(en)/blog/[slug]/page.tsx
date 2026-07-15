import { notFound } from 'next/navigation';
import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import BlogPostContent from '@/components/BlogPostContent';
import { getAllPosts, getPost } from '@/lib/blog';
import { blogPostMetadata } from '@/lib/seo';
import { articleJsonLd, blogPostBreadcrumbJsonLd } from '@/lib/jsonld';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Only registered slugs render; unknown paths 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? blogPostMetadata(post, 'en') : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const mod = (await import(`@/content/blog/${slug}/en.mdx`).catch(() => null)) as {
    default: ComponentType;
  } | null;
  if (!mod) notFound();
  const Body = mod.default;

  return (
    <>
      <JsonLd data={blogPostBreadcrumbJsonLd(post, 'en')} />
      <JsonLd data={articleJsonLd(post, 'en')} />
      <BlogPostContent post={post} lang="en">
        <Body />
      </BlogPostContent>
    </>
  );
}
