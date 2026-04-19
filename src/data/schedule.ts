import type { Bilingual } from '@/lib/translations';

export interface ScheduleClass {
  day: number;   // 0 = Monday … 6 = Sunday
  band: number;  // time row: 0 = morning … 4 = evening
  time: string;
  name: Bilingual;
  instructor: Bilingual;
}

export const scheduleClasses: ScheduleClass[] = [
  // Monday
  { day: 0, band: 0, time: '10:00–11:30am', name: { en: 'Contemporary Chinese Dance',       zh: '当代华族舞'      }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 0, band: 3, time: '5:30–7:00pm',   name: { en: 'Chinese Dance',                    zh: '舞韵踏歌'        }, instructor: { en: 'Chang Hsiao-Min', zh: '张晓明'  } },
  { day: 0, band: 4, time: '7:30–9:00pm',   name: { en: 'Chinese Dance',                    zh: '舞韵踏歌'        }, instructor: { en: 'Chang Hsiao-Min', zh: '张晓明'  } },
  // Tuesday
  { day: 1, band: 1, time: '1:00–2:30pm',   name: { en: 'Basics Ballet',                    zh: '基础芭蕾'        }, instructor: { en: 'Shen Zhihua',     zh: '沈芷华'  } },
  { day: 1, band: 4, time: '7:30–9:00pm',   name: { en: 'Chinese Dance',                    zh: '华族舞'          }, instructor: { en: 'Angel Peng',      zh: '彭若丹'  } },
  // Wednesday
  { day: 2, band: 0, time: '10:00–11:30am', name: { en: 'Chinese Dance',                    zh: '华族舞'          }, instructor: { en: 'Chang Hsiao-Min', zh: '张晓明'  } },
  { day: 2, band: 3, time: '5:30–7:00pm',   name: { en: 'Chinese Dance',                    zh: '华族舞'          }, instructor: { en: 'Chang Hsiao-Min', zh: '张晓明'  } },
  { day: 2, band: 4, time: '7:30–9:00pm',   name: { en: 'Chinese Dance',                    zh: '华族舞'          }, instructor: { en: 'Chang Hsiao-Min', zh: '张晓明'  } },
  // Thursday
  { day: 3, band: 0, time: '10:00–11:30am', name: { en: 'Contemporary Chinese Dance',       zh: '当代华族舞'      }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 3, band: 1, time: '12:00–1:30pm',  name: { en: 'Contemporary Dance',               zh: '现当代舞'        }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 3, band: 4, time: '7:30–9:30pm',   name: { en: 'Han Chinese Yangge Folk Dance',    zh: '汉族秧歌民间舞'  }, instructor: { en: 'Bai Ying Wen',   zh: '白映文'  } },
  // Friday
  { day: 4, band: 3, time: '4:30–6:00pm',   name: { en: 'Basic Contemporary Chinese Dance', zh: '初舞拾光'        }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 4, band: 4, time: '7:30–9:00pm',   name: { en: 'Contemporary Dance',               zh: '现当代舞'        }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  // Saturday
  { day: 5, band: 0, time: '11:00am–12:30pm', name: { en: 'Basics Ballet',                  zh: '基础芭蕾'        }, instructor: { en: 'Shen Zhihua',     zh: '沈芷华'  } },
  { day: 5, band: 1, time: '1:00–2:30pm',   name: { en: 'Contemporary Dance',               zh: '当代舞'          }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 5, band: 2, time: '3:00–4:30pm',   name: { en: 'Contemporary Chinese Dance',       zh: '当代华族舞'      }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  { day: 5, band: 3, time: '4:45–6:45pm',   name: { en: 'Tibetan Folk Dance',               zh: '藏族舞'          }, instructor: { en: 'Bai Ying Wen',   zh: '白映文'  } },
  { day: 5, band: 4, time: '7:00–8:30pm',   name: { en: 'Dance Performance Training',       zh: '表演基训班'      }, instructor: { en: 'Daniel',          zh: 'Daniel'  } },
  // Sunday
  { day: 6, band: 2, time: '2:00–3:30pm',   name: { en: 'Chinese Classical Dance',          zh: '古典舞'          }, instructor: { en: 'Angel Peng',      zh: '彭若丹'  } },
];
