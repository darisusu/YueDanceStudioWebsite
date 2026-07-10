export const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=47%20Beach%20Road%20%2302-04%20Singapore%20189683';

// Click-to-chat links for the two studio contacts (Singapore default channel).
export const WHATSAPP_JANELLE = 'https://wa.me/6596885938';
export const WHATSAPP_VICKY = 'https://wa.me/6594253833';
export const WECHAT_ID = 'lin_jing68';

export const FACEBOOK_URL = 'https://www.facebook.com/xiangyue.dance/';
export const INSTAGRAM_URL = 'https://www.instagram.com/yuedancesg/';
export const DOUYIN_URL =
  'https://www.douyin.com/user/MS4wLjABAAAALKE5By-qugkaCLezzyXgNVuTrykNIq7o10JPMKQwwMxHk7-3D_DZYeLdco5DcWVn';

export const SITE_URL = 'https://www.xiangyueculturearts.com';

// Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. The project avoids
// env vars, so paste the studio's real ID here to enable analytics; '' disables
// it. A NEXT_PUBLIC_GA4_MEASUREMENT_ID env var is still honoured as a fallback.
export const GA4_MEASUREMENT_ID = 'G-PBMFH427K3';

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
  // No `review` markup: we collect testimonial text but no numeric ratings, and
  // Google ignores self-serving reviews a business marks up on its own site —
  // emitting them only triggers the "multiple reviews without aggregateRating"
  // warning with no rich-result benefit. Testimonials still render on-page.
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '10:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday',   opens: '19:30', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '10:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '10:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '16:30', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday',  opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '14:00', closes: '18:00' },
  ],
};
