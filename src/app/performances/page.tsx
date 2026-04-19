import type { Metadata } from 'next';
import PerformancesContent from '@/components/PerformancesContent';

export const metadata: Metadata = {
  title: 'Performances & Awards',
  description:
    'From Chingay Parade to the Singapore Golden Lion Cup — YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/performances' },
  openGraph: {
    title: 'Performances & Awards | YUE Dance Studio Singapore',
    description:
      'From Chingay Parade to the Singapore Golden Lion Cup — YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
    url: 'https://www.xiangyueculturearts.com/performances',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Performances & Awards | YUE Dance Studio Singapore',
    description:
      'From Chingay Parade to the Singapore Golden Lion Cup — YUE Dance Studio\'s stage history spanning national events, charity concerts, and our annual showcase.',
  },
};

export default function PerformancesPage() {
  return <PerformancesContent />;
}
