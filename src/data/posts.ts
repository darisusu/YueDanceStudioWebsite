import type { Bilingual } from '@/lib/translations';

// Blog post registry. One entry per post; the article bodies live as MDX at
// src/content/blog/<slug>/{en,zh}.mdx and are imported by the [slug] route.
// This file is the single source of truth for post metadata — it drives the
// index lists, per-post <title>/description + hreflang (src/lib/seo.ts), the
// BlogPosting JSON-LD (src/lib/jsonld.ts), and the sitemap.
export interface Post {
  /** kebab-case; identical across locales. EN at /blog/<slug>, 中文 at /zh/blog/<slug>. */
  slug: string;
  /** ISO publication date (YYYY-MM-DD); drives ordering and datePublished. */
  date: string;
  title: Bilingual;
  description: Bilingual;
  /** Path under /public; rendered with next/image. */
  cover: string;
  coverAlt: Bilingual;
  tags: Bilingual[];
}

const T = {
  beginners:    { en: 'Beginners',     zh: '入门' },
  chineseDance: { en: 'Chinese Dance', zh: '华族舞' },
  classical:    { en: 'Classical',     zh: '古典舞' },
  ballet:       { en: 'Ballet',        zh: '芭蕾' },
  contemporary: { en: 'Contemporary',  zh: '当代舞' },
  culture:      { en: 'Culture',       zh: '文化' },
  wellbeing:    { en: 'Wellbeing',     zh: '身心' },
  community:    { en: 'Community',     zh: '社群' },
  performance:  { en: 'Performance',   zh: '演出' },
  studioLife:   { en: 'Studio Life',   zh: '习舞日常' },
} satisfies Record<string, Bilingual>;

export const posts: Post[] = [
  {
    slug: 'too-late-to-start-dancing-as-an-adult',
    date: '2026-07-10',
    title: {
      en: 'Is It Too Late to Start Dancing as an Adult in Singapore?',
      zh: '成年后才开始学跳舞，会不会太迟？',
    },
    description: {
      en: "Too old, too stiff, too busy? A warm guide for adult beginners in Singapore — why it's never too late to start dancing, and how to take the first step.",
      zh: '太老、太僵、太忙？写给新加坡成人零基础舞者的温柔指南——什么时候开始跳舞都不算迟，第一步这样迈出。',
    },
    cover: '/images/hero/hero-dancer.jpg',
    coverAlt: {
      en: 'An adult dancer mid-phrase in a warm-lit studio',
      zh: '暖光舞室中翩然起舞的成人舞者',
    },
    tags: [T.beginners, T.wellbeing],
  },
  {
    slug: 'chinese-dance-ballet-or-contemporary',
    date: '2026-07-03',
    title: {
      en: 'Chinese Dance, Ballet or Contemporary: Which Class Is Right for You?',
      zh: '华族舞、芭蕾还是当代舞？成人初学者该如何选择第一支舞',
    },
    description: {
      en: 'An honest guide for adult beginners in Singapore — how Chinese dance, ballet and contemporary really feel, and how to choose the class that fits you.',
      zh: '新加坡成人舞蹈初学者必读：华族舞、芭蕾与当代舞的真实课堂体验与选择建议，找到最适合你的第一支舞。',
    },
    cover: '/images/featured/featured-contemporary-1.jpg',
    coverAlt: {
      en: 'Adult dancers exploring movement in a bright studio',
      zh: '明亮舞室中探索肢体律动的成人舞者',
    },
    tags: [T.beginners, T.chineseDance, T.ballet],
  },
  {
    slug: 'what-is-chinese-classical-dance',
    date: '2026-06-26',
    title: {
      en: "What Is Chinese Classical Dance? A Beginner's Guide to 古典舞",
      zh: '什么是中国古典舞？零基础成人入门指南',
    },
    description: {
      en: "An adult beginner's guide to 古典舞: its roots, body rhythm (身韵), breath, and signature curves — and how to start in Singapore.",
      zh: '带你了解中国古典舞的源流、身韵与气息，以及圆、曲、拧、倾的独特美感。成人零基础也能轻松开始。',
    },
    cover: '/images/featured/chinese-classical-dance.jpg',
    coverAlt: {
      en: 'A Chinese classical dancer tracing a curved line',
      zh: '中国古典舞者勾勒流动的身体线条',
    },
    tags: [T.chineseDance, T.classical, T.culture],
  },
  {
    slug: 'ballet-vs-contemporary-dance',
    date: '2026-06-19',
    title: {
      en: 'Ballet vs Contemporary Dance: How They Differ — and How They Make Each Other Better',
      zh: '芭蕾与当代舞：区别在哪里，又如何彼此成全',
    },
    description: {
      en: 'A warm guide for adult beginners: how ballet and contemporary dance differ in history, technique and feel — and why they make each other better.',
      zh: '写给成人初学者：芭蕾与当代舞在历史、技巧与感受上有何不同，又如何彼此成全。带你找到适合自己的那一种。',
    },
    cover: '/images/featured/featured-ballet-1.jpg',
    coverAlt: {
      en: 'An adult dancer at the barre beside a floorwork pose',
      zh: '把杆前的成人舞者与地面动作的对照',
    },
    tags: [T.ballet, T.contemporary, T.beginners],
  },
  {
    slug: 'chinese-dance-vs-folk-vs-classical',
    date: '2026-06-12',
    title: {
      en: "Chinese Dance vs Folk vs Classical: What's the Difference?",
      zh: '华族舞、民族舞、古典舞：三者到底有什么区别？',
    },
    description: {
      en: 'Confused by Chinese, ethnic folk and classical dance? A clear cultural guide to their origins, aesthetics and how each feels to learn as an adult in Singapore.',
      zh: '华族舞是总称，民族舞重地域风情，古典舞讲身韵气质。一文讲清三者源流与美学差异，助新加坡成人学员选对入门舞种。',
    },
    cover: '/images/featured/chang-hsiao-min-chinese-dance.jpg',
    coverAlt: {
      en: 'A Chinese dance performance in vivid costume',
      zh: '华族舞演出中色彩鲜明的舞姿',
    },
    tags: [T.chineseDance, T.classical, T.culture],
  },
  {
    slug: 'chinese-dance-living-heritage-singapore',
    date: '2026-06-05',
    title: {
      en: 'Chinese Dance as Living Heritage in Singapore',
      zh: '华族舞蹈：在新加坡流动的文化传承',
    },
    description: {
      en: 'How Chinese classical and folk dance carry heritage and belonging in multicultural Singapore — and how adults keep the tradition moving today.',
      zh: '华族古典舞与民族舞如何在多元的新加坡承载文化与归属感——以及成人舞者如何让这份传统继续律动。',
    },
    cover: '/images/about/about-performance-12.jpeg',
    coverAlt: {
      en: 'Dancers on a festival stage under warm light',
      zh: '节庆舞台上暖光下的舞者',
    },
    tags: [T.chineseDance, T.culture, T.performance],
  },
  {
    slug: 'too-stiff-to-dance-flexibility-guide',
    date: '2026-05-29',
    title: {
      en: 'Too Stiff to Dance? A Beginner’s Guide to Safe Stretching & Flexibility for Adults',
      zh: '身体太僵，跳不了舞？成人安全拉伸与柔韧度入门指南',
    },
    description: {
      en: "Think you're too stiff or too old to dance? Flexibility is trainable at any age. A safe, beginner-friendly stretching guide for adults in Singapore.",
      zh: '以为自己太僵、年纪太大不能学舞？柔韧度任何年龄都能练。为新加坡成人初学者准备的安全拉伸入门指南。',
    },
    cover: '/images/featured/featured-ballet-2.jpg',
    coverAlt: {
      en: 'An adult beginner warming up gently at the barre',
      zh: '把杆前轻柔热身的成人初学者',
    },
    tags: [T.beginners, T.wellbeing],
  },
  {
    slug: 'dance-as-stress-relief-for-professionals',
    date: '2026-05-22',
    title: {
      en: 'The 90-Minute Reset: How Dance Relieves Stress for Busy Professionals',
      zh: '90分钟的重启：忙碌上班族的舞蹈解压之道',
    },
    description: {
      en: 'Phone down, mind quiet: how a 90-minute dance class becomes a weekly reset for stressed working professionals in Singapore.',
      zh: '放下手机，让身心归零：一堂90分钟的舞蹈课，如何成为新加坡忙碌上班族每周的解压时刻。',
    },
    cover: '/images/featured/featured-contemporary-3.jpg',
    coverAlt: {
      en: 'A dancer moving freely, tension released',
      zh: '舒展身心、释放压力的舞者',
    },
    tags: [T.wellbeing, T.contemporary],
  },
  {
    slug: 'dance-vs-the-gym',
    date: '2026-05-15',
    title: {
      en: 'Dance vs the Gym: A Gentler Route to Strength and Flexibility',
      zh: '跳舞还是健身房？通往力量与柔韧的更温柔之路',
    },
    description: {
      en: "Dreading the gym again? Why dance builds strength, flexibility and stamina in a way you'll actually keep up — an honest comparison for adults.",
      zh: '又不想去健身房了？舞蹈同样练力量、柔韧与耐力，却让你更愿意坚持——写给成年人的诚实比较。',
    },
    cover: '/images/hero/hero-banner-2.jpg',
    coverAlt: {
      en: 'Adults in an energetic dance class',
      zh: '充满活力的成人舞蹈课堂',
    },
    tags: [T.wellbeing, T.beginners],
  },
  {
    slug: 'low-impact-dance-for-every-body',
    date: '2026-05-08',
    title: {
      en: 'Low-Impact, All Ages: Dance That Meets Your Body Where It Is',
      zh: '低冲击、不限年龄：从身体现状出发的舞蹈',
    },
    description: {
      en: "Not fit or young enough? Dance meets your body where it is — low-impact, adjustable, and open to every age. Here's how to begin gently.",
      zh: '担心体力或年龄跟不上？舞蹈从你的身体现状出发——低冲击、可调节、不限年龄。教你如何温和开始。',
    },
    cover: '/images/hero/hero-banner-3.jpg',
    coverAlt: {
      en: 'Adult dancers of different ages in class',
      zh: '不同年龄的成人学员一同起舞',
    },
    tags: [T.beginners, T.wellbeing],
  },
  {
    slug: 'fitting-dance-into-a-working-week',
    date: '2026-05-01',
    title: {
      en: 'Lunchtime and After-Work: How to Fit Dance Into a Busy Working Week',
      zh: '午休与下班后：把舞蹈放进忙碌的一周',
    },
    description: {
      en: 'No time to dance? Practical, realistic ways for busy Singapore professionals to fit a class into the working week — and actually keep it up.',
      zh: '总说没时间跳舞？为新加坡忙碌上班族准备的实用方法，把一堂课放进工作周，并真正坚持下去。',
    },
    cover: '/images/hero/hero-banner-1.jpeg',
    coverAlt: {
      en: 'A dancer arriving for an evening class',
      zh: '赶赴傍晚课程的舞者',
    },
    tags: [T.studioLife, T.beginners],
  },
  {
    slug: 'studio-etiquette-for-adults',
    date: '2026-04-24',
    title: {
      en: 'The Unwritten Rules: Studio Etiquette for Adult Dance Classes',
      zh: '不成文的规矩：成人舞蹈课堂礼仪',
    },
    description: {
      en: 'Nervous about your first class? The unwritten rules of a dance studio, explained warmly — so you can walk in feeling at ease.',
      zh: '第一次上课有点紧张？温柔梳理舞蹈教室的不成文规矩，让你自在走进课堂。',
    },
    cover: '/images/featured/featured-chinese-dance-3.jpg',
    coverAlt: {
      en: 'Dancers lined up respectfully in a studio',
      zh: '舞室中井然有序的学员',
    },
    tags: [T.studioLife, T.beginners],
  },
  {
    slug: 'what-progress-looks-like-adult-dancer',
    date: '2026-04-17',
    title: {
      en: 'What Progress Really Looks Like as an Adult Dancer',
      zh: '成人舞者的进步，真实的模样',
    },
    description: {
      en: "Progress as an adult dancer isn't a straight line. An honest look at plateaus, small wins, and why consistency beats talent.",
      zh: '成人学舞的进步从不是直线。诚实聊聊瓶颈、小小的突破，以及为什么坚持胜过天赋。',
    },
    cover: '/images/featured/featured-chinese-dance-2.jpg',
    coverAlt: {
      en: 'An adult dancer focused in practice',
      zh: '专注练习的成人舞者',
    },
    tags: [T.studioLife, T.beginners],
  },
  {
    slug: 'dance-confidence-midlife',
    date: '2026-04-10',
    title: {
      en: 'Dance, Confidence, and Reinventing Yourself in Midlife',
      zh: '舞蹈、自信与中年的自我重塑',
    },
    description: {
      en: 'In your 30s, 40s or 50s and craving something for yourself? How dance rebuilds confidence, posture and a sense of self in midlife.',
      zh: '三四十岁、五十岁，渴望为自己做点什么？舞蹈如何在中年重建自信、体态与自我认同。',
    },
    cover: '/images/about/about-performance-6.jpg',
    coverAlt: {
      en: 'An adult dancer poised with quiet confidence',
      zh: '从容自信的成人舞者',
    },
    tags: [T.wellbeing, T.studioLife],
  },
  {
    slug: 'rediscovering-self-expression',
    date: '2026-04-03',
    title: {
      en: 'Rediscovering Self-Expression as a Working Adult',
      zh: '重新找回表达自己的方式（写给忙碌的成年人）',
    },
    description: {
      en: 'Years of being practical and measured can mute the expressive self. How dance gives working adults a language for feeling again.',
      zh: '多年的理性与克制，会让表达的自己渐渐沉默。舞蹈如何让忙碌的成年人重新拥有抒发情感的语言。',
    },
    cover: '/images/featured/featured-contemporary-2.jpg',
    coverAlt: {
      en: 'A dancer expressing emotion through movement',
      zh: '以肢体抒发情感的舞者',
    },
    tags: [T.contemporary, T.wellbeing],
  },
  {
    slug: 'social-side-of-an-adult-studio',
    date: '2026-03-27',
    title: {
      en: 'Finding Your People: The Social Side of an Adult Dance Studio',
      zh: '找到同好：成人舞蹈教室的社群温度',
    },
    description: {
      en: "Making friends as an adult is hard. How a dance studio becomes a 'third place' — and the quiet bonds that form at the barre.",
      zh: '成年后交朋友并不容易。舞蹈教室如何成为工作与家之外的"第三空间"，以及把杆前悄然结下的情谊。',
    },
    cover: '/images/about/about-performance-1.jpg',
    coverAlt: {
      en: 'Adult dancers sharing a light moment together',
      zh: '成人学员相聚共舞的温馨一刻',
    },
    tags: [T.community, T.studioLife],
  },
  {
    slug: 'mind-body-science-chinese-classical-dance',
    date: '2026-03-20',
    title: {
      en: '身韵 & Breath: The Mind-Body Practice of Chinese Classical Dance',
      zh: '身韵与呼吸：中国古典舞的身心之道',
    },
    description: {
      en: 'More than choreography: how the breath (气息) and body rhythm (身韵) of Chinese classical dance train presence, calm and coordination for adults.',
      zh: '不只是动作：中国古典舞的气息与身韵，如何为成年人培养专注、沉静与身体的协调。',
    },
    cover: '/images/featured/featured-chinese-dance-1.jpg',
    coverAlt: {
      en: 'A classical dancer poised on the breath',
      zh: '以气息为引、凝神而舞的古典舞者',
    },
    tags: [T.classical, T.wellbeing, T.culture],
  },
  {
    slug: 'why-adults-choose-chinese-dance',
    date: '2026-03-13',
    title: {
      en: 'Why Culturally Curious Adults Choose Chinese Dance',
      zh: '为什么选择华族舞：写给对文化好奇的成年人',
    },
    description: {
      en: 'Beyond fitness: why adults in Singapore choose Chinese dance — heritage, beauty, storytelling and belonging. Newcomers of every background welcome.',
      zh: '不只为健身：新加坡的成年人为何选择华族舞——传承、美感、故事与归属。欢迎不同背景的初学者。',
    },
    cover: '/images/featured/featured-chinese-dance-4.jpg',
    coverAlt: {
      en: 'An adult learning an expressive Chinese dance movement',
      zh: '学习华族舞抒情动作的成人学员',
    },
    tags: [T.chineseDance, T.culture],
  },
  {
    slug: 'from-trial-to-recital-stage',
    date: '2026-03-06',
    title: {
      en: "From First Trial to the Recital Stage: An Adult's Path",
      zh: '从体验课到汇演舞台：一位成人学员的旅程',
    },
    description: {
      en: 'From a nervous first trial to the recital stage — an illustrative look at the path an adult beginner can travel at YUE Dance Studio.',
      zh: '从忐忑的第一堂体验课，到站上汇演舞台——描绘一位成人初学者在悦舞坊可能走过的旅程。',
    },
    cover: '/images/performances/recital/yue-dance-rising-1.jpg',
    coverAlt: {
      en: 'Dancers on the recital stage',
      zh: '汇演舞台上的舞者',
    },
    tags: [T.studioLife, T.performance],
  },
  {
    slug: 'should-adults-perform',
    date: '2026-02-27',
    title: {
      en: 'Should Adults Perform? Why the Stage Is Worth It',
      zh: '成人该不该上台？舞台为何值得',
    },
    description: {
      en: 'Think the stage is only for kids or pros? Why performing as an adult — nerves and all — is one of the most rewarding parts of learning to dance.',
      zh: '以为舞台只属于孩子或专业舞者？作为成年人上台——连同那份紧张——正是学舞路上最有收获的时刻之一。',
    },
    cover: '/images/about/about-performance-10.jpg',
    coverAlt: {
      en: 'An adult performer on stage',
      zh: '登台演出的成人舞者',
    },
    tags: [T.performance, T.studioLife],
  },
  {
    slug: 'our-chingay-river-hongbao-journey',
    date: '2026-02-20',
    title: {
      en: 'On the Big Stage: Our Chingay and River Hong Bao Journey',
      zh: '登上大舞台：我们的妆艺与河畔嘉年华之路',
    },
    description: {
      en: "From rehearsal room to Chingay and River Hong Bao — the story of taking part in Singapore's shared cultural celebrations.",
      zh: '从排练室走上妆艺大游行与新春河畔嘉年华——一段参与新加坡共同文化庆典的故事。',
    },
    cover: '/images/about/about-performance-13.jpg',
    coverAlt: {
      en: 'Dancers performing at a Singapore cultural festival',
      zh: '在新加坡文化庆典上演出的舞者',
    },
    tags: [T.performance, T.culture, T.chineseDance],
  },
];
