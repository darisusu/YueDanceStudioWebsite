'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { performances } from '@/data/performances';
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

      {/* ── Performances & Awards ────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 relative">
          <span
            className="font-display absolute -top-8 right-0 text-[12rem] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            悦
          </span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            {ab.performances.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            {ab.performances.heading[language]}
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-gold/20 hidden sm:block" />

          <ul className="space-y-0">
            {performances.map((item, i) => (
              <ScrollReveal key={i} delay={i * 40} as="li" className="relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-7 border-b border-ink/8 last:border-0">
                {/* Year */}
                <span className="sm:w-28 shrink-0 font-display text-2xl text-gold relative z-10">
                  {item.year}
                  <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+1.5rem)] w-2 h-2 rounded-full bg-gold/60" />
                </span>
                {/* Description */}
                <p className="text-ink text-sm leading-relaxed sm:pl-8">
                  {item[language]}
                </p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Performance image grid ───────────────────────────── */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            { src: '/images/hero/hero-banner-1.jpeg',         alt: 'YUE Dance Studio stage performance' },
            { src: '/images/about/about-performance-5.jpeg',  alt: 'YUE dancers in performance' },
            { src: '/images/hero/hero-banner-3.jpg',          alt: 'Classical dance by YUE students' },
            { src: '/images/about/about-performance-4.jpeg',  alt: 'YUE Dance Studio awards ceremony' },
          ].map(({ src, alt }, i) => (
            <ScrollReveal key={i} delay={i * 80} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-600"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
