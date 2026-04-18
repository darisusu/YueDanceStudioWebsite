'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { courses } from '@/data/courses';
import ScrollReveal from '@/components/ScrollReveal';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

export default function CoursesContent() {
  const { language } = useLanguage();
  const tr = t.courses;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <span
          className="absolute right-0 top-16 font-display text-[20vw] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          悦
        </span>
        <div className="relative">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
            {tr.label[language]}
          </p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] mb-6">
            {tr.heading[language]}
          </h1>
          <p className="text-ink-light text-base">{tr.sub[language]}</p>
        </div>
      </section>

      {/* ── Course list ───────────────────────────────────────── */}
      <section className="pb-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-px bg-ink/8">
          {courses.map((course, i) => {
            const isFeature = i === 0;

            return (
              <ScrollReveal key={course.name.en} delay={0}>
                <article
                  className={`bg-ivory group relative overflow-hidden ${
                    isFeature ? 'grid grid-cols-1' : 'grid grid-cols-1 lg:grid-cols-2'
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeature ? 'aspect-[21/9]' : `aspect-[4/3] lg:aspect-auto lg:min-h-80 ${i % 2 === 1 ? 'lg:order-last' : ''}`
                    }`}
                  >
                    <Image
                      src={course.image}
                      alt={course.name[language]}
                      fill
                      priority={isFeature}
                      sizes={isFeature ? '100vw' : '(max-width: 1024px) 100vw, 50vw'}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {isFeature && (
                      /* Feature overlay: text on image */
                      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent flex flex-col justify-end p-10 lg:p-16">
                        <div className="w-8 h-px bg-gold mb-5" />
                        <h2 className="font-display text-ivory text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-2">
                          {course.name[language]}
                        </h2>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-ivory/50 mb-6">
                          {tr.instructor[language]}: {course.instructor[language]}
                        </p>
                        <p className="text-ivory/70 text-base leading-relaxed max-w-xl mb-8">
                          {course.description[language]}
                        </p>
                        <a
                          href={REGISTRATION_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="self-start text-xs tracking-[0.2em] uppercase text-gold hover:text-ivory border-b border-gold/50 hover:border-ivory pb-0.5 transition-colors duration-150"
                        >
                          {tr.register[language]}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content — non-feature cards only */}
                  {!isFeature && (
                    <div className="p-10 lg:p-14 flex flex-col justify-center relative">
                      {/* Gold border on hover */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-400 pointer-events-none" />

                      <div className="relative">
                        <div className="w-8 h-px bg-gold mb-6" />
                        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight mb-2">
                          {course.name[language]}
                        </h2>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-6">
                          {tr.instructor[language]}: {course.instructor[language]}
                        </p>
                        <p className="text-ink-light text-base leading-relaxed mb-8">
                          {course.description[language]}
                        </p>
                        <a
                          href={REGISTRATION_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="self-start text-xs tracking-[0.2em] uppercase text-ink-light hover:text-gold border-b border-ink-light/40 hover:border-gold pb-0.5 transition-colors duration-150"
                        >
                          {tr.register[language]}
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
