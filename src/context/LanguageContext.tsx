'use client';

import { createContext, useContext } from 'react';
import type { Lang } from '@/lib/translations';

interface LanguageContextType {
  language: Lang;
}

// The active language is now determined by the URL (English at root, Chinese
// under /zh) and supplied by the per-locale root layout — no client-side cookie
// resolution or toggle. Consumers still read `language` exactly as before.
const LanguageContext = createContext<LanguageContextType>({ language: 'en' });

export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LanguageContext.Provider value={{ language: lang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
