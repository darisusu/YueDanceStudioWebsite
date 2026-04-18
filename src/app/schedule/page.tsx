import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Schedule',
  description:
    'View the latest class timetable for YUE Dance Studio. Find a session that fits your schedule.',
  alternates: { canonical: 'https://www.xiangyueculturearts.com/schedule' },
  openGraph: {
    title: 'Class Schedule | YUE Dance Studio Singapore',
    description:
      'View the latest class timetable for YUE Dance Studio. Find a session that fits your schedule.',
    url: 'https://www.xiangyueculturearts.com/schedule',
    locale: 'en_SG',
  },
  twitter: {
    title: 'Class Schedule | YUE Dance Studio Singapore',
    description:
      'View the latest class timetable for YUE Dance Studio. Find a session that fits your schedule.',
  },
};

import ScheduleContent from '@/components/ScheduleContent';

export default function SchedulePage() {
  return <ScheduleContent />;
}
