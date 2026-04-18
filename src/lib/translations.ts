export type Lang = 'en' | 'zh';
export type Bilingual = { en: string; zh: string };

export const t = {
  nav: {
    home:        { en: 'Home',        zh: '主页' },
    about:       { en: 'About',       zh: '关于我们' },
    instructors: { en: 'Instructors', zh: '导师团队' },
    courses:     { en: 'Courses',     zh: '舞蹈课程' },
    schedule:    { en: 'Schedule',    zh: '课程表' },
    contact:     { en: 'Contact',     zh: '联系我们' },
    faq:         { en: 'FAQ',         zh: '常见问题' },
  },

  home: {
    hero: {
      label:   { en: 'Xiang Yue Culture Arts · Singapore', zh: '翔悦文艺 · 新加坡' },
      line1:   { en: 'Find the Beauty',   zh: '以舞之名' },
      line2:   { en: 'in Life Through',   zh: '' },
      line3:   { en: 'Dance',             zh: '寻生活之美' },
      tagline: { en: 'Whether you\'re a beginner or a seasoned dancer, we invite you on a journey to find the beauty in life through dance.', zh: '无论您是舞蹈初学者，还是经验丰富的舞者，翔悦文艺诚邀您踏上以舞寻美的旅程。' },
      cta:     { en: 'Explore Courses',   zh: '探索课程' },
    },
    courses: {
      label:    { en: 'What We Offer',                              zh: '我们的课程' },
      heading:  { en: 'Dance Courses',                              zh: '舞蹈课程' },
      sub:      { en: 'Led by experienced instructors across a range of styles.', zh: '由专业导师带领，涵盖多元舞蹈风格。' },
      viewAll:  { en: 'View all courses →',                         zh: '查看全部课程 →' },
    },
    testimonial: {
      label:       { en: 'In Their Words', zh: '学员心声' },
      quote:       { en: '"So grateful for the meticulous teachings, I thoroughly enjoyed tonight\'s class & learnt so much from Lao Shi！"', zh: '「非常感谢老师今晚的细心指导，我非常享受今晚的课程，从老师身上学到了很多！」' },
      attribution: { en: 'Sumini · Chinese Belly Dance', zh: 'Sumini · 中国舞，2020年7月' },
    },
    join: {
      heading:   { en: 'Ready to Begin?', zh: '准备好开始了吗？' },
      sub:       { en: 'All levels welcome. Come discover your joy of dancing.', zh: '欢迎各程度学员，来感受舞动的喜悦。' },
      primary:   { en: 'Register Now',    zh: '立即报名' },
      secondary: { en: 'View Schedule',   zh: '查看课表' },
    },
  },

  about: {
    label:   { en: 'Our Story',            zh: '我们的故事' },
    heading: { en: 'Born from a\nLove of Dance', zh: '因热爱\n而生' },
    body1:   { en: 'Founded in 2018, Xiang Yue Culture Arts — known to our students as YUE Dance Studio — was born from a simple belief: that dance is for everyone, at every stage of life.', zh: '翔悦文艺成立于2018年，始终秉持一个简单的信念：舞蹈属于每一个人，无论年龄，无论起点。' },
    body2:   { en: 'We began as a small community studio in Singapore, built on word of mouth and a genuine passion for movement. Today, we bring together adult learners of all backgrounds under the guidance of experienced, accomplished instructors — in classes that range from Chinese classical dance and ballet to folk dance and contemporary forms.', zh: '我们从新加坡的一间小小社区舞室起步，凭借口碑与对舞蹈艺术的热忱，逐渐成长壮大。如今，翔悦文艺汇聚了来自各行各业的成人学员，在专业导师的带领下，共同探索现当代舞、民族民间舞、芭蕾舞、华族舞、古典舞的世界。' },
    body3:   { en: 'We are not a studio that trains competitors. We are a place where working adults, retirees, and lifelong learners come to find rhythm, community, and the quiet joy of movement. Many of our students have never danced before. Many have danced their whole lives. All of them are welcome here.', zh: '我们不是培养竞技选手的训练机构，而是一个让职场人士、退休人员及终身学习者寻回节奏、融入社群、感受律动之美的地方。这里有初学者，有资深舞者，每一位都在翔悦找到属于自己的位置。' },
    performances: {
      label:   { en: 'Performances & Achievements', zh: '演出与荣誉' },
      heading: { en: 'On the Stage',                zh: '舞台足迹' },
    },
  },

  instructors: {
    label:          { en: 'Our Team',              zh: '导师团队' },
    heading:        { en: 'Meet the\nInstructors', zh: '认识\n我们的导师' },
    sub:            { en: 'Accomplished artists. Patient teachers. Passionate practitioners.', zh: '技艺精湛、耐心教导、热爱舞蹈的专业导师团队。' },
    teaches:        { en: 'Teaches',               zh: '教授课程' },
    qualifications: { en: 'Qualifications',        zh: '专业资质' },
  },

  courses: {
    label:      { en: 'What We Teach',       zh: '教授内容' },
    heading:    { en: 'Dance Courses',        zh: '舞蹈课程' },
    sub:        { en: 'Six disciplines. One community. All levels welcome.', zh: '六大舞种，同一社群，欢迎各程度学员。' },
    instructor: { en: 'Instructor',           zh: '导师' },
    register:   { en: 'Register Interest →', zh: '立即报名 →' },
  },

  schedule: {
    label:   { en: 'Class Timetable', zh: '课程时间表' },
    heading: { en: 'Class Schedule',  zh: '悦舞坊课程表' },
    sub:     { en: 'Current term schedule. Contact us to confirm your slot.', zh: '当前学期课程表，如需确认课位，欢迎联系我们。' },
    note:    { en: 'Schedule is subject to change. Please confirm with our admin team before attending.', zh: '课程表如有变动，敬请于出席前向我们的行政团队确认。' },
    contact: { en: 'Contact Us', zh: '联系我们' },
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
    adminNote: { en: 'Finance enquiries: contact Vicky (available daily before 4pm)', zh: '费用咨询：请联系Vicky（每日下午4时前）' },
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
            q: { en: 'I do not have experience in dance. What courses are suitable for me?', zh: '我没有舞蹈经验，适合参加哪些课程？' },
            a: { en: 'Mixed Style Dance and Chinese Dance Basics are popular among new dancers. However, feel free to try out other classes and let our instructors know if you wish to have basic steps explained along the way.', zh: '综合风格舞及中国舞基础深受初学者喜爱。当然，您也可以尝试其他课程，只需告知导师希望同步讲解基础步骤即可。' },
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
            q: { en: 'How are fees calculated if I join a course midway?', zh: '中途加入课程，费用如何计算？' },
            a: { en: 'Fees are prorated on a case-by-case basis. Please contact our finance director Vicky (available daily before 4pm) at +65 94253833.', zh: '费用按实际情况按比例计算，请联系财务主任Vicky（每日下午4时前）+65 94253833。' },
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
            a: { en: 'We strongly encourage you to wear the same dance attire as the class — this helps the instructor observe and correct your moves.', zh: '我们强烈建议您穿着与班级统一的舞蹈服装，以便导师观察和纠正您的动作。' },
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
            a: { en: 'There are regular performance opportunities through Foochow Association events for students of Chinese Dance Basics courses.', zh: '中国舞基础课程学员可通过福州会馆活动获得定期演出机会。' },
          },
          {
            q: { en: 'Do I have to pay for performance costumes?', zh: '演出服装需要自己付费吗？' },
            a: { en: 'Costumes are usually provided by Xiang Yue Culture Arts (subject to event), with the exception of personal items such as shoes.', zh: '演出服装通常由翔悦文艺提供（视具体活动而定），个人物品如鞋子除外。' },
          },
        ],
      },
    ],
  },

  footer: {
    tagline:     { en: 'Joy of dancing, beauty of life.', zh: '舞动人生 悦享其中。' },
    established: { en: 'Est. 2018 · Singapore',          zh: '2018年创立 · 新加坡' },
    pages:       { en: 'Pages',                           zh: '页面' },
    contact:     { en: 'Contact',                         zh: '联系' },
    copyright:   { en: '© 2025 Xiang Yue Culture Arts. All rights reserved.', zh: '© 2025 翔悦文艺版权所有。' },
  },
};
