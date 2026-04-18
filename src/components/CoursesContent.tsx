'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

export default function CoursesContent() {
  const { language } = useLanguage();
  const tr = t.courses;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-sm">{tr.sub[language]}</p>
      </section>

      {/* ── Course cards ─────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="space-y-px bg-ink/10">
          {tr.items.map((course, i) => (
            <article
              key={course.name.en}
              className="bg-ivory grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Image — alternates sides on desktop */}
              <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-72 overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={course.image}
                  alt={course.name[language]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="w-8 h-px bg-gold mb-6" />
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight mb-2">
                  {course.name[language]}
                </h2>
                <p className="text-[10px] tracking-[0.18em] uppercase text-gold mb-6">
                  {tr.instructor[language]}: {course.instructor[language]}
                </p>
                <p className="text-ink-light text-sm leading-relaxed mb-8">
                  {course.description[language]}
                </p>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-[11px] tracking-[0.18em] uppercase text-gold hover:text-ink border-b border-gold/40 hover:border-ink pb-0.5 transition-colors duration-150"
                >
                  {tr.register[language]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
