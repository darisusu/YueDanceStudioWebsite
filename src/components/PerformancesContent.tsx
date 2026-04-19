'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { performances } from '@/data/performances';
import ParallaxHero from '@/components/ParallaxHero';
import ScrollReveal from '@/components/ScrollReveal';

// Major entries get full editorial treatment; 2019 entries share a card row
const majorYears = ['2025', '2021', '2020', '2018'];
const majorEntries = performances.filter((p) => majorYears.includes(p.year) && p.year !== '2019');
const entries2019 = performances.filter((p) => p.year === '2019');

export default function PerformancesContent() {
  const { language } = useLanguage();
  const pf = t.performances;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden grain mt-16">
        <ParallaxHero
          src="/images/hero/hero-banner-2.jpg"
          alt="YUE Dance Studio performance"
          objectPosition="center top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/10 z-[1]" />
        <p
          className="text-vertical absolute left-8 bottom-12 font-display text-[10px] tracking-[0.4em] text-ivory/25 select-none hidden lg:block z-[2]"
          aria-hidden="true"
        >
          舞台足迹
        </p>
        <div className="relative z-[2] max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
            {pf.label[language]}
          </p>
          <h1 className="font-display text-ivory text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] whitespace-pre-line [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            {pf.heading[language]}
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="max-w-2xl">
          <p className="text-ink-light text-base leading-relaxed">{pf.sub[language]}</p>
        </ScrollReveal>
      </section>

      {/* ── Major entries ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-px">
        {majorEntries.map((item, i) => {
          const flipImage = i % 2 === 1; // alternate sides
          const isRiverHongBao = item.images && item.images.length > 1;

          return (
            <ScrollReveal key={item.en} delay={i * 60} as="article">
              <div className={`grid grid-cols-1 lg:grid-cols-12 bg-ink/5 gap-px min-h-[520px]`}>

                {/* Image column */}
                <div className={`lg:col-span-7 ${flipImage ? 'lg:order-last' : ''} bg-ivory overflow-hidden`}>
                  {isRiverHongBao && item.images ? (
                    /* River Hong Bao: main image top + 2 smaller below */
                    <div className="flex flex-col h-full gap-px">
                      <div className="relative flex-1 overflow-hidden group min-h-[260px]">
                        <Image
                          src={item.images[0]}
                          alt={item[language]}
                          fill
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex gap-px" style={{ height: '200px' }}>
                        {item.images.slice(1).map((src, j) => (
                          <div key={j} className="relative flex-1 overflow-hidden group">
                            <Image
                              src={src}
                              alt={`${item[language]} — ${j + 2}`}
                              fill
                              sizes="(max-width: 1024px) 50vw, 29vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : item.images?.[0] ? (
                    <div className="relative h-full min-h-[360px] overflow-hidden group">
                      <Image
                        src={item.images[0]}
                        alt={item[language]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : null}
                </div>

                {/* Text column */}
                <div className="lg:col-span-5 bg-ivory p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                  <span
                    className="absolute -bottom-6 right-0 font-display text-[8rem] leading-none text-ink/[0.04] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {item.year}
                  </span>
                  <div className="relative">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">
                      {item.year}
                    </p>
                    <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05] mb-5">
                      {item[language]}
                    </h2>
                    {item.desc && (
                      <p className="text-ink-light text-base leading-relaxed">
                        {item.desc[language]}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── 2019 Events ──────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="mb-10">
          <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">2019</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95]">
            {language === 'en' ? 'Also in 2019' : '2019年其他演出'}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10">
          {entries2019.map((item, i) => (
            <ScrollReveal key={item.en} delay={i * 80} className="bg-ivory group overflow-hidden">
              {item.images?.[0] && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item[language]}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6 lg:p-8">
                <div className="w-5 h-px bg-gold mb-4" />
                <h3 className="font-display text-xl leading-tight mb-2">{item[language]}</h3>
                {item.desc && (
                  <p className="text-ink-light text-sm leading-relaxed mt-2">
                    {item.desc[language]}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
