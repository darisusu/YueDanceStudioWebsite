import HomeContent from '@/components/HomeContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('home', 'zh');

export default function HomePageZh() {
  return <HomeContent />;
}
