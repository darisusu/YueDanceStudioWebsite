'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();
  const e = t.errors;

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-gold-deep text-xs tracking-[0.3em] uppercase mb-4">{e.errorTag[language]}</p>
      <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
        {e.errorHeading[language]}
      </h1>
      <p className="text-ink-light text-base mb-10 max-w-md">
        {e.errorBody[language]}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold-deep px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-150"
      >
        {e.tryAgain[language]}
      </button>
    </section>
  );
}
