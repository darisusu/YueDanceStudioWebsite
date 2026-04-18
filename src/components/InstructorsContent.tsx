'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { instructors } from '@/data/instructors';
import ScrollReveal from '@/components/ScrollReveal';

export default function InstructorsContent() {
  const { language } = useLanguage();
  const tr = t.instructors;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <span
          className="absolute right-0 top-16 font-display text-[20vw] leading-none text-ink/[0.04] select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
        >
          悦
        </span>
        <div className="relative">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
            {tr.label[language]}
          </p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] whitespace-pre-line mb-6">
            {tr.heading[language]}
          </h1>
          <p className="text-ink-light text-base max-w-lg">{tr.sub[language]}</p>
        </div>
      </section>

      {/* ── Instructor profiles ───────────────────────────────── */}
      <section className="pb-28">
        <div className="space-y-px bg-ink/8">
          {instructors.map((profile, i) => (
            <ScrollReveal key={profile.name} delay={0} className="bg-ivory">
              <article className={`grid grid-cols-1 lg:grid-cols-2 min-h-[540px]`}>
                {/* Portrait */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="relative h-full min-h-[400px] lg:min-h-full">
                    <Image
                      src={profile.photo}
                      alt={`${profile.nameZh} — ${profile.title[language]}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-[center_20%]"
                    />
                    {/* Vertical Chinese text on image */}
                    <p
                      className={`text-vertical absolute top-8 ${i % 2 === 1 ? 'right-6' : 'left-6'} font-display text-[10px] tracking-[0.4em] text-ivory/30 select-none hidden lg:block`}
                      aria-hidden="true"
                    >
                      {profile.nameZh}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={`px-10 py-14 lg:px-16 lg:py-20 flex flex-col justify-center relative overflow-hidden`}>
                  {/* Ghost first character */}
                  <span
                    className="absolute -bottom-6 right-0 font-display text-[10rem] leading-none text-ink/[0.04] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {profile.nameZh.charAt(0)}
                  </span>

                  <div className="relative">
                    <div className="w-8 h-px bg-gold mb-8" />

                    {/* Name block */}
                    <div className="mb-6">
                      <h2 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9]">
                        {profile.nameZh}
                      </h2>
                      {profile.nameZh !== profile.name && (
                        <p className="text-ink-light text-sm mt-1">{profile.name}</p>
                      )}
                    </div>

                    <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                      {profile.title[language]}
                    </p>
                    <p className="text-xs tracking-[0.15em] text-ink-light mb-8">
                      {profile.teaches[language]}
                    </p>

                    <p className="text-ink-light text-base leading-relaxed mb-6 max-w-prose">
                      {profile.bio[language]}
                    </p>

                    {/* Qualifications */}
                    {profile.qualifications && (
                      <div className="pt-6 border-t border-ink/8">
                        <p className="text-[10px] tracking-[0.25em] uppercase text-ink-light mb-4">
                          {tr.qualifications[language]}
                        </p>
                        <ul className="space-y-2">
                          {profile.qualifications[language].map((q, qi) => (
                            <li key={qi} className="text-sm text-ink-light flex gap-3 items-start">
                              <span className="text-gold shrink-0 mt-0.5">—</span>
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
