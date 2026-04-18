import type { Bilingual } from '@/lib/translations';

export interface Instructor {
  name: string;
  nameZh: string;
  title: Bilingual;
  teaches: Bilingual;
  photo: string;
  bio: Bilingual;
  qualifications: { en: string[]; zh: string[] } | null;
}

export const instructors: Instructor[] = [
  {
    name:   'Daniel',
    nameZh: 'Daniel',
    title:   { en: 'Artistic Director',             zh: '艺术总监' },
    teaches: { en: 'Contemporary Dance · Chinese Dance', zh: '当代舞 · 中国舞' },
    photo:  '/images/instructors/instructor-1.png',
    bio: {
      en: 'Daniel serves as Artistic Director of YUE Dance Studio and is an accomplished dance artist with deep mastery across contemporary and Chinese dance forms. His creative choreography has graced prestigious stages across Singapore, and his teaching — technically rigorous and expressively rich — has shaped the artistic identity of the studio since its founding.',
      zh: 'Daniel担任翔悦文艺艺术总监，是一位在当代舞与中国舞领域造诣深厚的舞蹈艺术家。其编排作品曾登上新加坡多个重要舞台，教学风格技术严谨、表达力丰沛，自建室以来深刻塑造着翔悦的艺术风格。',
    },
    qualifications: null,
  },
  {
    name:   'Chang Hsiao-Min',
    nameZh: '张晓明',
    title:   { en: 'Chinese Dance Instructor', zh: '中国舞导师' },
    teaches: { en: 'Chinese Dance',            zh: '中国舞' },
    photo:  '/images/instructors/instructor-2.png',
    bio: {
      en: 'Chang Hsiao-Min is a dedicated Chinese dance practitioner with a rich performance background spanning cultural events and major stage productions. Her deep knowledge of Chinese movement vocabulary brings elegance and cultural depth to every class she leads.',
      zh: '张晓明专注于中国舞的艺术实践，拥有丰富的演出经历，参与过众多文化活动及大型舞台演出。她对中国舞蹈语汇有深刻的理解，教学典雅从容，文化内涵深厚。',
    },
    qualifications: null,
  },
  {
    name:   'Bai Ying Wen',
    nameZh: '白映文',
    title:   { en: 'Folk Dance Instructor', zh: '民族舞导师' },
    teaches: { en: 'Folk Dance',             zh: '民族民间舞' },
    photo:  '/images/instructors/instructor-3.png',
    bio: {
      en: 'Bai Ying Wen is a specialist in folk dance with a joyful, energetic approach to teaching. Her classes draw on the rich traditions of Chinese and Asian folk dance forms, blending cultural heritage with accessible, lively choreography that students of all levels can enjoy.',
      zh: '白映文专注于民族民间舞教学，风格活泼、热情洋溢。课程融汇中国及亚洲各民族舞蹈传统，将文化底蕴与生动编排有机结合，适合各层次学员轻松参与。',
    },
    qualifications: null,
  },
  {
    name:   'Shen Zhihua',
    nameZh: '沈芷华',
    title:   { en: 'Ballet Instructor',    zh: '芭蕾导师' },
    teaches: { en: 'Adult Ballet / Basic', zh: '成人基础芭蕾' },
    photo:  '/images/instructors/instructor-4.png',
    bio: {
      en: 'Shen Zhihua brings professional ballet training to adult learners of all backgrounds. Her patient, encouraging approach makes ballet accessible and enjoyable, focusing on posture, grace, and the fundamentals of classical technique — skills that benefit dancers across every discipline.',
      zh: '沈芷华为各背景成人学员提供专业芭蕾舞训练。她耐心温和、循循善诱，致力于让芭蕾舞教学变得亲切愉悦，重点培养仪态、优雅气质及古典技法基础，这些能力对各类舞蹈皆有裨益。',
    },
    qualifications: null,
  },
  {
    name:   'Angel Peng',
    nameZh: '彭若丹',
    title:   { en: 'Chinese Classical Dance Instructor', zh: '中国古典舞导师' },
    teaches: { en: 'Chinese Classical Dance',           zh: '中国古典舞' },
    photo:  '/images/instructors/Angela.jpeg',
    bio: {
      en: 'After graduating from the Dance Department of Shenyang Music Conservatory, Angel Peng has spent over a decade moving between the classroom and the stage. She maintains an active love for dance, continuing to perform alongside her teaching career. Her approach centres on cultivating a genuine feel for movement, developing physical coordination, and unlocking authentic inner expression — through gentle, focused guidance that lets students grow at their own pace.',
      zh: '彭若丹毕业于沈阳音乐学院舞蹈系，从事舞蹈领域教学十余年，行走于课堂与舞台之间。始终保持对舞蹈的热爱，并持续参与舞台演出。教学中关注舞感的生成、身体的协调与内在表达，在温和而专注的引导中，让学员于从容的节奏里提升能力，体会舞蹈所带来的力量与喜悦。',
    },
    qualifications: {
      en: ['Graduate, Dance Dept., Shenyang Music Conservatory', 'Member, PA Talent Dance Company', 'MOE Registered Teacher (CCA)', 'CSTD Registered Teacher', 'Certified Dance Examination Teacher (舞协)'],
      zh: ['沈阳音乐学院舞蹈系毕业', 'PA Talent舞团成员', 'MOE注册教师（CCA）', 'CSTD注册教师', '舞协考级认证教师'],
    },
  },
];
