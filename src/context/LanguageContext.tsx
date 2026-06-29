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
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'zh' ? 'zh' : 'en';
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
      localStorage.setItem(STORAGE_KEY, next);
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
