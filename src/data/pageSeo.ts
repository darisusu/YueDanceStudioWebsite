import type { Bilingual } from '@/lib/translations';

// Per-route SEO copy, one entry per page. Drives per-locale <title>/description,
// canonical + hreflang alternates (via src/lib/seo.ts), the sitemap, and
// breadcrumb names (via src/lib/jsonld.ts). English strings match the pre-refactor
// metadata; the Chinese strings are drafts pending a native-speaker review pass.

export interface PageSeo {
  /** Un-prefixed English path; the Chinese route is this prefixed with /zh. */
  path: string;
  /** For `home` this is the full brand title (rendered absolute); for the rest
   *  it is the `%s` fed into the per-locale title template. */
  title: Bilingual;
  description: Bilingual;
  /** Breadcrumb leaf name (omitted for the homepage, which has no breadcrumb). */
  crumb?: Bilingual;
  ogImage?: string;
  ogAlt?: Bilingual;
}

const PAGES_DATA = {
  home: {
    path: '/',
    title: {
      en: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
      zh: '翔悦文艺 · 悦舞坊 | 新加坡舞蹈学院',
    },
    description: {
      en: 'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
      zh: '新加坡专业华族舞、芭蕾与当代舞课程，翔悦文艺·悦舞坊，欢迎各程度学员。',
    },
    ogImage: '/images/hero/hero-banner-1.jpeg',
    ogAlt: {
      en: 'YUE Dance Studio — elegant dance classes in Singapore',
      zh: '翔悦文艺 — 新加坡优雅舞蹈课程',
    },
  },
  about: {
    path: '/about',
    title: { en: 'About Us', zh: '关于我们' },
    description: {
      en: "Established in 2018 on Beach Road, Xiang Yue Culture Arts brings professional dance training to Singapore's community through experienced instructors and inspiring performances.",
      zh: '翔悦文艺于2018年创立于美芝路，由资深导师团队为新加坡社群带来专业舞蹈训练与精彩演出。',
    },
    crumb: { en: 'About Us', zh: '关于我们' },
    ogImage: '/images/about/about-performance-1.jpg',
    ogAlt: {
      en: 'YUE Dance Studio performance showcase',
      zh: '翔悦文艺演出风采',
    },
  },
  instructors: {
    path: '/instructors',
    title: { en: 'Our Instructors', zh: '导师团队' },
    description: {
      en: 'Meet the professional dance instructors at YUE Dance Studio, specialists in Chinese dance, ballet, folk dance, and contemporary styles.',
      zh: '认识翔悦文艺·悦舞坊的专业导师团队，专精华族舞、芭蕾、民族舞与当代舞。',
    },
    crumb: { en: 'Our Instructors', zh: '导师团队' },
    ogImage: '/images/hero/hero-banner-3.jpg',
    ogAlt: {
      en: 'Professional dance instructors at YUE Dance Studio',
      zh: '翔悦文艺的专业舞蹈导师',
    },
  },
  courses: {
    path: '/courses',
    title: {
      en: 'YUE Dance Courses | Singapore Dance Classes',
      zh: '舞蹈课程 | 新加坡华族舞 · 芭蕾 · 当代舞',
    },
    description: {
      en: 'Explore our range of dance courses in Singapore: Chinese dance, ballet, contemporary, folk dance and more. Suitable for beginners to advanced dancers.',
      zh: '探索新加坡多元舞蹈课程：华族舞、芭蕾、当代舞、民族舞等，适合零基础至进阶学员。',
    },
    crumb: { en: 'Courses', zh: '舞蹈课程' },
    ogImage: '/images/featured/featured-contemporary-3.jpg',
    ogAlt: {
      en: 'Dance courses at YUE Dance Studio Singapore',
      zh: '翔悦文艺新加坡舞蹈课程',
    },
  },
  performances: {
    path: '/performances',
    title: { en: 'Performances & Awards', zh: '演出与奖项' },
    description: {
      en: "From Chingay Parade to the Singapore Golden Lion Cup: YUE Dance Studio's stage history spanning national events, charity concerts, and our annual showcase.",
      zh: '从妆艺大游行到新加坡金狮杯——翔悦文艺的舞台历程，涵盖国家庆典、慈善义演与年度汇演。',
    },
    crumb: { en: 'Performances & Awards', zh: '演出与奖项' },
    ogImage: '/images/about/about-performance-6.jpg',
    ogAlt: {
      en: 'YUE Dance Studio stage performance',
      zh: '翔悦文艺舞台演出',
    },
  },
  schedule: {
    path: '/schedule',
    title: { en: 'Class Schedule', zh: '课程表' },
    description: {
      en: 'Weekly class timetable for Chinese dance, ballet, contemporary and folk dance at YUE Dance Studio Singapore. Find a session that fits your schedule.',
      zh: '翔悦文艺每周课程表：华族舞、芭蕾、当代舞与民族舞，找到适合您的上课时间。',
    },
    crumb: { en: 'Class Schedule', zh: '课程表' },
  },
  contact: {
    path: '/contact',
    title: { en: 'Contact Us', zh: '联系我们' },
    description: {
      en: 'Get in touch with YUE Dance Studio. Located at Beach Road, Singapore. Enquiries via email, WhatsApp, or our registration form.',
      zh: '联系翔悦文艺·悦舞坊，地址位于新加坡美芝路，可通过电邮、WhatsApp或报名表格咨询。',
    },
    crumb: { en: 'Contact Us', zh: '联系我们' },
  },
  faq: {
    path: '/faq',
    title: { en: 'FAQ', zh: '常见问题' },
    description: {
      en: 'Answers to common questions about our courses, fees, attire and performance opportunities at YUE Dance Studio Singapore.',
      zh: '关于翔悦文艺课程、费用、着装与演出机会的常见问题解答。',
    },
    crumb: { en: 'FAQ', zh: '常见问题' },
  },
  voices: {
    path: '/voices',
    title: { en: 'Student Voices', zh: '学员心声' },
    description: {
      en: 'In their own words: reflections, messages, and poems from the students of YUE Dance Studio (Xiang Yue Culture Arts) in Singapore.',
      zh: '学员们的真挚分享：翔悦文艺·悦舞坊学员的感言、心声与诗篇。',
    },
    crumb: { en: 'Student Voices', zh: '学员心声' },
  },
  blog: {
    path: '/blog',
    title: {
      en: 'Blog | Adult Dance in Singapore',
      zh: '博客 | 新加坡成人舞蹈',
    },
    description: {
      en: 'Guides, culture, and reflections on adult dance in Singapore — Chinese dance, ballet and contemporary — from YUE Dance Studio.',
      zh: '悦舞坊博客：新加坡成人舞蹈的入门指南、文化随笔与习舞心得，涵盖华族舞、芭蕾与当代舞。',
    },
    crumb: { en: 'Blog', zh: '博客' },
    ogImage: '/images/hero/hero-banner-3.jpg',
    ogAlt: {
      en: 'The YUE Dance Studio blog',
      zh: '悦舞坊博客',
    },
  },
} satisfies Record<string, PageSeo>;

export type PageSlug = keyof typeof PAGES_DATA;

// Re-exported with the uniform PageSeo value type (optional fields included) so
// callers can safely check `crumb`/`ogImage`/`ogAlt`, while PageSlug keeps the
// precise key union above.
export const PAGES: Record<PageSlug, PageSeo> = PAGES_DATA;
