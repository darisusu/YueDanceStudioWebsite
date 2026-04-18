'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const pageLinks = [
  { href: '/about',       label: t.nav.about },
  { href: '/instructors', label: t.nav.instructors },
  { href: '/courses',     label: t.nav.courses },
  { href: '/schedule',    label: t.nav.schedule },
  { href: '/contact',     label: t.nav.contact },
  { href: '/faq',         label: t.nav.faq },
];

export default function Footer() {
  const { language } = useLanguage();
  const tr = t.footer;

  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/yue-dance-logo.png"
                alt="YUE Dance Studio"
                width={34}
                height={34}
                className="object-contain brightness-0 invert opacity-70"
              />
              <span className="font-display text-lg text-ivory/80">翔悦文艺</span>
            </div>
            <p className="text-ivory/50 text-sm leading-relaxed">{tr.tagline[language]}</p>
            <p className="text-ivory/30 text-xs tracking-widest uppercase">{tr.established[language]}</p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-5">{tr.pages[language]}</p>
            <ul className="space-y-2.5">
              {pageLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-ivory/50 hover:text-ivory text-sm transition-colors duration-150"
                  >
                    {label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-5">{tr.contact[language]}</p>
            <div className="space-y-3 text-sm text-ivory/50">
              <p>47 Beach Road, #02-04<br />Singapore 189683</p>
              <a
                href="mailto:xiangyue.culturearts@gmail.com"
                className="block hover:text-ivory transition-colors duration-150 break-all"
              >
                xiangyue.culturearts@gmail.com
              </a>
              <div className="flex gap-5 pt-1">
                <a
                  href="https://www.facebook.com/xiangyue.dance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-150"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/xiangyue100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-150"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
          <p className="text-ivory/25 text-xs">{tr.copyright[language]}</p>
          <Link href="/faq" className="text-ivory/25 hover:text-ivory/50 text-xs transition-colors duration-150">
            {t.nav.faq[language]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
