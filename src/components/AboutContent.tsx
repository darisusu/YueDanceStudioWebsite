'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function AboutContent() {
  const { language } = useLanguage();
  const ab = t.about;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
          {ab.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] whitespace-pre-line">
          {ab.heading[language]}
        </h1>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6 text-ink-light leading-relaxed text-base lg:pt-8 max-w-prose">
            <p>{ab.body1[language]}</p>
            <p>{ab.body2[language]}</p>
            <p>{ab.body3[language]}</p>
          </div>

          {/* Co-founders image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about/about-performance-1.jpg"
                alt="Founders of Xiang Yue Culture Arts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            {/* Offset decorative block */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/40 -z-10 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-ink/10" />
      </div>

      {/* ── Performances & Awards ────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="relative mb-16">
          <span
            className="font-display absolute -top-10 right-0 text-[10rem] leading-none text-ink/5 select-none pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            悦
          </span>
          <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
            {ab.performances.label[language]}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
            {ab.performances.heading[language]}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-ink/10 hidden sm:block" />

          <ul className="space-y-0">
            {ab.performances.items.map((item, i) => (
              <li
                key={i}
                className="relative flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-ink/8 last:border-0"
              >
                {/* Year */}
                <span className="sm:w-28 shrink-0 font-display text-2xl text-gold relative z-10">
                  {item.year}
                  {/* Dot on the line */}
                  <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+1.25rem)] w-1.5 h-1.5 rounded-full bg-gold" />
                </span>
                {/* Description */}
                <p className="text-ink text-sm leading-relaxed sm:pl-8">
                  {item[language]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Performance images grid ──────────────────────────── */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { src: '/images/hero/hero-banner-1.jpeg',       alt: 'Dancers performing on stage at YUE showcase' },
            { src: '/images/hero/hero-banner-2.jpg',         alt: 'YUE Dance Studio group performance' },
            { src: '/images/hero/hero-banner-3.jpg',         alt: 'Contemporary dance performance by YUE students' },
            { src: '/images/about/about-performance-3.jpeg', alt: 'YUE Dance Studio awards ceremony' },
          ].map(({ src, alt }, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
