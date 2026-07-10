import type { Metadata } from 'next';
import Link from 'next/link';
import { fontVariables } from '@/lib/fonts';
import { t } from '@/lib/translations';
import './globals.css';

export const metadata: Metadata = {
  title: 'Page Not Found | YUE Dance Studio Singapore',
  robots: { index: false },
};

// Global 404 for unmatched URLs that belong to no locale tree. With two locale
// root layouts and no top-level root layout, this must render its own
// <html>/<body>. Locale-scoped 404s live in (en)/not-found.tsx and (zh)/zh.
export default function GlobalNotFound() {
  const e = t.errors;
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased bg-ivory`}>
      <body className="min-h-dvh flex flex-col bg-ivory text-ink">
        <section className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
          <p className="text-gold-deep text-xs tracking-[0.3em] uppercase mb-4">{e.notFoundTag.en}</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
            {e.notFoundHeading.en}
          </h1>
          <p className="text-ink-light text-base mb-10 max-w-md">{e.notFoundBody.en}</p>
          <Link
            href="/"
            className="inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold-deep px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-150"
          >
            {e.backHome.en}
          </Link>
        </section>
      </body>
    </html>
  );
}
