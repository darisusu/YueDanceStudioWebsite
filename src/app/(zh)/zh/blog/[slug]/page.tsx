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

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? blogPostMetadata(post, 'zh') : {};
}

export default async function BlogPostPageZh({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const mod = (await import(`@/content/blog/${slug}/zh.mdx`).catch(() => null)) as {
    default: ComponentType;
  } | null;
  if (!mod) notFound();
  const Body = mod.default;

  return (
    <>
      <JsonLd data={blogPostBreadcrumbJsonLd(post, 'zh')} />
      <JsonLd data={articleJsonLd(post, 'zh')} />
      <BlogPostContent post={post} lang="zh">
        <Body />
      </BlogPostContent>
    </>
  );
}
