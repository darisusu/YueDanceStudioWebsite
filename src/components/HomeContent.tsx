'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { localizedHref } from '@/lib/locale';
import { t } from '@/lib/translations';
import { courses as courseList } from '@/data/courses';
import { instructors } from '@/data/instructors';
import { featuredTestimonials } from '@/data/testimonials';
import ParallaxHero from '@/components/ParallaxHero';
import ScrollReveal from '@/components/ScrollReveal';
import Marquee from '@/components/Marquee';
import { REGISTRATION_URL, MAPS_URL, FACEBOOK_URL, INSTAGRAM_URL } from '@/data/config';

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

const featuredInstructors = [instructors[0], instructors[2]];
const moreInstructors = instructors.filter((ins) => !featuredInstructors.includes(ins));

// Truncate a bio to its first `count` sentences. Chinese sentences end with 。,
// English with a period + space — splitting on the wrong separator returns the
// whole bio (the previous bug), so pick the separator by language.
function firstSentences(text: string, lang: 'en' | 'zh', count = 2) {
  const sep = lang === 'zh' ? '。' : '. ';
  const end = lang === 'zh' ? '。' : '.';
  const parts = text.split(sep).map((s) => s.trim()).filter(Boolean);
  return parts.slice(0, count).join(sep) + (parts.length ? end : '');
}

export default function HomeContent() {
  const { language } = useLanguage();
  const hero    = t.home.hero;
  const courses = t.home.courses;
  const perf    = t.home.performances;
  const testi   = t.home.testimonial;
  const join    = t.home.join;
  const visit   = t.home.visit;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-end overflow-hidden grain pt-24 lg:pt-28">
        {/* Parallax image — grayscale-normalised so the warm-tone layers below read consistently */}
        <ParallaxHero
          src="/images/hero/hero-dancer.jpg"
          alt="Dancer with arms outstretched in a dramatic spotlight"
          objectPosition="center 35%"
          imgClassName="grayscale"
          priority
        />

        {/* Warm-tone duotone: tints the grayscale photo toward a warm sepia-ink monochrome */}
        <div className="absolute inset-0 bg-[#4a3b2b] mix-blend-color opacity-40 z-[1]" />

        {/* Subtle gold vignette glow — warmth & depth, centred on the figure */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(60% 55% at 50% 40%, rgba(184,148,90,0.10), transparent 70%)',
          }}
        />

        {/* Legibility gradient: transparent top → strong warm dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/15 z-[1]" />

        {/* 悦 ghost character — structural anchor */}
        <span
          className="absolute right-[5vw] bottom-[5vh] font-display text-[38vw] leading-none text-ivory/[0.04] select-none pointer-events-none z-[2]"
          aria-hidden="true"
        >
          悦
        </span>

        <div className="relative z-[3] max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 lg:pb-28">
          {/* Label */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-ivory/85 mb-8 [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
            {hero.label[language]}
          </p>

          {/* Headline — massive, overlapping the image */}
          <h1 className="font-display text-ivory leading-[0.95] lg:leading-[0.9] mb-12 sm:mb-14 [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
            <span className="block text-[clamp(3.25rem,12vw,10rem)] font-light">
              {hero.line1[language]}
            </span>
            {hero.line2[language] && (
              <span className="block text-[clamp(3.25rem,12vw,10rem)] font-light lg:pl-[6vw] text-ivory/90">
                {hero.line2[language]}
              </span>
            )}
            <span className="block text-[clamp(3.25rem,12vw,10rem)] font-light lg:pl-[12vw] italic">
              {hero.line3[language]}
            </span>
          </h1>

          <div className="max-w-5xl flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
            <p className="md:flex-1 md:max-w-md text-ivory/80 text-base sm:text-lg leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              {hero.tagline[language]}
            </p>
            <div className="md:w-fit md:shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-8">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 md:flex-none items-center justify-center gap-2 bg-gold text-ink hover:bg-ivory px-4 sm:px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold transition-all duration-200"
                >
                  {hero.ctaPrimary[language]}
                </a>
                <Link
                  href={localizedHref('/courses', language)}
                  className="inline-flex flex-1 md:flex-none items-center justify-center gap-2 border border-ivory/50 text-ivory hover:bg-ivory hover:text-ink px-4 sm:px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-200"
                >
                  {hero.cta[language]}
                </Link>
              </div>
              <p className="md:w-0 md:min-w-full text-ivory/80 text-base sm:text-lg leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.85)]">
                {t.cta.trialBlurb[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────── */}
      <Marquee items={marqueeItems} />

      {/* ── Courses ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold-deep mb-3">
              {courses.label[language]}
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
              {courses.heading[language]}
            </h2>
            <p className="text-ink-light text-sm mt-3">{courses.sub[language]}</p>
          </div>
          <Link
            href={localizedHref('/courses', language)}
            className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-gold-deep hover:text-ink transition-colors duration-150"
          >
            {courses.viewAll[language]}
          </Link>
        </ScrollReveal>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-ink/10">
          {/* Feature card — spans 8 columns */}
          {courseList[0] && (
            <ScrollReveal className="lg:col-span-8 bg-ivory group overflow-hidden relative">
              <Link href={localizedHref('/courses', language)} className="block">
                <div className="relative aspect-[16/10] lg:aspect-[unset] lg:min-h-[480px] overflow-hidden">
                  <Image
                    src={courseList[0].image}
                    alt={courseList[0].name[language]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 67vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 flex items-end justify-between gap-4">
                    <div>
                      <div className="w-8 h-px bg-gold mb-4" />
                      <h3 className="font-display text-ivory text-[clamp(1.8rem,3.5vw,3rem)] leading-tight">
                        {courseList[0].name[language]}
                      </h3>
                      <p className="text-ivory/60 text-xs tracking-widest uppercase mt-2 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-400">
                        {t.courses.instructor[language]}: {courseList[0].instructor[language]}
                      </p>
                    </div>
                    <span className="shrink-0 text-ivory/60 text-xl lg:hidden">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Side column — 2 smaller cards */}
          <div className="lg:col-span-4 flex flex-col gap-px bg-ink/10">
            {courseList.slice(1, 3).map((course, i) => (
              <ScrollReveal key={course.name.en} delay={i * 100} className="bg-ivory group overflow-hidden flex-1 relative">
                <Link href={localizedHref('/courses', language)} className="block h-full">
                  <div className="relative aspect-[4/3] lg:aspect-[unset] lg:min-h-[238px] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.name[language]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-ivory text-xl leading-tight">
                          {course.name[language]}
                        </h3>
                        <p className="text-ivory/55 text-[10px] tracking-widest uppercase mt-1 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-400">
                          {t.courses.instructor[language]}: {course.instructor[language]}
                        </p>
                      </div>
                      <span className="shrink-0 text-ivory/60 text-xl lg:hidden">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom row — remaining courses */}
          {courseList.slice(3).map((course, i) => (
            <ScrollReveal key={course.name.en} delay={i * 80} className="lg:col-span-6 bg-ivory group overflow-hidden relative">
              <Link href={localizedHref('/courses', language)} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name[language]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="w-5 h-px bg-gold mb-3" />
                      <h3 className="font-display text-ivory text-xl leading-tight">
                        {course.name[language]}
                      </h3>
                      <p className="text-ivory/55 text-[10px] tracking-widest uppercase mt-1 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-400">
                        {t.courses.instructor[language]}: {course.instructor[language]}
                      </p>
                    </div>
                    <span className="shrink-0 text-ivory/60 text-xl lg:hidden">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Cultural identity section ─────────────────────────── */}
      <section className="relative bg-ink py-32 lg:py-40 px-6 lg:px-12 overflow-hidden grain">
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
                ? 'Dance is not just a performance,\nbut a way of discovering what it means to be alive.'
                : '舞蹈不是表演，而是我们感受生命、寻回自我的方式。'}
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 w-16 h-px bg-gold" />
            <p className="text-ivory/40 text-sm mt-6 max-w-xl leading-relaxed">
              {language === 'en'
                ? 'Founded in Singapore in 2018, YUE Dance Studio, part of Xiang Yue Culture Arts, brings together adult learners of all backgrounds under the guidance of accomplished artists.'
                : '翔悦文艺旗下悦舞坊2018年于新加坡创立，汇聚各背景成人学员，在专业艺术家的带领下共同探索舞蹈之美。'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Instructor teaser ─────────────────────────────────── */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="mb-14 lg:mb-16">
          <p className="text-[10px] tracking-[0.28em] uppercase text-ink-light mb-3">
            {t.instructors.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
            {t.instructors.heading[language]}
          </h2>
          <p className="text-ink-light text-sm mt-4 max-w-md leading-relaxed">
            {language === 'en'
              ? `A faculty of ${instructors.length}, spanning ballet, Chinese classical, folk, and contemporary dance.`
              : `${instructors.length} 位导师，涵盖芭蕾、中国古典舞、民族民间舞与当代舞。`}
          </p>
        </ScrollReveal>

        <div className="space-y-px bg-ink/10">
          {featuredInstructors.map((instructor, i) => (
            <ScrollReveal key={instructor.name} delay={i * 100}>
              <article className={`bg-ivory grid grid-cols-1 lg:grid-cols-2 min-h-[460px] ${i % 2 === 1 ? '' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden aspect-[4/5] lg:aspect-auto ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={instructor.photo}
                    alt={language === 'en' ? instructor.name : instructor.nameZh}
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
                    <p className="text-[10px] tracking-[0.22em] uppercase text-gold-deep mb-6">
                      {instructor.title[language]}
                    </p>
                    <p className="text-ink-light text-base leading-relaxed max-w-sm">
                      {firstSentences(instructor.bio[language], language)}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Roster strip — the rest of the faculty, so it's clear there are more */}
        {moreInstructors.length > 0 && (
          <ScrollReveal className="mt-px">
            <p className="text-[10px] tracking-[0.28em] uppercase text-ink-light mb-5">
              {language === 'en' ? 'And more of our faculty' : '更多导师'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10 border-t border-ink/10">
              {moreInstructors.map((instructor) => (
                <Link
                  key={instructor.name}
                  href={localizedHref('/instructors', language)}
                  className="group bg-ivory flex items-center gap-4 p-6 hover:bg-ink/[0.02] transition-colors duration-150"
                >
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={instructor.photo}
                      alt={language === 'en' ? instructor.name : instructor.nameZh}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg leading-tight group-hover:text-gold-deep transition-colors duration-150">
                      {instructor.nameZh}
                    </p>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-gold-deep/80 mt-1">
                      {instructor.title[language]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-8 flex justify-end">
          <Link
            href={localizedHref('/instructors', language)}
            className="text-[11px] tracking-[0.18em] uppercase text-gold hover:text-ink border-b border-gold/50 hover:border-ink pb-0.5 transition-colors duration-150"
          >
            {language === 'en'
              ? `Meet all ${instructors.length} instructors →`
              : `认识全部 ${instructors.length} 位导师 →`}
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Performances teaser ──────────────────────────────── */}
      <section className="pt-0 lg:pt-2 pb-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="mb-14 lg:mb-16">
          <p className="text-[10px] tracking-[0.28em] uppercase text-gold-deep mb-3">
            {perf.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] whitespace-pre-line">
            {perf.heading[language]}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {perf.items.map((item, i) => (
            <ScrollReveal key={item.title.en} delay={i * 80}>
              <div className="group relative overflow-hidden bg-ink grain">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
                <div className="relative z-10 flex min-h-[22rem] lg:min-h-[26rem] flex-col justify-end p-6 lg:p-8">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">{item.year}</p>
                  <h3 className="font-display text-ivory text-2xl leading-tight mb-2">{item.title[language]}</h3>
                  <p className="text-ivory/75 text-sm leading-relaxed">{item.note[language]}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="border-t border-ink/10 pt-8 mt-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-ink-light text-sm leading-relaxed max-w-md">
            {perf.sub[language]}
          </p>
          <Link
            href={localizedHref('/performances', language)}
            className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-gold hover:text-ink border-b border-gold/50 hover:border-ink pb-0.5 transition-colors duration-150"
          >
            {perf.cta[language]}
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Testimonials — wall of voices ────────────────────── */}
      <section className="relative bg-ink py-32 lg:py-40 px-6 lg:px-12 overflow-hidden grain">
        {/* background performance image */}
        <div className="absolute inset-0 opacity-[0.10]">
          <Image
            src="/images/featured/featured-chinese-dance-4.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header */}
          <ScrollReveal className="max-w-2xl mb-14 lg:mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              {testi.label[language]}
            </p>
            <h2 className="font-display text-ivory text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.0] whitespace-pre-line mb-5">
              {testi.heading[language]}
            </h2>
            <p className="text-ivory/55 text-sm leading-relaxed">
              {testi.sub[language]}
            </p>
          </ScrollReveal>

          {/* Even grid — two voices per pillar; equal-height cells keep it aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 md:auto-rows-fr">
            {featuredTestimonials.map((item, i) => (
              <ScrollReveal
                key={i}
                as="figure"
                delay={(i % 3) * 80}
                className="flex flex-col border-t border-ivory/15 pt-6"
              >
                {item.tag && (
                  <figcaption className="text-[9px] tracking-[0.28em] uppercase text-gold/80 mb-5">
                    {item.tag[language]}
                  </figcaption>
                )}
                <blockquote className="font-display text-ivory font-light italic leading-[1.45] text-xl lg:text-2xl">
                  {(item.excerpt ?? item.quote)[language]}
                </blockquote>
                <cite className="not-italic block mt-auto pt-6 text-ivory/40 text-[11px] tracking-[0.2em] uppercase">
                  {item.attribution[language]}
                </cite>
              </ScrollReveal>
            ))}
          </div>

          {/* Read the full archive */}
          <ScrollReveal className="mt-12 lg:mt-14">
            <Link
              href={localizedHref('/voices', language)}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-gold hover:text-ivory border-b border-gold/40 hover:border-ivory pb-1 transition-colors duration-150"
            >
              {testi.cta[language]}
            </Link>
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

      {/* ── Visit / Location ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-3">
            {visit.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.98] mb-14 lg:mb-16">
            {visit.heading[language]}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10">
          {/* Studio + directions (tap-to-map) */}
          <ScrollReveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-light mb-4">
                {visit.studio[language]}
              </p>
              <address className="not-italic font-display text-xl leading-snug text-ink mb-6">
                47 Beach Road, #02-04<br />Singapore 189683
              </address>
              <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-gold group-hover:text-ink border-b border-gold/50 group-hover:border-ink pb-0.5 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {visit.directions[language]}
              </span>
            </a>
          </ScrollReveal>

          {/* Call + email (tap-to-call) */}
          <ScrollReveal delay={100}>
            <div className="flex h-full flex-col">
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-light mb-4">
                {visit.call[language]}
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="tel:+6596885938"
                  className="group flex items-center justify-between gap-4 h-12 px-4 border border-ink/15 hover:border-gold transition-colors duration-150"
                >
                  <span className="font-display text-lg text-ink group-hover:text-gold-deep transition-colors duration-150">Janelle</span>
                  <span className="text-sm tracking-wide text-ink-light">+65 9688 5938</span>
                </a>
                <a
                  href="tel:+6594253833"
                  className="group flex items-center justify-between gap-4 h-12 px-4 border border-ink/15 hover:border-gold transition-colors duration-150"
                >
                  <span className="font-display text-lg text-ink group-hover:text-gold-deep transition-colors duration-150">Vicky</span>
                  <span className="text-sm tracking-wide text-ink-light">+65 9425 3833</span>
                </a>
              </div>
              <p className="mt-auto text-[10px] tracking-[0.22em] uppercase text-ink-light mb-2">
                {visit.email[language]}
              </p>
              <a
                href="mailto:xiangyue.culturearts@gmail.com"
                className="text-sm text-ink hover:text-gold-deep break-all transition-colors duration-150"
              >
                xiangyue.culturearts@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-ink-light text-xs mt-10">
            {visit.note[language]}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-10 pt-10 border-t border-ink/10">
            <p className="text-[10px] tracking-[0.22em] uppercase text-ink-light mb-5">
              {t.contact.social[language]}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center gap-2.5 h-11 px-4 border border-ink/15 hover:border-gold transition-colors duration-150"
              >
                {/* Facebook wordmark icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-ink group-hover:text-gold-deep transition-colors duration-150" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <span className="text-[11px] tracking-[0.12em] text-ink group-hover:text-gold-deep transition-colors duration-150">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-2.5 h-11 px-4 border border-ink/15 hover:border-gold transition-colors duration-150"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-ink group-hover:text-gold-deep transition-colors duration-150" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-[11px] tracking-[0.12em] text-ink group-hover:text-gold-deep transition-colors duration-150">Instagram</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Join CTA ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
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
                  href={localizedHref('/schedule', language)}
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
