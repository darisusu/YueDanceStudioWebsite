import { GoogleAnalytics } from '@next/third-parties/google';
import type { Lang } from '@/lib/translations';
import { GA4_MEASUREMENT_ID, jsonLd } from '@/data/config';
import { LanguageProvider } from '@/context/LanguageContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CJKFontActivator from '@/components/CJKFontActivator';

const GA4_ID = GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '';

// Shared <body> content for both locale root layouts. `lang` comes from the URL
// tree (en at root, zh under /zh) and drives every consumer of useLanguage,
// including Nav and Footer, so the whole chrome renders in the page's language
// server-side (visible to crawlers).
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      {/* Without JS, reveal-on-scroll content would stay invisible; show it. */}
      <noscript>
        <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
      </noscript>
      {/* Organization / DanceSchool graph node — emitted on every page so the
          @id references in the Course and Person schemas always resolve. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Skip-to-content — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:rounded"
      >
        Skip to content
      </a>
      <LanguageProvider lang={lang}>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </LanguageProvider>
      <CJKFontActivator />
      {GA4_ID && <GoogleAnalytics gaId={GA4_ID} />}
    </>
  );
}
