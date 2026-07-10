import { Cormorant_Garamond, DM_Sans, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';

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

export const fontVariables = `${cormorant.variable} ${dmSans.variable} ${notoSansTC.variable} ${notoSerifTC.variable}`;
