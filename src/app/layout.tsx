import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import HtmlRoot from '@/components/HtmlRoot';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
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
  },
  twitter: { card: 'summary_large_image' },
};

// TODO: ADD_GA4_MEASUREMENT_ID — create a GA4 property at analytics.google.com
// then replace the placeholder below with your G-XXXXXXXXXX measurement ID
const GA4_ID = 'G-XXXXXXXXXX';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <HtmlRoot className={`${cormorant.variable} ${dmSans.variable} h-full antialiased bg-ivory`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto fonts provide CJK fallback for the bilingual toggle — low priority, not LCP-critical */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          // @ts-expect-error — fetchPriority is valid HTML but not yet in React's TS types for <link>
          fetchPriority="low"
        />
      </head>
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
      </body>
      <GoogleAnalytics gaId={GA4_ID} />
    </HtmlRoot>
  );
}
