'use client';

import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function HtmlWithLang({ children, className }: { children: React.ReactNode; className: string }) {
  const { language } = useLanguage();
  return <html lang={language} className={className} data-scroll-behavior="smooth">{children}</html>;
}

export default function HtmlRoot({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <LanguageProvider>
      <HtmlWithLang className={className}>{children}</HtmlWithLang>
    </LanguageProvider>
  );
}
