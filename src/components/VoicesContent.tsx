'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t, type Bilingual } from '@/lib/translations';
import { testimonials } from '@/data/testimonials';
import ScrollReveal from '@/components/ScrollReveal';

// Attributions read "Name · Class, Date" — split the name (used to group) from the
// trailing context (shown as a small label under each individual quote).
function splitAttribution(att: Bilingual) {
  const namePart = (s: string) => s.split('·')[0].trim();
  const ctxPart = (s: string) => (s.includes('·') ? s.split('·').slice(1).join('·').trim() : '');
  return {
    name: { en: namePart(att.en), zh: namePart(att.zh) },
    context: { en: ctxPart(att.en), zh: ctxPart(att.zh) },
  };
}

interface VoiceGroup {
  name: Bilingual;
  /** Class / date shown on the same line as the name, e.g. "Thursday Contemporary Dance". */
  context: Bilingual;
  items: { quote: Bilingual }[];
}

const EMPTY: Bilingual = { en: '', zh: '' };

// One section per student — combine a named student's quotes so no name repeats.
// Anonymous voices are different people, so each stays on its own.
function groupByAuthor(): VoiceGroup[] {
  const groups: VoiceGroup[] = [];
  const indexByKey = new Map<string, number>();
  testimonials.forEach((item, i) => {
    const { name, context } = splitAttribution(item.attribution);
    const key = item.anonymous ? `__anon_${i}` : name.en;
    if (!indexByKey.has(key)) {
      indexByKey.set(key, groups.length);
      groups.push({ name, context: EMPTY, items: [] });
    }
    const group = groups[indexByKey.get(key)!];
    group.items.push({ quote: item.quote });
    // First class/date we see for this student rides on the name line.
    if (!group.context.en && context.en) group.context = context;
  });
  return groups;
}

export default function VoicesContent() {
  const { language } = useLanguage();
  const v = t.voices;
  const groups = groupByAuthor();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-ink text-ivory overflow-hidden grain pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-12">
        {/* 悦 ghost character — structural anchor */}
        <span
          className="absolute right-[4vw] -bottom-[8vh] font-display text-[34vw] leading-none text-ivory/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          悦
        </span>

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
            {v.label[language]}
          </p>
          <h1 className="font-display text-ivory text-[clamp(3rem,8vw,7rem)] leading-[0.92] whitespace-pre-line mb-8">
            {v.heading[language]}
          </h1>
          <p className="text-ivory/55 text-base leading-relaxed max-w-2xl">
            {v.intro[language]}
          </p>
        </div>
      </section>

      {/* ── Voices, grouped by student ───────────────────────── */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 gap-8 lg:gap-14">
          {groups.map((group, gi) => (
            <ScrollReveal
              key={`${group.name.en}-${gi}`}
              as="figure"
              delay={(gi % 2) * 70}
              className="break-inside-avoid mb-8 lg:mb-12 border-t border-ink/10 pt-6"
            >
              <cite className="not-italic block text-[11px] tracking-[0.22em] uppercase mb-6">
                <span className="text-gold">{group.name[language]}</span>
                {group.context[language] && (
                  <span className="text-ink-light/55"> · {group.context[language]}</span>
                )}
              </cite>
              <div className="space-y-6">
                {group.items.map((item, ii) => (
                  <blockquote
                    key={ii}
                    // whitespace-pre-line keeps the poems' line breaks; single \n only, so no stray gaps
                    className={`font-display text-ink text-lg leading-[1.5] font-light italic whitespace-pre-line${
                      ii > 0 ? ' border-t border-ink/[0.07] pt-6' : ''
                    }`}
                  >
                    {item.quote[language]}
                  </blockquote>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto border-t border-ink/10 pt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.0] whitespace-pre-line max-w-md">
            {v.ctaHeading[language]}
          </h2>
          <Link
            href="/courses"
            className="shrink-0 inline-flex items-center gap-2 bg-ink text-ivory hover:bg-gold hover:text-ink px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors duration-200"
          >
            {v.cta[language]}
          </Link>
        </div>
      </section>
    </>
  );
}
