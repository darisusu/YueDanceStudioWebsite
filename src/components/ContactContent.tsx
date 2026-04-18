'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer8QU02hDVxaPR4EZ1H98_ux7b50ZHYJV9Fo1r7YnmBKbOYQ/viewform';

export default function ContactContent() {
  const { language } = useLanguage();
  const tr = t.contact;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
          {tr.label[language]}
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-6">
          {tr.heading[language]}
        </h1>
        <p className="text-ink-light text-sm">{tr.sub[language]}</p>
      </section>

      {/* ── Contact details + registration ───────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-px bg-ink/10">
          {/* Left — Contact info */}
          <div className="bg-ivory p-10 lg:p-14 space-y-10">
            {/* Studio */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                {tr.studio[language]}
              </p>
              <address className="not-italic text-ink-light text-sm leading-relaxed">
                47 Beach Road, #02-04<br />
                Singapore 189683
              </address>
            </div>

            {/* Admin */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                {tr.admin[language]}
              </p>
              <address className="not-italic text-ink-light text-sm leading-relaxed">
                21 Tyrwhitt Road, #05-06<br />
                Foochow Building, Singapore 207530
              </address>
            </div>

            {/* Email */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                {tr.email[language]}
              </p>
              <a
                href="mailto:xiangyue.culturearts@gmail.com"
                className="text-sm text-ink hover:text-gold transition-colors duration-150 break-all"
              >
                xiangyue.culturearts@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                {tr.phone[language]}
              </p>
              <div className="space-y-1 text-sm text-ink-light">
                <p>
                  Janelle:{' '}
                  <a href="tel:+6596885938" className="text-ink hover:text-gold transition-colors duration-150">
                    +65 9688 5938
                  </a>
                </p>
                <p>
                  Vicki:{' '}
                  <a href="tel:+6594253833" className="text-ink hover:text-gold transition-colors duration-150">
                    +65 9425 3833
                  </a>
                </p>
                <p className="text-xs text-ink/40 mt-2">{tr.adminNote[language]}</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                {tr.social[language]}
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="https://www.facebook.com/xiangyue.dance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold transition-colors duration-150"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/xiangyue100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold transition-colors duration-150"
                >
                  Instagram
                </a>
                <a
                  href="https://www.douyin.com/user/MS4wLjABAAAALKE5By-qugkaCLezzyXgNVuTrykNIq7o10JPMKQwwMxHk7-3D_DZYeLdco5DcWVn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold transition-colors duration-150"
                >
                  抖音
                </a>
              </div>
            </div>
          </div>

          {/* Right — Registration */}
          <div className="bg-ink text-ivory p-10 lg:p-14 flex flex-col justify-between gap-16">
            <div>
              <div className="w-8 h-px bg-gold mb-8" />
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-ivory mb-6">
                {tr.register.heading[language]}
              </h2>
              <p className="text-ivory/60 text-sm leading-relaxed mb-10">
                {tr.register.sub[language]}
              </p>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-gold text-gold hover:bg-gold hover:text-ink px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all duration-200"
              >
                {tr.register.cta[language]}
              </a>
            </div>

            {/* JSON-LD hint for structured data — visible studio info */}
            <div className="border-t border-ivory/10 pt-8">
              <p className="text-ivory/20 text-xs leading-relaxed">
                {language === 'en'
                  ? 'Enquiries are welcome via email or phone. We respond within 1–2 business days.'
                  : '欢迎通过电邮或电话联系我们，我们将在1至2个工作日内回复。'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
