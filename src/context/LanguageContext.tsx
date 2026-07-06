'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggle: () => void;
}

const STORAGE_KEY = 'lang';

function readSavedLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  // Cookie first (it's also read by the pre-hydration script in the layout so
  // <html lang> and the CJK font are correct before first paint), then
  // fall back to localStorage for visitors from before the cookie existed.
  const cookieMatch = document.cookie.match(/(?:^|;\s*)lang=(en|zh)/);
  if (cookieMatch) return cookieMatch[1] as Language;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'zh' ? 'zh' : 'en';
}

function persistLanguage(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage may be unavailable (private mode) — the cookie still carries it */
  }
  // 1-year cookie so the pre-hydration script can resolve the language on the
  // next visit before React runs.
  document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setLanguage(readSavedLanguage());
  }, []);

  const toggle = () =>
    setLanguage((l) => {
      const next = l === 'en' ? 'zh' : 'en';
      persistLanguage(next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ language, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
