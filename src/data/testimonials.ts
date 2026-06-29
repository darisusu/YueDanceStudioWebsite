import type { Bilingual } from '@/lib/translations';

export interface Testimonial {
  quote: Bilingual;
  attribution: Bilingual;
  /** Surfaced in the homepage "wall of voices". The rest live on the /voices archive page. */
  featured?: boolean;
  /** Small eyebrow on homepage cards spotlighting the pillar the quote demonstrates. */
  tag?: Bilingual;
  /** Punchy pull-quote for the homepage wall; the full `quote` still shows on /voices. */
  excerpt?: Bilingual;
  /** No name was given. Shown as "A YUE Dancer" and never merged with other voices. */
  anonymous?: boolean;
}

// Showcase tags — each homepage quote demonstrates one of our three pillars:
// approachability for beginners, the calibre of teaching, and the beauty of dance.
const TAG_BEGINNER: Bilingual = { en: 'No experience needed', zh: '零基础友好' };
const TAG_GUIDANCE: Bilingual = { en: 'Expert guidance',      zh: '专业指导' };
const TAG_BEAUTY:   Bilingual = { en: 'Finding beauty',        zh: '以舞寻美' };

// Used wherever a student shared a message without leaving a name.
const ANON: Bilingual = { en: 'A YUE Dancer', zh: '悦舞坊舞者' };

export const testimonials: Testimonial[] = [
  // ── Legacy testimonials ───────────────────────────────────────────────────

  {
    quote: {
      en: '"Deeply grateful for Lao Shi\'s meticulous guidance — the class was both engaging and genuinely insightful."',
      zh: '「非常感谢老师的细心指导，这堂课既投入，又让我收获良多。」',
    },
    excerpt: {
      en: '"Both deeply engaging and genuinely insightful."',
      zh: '「这堂课，既投入又收获良多。」',
    },
    attribution: { en: 'Sumini · Chinese Dance, Jul 2020', zh: 'Sumini · 华族舞，2020年7月' },
    featured: true,
    tag: TAG_GUIDANCE,
  },
  {
    quote: {
      en: '"Thank you, Teacher Daniel — your choreography and endless patience got even those of us with no dance background onto the stage, and built our confidence enormously."',
      zh: '「谢谢Daniel老师精心的编排与不厌其烦的耐心，让没有舞蹈基础的我们也能登台，大大增强了信心。」',
    },
    excerpt: {
      en: '"Even with no dance background, we got to perform on stage."',
      zh: '「没有舞蹈基础的我们，也能登上舞台。」',
    },
    attribution: { en: 'A Ling · Dance Colour Class, Sep 2019', zh: '阿玲 · 舞色舞味班，2019年9月' },
    featured: true,
    tag: TAG_BEGINNER,
  },
  {
    quote: {
      en: '"I\'ve watched our video again and again — it moves me deeply. So grateful to our teacher, who guides every move with patience. On the road of dance, the only beauty is the one you work for."',
      zh: '「拍完的视频我看了一遍又一遍，感触良多。感谢老师专业又耐心地指导每一个动作——舞蹈的路上，只有努力跳出来的美丽。」',
    },
    attribution: { en: 'Ms Chen · Chinese Dance Class, Jul 2019', zh: '陈小姐 · 中国舞班，2019年7月' },
  },
  {
    quote: {
      en: '"Teacher\'s ballet-modern piece, Hawthorn Tree Melody, is graceful as a gentle stream — it soothed my restless heart through those stay-home days. Thank you, Teacher Daniel & Teacher Lin Jing!"',
      zh: '「老师编的芭蕾现代舞《山楂树舞曲》柔美如清流，缓和了居家时的郁闷心情。谢谢Daniel和林晶老师！」',
    },
    excerpt: {
      en: '"The piece Teacher choreographed — graceful as a gentle stream."',
      zh: '「老师编的舞，柔美得像一股清流。」',
    },
    attribution: { en: 'Wen Fei · Cloud Dance Online Class, Jun 2021', zh: '雯妃 · 云舞网课，2021年6月' },
    featured: true,
    tag: TAG_GUIDANCE,
  },

  // ── Student voices ────────────────────────────────────────────────────────

  {
    quote: {
      en: '"When music rises, the heart soars; when we dance, the spirit rejoices."',
      zh: '「乐起心飞翔，舞动意愉悦。」',
    },
    attribution: { en: 'Wei Min', zh: '魏敏' },
    tag: TAG_BEAUTY,
  },
  {
    quote: {
      en: '"Beauty in life makes ordinary days a little different."',
      zh: '「生活有了美，平凡的日子也不一样了。」',
    },
    excerpt: {
      en: '"Beauty in life makes ordinary days a little different."',
      zh: '「生活有了美，平凡的日子也不一样了。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
    featured: true,
    tag: TAG_BEAUTY,
  },
  {
    quote: {
      en: '"\'Experience through dance, heal through dance.\' I can\'t recall who said it — but this feeling is exactly what they meant."',
      zh: '「在舞蹈中体验，在舞蹈中疗愈——不记得是谁说的，但这种感受，大概正是如此。」',
    },
    attribution: ANON,
    anonymous: true,
  },
  {
    quote: {
      en: '"To anyone who\'s ever had the thought: give it a try. Dance delights both body and mind — once you do, you might discover something altogether different."',
      zh: '「想跳就去试试看吧。舞蹈是件愉悦身心的事，只要尝试了，也许就有不一样的发现。」',
    },
    attribution: ANON,
    anonymous: true,
  },
  {
    quote: {
      en: '"Our class spans dancers born in the \'90s to the \'50s. A full-time mum of three says dancing is her best release; another started once a week and now can\'t skip a day. La Mei, past 60, is set on learning one complete contemporary piece. Awaken that ability at the right moment, and it opens a wellspring of joy."',
      zh: '「我们班里有90后，也有50后。三娃的全职妈妈说跳舞是她最好的放松；有人从一周一次到每天都跳，不跳就缺了点什么；六十多岁的腊梅姐说，一定要学会一支完整的当代舞。这份能力一旦在适当的时候被唤醒，便开启了快乐的源泉。」',
    },
    attribution: ANON,
    anonymous: true,
  },
  {
    quote: {
      en: '"The best education is \'one tree shaking another, one cloud pushing another, one soul awakening another.\' It was our teacher\'s artistry and charisma that ignited our love of dance."',
      zh: '「最好的教育是「一棵树摇动另一棵树，一朵云推动另一朵云，一个灵魂唤醒另一个灵魂」。是老师的舞艺与人格魅力，点燃了我们对舞蹈的热爱。」',
    },
    attribution: ANON,
    anonymous: true,
  },
  {
    quote: {
      en: '"Whenever the music plays, every cell fills with joy — like a gentle conversation with my own soul. We\'re no longer young, yet each dance returns us to our youth. We can\'t decide the length of our lives, but we can expand their breadth — so do what you love while you live."',
      zh: '「音乐一响，全身的细胞都充满喜悦，像与自己的心灵温柔对话。我们虽不再年轻，但每一次起舞都仿佛回到青葱岁月。生命的长度无法决定，宽度却可以拓展——有生之年，做自己热爱的事。」',
    },
    attribution: { en: 'Wei Min', zh: '魏敏' },
  },
  {
    quote: {
      en: '"Every step is a language — it lets us hear wordless expression and feel life\'s vitality, every moment vivid and its own."',
      zh: '「每一个舞步都是一种语言，让我们听见无声的表达，感受生命的活力，每个瞬间都灵动而独特。」',
    },
    excerpt: {
      en: '"Every step is a language."',
      zh: '「每一个舞步都是一种语言。」',
    },
    attribution: { en: 'Judy · Thursday Contemporary Dance', zh: 'Judy · 周四当代舞' },
    featured: true,
    tag: TAG_BEAUTY,
  },
  {
    quote: {
      en: '"Teacher Daniel teaches in layers — first the moves, then staging the piece as art, then dancing in sync to each other\'s breath, and finally with emotion. Before the show he told us to interact with the screen; stepping fully into the role, I nearly moved myself to tears. So grateful for his masterful guidance."',
      zh: '「Daniel老师一层层地教：先学动作，再把舞台设计成作品，然后跳配合、感受彼此呼吸的同频，最后跳感情。演出前他让我们与屏幕互动，真正进入角色的那一刻，我几乎感动了自己。感恩老师大师级的指导。」',
    },
    attribution: { en: 'Li Qiong', zh: '李琼' },
  },
  {
    quote: {
      en: '"Thank you, Teacher — through different styles of dance, you inspire each of us to tell our own story in our body\'s own language, sparking creativity into something fresh and new."',
      zh: '「谢谢老师，以不同风格的舞蹈，启发我们用各自的身体语言讲述自己的故事，激发出新颖的创意。」',
    },
    attribution: { en: 'Yan Lan', zh: '言兰' },
  },
  {
    quote: {
      en: '"Teacher\'s choreography keeps getting harder, and I love it — \'the possible, the impossible, we can all try.\' Follow along and try: I love that freshness."',
      zh: '「老师的编舞越来越有难度，我却很喜欢——「可能的，不可能的，我们都可以尝试」。跟着老师去试，我喜欢这份新鲜感。」',
    },
    excerpt: {
      en: '"The possible, the impossible — we can all try."',
      zh: '「可能的，不可能的，我们都可以尝试。」',
    },
    attribution: { en: 'La Mei', zh: '腊梅' },
    featured: true,
    tag: TAG_BEGINNER,
  },

  // ── Poetry & prose ────────────────────────────────────────────────────────

  {
    quote: {
      en: '"Dance a piece resting on light —\nlike warm sunshine entering the heart,\nbrightening body and spirit.\nSo warm, so beautiful —\nand now there is light in your eyes."',
      zh: '「跳一曲枕着光，\n如暖阳照进心里，\n明媚了身心。\n如此温暖，如此美好，\n眼里有了光。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
  },
  {
    quote: {
      en: '"Thank you, Teacher, for the new session — fresh and captivating throughout. Releasing, free-spirited, subtle, inward-turning: every class is rich and wonderful."',
      zh: '「谢谢老师带来的新一期课堂，精彩而独特——或释放，或洒脱，或含蓄，或内敛，每一堂都丰富动人。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
  },
  {
    quote: {
      en: '"Whether life runs through mud or water — right now, we dance in the clouds.\nWherever we come from — right now, we find ourselves at YUE Dance.\nWhatever the years have brought — right now, we are young."',
      zh: '「不管生活在泥里还是水里，此刻我们舞在云里；\n不管来自哪里，此刻我们在悦舞坊找到自己；\n不管岁月几何，此刻我们青春洋溢。」',
    },
    attribution: { en: 'Jian Fang', zh: '建芳' },
  },
  {
    quote: {
      en: '"Every class is a burning passion;\nevery piece of music a heartfelt telling;\nevery movement ablaze with longing.\nEach time I watch the playback —\nsurprise, reflection, and yearning all at once."',
      zh: '「每一堂课都是燃烧的激情，\n每一段音乐都是深情的诉说，\n每一个动作都燃烧着渴望。\n每一次回放，\n有惊喜，有感慨，有向往。」',
    },
    attribution: { en: 'Jian Fang', zh: '建芳' },
  },
  {
    quote: {
      en: '"Rise to tiptoe, leap and leap — light as a cat.\nA silken turn, fluid as water.\nA hand raised in the mirror, a pause beyond it — drawing every gaze.\nDashing as the young man he once was, tender as far-off moonlight.\nHe moves as if walking in from ancient times."',
      zh: '「踮起脚尖，跳跃跳跃，轻盈如猫；\n丝滑转身，似流动的水。\n镜里抬手，镜外停顿，牵引谁的目光。\n帅气一如当年少年，温柔似遥远月光。\n他，优雅得仿佛从远古走来。」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"Dance has helped me see myself, accept myself, like myself — it helped my soul find my body. This year I changed: from thinking I didn\'t look good, to accepting how I look; from tense, to relaxed; from hiding at the back of class, to sometimes standing in front; from always watching the teacher, to no longer needing to look back."',
      zh: '「跳舞，让我看见自己、接受自己、喜欢自己，让灵魂找到身体。今年我变了：从觉得自己不好看，到接受自己的样子；从紧绷，到放松；从总站最后一排，到有时站到最前；从总看着老师，到不再回头。」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"When you stop dancing just to get thinner, and truly feel your body meet the music, dance shifts from \'demanding of yourself\' to \'fulfilling yourself.\' Much of beauty never shows in the mirror — it flows from within, the moment you forget whether you look good at all."',
      zh: '「当你不再只为变瘦而跳，而是真正感受身体与音乐相遇的快乐，舞蹈便从「要求自己」变成「成全自己」。很多美不在镜子里，而是在你忘记自己好不好看的那一刻，从身体里自然流出。」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"May marks one year since I joined. My first piece, \'June Jasmine,\' carried me back to my youth, to the self who always loved dance. Half a lifetime on, I\'m only beginning to harvest. It is the soul that dances; it is life that leaps."',
      zh: '「五月刚好是我学舞一周年。第一支《六月茉莉》把我带回年轻时那个热爱舞蹈的自己。半生已过，我才开始慢慢收获。舞动的是灵魂，跳动的是人生。」',
    },
    attribution: { en: 'Ivy', zh: 'Ivy' },
  },
  {
    quote: {
      en: '"Music has many companions. One of them is a dance — your dance, the one that belongs to you."',
      zh: '「音乐有很多伙伴，其中一个，是一支舞蹈，属于你的那支。」',
    },
    attribution: ANON,
    anonymous: true,
  },
];

/**
 * Homepage "wall of voices" — two voices per pillar, interleaved so each grid
 * column reads as one pillar: beginner-friendly · expert guidance · beauty.
 */
const featuredByTag = (tag: Bilingual) =>
  testimonials.filter((item) => item.featured && item.tag === tag);

const fBeginner = featuredByTag(TAG_BEGINNER);
const fGuidance = featuredByTag(TAG_GUIDANCE);
const fBeauty   = featuredByTag(TAG_BEAUTY);

export const featuredTestimonials: Testimonial[] = [
  fBeginner[0], fGuidance[0], fBeauty[0],
  fBeginner[1], fGuidance[1], fBeauty[1],
].filter((item): item is Testimonial => Boolean(item));
