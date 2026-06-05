'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutContent() {
  const { language } = useLanguage();
  const ab = t.about;

  return (
    <>
      {/* ── Full-bleed page hero ──────────────────────────────── */}
      <section className="relative h-[75vh] flex items-end overflow-hidden grain mt-16">

        {/* Split founder portraits — stacked on mobile, side-by-side from lg */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">

          {/* Lin Jing — left */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/instructors/clear-lin-jing.jpeg"
              alt="Lin Jing, Co-founder of YUE Dance Studio"
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              className="object-cover"
              style={{ objectPosition: '50% 56%' }}
              priority
            />
            {/* top vignette for name legibility */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/65 to-transparent" />
            {/* bottom gradient for headline legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            {/* Founder name — top of panel */}
            <div className="absolute top-5 left-5 lg:left-8 z-[2]">
              <p className="text-[9px] lg:text-[8px] tracking-[0.4em] uppercase text-gold/90 mb-1">
                {language === 'zh' ? '联合创办人' : 'Co-Founder'}
              </p>
              <p className="font-display text-ivory text-sm lg:text-base leading-none">Lin Jing</p>
            </div>
          </div>

          {/* Thin gold divider — horizontal when stacked, vertical from lg */}
          <div className="w-full h-px lg:w-px lg:h-auto bg-gold/20 flex-shrink-0 z-10" />

          {/* Han Tao — right */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/instructors/clear-han-tao.jpeg"
              alt="Han Tao, Co-founder of YUE Dance Studio"
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              className="object-cover"
              style={{ objectPosition: '50% 18%' }}
              priority
            />
            {/* top vignette for name legibility */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/65 to-transparent" />
            {/* bottom gradient for headline legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            {/* Founder name — top of panel */}
            <div className="absolute top-5 left-5 lg:left-8 z-[2]">
              <p className="text-[9px] lg:text-[8px] tracking-[0.4em] uppercase text-gold/90 mb-1">
                {language === 'zh' ? '联合创办人' : 'Co-Founder'}
              </p>
              <p className="font-display text-ivory text-sm lg:text-base leading-none">Han Tao</p>
            </div>
          </div>
        </div>

        {/* Vertical text — desktop only */}
        <p
          className="text-vertical absolute left-8 bottom-12 font-display text-[10px] tracking-[0.4em] text-ivory/25 select-none hidden lg:block z-[2]"
          aria-hidden="true"
        >
          翔悦文艺
        </p>

        <div className="relative z-[2] max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            {ab.label[language]}
          </p>
          <h1 className="font-display text-ivory text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] whitespace-pre-line [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            {ab.heading[language]}
          </h1>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div className="lg:col-span-5 space-y-6 text-ink-light leading-relaxed text-base max-w-prose">
            <ScrollReveal><p>{ab.body1[language]}</p></ScrollReveal>
            <ScrollReveal delay={100}><p>{ab.body2[language]}</p></ScrollReveal>
            <ScrollReveal delay={200}><p>{ab.body3[language]}</p></ScrollReveal>
          </div>

          {/* Image + decorative offset */}
          <div className="lg:col-span-7 relative">
            <ScrollReveal className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/about-performance-3.jpeg"
                alt="YUE Dance Studio performance"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </ScrollReveal>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-gold/30 -z-10 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-ink/10" />
      </div>

      {/* ── Performances link ────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="relative">
          <span
            className="font-display absolute -top-8 right-0 text-[12rem] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            悦
          </span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            {ab.performances.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
            {ab.performances.heading[language]}
          </h2>
          <p className="text-ink-light text-base leading-relaxed max-w-xl mb-8">
            {language === 'en'
              ? 'From Chingay Parade to the Singapore Golden Lion Cup — browse our full stage history.'
              : '从妆艺大游行到新加坡金狮奖——浏览翔悦完整的舞台足迹。'}
          </p>
          <Link
            href="/performances"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-gold hover:text-ink border-b border-gold/50 hover:border-ink pb-0.5 transition-colors duration-150"
          >
            {language === 'en' ? 'See full history →' : '了解演出历史 →'}
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
