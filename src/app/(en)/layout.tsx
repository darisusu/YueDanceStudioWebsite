import type { Metadata, Viewport } from 'next';
import { fontVariables } from '@/lib/fonts';
import RootShell from '@/components/RootShell';
import '../globals.css';

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
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontVariables} h-full antialiased bg-ivory`} data-scroll-behavior="smooth">
      <body className="min-h-dvh flex flex-col bg-ivory text-ink">
        <RootShell lang="en">{children}</RootShell>
      </body>
    </html>
  );
}
