import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import HtmlRoot from '@/components/HtmlRoot';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CJKFontActivator from '@/components/CJKFontActivator';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

// preload: false — CJK fonts must not generate <link rel="preload"> in the HTML
// head because they would compete with the render-blocking CSS for bandwidth on
// slow connections. CJKFontActivator activates them after the first paint.
const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const notoSerifTC = Noto_Serif_TC({
  variable: '--font-noto-serif-tc',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'YUE Dance Studio Singapore | Xiang Yue Culture Arts',
    template: '%s | YUE Dance Studio Singapore',
  },
  description:
    'Elegant Chinese, ballet and contemporary dance classes in Singapore. All levels welcome.',
  metadataBase: new URL('https://www.xiangyueculturearts.com'),
  openGraph: {
    siteName: 'YUE Dance Studio Singapore',
    locale: 'en_SG',
    type: 'website',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', width: 1200, height: 630, alt: 'YUE Dance Studio — Chinese, ballet and contemporary dance in Singapore' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', alt: 'YUE Dance Studio — Chinese, ballet and contemporary dance in Singapore' }],
  },
};

export const viewport: Viewport = {
  // Let full-bleed hero imagery extend under the notch / Dynamic Island.
  // Fixed elements compensate with env(safe-area-inset-*) padding.
  viewportFit: 'cover',
  // Tints mobile browser chrome to the warm ivory of the page surface.
  themeColor: '#F5F0E8',
  // width=device-width / initial-scale=1 are applied by Next automatically;
  // zoom is intentionally left enabled for accessibility.
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? '';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HtmlRoot className={`${cormorant.variable} ${dmSans.variable} ${notoSansTC.variable} ${notoSerifTC.variable} h-full antialiased bg-ivory`}>
      <body className="min-h-dvh flex flex-col bg-ivory text-ink">
        {/* Skip-to-content — visible only on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CJKFontActivator />
      </body>
      {GA4_ID && <GoogleAnalytics gaId={GA4_ID} />}
    </HtmlRoot>
  );
}
