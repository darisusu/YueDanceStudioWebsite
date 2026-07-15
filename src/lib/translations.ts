export type Lang = 'en' | 'zh';
export type Bilingual = { en: string; zh: string };

export const t = {
  nav: {
    home:         { en: 'Home',         zh: '主页' },
    about:        { en: 'About',        zh: '关于我们' },
    instructors:  { en: 'Instructors',  zh: '导师团队' },
    courses:      { en: 'Courses',      zh: '舞蹈课程' },
    performances: { en: 'Performances', zh: '演出历史' },
    schedule:     { en: 'Schedule',     zh: '课程表' },
    contact:      { en: 'Contact',      zh: '联系我们' },
    faq:          { en: 'FAQ',          zh: '常见问题' },
    voices:       { en: 'Voices',       zh: '学员心声' },
  },

  cta: {
    bookTrial:  { en: 'Book a Trial',  zh: '预约体验课' },
    register:   { en: 'Register',      zh: '立即报名' },
    trialBlurb: { en: 'New here? Try any class at just $38 for a 1.5-hour session.', zh: '初次到访？任选课程体验 · $38／1.5小时。' },
  },

  home: {
    hero: {
      label:   { en: 'Xiang Yue Culture Arts · Singapore', zh: '翔悦文艺 · 新加坡' },
      line1:   { en: 'Find the Beauty',   zh: '以舞之名' },
      line2:   { en: 'in Life Through',   zh: '' },
      line3:   { en: 'Dance',             zh: '寻生活之美' },
      tagline: { en: 'Whether you\'re a beginner or a seasoned dancer, we invite you on a journey to find the beauty in life through dance.', zh: '无论您是舞蹈初学者，还是经验丰富的舞者，翔悦文艺诚邀您踏上以舞寻美的旅程。' },
      cta:        { en: 'Explore Courses',    zh: '探索课程' },
      ctaPrimary: { en: 'Book a Trial Class', zh: '预约体验课' },
    },
    courses: {
      label:    { en: 'What We Offer',                              zh: '我们的课程' },
      heading:  { en: 'Dance Courses',                              zh: '舞蹈课程' },
      sub:      { en: 'Led by experienced instructors across a range of styles.', zh: '由专业导师带领，涵盖多元舞蹈风格。' },
      viewAll:  { en: 'View all courses →',                         zh: '查看全部课程 →' },
      glanceNote: { en: 'All levels welcome. No experience required.', zh: '欢迎各程度学员，无需舞蹈基础。' },
    },
    visit: {
      label:      { en: 'Visit Us',                  zh: '到访我们' },
      heading:    { en: 'Find Us in the City',       zh: '欢迎莅临工作室' },
      studio:     { en: 'Studio',                    zh: '工作室' },
      directions: { en: 'Get directions →',          zh: '查看路线 →' },
      call:       { en: 'Call us',                   zh: '致电我们' },
      email:      { en: 'Email',                     zh: '电邮' },
      note:       { en: 'Drop by, call, or message. We respond within 1–2 business days.', zh: '欢迎到访、来电或留言，我们将在1至2个工作日内回复。' },
    },
    testimonial: {
      label:   { en: 'In Their Words', zh: '学员心声' },
      heading: { en: 'Why They Dance\nwith Us', zh: '他们为何\n选择翔悦' },
      sub:     { en: 'Beginners and lifelong dancers alike. In their own words, on finding expert guidance, the beauty of dance, and a place to belong.',
                 zh: '从零基础到资深舞者，听他们亲述：在这里遇见专业指导、舞蹈之美，与归属之所。' },
      cta:     { en: 'Read all student voices →', zh: '阅读全部学员心声 →' },
    },
    join: {
      heading:   { en: 'Ready to Begin?', zh: '准备好开始了吗？' },
      sub:       { en: 'All levels welcome. Come discover your joy of dancing.', zh: '欢迎各程度学员，来感受舞动的喜悦。' },
      primary:   { en: 'Register Now',    zh: '立即报名' },
      secondary: { en: 'View Schedule',   zh: '查看课表' },
    },
    performances: {
      label:   { en: 'Performances & Awards', zh: '演出与荣誉' },
      heading: { en: 'Performed. Recognised.\nCelebrated.',  zh: '登台·获誉·被铭记' },
      sub:     { en: 'Our students don\'t just train. They take the stage. From national parades to award ceremonies, see where YUE Dance has performed.',
                 zh: '翔悦学员不止于练习——他们真正登台表演。从国家盛典到颁奖典礼，见证翔悦的舞台足迹。' },
      cta:     { en: 'See Our Full History →', zh: '探索完整演出历史 →' },
      items: [
        {
          year: '2020',
          title: { en: 'Chingay Parade',    zh: '妆艺大游行' },
          note:  { en: 'Singapore\'s largest annual parade. Our performance was covered by The Straits Times and shared by PM Lee Hsien Loong on social media.',
                   zh: '新加坡规模最大的年度游行盛典。演出获《海峡时报》专题报道，并由李显龙总理于社交媒体转发分享。' },
          image: '/images/about/about-performance-12.jpeg',
        },
        {
          year: '2021',
          title: { en: 'River Hong Bao',    zh: '新春河畔嘉年华' },
          note:  { en: 'Awarded Best Live Performance at one of Singapore\'s most beloved Chinese New Year celebrations.',
                   zh: '荣获新加坡最受欢迎新年盛会的最佳现场演出奖。' },
          image: '/images/about/about-performance-8.jpeg',
        },
        {
          year: '2018',
          title: { en: 'Singapore Golden Lion Cup', zh: '新加坡金狮奖' },
          note:  { en: 'Gold Award at the national Music & Dance Competition. Our first major stage, and far from our last.',
                   zh: '于全国音乐舞蹈大赛荣获金奖——这是翔悦登上的第一个重要舞台，却绝不是最后一个。' },
          image: '/images/about/about-performance-7.jpg',
        },
      ],
    },
  },

  voices: {
    label:      { en: 'Student Voices', zh: '学员心声' },
    heading:    { en: 'In Their\nOwn Words', zh: '学员\n心声' },
    intro:      { en: 'Over the years, our students have shared what dance has come to mean to them, in messages, reflections, and poems. A selection lives here, in their own words.',
                  zh: '多年来，学员们以留言、随笔与诗作，记录下舞蹈于他们的意义。我们在此精选珍藏，呈现他们的心声。' },
    ctaHeading: { en: 'Your story could be\nthe next one here.', zh: '下一个故事，\n或许就是你的。' },
    cta:        { en: 'Explore Courses', zh: '探索课程' },
  },

  about: {
    label:   { en: 'Our Story',            zh: '我们的故事' },
    heading: { en: 'Born from a\nLove of Dance', zh: '源于对舞蹈的热爱' },
    body1:   { en: 'Founded in 2018, YUE Dance Studio, part of Xiang Yue Culture Arts, was born from a simple belief: that dance is for everyone, at every stage of life.', zh: '翔悦文艺旗下悦舞坊成立于2018年，始终秉持一个简单的信念：舞蹈属于每一个人，无论年龄，无论起点。' },
    body2:   { en: 'We began as a small community studio in Singapore, built on word of mouth and a genuine passion for movement. Today, YUE Dance Studio brings together adult learners of all backgrounds under the guidance of experienced, accomplished instructors, in classes ranging from Chinese classical dance and ballet to folk dance and contemporary forms.', zh: '我们从新加坡的一间小小社区舞室起步，凭借口碑与对舞蹈艺术的热忱，逐渐成长壮大。如今，悦舞坊汇聚了来自各行各业的成人学员，在专业导师的带领下，共同探索现当代舞、民族民间舞、芭蕾舞、华族舞、古典舞的世界。' },
    body3:   { en: 'We are not a studio that trains competitors. We are a place where working adults, retirees, and lifelong learners come to find rhythm, community, and the quiet joy of movement. Many of our students have never danced before. Many have danced their whole lives. All of them are welcome here.', zh: '我们不是培养竞技选手的训练机构，而是一个让职场人士、退休人员及终身学习者寻回节奏、融入社群、感受律动之美的地方。这里有初学者，有资深舞者，每一位都能在这里找到属于自己的位置。' },
    performances: {
      label:   { en: 'Performances & Achievements', zh: '演出与荣誉' },
      heading: { en: 'On the Stage',                zh: '舞台足迹' },
    },
  },

  instructors: {
    label:          { en: 'Our Team',              zh: '导师团队' },
    heading:        { en: 'Meet the\nInstructors', zh: '我们的导师' },
    sub:            { en: 'Five instructors spanning Chinese, contemporary, ballet, folk, and classical dance.', zh: '5位导师，涵盖华族舞、现当代舞、芭蕾舞、民族民间舞、古典舞' },
    teaches:        { en: 'Teaches',               zh: '教授课程' },
    qualifications: { en: 'Qualifications',        zh: '专业资质' },
  },

  courses: {
    label:      { en: 'What We Teach',       zh: '教授内容' },
    heading:    { en: 'Dance Courses',        zh: '舞蹈课程' },
    sub:        { en: 'Five disciplines. One community. All levels welcome.', zh: '五大舞种，同一社群，欢迎各程度学员。' },
    instructor: { en: 'Instructor',           zh: '导师' },
    register:   { en: 'Register Interest →', zh: '立即报名 →' },
  },

  schedule: {
    label:   { en: 'Class Timetable', zh: '课程时间表' },
    heading: { en: 'Class Schedule',  zh: '悦舞坊课程表' },
    sub:     { en: 'Current term schedule. Contact us to confirm your slot.', zh: '当前学期课程表，如需确认课位，欢迎联系我们。' },
    note:    { en: 'Schedule is subject to change. Please confirm with our admin team before attending.', zh: '课程表如有变动，敬请于出席前向我们的行政团队确认。' },
    contact: { en: 'Contact Us', zh: '联系我们' },
    empty:   { en: 'No classes scheduled for this style.', zh: '该舞种暂无排课。' },
    filters: {
      all:          { en: 'All',                   zh: '全部'       },
      contemporary: { en: 'Contemporary Dance',    zh: '现当代舞'   },
      ballet:       { en: 'Ballet',                zh: '芭蕾舞'     },
      'chinese-dance': { en: 'Chinese Dance',      zh: '华族舞'     },
      folk:         { en: 'Folk Dance',            zh: '民族民间舞' },
      classical:    { en: 'Chinese Classical Dance', zh: '古典舞'   },
    },
    days: [
      { en: 'Monday',    zh: '星期一' },
      { en: 'Tuesday',   zh: '星期二' },
      { en: 'Wednesday', zh: '星期三' },
      { en: 'Thursday',  zh: '星期四' },
      { en: 'Friday',    zh: '星期五' },
      { en: 'Saturday',  zh: '星期六' },
      { en: 'Sunday',    zh: '星期天' },
    ],
  },

  contact: {
    label:    { en: 'Get in Touch',      zh: '联系我们' },
    heading:  { en: 'Contact Us',        zh: '联系我们' },
    sub:      { en: 'Enquiries, registration, and everything in between.', zh: '课程咨询、报名注册，欢迎随时联系。' },
    studio:   { en: 'Studio Location',   zh: '舞室地址' },
    admin:    { en: 'Admin Office',      zh: '行政地址' },
    email:    { en: 'Email',             zh: '电子邮件' },
    phone:    { en: 'Phone',             zh: '联系电话' },
    social:   { en: 'Follow Us',         zh: '关注我们' },
    directions: { en: 'Get directions →', zh: '查看路线 →' },
    whatsapp: { en: 'WhatsApp',          zh: 'WhatsApp' },
    wechat:   { en: 'WeChat',            zh: '微信' },
    adminNote: { en: 'Finance enquiries: contact Vicky', zh: '费用咨询：请联系Vicky' },
    register: {
      heading: { en: 'Ready to Join a Class?', zh: '准备好加入了吗？' },
      sub:     { en: 'Fill in our registration form and we\'ll be in touch soon.', zh: '填写报名表格，我们将尽快与您联系。' },
      cta:     { en: 'Open Registration Form', zh: '填写报名表格' },
    },
  },

  faq: {
    label:   { en: 'Questions & Answers',       zh: '问与答' },
    heading: { en: 'Frequently Asked\nQuestions', zh: '常见\n问题' },
    sub:     { en: 'Everything you need to know before your first class.', zh: '开始第一堂课前，您需要了解的一切。' },
    categories: [
      {
        title: { en: 'Course Types', zh: '课程类型' },
        items: [
          {
            q: { en: 'What dance styles do you teach?', zh: '你们教授哪些舞蹈类型？' },
            a: { en: 'YUE Dance Studio teaches Chinese dance, Chinese classical dance, folk (ethnic) dance, contemporary dance, and adult ballet, plus a Mixed Style Dance class blending ballet, traditional, contemporary, folk and fitness dance. All classes are designed for adults, and beginners are welcome.', zh: '悦舞坊开设华族舞、中国古典舞、民族民间舞、当代舞与成人芭蕾，以及融合芭蕾、传统、当代、民族与健身舞的综合风格舞。所有课程均为成人设计，欢迎零基础学员。' },
          },
          {
            q: { en: 'I do not have experience in dance. What courses are suitable for me?', zh: '我没有舞蹈经验，适合参加哪些课程？' },
            a: { en: 'Mixed Style Dance and Chinese Dance Basics are popular among new dancers. However, feel free to try out other classes and let our instructors know if you wish to have basic steps explained along the way.', zh: '综合风格舞及华族舞基础深受初学者喜爱。当然，您也可以尝试其他课程，只需告知导师希望同步讲解基础步骤即可。' },
          },
          {
            q: { en: 'Can I still join other courses if I do not have experience?', zh: '没有舞蹈经验，可以参加其他课程吗？' },
            a: { en: 'Yes, as long as you have a basic sense of rhythm and coordination and believe in yourself, you will be able to catch up with enough practice.', zh: '当然可以。只要您具备基本的节奏感与协调能力，并对自己有信心，通过充分练习便能跟上进度。' },
          },
          {
            q: { en: 'What is taught in Mixed Style Dance?', zh: '综合风格舞学些什么？' },
            a: { en: 'This course comprises the principles and key features of ballet, traditional, contemporary, folk and fitness dance.', zh: '该课程综合了芭蕾、传统、当代、民族及健身舞的基本原则与核心特色。' },
          },
          {
            q: { en: 'Do we only learn one dance choreography per term?', zh: '每学期只学一支舞吗？' },
            a: { en: "With the exception of Classical Dance (one choreography per term), other courses will be taught based on general class progress, at the instructor's discretion.", zh: '除古典舞（每学期一支编排）外，其他课程将根据班级整体进度，由导师酌情安排教学内容。' },
          },
        ],
      },
      {
        title: { en: 'Course Fees', zh: '课程费用' },
        items: [
          {
            q: { en: 'How much do dance classes cost?', zh: '舞蹈课程的费用是多少？' },
            a: { en: 'A single drop-in class is $38, and a 1.5-hour trial class is also $38. Term-package fees are prorated based on when you join — contact our finance director Vicky at +65 9425 3833 for a quote.', zh: '散课每堂$38，1.5小时体验课同样为$38。学期套餐费用按加入时间按比例计算，详情请联系财务主任Vicky +65 9425 3833。' },
          },
          {
            q: { en: 'How are fees calculated if I join a course midway?', zh: '中途加入课程，费用如何计算？' },
            a: { en: 'Fees are prorated on a case-by-case basis. Please contact our finance director Vicky (available daily before 4pm) at +65 94253833.', zh: '费用按实际情况按比例计算，请联系财务主任Vicky +65 94253833。' },
          },
          {
            q: { en: 'Can I pay for a single class?', zh: '可以只付单堂课费用吗？' },
            a: { en: 'Yes. Each drop-in single class is $38.', zh: '可以，散课费用为每堂$38。' },
          },
          {
            q: { en: 'What happens if I miss a lesson?', zh: '如果缺课怎么办？' },
            a: { en: 'You can do make-up lessons with other courses. One make-up per course, valid for 2 months, subject to terms and conditions. Please inform the course IC or admin staff in advance.', zh: '您可以在其他课程补课，每课程限补一次，有效期两个月，须符合相关条款。请提前通知课程负责人或行政人员。' },
          },
        ],
      },
      {
        title: { en: 'Attire', zh: '服装要求' },
        items: [
          {
            q: { en: 'What is the attire for dance classes?', zh: '舞蹈课的着装要求是什么？' },
            a: { en: 'We strongly encourage you to wear the same dance attire as the class, as this helps the instructor observe and correct your moves.', zh: '我们强烈建议您穿着与班级统一的舞蹈服装，以便导师观察和纠正您的动作。' },
          },
          {
            q: { en: 'Can I wear my own attire?', zh: '可以穿自己的服装吗？' },
            a: { en: 'Yes. Please be in a comfortable black outfit as you will be engaging in movement work.', zh: '可以，请穿着舒适的黑色服装，因为课程中会进行动作练习。' },
          },
        ],
      },
      {
        title: { en: 'Performances', zh: '演出机会' },
        items: [
          {
            q: { en: 'I only want to dance for fitness. Can I choose not to perform?', zh: '我只想跳舞健身，可以不参加演出吗？' },
            a: { en: 'Of course! Participating in performances is entirely voluntary.', zh: '当然可以！参加演出完全自愿，没有任何强制要求。' },
          },
          {
            q: { en: 'How do I get the chance to perform?', zh: '如何获得演出机会？' },
            a: { en: 'We regularly offer performance opportunities for our students. Regular students will have chances to take the stage throughout the year.', zh: '我们定期为学员提供演出机会，常规学员全年均有机会登上舞台。' },
          },
          {
            q: { en: 'Do I have to pay for performance costumes?', zh: '演出服装需要自己付费吗？' },
            a: { en: 'Costumes are usually provided by Xiang Yue Culture Arts (subject to event), with the exception of personal items such as shoes.', zh: '演出服装通常由翔悦文艺提供（视具体活动而定），个人物品如鞋子除外。' },
          },
        ],
      },
      {
        title: { en: 'General', zh: '一般信息' },
        items: [
          {
            q: { en: 'Where is YUE Dance Studio located?', zh: 'YUE Dance Studio在哪里？' },
            a: { en: 'We are located at 47 Beach Road, #02-04, Singapore 189683, near Bugis, Nicoll Highway, and City Hall MRT stations.', zh: '我们位于新加坡Beach Road 47号 #02-04，邮编189683，靠近Bugis、Nicoll Highway及City Hall地铁站。' },
          },
          {
            q: { en: 'Who are the instructors at YUE Dance Studio?', zh: 'YUE Dance Studio的导师有哪些？' },
            a: { en: 'Our team includes Artistic Director Daniel Deng Yu (contemporary & Chinese dance), Chang Hsiao-Min (Chinese dance), Bai Ying Wen (folk dance), Shen Zhihua (ballet), and Angel Peng (Chinese classical dance). All are professionally trained with decades of performance and teaching experience.', zh: '我们的团队包括艺术总监邓宇（当代舞与华族舞）、张晓明（华族舞）、白映文（民族民间舞）、沈芷华（芭蕾）和彭若丹（中国古典舞），所有导师均为专业科班出身，拥有数十年的演出与教学经验。' },
          },
          {
            q: { en: 'Do I need to be a certain age to join?', zh: '参加课程有年龄要求吗？' },
            a: { en: 'Our classes are open to adults aged 18 to 70. All experience levels are welcome.', zh: '我们的课程面向18至70岁的成人学员，欢迎各程度的舞蹈爱好者加入。' },
          },
          {
            q: { en: 'How do I register for a class?', zh: '如何报名参加课程？' },
            a: { en: 'You can register through our online registration form on the Contact page, via WhatsApp at +65 9688 5938 or +65 9425 3833, WeChat (ID: lin_jing68), or by email at xiangyue.culturearts@gmail.com. Enrollment is rolling — new students can join at any time and will be placed in a suitable class.', zh: '您可以通过联系页面的在线报名表格注册，也可通过WhatsApp（+65 9688 5938 / +65 9425 3833）、微信（ID: lin_jing68）或电邮 xiangyue.culturearts@gmail.com 联系我们。课程采用滚动招生制，新学员随时可以报名，我们会安排适合的班级。' },
          },
          {
            q: { en: 'Do you offer trial classes?', zh: '有体验课吗？' },
            a: { en: 'Yes! Trial classes are available at $38 for a 1.5-hour session. Contact us via WhatsApp at +65 9688 5938 or +65 9425 3833, or WeChat (ID: lin_jing68) to book.', zh: '有的！体验课费用为$38，时长1.5小时。请通过WhatsApp（+65 9688 5938 / +65 9425 3833）或微信（ID: lin_jing68）预约。' },
          },
          {
            q: { en: 'What are the studio\'s opening hours?', zh: '工作室的营业时间是怎样的？' },
            a: { en: 'Monday: 10 am – 9 pm, Tuesday: 7:30 – 9 pm, Wednesday – Thursday: 10 am – 9 pm, Friday: 4:30 – 9 pm, Saturday: 11 am – 9 pm, Sunday: 2 – 6 pm.', zh: '周一：上午10点至晚上9点，周二：晚上7:30至9点，周三至周四：上午10点至晚上9点，周五：下午4:30至晚上9点，周六：上午11点至晚上9点，周日：下午2点至6点。' },
          },
          {
            q: { en: 'How many students are in each class?', zh: '每节课有多少学员？' },
            a: { en: 'Classes are kept small with a maximum of 16 students, ensuring personalised attention from the instructor.', zh: '每节课最多16人，确保每位学员都能获得导师的个性化指导。' },
          },
        ],
      },
    ],
  },

  performances: {
    label:   { en: 'Stage History',          zh: '舞台足迹' },
    heading: { en: 'Performances\n& Awards', zh: '演出与荣誉' },
    sub:     { en: 'From national parades to charity galas, our students take the stage.', zh: '从国家级游行到慈善晚会，翔悦学员走上真实的舞台。' },
  },

  footer: {
    tagline:     { en: 'Joy of dancing, beauty of life.', zh: '舞动人生 悦享其中。' },
    established: { en: 'Est. 2018 · Singapore',          zh: '2018年创立 · 新加坡' },
    pages:       { en: 'Pages',                           zh: '页面' },
    contact:     { en: 'Contact',                         zh: '联系' },
    copyright:   { en: '© 2026 Xiang Yue Culture Arts. All rights reserved.', zh: '© 2026 翔悦文艺版权所有。' },
  },

  errors: {
    notFoundTag:     { en: '404',              zh: '404' },
    notFoundHeading: { en: 'Page Not Found',   zh: '页面未找到' },
    notFoundBody:    { en: 'The page you are looking for does not exist or has been moved.', zh: '您访问的页面不存在或已被移动。' },
    backHome:        { en: 'Back to Home',      zh: '返回首页' },
    errorTag:        { en: 'Error',             zh: '出错' },
    errorHeading:    { en: 'Something Went Wrong', zh: '出错了' },
    errorBody:       { en: 'An unexpected error occurred. Please try again.', zh: '发生了意外错误，请重试。' },
    tryAgain:        { en: 'Try Again',         zh: '重试' },
  },
};
