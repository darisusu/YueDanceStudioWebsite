'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const navLinks = [
  { href: '/',               label: t.nav.home },
  { href: '/about',          label: t.nav.about },
  { href: '/instructors',    label: t.nav.instructors },
  { href: '/courses',        label: t.nav.courses },
  { href: '/performances',   label: t.nav.performances },
  { href: '/schedule',       label: t.nav.schedule },
  { href: '/contact',        label: t.nav.contact },
  { href: '/faq',            label: t.nav.faq },
];

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const { language, toggle }        = useLanguage();
  const pathname                    = usePathname();
  const isHome                      = pathname === '/';
  const hamburgerRef                = useRef<HTMLButtonElement>(null);
  const closeButtonRef              = useRef<HTMLButtonElement>(null);
  const firstRender                 = useRef(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    if (menuOpen) {
      closeButtonRef.current?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  const onDark    = !scrolled && isHome;
  const textColor = onDark ? 'text-ivory' : 'text-ink';
  const hoverColor = onDark ? 'hover:text-ivory/70' : 'hover:text-gold';

  return (
    <>
      <header
        style={{ viewTransitionName: 'site-nav' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          onDark
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-ink/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="YUE Dance Studio home">
            <Image
              src="/images/logo/yue-dance-logo.png"
              alt=""
              width={36}
              height={36}
              className={`object-contain transition-all duration-300 ${onDark ? 'brightness-0 invert' : ''}`}
            />
            <span className={`font-display text-lg tracking-wide transition-colors duration-300 ${textColor}`}>
              翔悦文艺
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-200 ${
                  pathname === href
                    ? 'text-gold'
                    : `${textColor} ${hoverColor}`
                }`}
              >
                {label[language]}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-5">
            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
              className={`text-[11px] tracking-[0.15em] transition-colors duration-200 ${textColor} ${hoverColor}`}
            >
              <span className={language === 'en' ? 'text-gold font-semibold' : ''}>EN</span>
              <span className="mx-1.5 opacity-30">/</span>
              <span className={language === 'zh' ? 'text-gold font-semibold' : ''}>中</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className={`lg:hidden flex flex-col gap-[5px] p-3 -mr-3 transition-colors ${textColor}`}
            >
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[14px] h-px bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen || undefined}
        ref={(el) => { if (el) (el as HTMLElement & { inert: boolean }).inert = !menuOpen; }}
        className={`fixed inset-0 z-[100] bg-ink flex flex-col p-8 transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Home">
            <Image
              src="/images/logo/yue-dance-logo.png"
              alt="YUE Dance Studio"
              width={32}
              height={32}
              className="object-contain brightness-0 invert opacity-70"
            />
          </Link>
          <button
            ref={closeButtonRef}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-ivory transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 mt-14 flex-1" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-[2.6rem] leading-tight transition-colors duration-150 ${
                pathname === href
                  ? 'text-gold'
                  : 'text-ivory/75 hover:text-ivory'
              }`}
            >
              {label[language]}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="pt-8 border-t border-ivory/10 flex items-center justify-between">
          <button
            onClick={toggle}
            aria-label={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
            className="text-[11px] tracking-[0.15em] text-ivory/50"
          >
            <span className={language === 'en' ? 'text-gold' : 'text-ivory/50'}>EN</span>
            <span className="mx-2 text-ivory/20">/</span>
            <span className={language === 'zh' ? 'text-gold' : 'text-ivory/50'}>中文</span>
          </button>
          <span className="text-[10px] tracking-widest text-ivory/40 uppercase">Xiang Yue Culture Arts</span>
        </div>
      </div>
    </>
  );
}
