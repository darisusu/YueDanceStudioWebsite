'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm text-ink group-hover:text-gold transition-colors duration-150 leading-relaxed">
          {question}
        </span>
        <span
          className={`shrink-0 mt-0.5 text-gold transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm text-ink-light leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqContent() {
  const { language } = useLanguage();
  const tr = t.faq;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] whitespace-pre-line mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-sm">{tr.sub[language]}</p>
      </section>

      {/* ── Accordion categories ──────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-px bg-ink/10">
          {tr.categories.map((category) => (
            <div key={category.title.en} className="bg-ivory p-10">
              <div className="w-6 h-px bg-gold mb-5" />
              <h2 className="font-display text-2xl mb-6">{category.title[language]}</h2>
              <div>
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.q.en}
                    question={item.q[language]}
                    answer={item.a[language]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
