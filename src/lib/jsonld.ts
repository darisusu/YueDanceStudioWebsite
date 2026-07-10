import type { Lang } from '@/lib/translations';
import { t } from '@/lib/translations';
import { courses } from '@/data/courses';
import { instructors } from '@/data/instructors';
import { SITE_URL, REGISTRATION_URL, jsonLd as orgJsonLd } from '@/data/config';
import { PAGES, type PageSlug } from '@/data/pageSeo';
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
