'use client';

import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function HtmlWithLang({ children, className }: { children: React.ReactNode; className: string }) {
  const { language } = useLanguage();
  // The pre-hydration script in the layout may set `lang`/`.cjk-active` on
  // <html> before React hydrates; suppress the resulting attribute warning.
  return <html lang={language} suppressHydrationWarning className={className} data-scroll-behavior="smooth">{children}</html>;
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
