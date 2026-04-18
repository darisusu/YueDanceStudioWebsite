'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function HomeContent() {
  const { language } = useLanguage();
  const hero    = t.home.hero;
  const courses = t.home.courses;
  const testi   = t.home.testimonial;
  const join    = t.home.join;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-end pb-20 overflow-hidden">
        <Image
          src="/images/hero/hero-banner-1.jpeg"
          alt="YUE Dance Studio performance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        {/* Gradient: transparent top → dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          {/* Label */}
          <p className="text-[13px] tracking-[0.25em] uppercase text-ivory/90 mb-6 [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
            {hero.label[language]}
          </p>

          {/* Heading */}
          <h1 className="font-display text-ivory leading-[0.95] mb-8 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
            <span className="block text-[clamp(3.5rem,9vw,8rem)] font-light">
              {hero.line1[language]}
            </span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] font-light pl-[8vw]">
              {hero.line2[language]}
            </span>
            <span className="block text-[clamp(3.5rem,9vw,8rem)] font-light pl-[16vw]">
              {hero.line3[language]}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 max-w-2xl">
            <p className="text-ivory/90 text-base leading-relaxed flex-1 [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
              {hero.tagline[language]}
            </p>
            <Link
              href="/courses"
              className="shrink-0 inline-flex items-center gap-2 bg-gold text-ink hover:bg-gold/80 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-200 shadow-lg"
            >
              {hero.cta[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-3">
              {courses.label[language]}
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight">
              {courses.heading[language]}
            </h2>
            <p className="text-ink-light text-sm mt-3">{courses.sub[language]}</p>
          </div>
          <Link
            href="/courses"
            className="shrink-0 text-xs tracking-[0.15em] uppercase text-ink-light underline underline-offset-4 decoration-ink-light/30 hover:text-gold hover:decoration-gold transition-colors duration-150"
          >
            {courses.viewAll[language]}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {t.courses.items.map((course) => (
            <Link
              key={course.name.en}
              href="/courses"
              className="group bg-ivory overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name[language]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-6 h-px bg-gold mb-4" />
                <h3 className="font-display text-xl mb-1">{course.name[language]}</h3>
                <p className="text-xs tracking-widest uppercase text-ink-light">
                  {t.courses.instructor[language]}: {course.instructor[language]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────── */}
      <section className="bg-ink py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-ivory/60 mb-10">
            {testi.label[language]}
          </p>
          <div className="font-display text-gold text-8xl leading-none mb-4 select-none" aria-hidden="true">"</div>
          <blockquote className="font-display text-ivory text-[clamp(1.4rem,3vw,2.2rem)] leading-relaxed font-light italic mb-10">
            {testi.quote[language]}
          </blockquote>
          <cite className="not-italic text-ivory/60 text-xs tracking-[0.2em] uppercase">
            {testi.attribution[language]}
          </cite>
        </div>
      </section>

      {/* ── Join CTA ─────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Decorative character */}
          <div className="relative">
            <span
              className="font-display absolute -top-16 right-0 text-[12rem] leading-none text-ink/5 select-none pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              悦
            </span>
            <div className="relative z-10 max-w-xl">
              <div className="w-10 h-px bg-gold mb-8" />
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
                {join.heading[language]}
              </h2>
              <p className="text-ink-light text-base leading-relaxed mb-10">
                {join.sub[language]}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-ink hover:bg-ink hover:text-ivory px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200"
                >
                  {join.primary[language]}
                </a>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 border border-ink text-ink hover:border-gold hover:text-gold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-200"
                >
                  {join.secondary[language]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
