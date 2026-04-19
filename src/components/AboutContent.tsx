'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxHero from '@/components/ParallaxHero';

export default function AboutContent() {
  const { language } = useLanguage();
  const ab = t.about;

  return (
    <>
      {/* ── Full-bleed page hero ──────────────────────────────── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden grain mt-16">
        <ParallaxHero
          src="/images/about/about-performance-1.jpg"
          alt="YUE Dance Studio founders"
          objectPosition="center top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/10 z-[1]" />

        {/* Vertical text */}
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
