export const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=47%20Beach%20Road%20%2302-04%20Singapore%20189683';

export const FACEBOOK_URL = 'https://www.facebook.com/xiangyue.dance/';
export const INSTAGRAM_URL = 'https://www.instagram.com/yuedancesg/';
export const DOUYIN_URL =
  'https://www.douyin.com/user/MS4wLjABAAAALKE5By-qugkaCLezzyXgNVuTrykNIq7o10JPMKQwwMxHk7-3D_DZYeLdco5DcWVn';

export const SITE_URL = 'https://www.xiangyueculturearts.com';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['DanceSchool', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'YUE Dance Studio / Xiang Yue Culture Arts',
  alternateName: '翔悦文艺',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/yue-dance-logo.png`,
  image: `${SITE_URL}/images/hero/hero-banner-1.jpeg`,
  description:
    'Professional Chinese dance, ballet, contemporary, and folk dance classes in Singapore. All levels welcome.',
  foundingDate: '2018',
  telephone: '+6596885938',
  email: 'xiangyue.culturearts@gmail.com',
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'Singapore' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '47 Beach Road, #02-04',
    addressLocality: 'Singapore',
    postalCode: '189683',
    addressCountry: 'SG',
  },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL, DOUYIN_URL],
};

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
