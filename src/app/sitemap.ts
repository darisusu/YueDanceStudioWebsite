import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/config';
import { PAGES, type PageSlug } from '@/data/pageSeo';
import { posts } from '@/data/posts';
import { zhPath } from '@/lib/locale';

const LAST_MODIFIED = '2026-06-30';

export const dynamic = 'force-static';

type Meta = { freq: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number };

const SITEMETA: Record<PageSlug, Meta> = {
  home:         { freq: 'monthly', priority: 1.0 },
  about:        { freq: 'monthly', priority: 0.8 },
  instructors:  { freq: 'monthly', priority: 0.8 },
  courses:      { freq: 'monthly', priority: 0.8 },
  performances: { freq: 'yearly',  priority: 0.7 },
  schedule:     { freq: 'weekly',  priority: 0.8 },
  contact:      { freq: 'monthly', priority: 0.8 },
  faq:          { freq: 'monthly', priority: 0.8 },
  voices:       { freq: 'monthly', priority: 0.6 },
  blog:         { freq: 'weekly',  priority: 0.7 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const key of Object.keys(PAGES) as PageSlug[]) {
    const p = PAGES[key];
    const enUrl = `${SITE_URL}${p.path}`;
    const zhUrl = `${SITE_URL}${zhPath(p.path)}`;
    // Every URL advertises both language versions (+ x-default → English).
    const languages = { 'en-SG': enUrl, 'zh-SG': zhUrl, 'x-default': enUrl };
    const { freq, priority } = SITEMETA[key];

    entries.push({ url: enUrl, lastModified: LAST_MODIFIED, changeFrequency: freq, priority, alternates: { languages } });
    entries.push({ url: zhUrl, lastModified: LAST_MODIFIED, changeFrequency: freq, priority: Math.round((priority - 0.1) * 10) / 10, alternates: { languages } });
  }

  // Blog posts — one entry per locale, each advertising both language versions.
  for (const post of posts) {
    const enUrl = `${SITE_URL}/blog/${post.slug}`;
    const zhUrl = `${SITE_URL}/zh/blog/${post.slug}`;
    const languages = { 'en-SG': enUrl, 'zh-SG': zhUrl, 'x-default': enUrl };
    entries.push({ url: enUrl, lastModified: post.date, changeFrequency: 'yearly', priority: 0.6, alternates: { languages } });
    entries.push({ url: zhUrl, lastModified: post.date, changeFrequency: 'yearly', priority: 0.5, alternates: { languages } });
  }

  return entries;
}
