import type { Lang } from '@/lib/translations';
import { SITE_URL } from '@/data/config';

// English lives at the root; Chinese under a /zh prefix. These helpers are the
// single source of truth for that mapping — used by links, canonical/hreflang
// metadata, the sitemap, and JSON-LD URLs.

export function zhPath(path: string): string {
  return path === '/' ? '/zh' : `/zh${path}`;
}

export function localizedHref(path: string, lang: Lang): string {
  return lang === 'en' ? path : zhPath(path);
}

export function absoluteUrl(path: string, lang: Lang): string {
  return `${SITE_URL}${localizedHref(path, lang)}`;
}
