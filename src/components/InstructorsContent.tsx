'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import InstructorWheel from '@/components/InstructorWheel';

export default function InstructorsContent() {
  const { language } = useLanguage();
  const tr = t.instructors;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="relative pt-28 pb-6 lg:pt-40 lg:pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <span
          className="absolute right-0 top-16 font-display text-[20vw] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          悦
        </span>
        <div className="relative">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-4">
            {tr.label[language]}
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] whitespace-pre-line mb-4 lg:mb-6">
            {tr.heading[language]}
          </h1>
          <p className="text-ink-light text-base max-w-lg">{tr.sub[language]}</p>
        </div>
      </section>

      {/* ── Instructor wheel ──────────────────────────────────── */}
      <InstructorWheel />
    </>
  );
}
