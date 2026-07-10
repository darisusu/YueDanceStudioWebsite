import type { Metadata, Viewport } from 'next';
import { fontVariables } from '@/lib/fonts';
import RootShell from '@/components/RootShell';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: '翔悦文艺 · 悦舞坊 | 新加坡舞蹈学院',
    template: '%s | 翔悦文艺',
  },
  description:
    '新加坡专业华族舞、芭蕾与当代舞课程，翔悦文艺·悦舞坊，欢迎各程度学员。',
  metadataBase: new URL('https://www.xiangyueculturearts.com'),
  openGraph: {
    siteName: '翔悦文艺 · 悦舞坊',
    locale: 'zh_SG',
    type: 'website',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', width: 1200, height: 630, alt: '翔悦文艺 — 新加坡华族舞、芭蕾与当代舞' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/hero/hero-banner-1.jpeg', alt: '翔悦文艺 — 新加坡华族舞、芭蕾与当代舞' }],
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#F5F0E8',
};

// The entire /zh tree is Chinese, so activate the CJK font family from the
// server HTML (`cjk-active`) rather than waiting for the client activator.
export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning className={`${fontVariables} cjk-active h-full antialiased bg-ivory`} data-scroll-behavior="smooth">
      <body className="min-h-dvh flex flex-col bg-ivory text-ink">
        <RootShell lang="zh">{children}</RootShell>
      </body>
    </html>
  );
}
