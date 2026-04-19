export interface Performance {
  year: string;
  en: string;
  zh: string;
  desc?: { en: string; zh: string };
  images?: string[];
}

export const performances: Performance[] = [
  {
    year: '2025',
    en: '7th Anniversary Showcase Concert 《悦舞飞扬 II》',
    zh: '七周年汇演音乐会《悦舞飞扬 II》',
    desc: {
      en: 'Our 7th Anniversary Showcase Concert — celebrating years of artistry, community, and growth.',
      zh: '七周年年度汇演，庆祝翔悦多年来的艺术成就与社群成长。',
    },
    images: ['/images/about/about-performance-10.jpg'],
  },
  {
    year: '2021',
    en: 'River Hong Bao — Best Live Performance Award',
    zh: '新春河畔嘉年华 — 最佳现场演出奖',
    desc: {
      en: 'Performed 《傣家竹雨情》, 《藏音》, and 《阿里情》 at one of Singapore\'s most beloved Chinese New Year festivals.',
      zh: '在新加坡最受欢迎的华族新年盛会上，演出《傣家竹雨情》《藏音》及《阿里情》。',
    },
    images: [
      '/images/about/about-performance-13.jpg',
      '/images/about/about-performance-14.jpg',
      '/images/about/about-performance-8.jpeg',
    ],
  },
  {
    year: '2020',
    en: 'Chingay Parade — Featured by Straits Times; shared by PM Lee Hsien Loong',
    zh: '妆艺大游行 — 获《海峡时报》专题报道，李显龙总理于社交媒体分享',
    desc: {
      en: 'A 35-member team took the Chingay stage. Our performance was featured by the Straits Times and shared by PM Lee Hsien Loong on social media — the team also met with the President.',
      zh: '35名团员登上妆艺大游行舞台，演出获《海峡时报》专题报道，并由李显龙总理于社交媒体转发分享，团队亦获邀与总统会面。',
    },
    images: ['/images/about/about-performance-12.jpeg'],
  },
  {
    year: '2019',
    en: 'Singapore Chinese Spring Festival Gala — Dance: 《情人心》',
    zh: '新加坡华族春节嘉年华 — 演出：《情人心》',
    desc: {
      en: 'Part of a large-scale international art gala broadcasted worldwide, promoting Chinese culture through dance 《情人心》.',
      zh: '参与大型国际艺术晚会，演出《情人心》，向全球推广中华舞蹈文化。',
    },
    images: ['/images/about/about-performance-6.jpg'],
  },
  {
    year: '2019',
    en: 'Dance Is Calling — 《阿里情》, presented by Tampines Art Troupe',
    zh: '《舞动新加坡》— 《阿里情》，由淡滨尼艺术团主办',
    desc: {
      en: 'Performed 《阿里情》 in a diverse dance special organised by Tampines Art Troupe.',
      zh: '受淡滨尼艺术团之邀，于多元舞蹈专场演出《阿里情》。',
    },
    images: ['/images/about/about-performance-5.jpeg'],
  },
  {
    year: '2019',
    en: 'Fo Guang Shan Charity Performance',
    zh: '佛光山慈善演出',
    desc: {
      en: 'Performed alongside actress Michelle in a charitable concert.',
      zh: '与女演员Michelle同台，参与慈善演唱会义演。',
    },
    images: ['/images/about/about-performance-11.jpg'],
  },
  {
    year: '2018',
    en: 'Singapore Golden Lion Awards — Gold Award, Music & Dance Competition (26th edition)',
    zh: '新加坡金狮奖 — 音乐舞蹈赛金奖（第二十六届）',
    desc: {
      en: 'Gold Award at the Singapore Golden Lion Cup, supported by 958 City Channel, Lianhe Zaobao, and the Chinese Embassy.',
      zh: '荣获新加坡金狮奖金奖，赛事由958城市频道、联合早报及中国驻新加坡大使馆联合支持。',
    },
    images: ['/images/about/about-performance-7.jpg'],
  },
];
