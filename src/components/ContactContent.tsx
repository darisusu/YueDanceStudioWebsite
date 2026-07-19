'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { REGISTRATION_URL, MAPS_URL, WHATSAPP_JANELLE, WHATSAPP_VICKY, WECHAT_ID, FACEBOOK_URL, INSTAGRAM_URL, DOUYIN_URL } from '@/data/config';

export default function ContactContent() {
  const { language } = useLanguage();
  const tr = t.contact;

  return (
    <>
      {/* ── Page hero ────────────────────────────────────────── */}
      <section className="pt-32 pb-6 lg:pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
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
          <div className="bg-ivory px-0 pt-2 pb-10 lg:p-14 space-y-10">
            {/* Studio */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-light mb-3">
                {tr.studio[language]}
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <address className="not-italic text-ink text-sm leading-relaxed group-hover:text-gold-deep transition-colors duration-150">
                  47 Beach Road, #02-04<br />
                  Singapore 189683
                </address>
                <span className="mt-2 inline-block text-[11px] tracking-[0.18em] uppercase text-gold-deep group-hover:text-ink border-b border-gold/50 group-hover:border-ink pb-0.5 transition-colors duration-150">
                  {tr.directions[language]}
                </span>
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-light mb-3">
                {tr.email[language]}
              </p>
              <a
                href="mailto:xiangyue.culturearts@gmail.com"
                className="text-sm text-ink hover:text-gold-deep transition-colors duration-150 break-all"
              >
                xiangyue.culturearts@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-light mb-3">
                {tr.phone[language]}
              </p>
              <dl className="text-sm text-ink-light space-y-1">
                <div className="flex gap-1">
                  <dt>Janelle:</dt>
                  <dd>
                    <a href="tel:+6596885938" className="text-ink hover:text-gold-deep transition-colors duration-150">
                      +65 9688 5938
                    </a>
                  </dd>
                </div>
                <div className="flex gap-1">
                  <dt>Vicki:</dt>
                  <dd>
                    <a href="tel:+6594253833" className="text-ink hover:text-gold-deep transition-colors duration-150">
                      +65 9425 3833
                    </a>
                  </dd>
                </div>
                <dd className="text-xs text-ink/40 mt-2">{tr.adminNote[language]}</dd>
              </dl>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={WHATSAPP_JANELLE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-4 border border-ink/15 hover:border-gold text-sm text-ink hover:text-gold-deep transition-colors duration-150"
                >
                  {tr.whatsapp[language]} · Janelle
                </a>
                <a
                  href={WHATSAPP_VICKY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-4 border border-ink/15 hover:border-gold text-sm text-ink hover:text-gold-deep transition-colors duration-150"
                >
                  {tr.whatsapp[language]} · Vicki
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-light mb-3">
                {tr.social[language]}
              </p>
              <p className="text-sm text-ink-light mb-3">
                {tr.wechat[language]}: <span className="text-ink">{WECHAT_ID}</span>
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold-deep transition-colors duration-150"
                >
                  Facebook
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold-deep transition-colors duration-150"
                >
                  Instagram
                </a>
                <a
                  href={DOUYIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold-deep transition-colors duration-150"
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
                className="inline-flex items-center border border-gold text-gold hover:bg-gold hover:text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-200"
              >
                {tr.register.cta[language]}
              </a>
            </div>

            {/* JSON-LD hint for structured data — visible studio info */}
            <div className="border-t border-ivory/10 pt-8">
              <p className="text-ivory/50 text-xs leading-relaxed">
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
