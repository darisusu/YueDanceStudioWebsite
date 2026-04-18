import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Established in 2018, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/about' },
  openGraph: {
    title: 'About Us | YUE Dance Studio Singapore',
    description:
      'Established in 2018, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
    url: 'https://www.xiangyueculturearts.com/about',
    locale: 'en_SG',
  },
  twitter: {
    title: 'About Us | YUE Dance Studio Singapore',
    description:
      'Established in 2018, Xiang Yue Culture Arts brings professional dance training to Singapore\'s community through experienced instructors and inspiring performances.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
