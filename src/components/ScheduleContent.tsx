'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { scheduleClasses } from '@/data/schedule';

const NUM_BANDS = 5;

export default function ScheduleContent() {
  const { language } = useLanguage();
  const tr = t.schedule;

  const grid: (typeof scheduleClasses[number] | undefined)[][] = Array.from(
    { length: NUM_BANDS },
    (_, band) =>
      tr.days.map((_, day) => scheduleClasses.find(c => c.band === band && c.day === day)),
  );

  const activeDayIndices = tr.days
    .map((_, i) => i)
    .filter(i => scheduleClasses.some(c => c.day === i));

  const activeDays = activeDayIndices.map(i => ({
    day: tr.days[i],
    classes: scheduleClasses.filter(c => c.day === i).sort((a, b) => a.band - b.band),
  }));

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-base">{tr.sub[language]}</p>
      </section>

      {/* ── Desktop: grid table ───────────────────────────────── */}
      <section className="hidden lg:block px-12 max-w-7xl mx-auto pb-16">
        <table className="table-fixed w-full border-collapse">
          <thead>
            <tr>
              {activeDayIndices.map(di => (
                <th
                  key={di}
                  className="bg-[#1C1917] border border-[#1C1917] px-4 py-5 text-left align-middle"
                >
                  <p className="font-display text-2xl lg:text-3xl text-[#F5F0E8] leading-none">
                    {tr.days[di][language]}
                  </p>
                  {language === 'en' && (
                    <p className="text-gold text-xs mt-1.5 font-sans font-normal tracking-wide">
                      {tr.days[di].zh}
                    </p>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.map((band, bi) => {
              if (!activeDayIndices.some(di => band[di])) return null;
              return (
                <tr key={bi}>
                  {activeDayIndices.map(di => {
                    const cls = band[di];
                    return (
                      <td
                        key={di}
                        className={[
                          'border border-[#D6CFC3] px-4 py-5 align-top',
                          cls ? 'bg-[#F5F0E8]' : 'bg-[#E8E3D9]',
                        ].join(' ')}
                      >
                        {cls && (
                          <>
                            <p className="text-gold text-[11px] tracking-[0.18em] uppercase mb-2">
                              {cls.time}
                            </p>
                            <p className="font-display text-xl lg:text-2xl text-[#1C1917] leading-tight mb-2">
                              {cls.name[language]}
                            </p>
                            <p className="text-[#44403C] text-sm">
                              {cls.instructor[language]}
                            </p>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* ── Mobile: stacked day list ──────────────────────────── */}
      <section className="lg:hidden px-6 max-w-xl mx-auto pb-16 space-y-10">
        {activeDays.map(({ day, classes }, i) => (
          <div key={i}>
            <div className="flex items-baseline gap-3 mb-4 pb-2 border-b border-ink/10">
              <h2 className="font-display text-2xl text-ink">{day[language]}</h2>
              {language === 'en' && (
                <span className="text-gold text-xs tracking-wide">{day.zh}</span>
              )}
            </div>
            <div className="space-y-3">
              {classes.map((cls, j) => (
                <div key={j} className="bg-[#F5F0E8] border border-[#D6CFC3] px-5 py-4">
                  <p className="text-gold text-[11px] tracking-[0.18em] uppercase mb-1.5">
                    {cls.time}
                  </p>
                  <p className="font-display text-xl text-[#1C1917] leading-tight mb-1">
                    {cls.name[language]}
                  </p>
                  <p className="text-[#44403C] text-sm">{cls.instructor[language]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Note ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="border border-ink/10 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-ink-light text-base leading-relaxed max-w-xl">
            {tr.note[language]}
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold px-7 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-150"
          >
            {tr.contact[language]}
          </Link>
        </div>
      </section>
    </>
  );
}
