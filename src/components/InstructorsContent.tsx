'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function InstructorsContent() {
  const { language } = useLanguage();
  const tr = t.instructors;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] whitespace-pre-line mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-sm max-w-xl">{tr.sub[language]}</p>
      </section>

      {/* ── Instructor cards ─────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {tr.profiles.map((profile) => (
            <article
              key={profile.name}
              className="bg-ivory flex flex-col"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-ivory-muted">
                <Image
                  src={profile.photo}
                  alt={`${profile.nameZh} — ${profile.title[language]}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col flex-1">
                <div className="w-6 h-px bg-gold mb-5" />

                <div className="mb-1">
                  <h2 className="font-display text-2xl">{profile.nameZh}</h2>
                  {profile.nameZh !== profile.name && (
                    <p className="text-ink-light text-xs mt-0.5">{profile.name}</p>
                  )}
                </div>

                <p className="text-xs tracking-[0.18em] uppercase text-ink-light mb-5">
                  {profile.title[language]}
                </p>

                <p className="text-sm text-ink-light leading-relaxed mb-4">
                  <span className="font-medium text-ink">{tr.teaches[language]}: </span>
                  {profile.teaches[language]}
                </p>

                <p className="text-base text-ink-light leading-relaxed flex-1">
                  {profile.bio[language]}
                </p>

                {/* Qualifications (Angel Peng only) */}
                {profile.qualifications && (
                  <div className="mt-6 pt-6 border-t border-ink/8">
                    <p className="text-xs tracking-[0.18em] uppercase text-ink-light mb-3">
                      {tr.qualifications[language]}
                    </p>
                    <ul className="space-y-1">
                      {profile.qualifications[language].map((q, i) => (
                        <li key={i} className="text-sm text-ink-light flex gap-2">
                          <span className="text-gold mt-0.5 shrink-0">—</span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
