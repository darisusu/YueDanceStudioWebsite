'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { localizedHref } from '@/lib/locale';
import { t } from '@/lib/translations';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutContent() {
  const { language } = useLanguage();
  const ab = t.about;

  return (
    <>
      {/* ── Page hero: faces fill the screen, title banner pinned below.
           Locked to one viewport (minus the 4rem fixed nav) so both photos
           AND the title are always in view without scrolling, at any aspect.
           svh keeps it within the smallest viewport (mobile chrome visible). */}
      <section className="grain mt-16 flex flex-col h-[calc(100svh-4rem)]">

        {/* Founder portraits — side by side, flexing to fill whatever height
            is left above the banner */}
        <div className="relative flex flex-row flex-1 min-h-0 overflow-hidden">

          {/* Lin Jing — left */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/about/hero-lin-jing.jpeg"
              alt="Janelle Lin Jing, Co-founder of YUE Dance Studio"
              fill
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: '50% 30%' }}
              priority
            />
            {/* top vignette for name legibility */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/65 to-transparent" />
            {/* bottom fade blends the photo into the banner below */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
            {/* Founder name — top of panel */}
            <div className="absolute top-8 left-5 lg:left-8 z-[2]">
              <p className="text-[9px] lg:text-[8px] tracking-[0.4em] uppercase text-gold/90 mb-1">
                {language === 'zh' ? '联合创办人' : 'Co-Founder'}
              </p>
              <p className="font-display text-ivory text-sm lg:text-base leading-none">Janelle Lin Jing</p>
            </div>
          </div>

          {/* Han Tao — right. Uses the same normalized crop + object-position
              as Lin, so object-cover keeps the two faces locked in alignment
              at every viewport aspect (no per-image nudging needed). */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/about/hero-han-tao.jpeg"
              alt="Vicki Han Tao, Co-founder of YUE Dance Studio"
              fill
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: '50% 30%' }}
              priority
            />
            {/* top vignette for name legibility */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/65 to-transparent" />
            {/* bottom fade blends the photo into the banner below */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
            {/* Founder name — top of panel */}
            <div className="absolute top-8 left-5 lg:left-8 z-[2]">
              <p className="text-[9px] lg:text-[8px] tracking-[0.4em] uppercase text-gold/90 mb-1">
                {language === 'zh' ? '联合创办人' : 'Co-Founder'}
              </p>
              <p className="font-display text-ivory text-sm lg:text-base leading-none">Vicki Han Tao</p>
            </div>
          </div>

          {/* Vertical text — desktop only */}
          <p
            className="text-vertical absolute left-8 bottom-8 font-display text-[10px] tracking-[0.4em] text-ivory/25 select-none hidden lg:block z-[2]"
            aria-hidden="true"
          >
            翔悦文艺
          </p>
        </div>

        {/* Title banner — pinned below the faces, keeps its natural height */}
        <div className="bg-ink grain shrink-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              {ab.label[language]}
            </p>
            <h1 className="font-display text-ivory text-[clamp(2.75rem,8vw,7rem)] leading-[0.9] whitespace-pre-line">
              {ab.heading[language]}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="pt-10 lg:pt-14 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
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
      <section className="pt-10 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="relative">
          <span
            className="font-display absolute -top-8 right-0 text-[12rem] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            悦
          </span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-4">
            {ab.performances.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
            {ab.performances.heading[language]}
          </h2>
          <p className="text-ink-light text-base leading-relaxed max-w-xl mb-8">
            {language === 'en'
              ? 'From Chingay Parade to the Singapore Golden Lion Cup. Browse our full stage history.'
              : '从妆艺大游行到新加坡金狮奖——浏览翔悦完整的舞台足迹。'}
          </p>
          <Link
            href={localizedHref('/performances', language)}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-gold hover:text-ink border-b border-gold/50 hover:border-ink pb-0.5 transition-colors duration-150"
          >
            {language === 'en' ? 'See full history →' : '了解演出历史 →'}
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
