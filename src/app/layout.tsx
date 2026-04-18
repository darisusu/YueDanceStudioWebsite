import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { LanguageProvider } from '@/context/LanguageContext';
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
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased bg-ivory`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto fonts provide CJK fallback for the bilingual toggle */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-ivory text-ink">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId={GA4_ID} />
    </html>
  );
}
