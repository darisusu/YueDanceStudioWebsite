import type { Metadata } from 'next';
import type { Lang } from '@/lib/translations';
import { PAGES, type PageSlug } from '@/data/pageSeo';
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
