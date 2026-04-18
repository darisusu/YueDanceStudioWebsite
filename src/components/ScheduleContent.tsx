'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function ScheduleContent() {
  const { language } = useLanguage();
  const tr = t.schedule;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-sm">{tr.sub[language]}</p>
      </section>

      {/* ── Schedule image ───────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto pb-16">
        <div className="relative w-full shadow-sm">
          <Image
            src="/images/schedule/schedule-background.jpg"
            alt="YUE Dance Studio class schedule timetable"
            width={1200}
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ── Note ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="border border-ink/10 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-ink-light text-sm leading-relaxed max-w-xl">
            {tr.note[language]}
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold px-7 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-150"
          >
            {tr.contact[language]}
          </Link>
        </div>
      </section>
    </>
  );
}
