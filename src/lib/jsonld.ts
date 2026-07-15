import type { Lang } from '@/lib/translations';
import { t } from '@/lib/translations';
import { courses } from '@/data/courses';
import { instructors } from '@/data/instructors';
import { SITE_URL, REGISTRATION_URL, jsonLd as orgJsonLd } from '@/data/config';
import { PAGES, type PageSlug } from '@/data/pageSeo';
import type { Post } from '@/data/posts';
import { absoluteUrl } from '@/lib/locale';

// Per-locale structured data. Each builder takes the page language so the JSON-LD
// matches the rendered page — critical for Chinese AEO (e.g. a Chinese FAQPage on
// /zh/faq) and so breadcrumbs carry locale-prefixed URLs.

export function breadcrumbJsonLd(slug: PageSlug, lang: Lang) {
  const p = PAGES[slug];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : '首页', item: absoluteUrl('/', lang) },
      { '@type': 'ListItem', position: 2, name: p.crumb![lang], item: absoluteUrl(p.path, lang) },
    ],
  };
}

export function coursesJsonLd(lang: Lang) {
  return courses.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.name[lang],
    description: c.description[lang],
    // Reference the organization node (emitted site-wide in the root layout) by
    // @id only — no duplicated/conflicting name.
    provider: { '@id': `${SITE_URL}/#organization` },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      location: orgJsonLd.address,
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      priceCurrency: 'SGD',
      url: REGISTRATION_URL,
      availability: 'https://schema.org/InStock',
    },
  }));
}

export function instructorsJsonLd(lang: Lang) {
  return instructors.map((i) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: i.name,
    alternateName: i.nameZh,
    jobTitle: i.title[lang],
    description: i.bio[lang],
    image: `${SITE_URL}${i.photo}`,
    url: absoluteUrl('/instructors', lang),
    worksFor: { '@id': `${SITE_URL}/#organization` },
    knowsAbout: i.teaches[lang].split('·').map((s) => s.trim()),
  }));
}

export function articleJsonLd(post: Post, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title[lang],
    description: post.description[lang],
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang === 'en' ? 'en-SG' : 'zh-SG',
    // The studio is both author and publisher; reference the org node by @id.
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`, lang),
    keywords: post.tags.map((tag) => tag[lang]).join(', '),
  };
}

export function blogPostBreadcrumbJsonLd(post: Post, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : '首页', item: absoluteUrl('/', lang) },
      { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Blog' : '博客', item: absoluteUrl('/blog', lang) },
      { '@type': 'ListItem', position: 3, name: post.title[lang], item: absoluteUrl(`/blog/${post.slug}`, lang) },
    ],
  };
}

export function faqJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q[lang],
        acceptedAnswer: { '@type': 'Answer', text: item.a[lang] },
      })),
    ),
  };
}
