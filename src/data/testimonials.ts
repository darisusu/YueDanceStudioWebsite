import type { Bilingual } from '@/lib/translations';

export interface Testimonial {
  quote: Bilingual;
  attribution: Bilingual;
  /** Surfaced in the homepage carousel. The rest are kept as an archive. */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  // ── Legacy testimonials ───────────────────────────────────────────────────

  {
    quote: {
      en: '"I am deeply grateful for the meticulous guidance provided by Lao Shi. The class was both highly engaging and incredibly insightful."',
      zh: '「非常感谢老师今晚的细心指导，我非常享受今晚的课程，从老师身上学到了很多！」',
    },
    attribution: { en: 'Sumini · Chinese Belly Dance, Jul 2020', zh: 'Sumini · 华族舞，2020年7月' },
  },
  {
    quote: {
      en: '"Thank you, Teacher Daniel, for the meticulously choreographed dances and your endless patient guidance — even students like us with no dance background were able to perform on stage. It really built up our confidence enormously."',
      zh: '「谢谢Daniel老师精心编排的舞蹈，以及不厌其烦的耐心指导，让我们这些没有舞蹈基础的同学也能登台表演，大大的树立了我们的信心。」',
    },
    attribution: { en: 'A Ling · Dance Colour Class, Sep 2019', zh: '阿玲 · 舞色舞味班，2019年9月' },
    featured: true,
  },
  {
    quote: {
      en: '"From the moment we finished filming, my heart has not been able to settle. I have watched the video again and again, and it moves me deeply... I am so grateful to our wonderful teacher, who always guides our each dance move with professionalism and patience. The road of dance holds only the beauty you work to achieve, and that beauty is made possible by our teacher\'s guidance."',
      zh: '「从拍完视频至今，我的内心还是久久不能平复，视频看了一遍又一遍，让我感触良多……一份努力一份收获，在此我非常感谢我们帅气的老师，总是非常专业、有耐心地指导我们每一个标准的舞蹈动作，让我们这些舞蹈爱好者受益良多。舞蹈的路上只有努力跳出来的美丽，当然更少不了专业老师的指导，新的一期，好期待老师的新作品！」',
    },
    attribution: { en: 'Ms Chen · Chinese Dance Class, Jul 2019', zh: '陈小姐 · 中国舞班，2019年7月' },
  },
  {
    quote: {
      en: '"I love the ballet-modern piece Teacher choreographed, Hawthorn Tree Melody — graceful and flowing like a gentle stream, it soothed my restless heart during those stay-home days. Sincerely looking forward to more learning and growth. Thank you again, Teacher Daniel & Teacher Lin Jing!"',
      zh: '「十分喜欢老师编教的这支芭蕾现代舞～山楂树舞曲，柔美像股清流，缓和了这居家郁闷心情。衷心期待更多的学习与进步。再次谢谢Daniel&林晶老师！」',
    },
    attribution: { en: 'Wen Fei · Cloud Dance Online Class, Jun 2021', zh: '雯妃 · 云舞网课，2021年6月' },
    featured: true,
  },

  // ── Student voices ────────────────────────────────────────────────────────

  {
    quote: {
      en: '"When music rises, the heart soars; when we dance, the spirit rejoices."',
      zh: '「乐起心飞翔，舞动意愉悦。」',
    },
    attribution: { en: 'Wei Min', zh: '魏敏' },
  },
  {
    quote: {
      en: '"Beauty in life makes ordinary days a little different."',
      zh: '「生活中因为有了美，而让平凡的日子有些不一样了。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
    featured: true,
  },
  {
    quote: {
      en: '"This feeling is wonderful. I can\'t quite remember who said it: \'Experience through dance, heal through dance.\' Maybe this is exactly what that means."',
      zh: '「这感受太棒了，不记得是谁说过："在舞蹈中体验，在舞蹈中疗愈"。可能就是这种感觉吧。」',
    },
    attribution: { en: 'YUE Dance Student', zh: '悦舞坊学员' },
  },
  {
    quote: {
      en: '"Maybe it\'s something you\'ve thought about before, maybe it\'s just a fleeting impulse — either way, I want to encourage anyone with that thought: give it a try. Dance is truly something that delights both body and mind. Once you try it, you might discover something altogether different."',
      zh: '「也许你是之前就有此想法，也许是当下的一个念头，不管怎样，我想鼓励有此想法的朋友，去试试看，舞蹈真的是一件愉悦身心的事情，只要你去尝试了，也许就会有不一样的发现和体验！」',
    },
    attribution: { en: 'YUE Dance Student', zh: '悦舞坊学员' },
  },
  {
    quote: {
      en: '"Our dance class spans from those born in the \'90s to those born in the \'50s — quite a range! There\'s a full-time mum of three who rushes in and out each week, and every time she dances, it\'s her best form of release. Someone who started with once a week now dances every day — skip a day and something feels missing. La Mei, more than a decade my senior, says: \'In a few more years I\'ll be 70 — I\'m determined to learn one complete contemporary dance piece.\' Someone once said dance is an ability born within the human body. When that ability is awakened at the right moment, it opens a wellspring of dopamine joy."',
      zh: '「舞蹈班里的同学有90后的，也有50后的，这个跨度很可以啊！有三娃的全职妈妈，上课下课都是匆匆来去，而每次来跳舞，就是她最好的放松。有人从一周跳一次开始，到每天都要跳舞，不跳就缺了点什么。比我大十几岁的腊梅姐说，我再过几年就70了，我一定要学会跳一支完整的当代舞。有人说舞蹈是人类身体里与生俱来就有的能力，这种能力在适当的时候被唤醒，被打开之后，就好像开启了多巴胺的快乐源泉。」',
    },
    attribution: { en: 'YUE Dance Student', zh: '悦舞坊学员' },
  },
  {
    quote: {
      en: '"There\'s a line I love about what the best education is: \'One tree shaking another tree, one cloud pushing another cloud, one soul awakening another soul.\' I think we have all been ignited and awakened to our love of dance by our teacher\'s artistry and personal charisma."',
      zh: '「有一句话说的特别好，最好的教育是什么："一棵树摇动另一棵树，一朵云推动另一朵云，一个灵魂唤醒另一个灵魂。"我觉得我们都是被老师舞蹈艺术的魅力和人格魅力，点燃唤醒了对舞蹈的热爱。」',
    },
    attribution: { en: 'YUE Dance Student', zh: '悦舞坊学员' },
  },
  {
    quote: {
      en: '"I truly love dancing. Whenever the music plays, every cell in my body fills with joy — as though I am in gentle conversation with my own soul. Though we are no longer young, every time we dance it feels like returning to our youthful days. \'Every day you don\'t dance is a disservice to life.\' We cannot decide the length of our lives, but we can expand the breadth of them. Do what you love while you live — happiness is what matters most!"',
      zh: '「我是真的很喜爱跳舞。每当音乐响起，身体里的所有细胞都充满了喜悦，好像是和自己心灵在温柔对话。非常享受这种美妙的感觉。虽然我们已不再年轻，但每一次起舞都好像回到那青葱岁月。"每一个不曾起舞的日子，都是对生命的辜负。"我们不能决定我们生命的长度，但我们可以拓展我们生命的宽度。有生之年做自己喜欢的事情，开心最重要！」',
    },
    attribution: { en: 'Wei Min', zh: '魏敏' },
    featured: true,
  },
  {
    quote: {
      en: '"Every step is a language — one that lets us hear wordless expression, feel the vitality of life. Every moment becomes vivid and unique, captivating the heart and mind."',
      zh: '「每一个舞步都是一种语言，可以让我们听到无声的表达，感受生命的活力，每个瞬间都变的灵动而独特，心驰神往。」',
    },
    attribution: { en: 'Judy · Thursday Contemporary Dance', zh: '周四当代舞 Judy' },
    featured: true,
  },
  {
    quote: {
      en: '"Thank you, Teacher, for the new session — with such fresh and captivating content throughout. In class it feels like a force propels you to dive in, filled with passion and energy. Releasing, free-spirited, subtle, inward-turning — moving mindfully, with emotion and breath. Every class is so rich and wonderful. Thank you for your heartfelt dedication!"',
      zh: '「谢谢老师带来的新一期的课堂，又有新的精彩内容，引领我们去感受现代舞独特的魅力，或释放，或洒脱，或含蓄，或内敛……用心接触身体，带动情绪和呼吸，每一堂课都如此丰富而精彩，谢谢老师的用心付出！」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
  },
  {
    quote: {
      en: '"Teacher Daniel is incredible — I felt his teaching unfold in layers. First, learning the moves. Then, staging the piece as a work of art — I was amazed by how many design possibilities there were. Next, dancing together in sync, feeling each other\'s breath rise and fall. Finally, dancing with emotion — before the performance, Teacher said to interact with the screen. I was deeply moved, and more excited still. To me, interacting with the screen meant stepping fully into the role of a performer, entering that image, entering a story. I tried to do it. By the end, I nearly moved myself to tears. I am so grateful for Teacher Daniel\'s masterful guidance — I feel so fortunate. And thank you to my dance partners."',
      zh: '「Daniel老师太厉害了，我感受到一层层递进教我们如何跳舞。刚开始，跳动作。然后，设计舞台成为一个作品，原来能有这么多各式各样的设计！接下来，跳配合，老师让我们感受彼此呼吸起伏的同频。最后，跳感情，演出前，老师说要跟屏幕互动，天呐，听到这一句我特别感动，也更加兴奋，仿佛这是给我们提出了更高级的要求，对我来说，跟屏幕互动意味着要更加把自己放到演员的角色，进入那幅画，进入一个故事，我试着去做了。最后演出结束，我都快感动我自己了。感恩Daniel老师大师级的指导，我好幸运。感谢舞伴们。」',
    },
    attribution: { en: 'Li Qiong', zh: '李琼' },
  },
  {
    quote: {
      en: '"Thank you, Teacher, for your doubled devotion — your talent and skill are extraordinary. Through dance in different styles, you inspire each of us to tell our own stories in our body\'s own language, conveying emotion and thought while sparking creativity that flows into something fresh and new."',
      zh: '「谢谢老师的用心，老师太有才太厉害了，以不同风格的舞蹈，启发大家以各自的身体语言讲述自己的故事，传达情感和思想的同时，激发出创意，融合新颖的舞蹈。」',
    },
    attribution: { en: 'Yan Lan', zh: '言兰' },
  },
  {
    quote: {
      en: '"I can feel Teacher\'s choreography getting more challenging — I love Teacher\'s spirit of \'the possible and the impossible, we can all try.\' That\'s exactly it: follow Teacher and try. I love that sense of freshness."',
      zh: '「感觉到了，老师的舞蹈有点难度了，喜欢老师的"可能的不可能的我们都可以去尝试"，就是这样，跟着老师去尝试，我喜欢有新鲜感。」',
    },
    attribution: { en: 'La Mei', zh: '腊梅' },
    featured: true,
  },

  // ── Poetry & prose ────────────────────────────────────────────────────────

  {
    quote: {
      en: '"Dance a piece resting on light —\nlike the gentle warmth of sunshine\nentering the heart,\nbrightening body and spirit.\nSo warm, so beautiful —\nand now there is light in your eyes."',
      zh: '「跳一曲枕着光，\n如和煦的阳光，\n照进了心里，\n明媚了身心，\n如此，温暖，美好，\n眼里有了光。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
  },
  {
    quote: {
      en: '"Whether we wade through mud or water in life — right now, we dance in the clouds.\nWherever we come from — right now, we find ourselves at YUE Dance.\nWhatever the years have brought — right now, we are young.\nOne moment ago, busy with life\'s demands; this moment, lost in music.\nOne moment ago, drifting through the world; this moment, rooted in our souls.\nOne moment ago, letting the days slip by; this moment, dancing in joy."',
      zh: '「不管生活在泥里还是水里，此刻我们舞在云里；\n不管来自哪里，此刻，我们在悦舞坊找到自己；\n不管岁月几何，此刻，我们青春洋溢。\n前一刻，忙碌在生活里，这一刻，我们沉醉在音乐里；\n前一刻，游走在尘世间，这一刻，我们驻足在灵魂里；\n前一刻，蹉跎在日子里，这一刻，我们舞动在欢乐里。」',
    },
    attribution: { en: 'Jian Fang', zh: '建芳' },
  },
  {
    quote: {
      en: '"Every class is a burning passion;\nevery piece of music a heartfelt telling;\nevery movement of the body ablaze with longing.\nEvery time I watch the playback,\nI feel surprise, reflection, and yearning all at once."',
      zh: '「每一堂课都是一段燃烧的激情；\n每一段音乐都是深情的诉说；\n每一组肢体的表达都燃烧着渴望；\n每一次回放中看自己，\n有惊喜有感慨有向往。」',
    },
    attribution: { en: 'Jian Fang', zh: '建芳' },
  },
  {
    quote: {
      en: '"Raise a hand, take a step —\nhe never wavers.\nAgain and again —\nyou are not alone.\nPassion is the brush,\nmusic is the paint,\nthe whole world a canvas —\nsketching the free and boundless\nyou, me, us."',
      zh: '「举手，投足\n他不含糊\n一遍，又一遍\n你不孤独\n热情是画笔\n音乐是颜料\n天地为画板\n勾勒出\n自由的你我他」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"Rise to tiptoe, leap and leap —\nlight as a cat.\nA silken turn, spinning and spinning —\nfluid as water.\nA hand raised in the mirror,\na pause beyond it —\ndrawing someone\'s gaze.\nHe, as dashing as the young man he once was.\nHe, so tender, dancing moonlight from far away.\nLove flowing between fingertips and heartbeats, steady and sure.\nBeauty passed in a glance, in a bow of the head — free and captivating.\nHe, as graceful as if walking in from ancient times."',
      zh: '「踮起脚尖\n跳跃跳跃\n轻盈得如猫\n\n丝滑转身\n旋转旋转\n似流动的水\n\n镜子里的抬手\n镜子外的停顿\n牵引谁的目光\n\n他\n帅气得一如当日少年\n他\n温柔得舞动遥远月光\n\n爱的流转\n在指尖在心底\n起伏笃定\n\n美的传递\n在回眸在低首\n自在迷人\n\n他\n优雅得如同远古走来」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"My dance teacher is a very pure dancer. Through him I can often imagine certain moments from the journey that brought him here — practising fundamentals, going over a movement again and again, savouring a piece of music. Those imaginings may not be real. But they burrow into the mind and become a seed. I don\'t know what it will grow into. Only that one day, when I could suddenly accept my own way of moving — and found myself willing to ask questions, practise, and perform — I think the seed had grown into one brief, fleeting smile."',
      zh: '「我的舞蹈老师是个很纯粹的舞者，我从他的身上常常可以想象到他走到今天的某些瞬间：练基本功的瞬间，一遍一遍磨动作的瞬间，享受某段舞蹈的瞬间。那种想象不一定是真实的，但是那种想象钻进脑子里，会变成一颗种子，不知道什么时候会发芽。只是某天突然可以接受自己的舞姿，并且愿意提问、练习和展示时，我猜，长出的芽，可能变成了一瞬间的微笑。」',
    },
    attribution: { en: 'Chen Shuai · May 2026', zh: '陈帅 · 2026年5月' },
  },
  {
    quote: {
      en: '"Dance has helped me see myself more clearly, accept myself, like myself. Dance has helped my soul find my body.\n\nThis year, I noticed myself changing: from thinking I didn\'t look good — to beginning to accept how I look. From being rather tense — to starting to relax. From not wanting to watch videos of myself — to watching them. From always standing at the back in dance class — to sometimes standing at the front. From always having to watch the teacher or classmates — to no longer needing to look back."',
      zh: '「跳舞，让我越来越真实地看见自己、接受自己、喜欢自己。跳舞，让我的灵魂找到我的身体。\n\n这是今年的新鲜事：\n觉得自己不好看→开始接受自己的样子\n比较紧绷→开始放松\n不愿意看视频里的自己→开始看视频里的自己\n跳舞总站最后一排→可以有时站在第一排\n总得看老师或同学的动作→开始不回头了」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
  },
  {
    quote: {
      en: '"When you stop dancing merely to get thinner or look better, and truly feel the joy of your body meeting music — dance slowly shifts from \'demanding of yourself\' to \'fulfilling yourself.\' Much of beauty doesn\'t appear in the mirror. It flows naturally from within, in the moment you finally forget whether you look good at all."',
      zh: '「当一个人开始不再只为了"变瘦、变好看"而跳舞，而是真正感受到身体与音乐相遇的快乐时，舞蹈才慢慢从"要求自己"，变成"成全自己"。很多美，不是在镜子里出现的，而是在你终于忘记自己是否好看的那一刻，从身体里自然流出来。」',
    },
    attribution: { en: 'Chen Shuai', zh: '陈帅' },
    featured: true,
  },
  {
    quote: {
      en: '"Thank you, Teacher, for the wonderful class — every part so captivating. In class it feels like a force propels you to dive in, filled with passion and drive — giving it your all, pouring yourself in, enjoying the dance."',
      zh: '「谢谢老师，带来的精彩课堂，每一部分的内容都那么精彩，课堂上就好像有一种力量推着你投入进去，带着热情和动力，挥洒汗水，尽情投入，享受舞蹈。」',
    },
    attribution: { en: 'Vicky', zh: 'Vicky' },
  },
  {
    quote: {
      en: '"Grateful to have met like-minded dance-lovers and the teachers of YUE Dance. May YUE Dance cultivate countless students, help those who love dance make their dreams come true, find their own stage, and dance into a brilliant future!\n\nA verse for YUE Dance:\nMusic and harmony, loved by all — stirring hearts with joy.\nBound together by dance, held gently by this studio."',
      zh: '「感恩遇见志同道合爱舞者和悦舞坊的老师们。祝愿悦舞坊桃李满天下，让热爱舞蹈者梦想成真，找到属于自己的舞台，舞出精彩未来！\n\n送上对悦舞坊的致词：\n乐韵众爱\n调动心悦\n情系于舞\n怀柔作坊」',
    },
    attribution: { en: 'YUE Dance Student · 8th Anniversary', zh: '悦舞坊学员 · 八周年' },
  },
  {
    quote: {
      en: '"Music has many companions. One of them is a dance — your dance, the one that belongs to you."',
      zh: '「音乐有很多伙伴，其中一个，是一支舞蹈，属于你的那支。」',
    },
    attribution: { en: 'YUE Dance Student', zh: '悦舞坊学员' },
  },
  {
    quote: {
      en: '"May has just marked one year since I joined the dance class. The first piece I learned was \'June Jasmine\' — it brought me back to my youth, back to the self that always loved dance. I was enchanted. Rhythm gradually returned to my body. Half a lifetime has passed; now I begin to harvest, slowly. To write a new chapter for myself. It is the soul that dances; it is life itself that leaps."',
      zh: '「五月刚好是我进入舞蹈班学习舞蹈一周年，我学的第一支舞蹈是"六月茉莉"，让我回到了年轻的时候，找到了那个热爱舞蹈的自己，让我陶醉其中，韵律跳动逐渐回到身体里。半生已过，现在开始慢慢收获，为自己的新篇章喜。舞动的是灵魂，跳动的是人生！」',
    },
    attribution: { en: 'Ivy', zh: 'Ivy' },
    featured: true,
  },
];

/** Curated subset shown in the homepage carousel, in source order. */
export const featuredTestimonials = testimonials.filter((t) => t.featured);
