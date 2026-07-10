import HomeContent from '@/components/HomeContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('home', 'en');

export default function HomePage() {
  return <HomeContent />;
}
