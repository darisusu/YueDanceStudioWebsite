'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { courses as courseList } from '@/data/courses';
import { instructors } from '@/data/instructors';
import ParallaxHero from '@/components/ParallaxHero';
import ScrollReveal from '@/components/ScrollReveal';
import Marquee from '@/components/Marquee';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

const marqueeItems = [
  'Movement as Language',
  '以舞为语',
  'Living within Artistry',
  '艺在其中',
  'Finding Beauty through Dance',
  '以舞寻美',
  'All are welcome',
  '翔悦欢迎你',
];

const featuredInstructors = [instructors[0], instructors[4]];

export default function HomeContent() {
  const { language } = useLanguage();
  const hero    = t.home.hero;
  const courses = t.home.courses;
  const perf    = t.home.performances;
  const testi   = t.home.testimonial;
  const join    = t.home.join;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-end overflow-hidden grain">
        {/* Parallax image with extra height for the parallax offset */}
        <ParallaxHero
          src="/images/hero/hero-banner-1.jpeg"
          alt="YUE Dance Studio performance"
          objectPosition="center 70%"
          priority
        />

        {/* Gradient: transparent top → strong dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10 z-[1]" />

        {/* 悦 ghost character — structural anchor */}
        <span
          className="absolute right-[5vw] bottom-[5vh] font-display text-[38vw] leading-none text-ivory/[0.04] select-none pointer-events-none z-[2]"
          aria-hidden="true"
        >
          悦
        </span>

        <div className="relative z-[3] max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 lg:pb-28">
          {/* Label */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-ivory/60 mb-8">
            {hero.label[language]}
          </p>

          {/* Headline — massive, overlapping the image */}
          <h1 className="font-display text-ivory leading-[0.9] mb-10 [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
            <span className="block text-[clamp(4rem,11vw,10rem)] font-light">
              {hero.line1[language]}
            </span>
            {hero.line2[language] && (
              <span className="block text-[clamp(4rem,11vw,10rem)] font-light pl-[6vw] text-ivory/90">
                {hero.line2[language]}
              </span>
            )}
            <span className="block text-[clamp(4rem,11vw,10rem)] font-light pl-[12vw] italic">
              {hero.line3[language]}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 max-w-2xl">
            <p className="text-ivory/75 text-base leading-relaxed flex-1 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              {hero.tagline[language]}
            </p>
            <Link
              href="/courses"
              className="shrink-0 inline-flex items-center gap-2 bg-gold text-ink hover:bg-ivory px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold transition-all duration-200"
            >
              {hero.cta[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────── */}
      <Marquee items={marqueeItems} />

      {/* ── Courses ──────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              {courses.label[language]}
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
              {courses.heading[language]}
            </h2>
            <p className="text-ink-light text-sm mt-3">{courses.sub[language]}</p>
          </div>
          <Link
            href="/courses"
            className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-gold hover:text-ink transition-colors duration-150"
          >
            {courses.viewAll[language]}
          </Link>
        </ScrollReveal>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-ink/10">
          {/* Feature card — spans 8 columns */}
          {courseList[0] && (
            <ScrollReveal className="lg:col-span-8 bg-ivory group overflow-hidden relative">
              <Link href="/courses" className="block">
                <div className="relative aspect-[16/10] lg:aspect-[unset] lg:min-h-[480px] overflow-hidden">
                  <Image
                    src={courseList[0].image}
                    alt={courseList[0].name[language]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 67vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="w-8 h-px bg-gold mb-4" />
                    <h3 className="font-display text-ivory text-[clamp(1.8rem,3.5vw,3rem)] leading-tight">
                      {courseList[0].name[language]}
                    </h3>
                    <p className="text-ivory/60 text-xs tracking-widest uppercase mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      {t.courses.instructor[language]}: {courseList[0].instructor[language]}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Side column — 2 smaller cards */}
          <div className="lg:col-span-4 flex flex-col gap-px bg-ink/10">
            {courseList.slice(1, 3).map((course, i) => (
              <ScrollReveal key={course.name.en} delay={i * 100} className="bg-ivory group overflow-hidden flex-1 relative">
                <Link href="/courses" className="block h-full">
                  <div className="relative aspect-[4/3] lg:aspect-[unset] lg:min-h-[238px] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name[language]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-ivory text-xl leading-tight">
                        {course.name[language]}
                      </h3>
                      <p className="text-ivory/55 text-[10px] tracking-widest uppercase mt-1 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                        {t.courses.instructor[language]}: {course.instructor[language]}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row — remaining courses */}
          {courseList.slice(3).map((course, i) => (
            <ScrollReveal key={course.name.en} delay={i * 80} className="lg:col-span-4 bg-ivory group overflow-hidden relative">
              <Link href="/courses" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name[language]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-5 h-px bg-gold mb-3" />
                    <h3 className="font-display text-ivory text-xl leading-tight">
                      {course.name[language]}
                    </h3>
                    <p className="text-ivory/55 text-[10px] tracking-widest uppercase mt-1 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      {t.courses.instructor[language]}: {course.instructor[language]}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Cultural identity section ─────────────────────────── */}
      <section className="relative bg-ink py-32 px-6 lg:px-12 overflow-hidden grain">
        {/* 悦 large ghost */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[40vw] leading-none text-ivory/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          悦
        </span>

        {/* Vertical Chinese text accent */}
        <p
          className="text-vertical absolute left-8 top-1/2 -translate-y-1/2 font-display text-[11px] tracking-[0.4em] text-ivory/20 select-none hidden lg:block"
          aria-hidden="true"
        >
          翔悦文艺 · 舞蹈艺术
        </p>

        <div className="relative max-w-7xl mx-auto lg:pl-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
              {language === 'en' ? 'Our Philosophy' : '我们的理念'}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <blockquote className="font-display text-ivory text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.1] font-light italic max-w-3xl">
              {language === 'en'
                ? 'Dance is not just a performance.\nBut exploring what it means to be alive.'
                : '舞蹈不是表演，而是我们感受生命、寻回自我的方式。'}
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 w-16 h-px bg-gold" />
            <p className="text-ivory/40 text-sm mt-6 max-w-xl leading-relaxed">
              {language === 'en'
                ? 'Founded in Singapore in 2018, Xiang Yue Culture Arts brings together adult learners of all backgrounds under the guidance of accomplished artists.'
                : '翔悦文艺2018年于新加坡创立，汇聚各背景成人学员，在专业艺术家的带领下共同探索舞蹈之美。'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Instructor teaser ─────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <p className="text-[10px] tracking-[0.28em] uppercase text-ink-light mb-3">
            {t.instructors.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
            {t.instructors.heading[language]}
          </h2>
        </ScrollReveal>

        <div className="space-y-px bg-ink/10">
          {featuredInstructors.map((instructor, i) => (
            <ScrollReveal key={instructor.name} delay={i * 100}>
              <article className={`bg-ivory grid grid-cols-1 lg:grid-cols-2 min-h-[460px] ${i % 2 === 1 ? '' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={instructor.photo}
                    alt={instructor.nameZh}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Text */}
                <div className="p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                  {/* Ghost name in background */}
                  <span
                    className="absolute -bottom-4 right-0 font-display text-[7rem] leading-none text-ink/[0.04] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {instructor.nameZh.charAt(0)}
                  </span>

                  <div className="relative">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-1">
                      {instructor.nameZh}
                    </h3>
                    {instructor.nameZh !== instructor.name && (
                      <p className="text-ink-light text-sm mb-4">{instructor.name}</p>
                    )}
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold mb-6">
                      {instructor.title[language]}
                    </p>
                    <p className="text-ink-light text-base leading-relaxed max-w-sm">
                      {instructor.bio[language].split('. ').slice(0, 2).join('. ') + '.'}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 flex justify-end">
          <Link
            href="/instructors"
            className="text-[11px] tracking-[0.18em] uppercase text-gold hover:text-ink border-b border-gold/50 hover:border-ink pb-0.5 transition-colors duration-150"
          >
            {language === 'en' ? 'Meet all instructors →' : '认识全体导师 →'}
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Performances teaser ──────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
              {perf.label[language]}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95]">
              {perf.heading[language]}
            </h2>
          </div>
          <Link
            href="/performances"
            className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-gold hover:text-ink transition-colors duration-150"
          >
            {perf.cta[language]}
          </Link>
        </ScrollReveal>

        <div className="border-t border-b border-ink/10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
          {perf.items.map((item, i) => (
            <ScrollReveal key={item.title.en} delay={i * 80} className="py-8 px-0 sm:px-8 first:pl-0 last:pr-0">
              <p className="text-[10px] tracking-widest uppercase text-gold mb-2">{item.year}</p>
              <h3 className="font-display text-xl leading-tight mb-2">{item.title[language]}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{item.note[language]}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────── */}
      <section className="relative bg-ink min-h-[70vh] flex items-center px-6 lg:px-12 overflow-hidden grain">
        {/* background performance image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero/hero-banner-2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-10">
              {testi.label[language]}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <blockquote className="font-display text-ivory text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.2] font-light italic max-w-3xl mb-10">
              {testi.quote[language]}
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <cite className="not-italic text-ivory/35 text-xs tracking-[0.22em] uppercase">
              {testi.attribution[language]}
            </cite>
          </ScrollReveal>
        </div>

        {/* Vertical accent */}
        <p
          className="text-vertical absolute right-10 top-1/2 -translate-y-1/2 font-display text-[10px] tracking-[0.4em] text-ivory/15 select-none hidden lg:block"
          aria-hidden="true"
        >
          学员心声
        </p>
      </section>

      {/* ── Join CTA ─────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <span
              className="font-display absolute -top-10 right-0 text-[14rem] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              悦
            </span>
            <div className="relative z-10 max-w-xl">
              <ScrollReveal>
                <div className="w-10 h-px bg-gold mb-8" />
                <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.95] mb-6">
                  {join.heading[language]}
                </h2>
                <p className="text-ink-light text-base leading-relaxed mb-10">
                  {join.sub[language]}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100} className="flex flex-wrap gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-ink hover:bg-ink hover:text-ivory px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-200"
                >
                  {join.primary[language]}
                </a>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 border border-ink text-ink hover:border-gold hover:text-gold px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase transition-all duration-200"
                >
                  {join.secondary[language]}
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
