import type { Metadata } from 'next';
import type { Lang } from '@/lib/translations';
import { PAGES, type PageSlug } from '@/data/pageSeo';
import type { Post } from '@/data/posts';
import { zhPath } from '@/lib/locale';

const BRAND: Record<Lang, string> = {
  en: 'YUE Dance Studio Singapore',
  zh: '翔悦文艺',
};

// Builds a page's full Metadata for one locale: per-locale title/description,
// self canonical, and the en-SG / zh-SG / x-default hreflang map. Relative URLs
// resolve against the metadataBase set in each root layout.
export function pageMetadata(slug: PageSlug, lang: Lang): Metadata {
  const p = PAGES[slug];
  const isHome = slug === 'home';
  const canonical = lang === 'en' ? p.path : zhPath(p.path);

  // Home uses its full brand title verbatim; other pages feed the `%s` template.
  const docTitle: Metadata['title'] = isHome ? { absolute: p.title[lang] } : p.title[lang];
  const ogTitle = isHome ? p.title[lang] : `${p.title[lang]} | ${BRAND[lang]}`;

  const images = p.ogImage
    ? [{ url: p.ogImage, width: 1200, height: 630, alt: p.ogAlt?.[lang] ?? p.title[lang] }]
    : undefined;

  return {
    title: docTitle,
    description: p.description[lang],
    alternates: {
      canonical,
      languages: {
        'en-SG': p.path,
        'zh-SG': zhPath(p.path),
        'x-default': p.path,
      },
    },
    openGraph: {
      title: ogTitle,
      description: p.description[lang],
      url: canonical,
      locale: lang === 'en' ? 'en_SG' : 'zh_SG',
      ...(images ? { images } : {}),
    },
    twitter: {
      title: ogTitle,
      description: p.description[lang],
      ...(images ? { images: images.map((i) => ({ url: i.url, alt: i.alt })) } : {}),
    },
  };
}

// One blog post's Metadata for a locale: title/description from the registry,
// self canonical, en-SG/zh-SG/x-default hreflang, and an article-type OpenGraph
// card using the post cover. Mirrors pageMetadata but keyed off a Post record
// rather than a fixed PageSlug.
export function blogPostMetadata(post: Post, lang: Lang): Metadata {
  const path = `/blog/${post.slug}`;
  const canonical = lang === 'en' ? path : zhPath(path);
  const title = post.title[lang];
  const description = post.description[lang];
  const ogTitle = `${title} | ${BRAND[lang]}`;
  const images = [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt[lang] }];

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en-SG': path,
        'zh-SG': zhPath(path),
        'x-default': path,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.date,
      locale: lang === 'en' ? 'en_SG' : 'zh_SG',
      images,
    },
    twitter: {
      title: ogTitle,
      description,
      images: images.map((i) => ({ url: i.url, alt: i.alt })),
    },
  };
}
