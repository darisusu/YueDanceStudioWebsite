import type { Bilingual } from '@/lib/translations';

export interface Course {
  name: Bilingual;
  instructor: Bilingual;
  description: Bilingual;
  image: string;
}

export const courses: Course[] = [
  {
    name:        { en: 'Contemporary Dance',  zh: '当代舞' },
    instructor:  { en: 'Daniel',              zh: 'Daniel' },
    description: { en: 'An expressive, dynamic form that draws from modern technique — exploring movement, space, and emotion with freedom and intention.', zh: '融合现代技法的表达性舞蹈形式，以自由与意图探索动作、空间与情感的深度。' },
    image: '/images/courses/course-9.jpg',
  },
  {
    name:        { en: 'Mixed Style Dance',   zh: '综合风格舞' },
    instructor:  { en: 'Daniel',              zh: 'Daniel' },
    description: { en: 'A versatile course drawing from ballet, contemporary, folk, and fitness dance — ideal for those who want to experience the full breadth of movement.', zh: '融合芭蕾、当代、民族及健身舞的综合课程，适合希望广泛体验各种舞蹈形式的学员。' },
    image: '/images/courses/course-10.jpg',
  },
  {
    name:        { en: 'Adult Ballet / Basic', zh: '成人基础芭蕾' },
    instructor:  { en: 'Shen Zhihua',          zh: '沈芷华' },
    description: { en: 'Classical ballet fundamentals for adult beginners and returning dancers, focusing on posture, alignment, and graceful technique at a comfortable pace.', zh: '专为成人初学者及回归学员设计，以轻松的节奏培养仪态、身体线条与优雅的古典技法基础。' },
    image: '/images/courses/course-13.jpeg',
  },
  {
    name:        { en: 'Chinese Dance',               zh: '华族舞' },
    instructor:  { en: 'Daniel · Chang Hsiao-Min',   zh: 'Daniel · 张晓明' },
    description: { en: 'A rich tradition of Chinese dance forms — from lyrical Han-style movements to expressive contemporary Chinese choreography, led by two complementary instructors.', zh: '涵盖抒情汉族风格至当代华族舞编排的丰富舞蹈传统，由两位导师各展所长，相辅相成。' },
    image: '/images/hero/hero-banner-1.jpeg',
  },
  {
    name:        { en: 'Folk Dance',   zh: '民族民间舞' },
    instructor:  { en: 'Bai Ying Wen', zh: '白映文' },
    description: { en: 'Celebrate the vibrant diversity of Chinese and Asian folk traditions. Energetic, colourful, and deeply rooted in cultural heritage.', zh: '展现中国及亚洲民族舞蹈的多彩风貌，充满活力，植根于深厚的文化传统之中。' },
    image: '/images/courses/course-5.jpg',
  },
  {
    name:        { en: 'Chinese Classical Dance', zh: '中国古典舞' },
    instructor:  { en: 'Angel Peng',              zh: '彭若丹' },
    description: { en: 'Drawing from centuries of Chinese court and theatrical tradition, classical dance emphasises flowing lines, inner stillness, and the poetry of movement.', zh: '源自数百年中国宫廷与戏曲传统，古典舞注重流畅的身体线条、内在的沉静与肢体的诗意表达。' },
    image: '/images/hero/hero-banner-3.jpg',
  },
];
