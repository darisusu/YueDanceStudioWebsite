import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Schedule',
  description:
    'Weekly class timetable for Chinese dance, ballet, contemporary and folk dance at YUE Dance Studio Singapore. Find a session that fits your schedule.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/schedule' },
  openGraph: {
    title: 'Class Schedule | YUE Dance Studio Singapore',
    description:
      'Weekly class timetable for Chinese dance, ballet, contemporary and folk dance at YUE Dance Studio Singapore. Find a session that fits your schedule.',
    url: 'https://www.xiangyueculturearts.com/schedule',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Class Schedule | YUE Dance Studio Singapore',
    description:
      'Weekly class timetable for Chinese dance, ballet, contemporary and folk dance at YUE Dance Studio Singapore. Find a session that fits your schedule.',
  },
};

import ScheduleContent from '@/components/ScheduleContent';
import { breadcrumbJsonLd } from '@/data/config';

export default function SchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd('Class Schedule', '/schedule')) }}
      />
      <ScheduleContent />
    </>
  );
}
