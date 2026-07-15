import type { Lang } from '@/lib/translations';
import { posts, type Post } from '@/data/posts';

// Helpers over the post registry. Kept framework-agnostic so both the routes
// (generateStaticParams / generateMetadata) and the display components share
// one ordering and one date format.

/** Posts newest-first, by publication date. */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

const DATE_LOCALE: Record<Lang, string> = { en: 'en-SG', zh: 'zh-SG' };

/** Locale-formatted publication date. Parsed at UTC noon to avoid TZ date shifts. */
export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString(DATE_LOCALE[lang], { year: 'numeric', month: 'long', day: 'numeric' });
}
