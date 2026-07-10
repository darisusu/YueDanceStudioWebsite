import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YUE Dance Studio — Xiang Yue Culture Arts',
    short_name: 'YUE Dance',
    description:
      'Professional Chinese dance, ballet, contemporary, and folk dance classes in Singapore. All levels welcome.',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F0E8',
    theme_color: '#F5F0E8',
    icons: [
      {
        src: '/images/logo/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
