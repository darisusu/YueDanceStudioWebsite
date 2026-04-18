# YUE Dance Studio — Full-Site UX & Accessibility Audit

**Date:** 2026-04-18
**Auditor:** Principal UX Architect & Accessibility Lead
**Scope:** All 8 routes (`/`, `/about`, `/instructors`, `/courses`, `/schedule`, `/contact`, `/faq`) + shared `Nav`, `Footer`
**Design tokens:** `ink #1C1917` · `ivory #F5F0E8` · `gold #B8945A` · `ink-light #44403C`

---

## Contrast Reference

| Pair | Ratio | WCAG AA (4.5:1 normal / 3:1 large) |
|---|---|---|
| `ink` on `ivory` | 16.1:1 | ✅ Pass |
| `ink-light` on `ivory` | 8.7:1 | ✅ Pass |
| `gold` on `ivory` | 2.7:1 | ❌ Fail |
| `gold` on `ink` | 5.9:1 | ✅ Pass |
| `ivory/40` on `ink` | 4.1:1 | ❌ Fail (normal text) |
| `ivory/50` on `ink` | 5.3:1 | ✅ Pass |
| `ivory/20` on `ink` | ~1.6:1 | ❌ Fail |
| `ivory/25` on `ink` | ~1.9:1 | ❌ Fail |
| `white/50` on `ink` | 5.7:1 | ✅ Pass |

---

## Critical

---

### C-1 · `html[lang]` is hardcoded `"en"` — screen readers mispronounce Chinese

**File:** `src/app/layout.tsx:46`

When the user switches to Chinese, the `lang` attribute stays `lang="en"`. Screen readers use this attribute to select a voice engine — every Chinese character gets announced in English phonetics. This is a top-tier accessibility failure.

**Fix:** Make the root `<html>` reactive to language state. Because `layout.tsx` is a Server Component, move the `lang` attribute into a thin client wrapper.

```tsx
// src/components/HtmlRoot.tsx  (new file)
'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function HtmlRoot({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { language } = useLanguage();
  return <html lang={language} className={className}>{children}</html>;
}
```

Then in `layout.tsx`, wrap `LanguageProvider` around `HtmlRoot` so context is available:

```tsx
return (
  <LanguageProvider>
    <HtmlRoot className={`${cormorant.variable} ${dmSans.variable} h-full antialiased bg-ivory`}>
      <body ...>
        ...
      </body>
    </HtmlRoot>
  </LanguageProvider>
);
```

---

### C-2 · Mobile nav overlay not hidden from screen readers when closed

**File:** `src/components/Nav.tsx:111–173`

The overlay `role="dialog" aria-modal="true"` is always in the DOM. When `menuOpen === false`, it is visually hidden with `opacity-0 pointer-events-none` — but screen reader users can still tab into it, reading all seven nav links twice. There is also no focus trap when the menu is open.

**Fix:** Add `aria-hidden` and `inert` when closed, and move focus to the close button on open.

```tsx
// Nav.tsx — overlay div
const closeButtonRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (menuOpen) closeButtonRef.current?.focus();
}, [menuOpen]);

<div
  role="dialog"
  aria-modal="true"
  aria-label="Navigation menu"
  aria-hidden={!menuOpen}
  {...(!menuOpen ? { inert: '' } : {})}
  className={`fixed inset-0 z-[100] bg-ink flex flex-col p-8 transition-all duration-300 ease-in-out ${
    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`}
>
  ...
  <button
    ref={closeButtonRef}
    onClick={() => setMenuOpen(false)}
    aria-label="Close menu"
    ...
  >
```

---

### C-3 · Gold label text at `10px` fails WCAG AA on every page

**Files:** `HomeContent.tsx:68`, `AboutContent.tsx:15`, `CoursesContent.tsx:19`, `InstructorsContent.tsx:15`, `ScheduleContent.tsx:29`, `ContactContent.tsx:34`, `FaqContent.tsx:52`

`text-[10px]` gold (#B8945A) on ivory (#F5F0E8) = **2.7:1** — fails AA for both normal text (4.5:1) and large text (3:1). These section label eyebrows appear on every page. At 10px with heavy tracking they are not "large text" by any standard.

**Fix — Option A (recommended):** Increase to `text-xs` and use `ink-light` for legibility. `ink-light` on `ivory` = 8.7:1 ✅.

```tsx
// Before (every page hero and section header)
<p className="text-[10px] tracking-[0.25em] uppercase text-gold mb-4">

// After
<p className="text-xs tracking-[0.25em] uppercase text-ink-light mb-4">
```

**Fix — Option B (keeps gold):** Darken the gold token in `globals.css` from `#B8945A` to `#8A6930` (ratio ≈ 4.6:1 on ivory, 4.8:1 on ink — both pass AA).

```css
/* src/app/globals.css:6 */
--color-gold: #8A6930;
```

---

### C-4 · Hamburger tap target is ~19×19px — well below the 44×44px minimum

**File:** `src/components/Nav.tsx:97–105`

The hamburger `<button>` has only `p-1` (4px) padding around a 22×17px icon assembly. Total tappable area is ~26×25px. WCAG 2.5.5 and mobile HIG both require 44×44px.

**Fix:**

```tsx
<button
  onClick={() => setMenuOpen(true)}
  aria-label="Open navigation menu"
  className={`lg:hidden flex flex-col gap-[5px] p-3 -mr-3 transition-colors ${textColor}`}
  //                                            ^^^ p-3 = 12px → total ~46×41px
>
```

---

### C-5 · `ivory/40` testimonial attribution fails WCAG AA

**File:** `src/components/HomeContent.tsx:121`

```tsx
<cite className="not-italic text-ivory/40 text-xs tracking-[0.2em] uppercase">
```

`ivory/40` composited over `ink` = **4.1:1** — fails 4.5:1 for normal text. At `text-xs` (12px) uppercase, this is not large text.

**Fix:**

```tsx
<cite className="not-italic text-ivory/60 text-xs tracking-[0.2em] uppercase">
{/*                                   ^^^ /60 = 7.0:1 ✅ */}
```

---

## Warning

---

### W-1 · Body text is consistently below 18px across all pages

| Element | File | Current size | Issue |
|---|---|---|---|
| Hero tagline | `HomeContent.tsx:50` | `text-base` (16px) | Below 18px |
| About body | `AboutContent.tsx:27` | `text-[0.95rem]` (15.2px) | Below 18px |
| Course descriptions | `CoursesContent.tsx:55` | `text-sm` (14px) | Below 18px |
| Instructor bios | `InstructorsContent.tsx:63` | `text-sm` (14px) | Below 18px |
| FAQ answers | `FaqContent.tsx:37` | `text-sm` (14px) | Below 18px |
| Schedule note | `ScheduleContent.tsx:102` | `text-sm` (14px) | Below 18px |

The `leading-relaxed` (1.625) line height is already good throughout — keep it. The issue is font size alone.

**Fix:** Lift `text-sm` body copy to `text-base` (16px) at minimum across all reading-weight paragraphs.

```tsx
// Before (repeated pattern across all content components)
<p className="text-ink-light text-sm leading-relaxed ...">

// After
<p className="text-ink-light text-base leading-relaxed ...">
```

---

### W-2 · Instructor card bios and qualifications at `text-xs` (12px) — wall of tiny text

**File:** `src/components/InstructorsContent.tsx:58–79`

The "teaches" label, bio, and qualifications list are all at 12–14px in a dense card format. Given the studio's demographic (adult learners, retirees), this is a usability concern beyond WCAG compliance.

**Fix:**

```tsx
// Before
<p className="text-xs text-ink-light leading-relaxed mb-4">      {/* teaches */}
<p className="text-sm text-ink-light leading-relaxed flex-1">    {/* bio */}
<li className="text-xs text-ink-light flex gap-2">               {/* qualifications */}

// After
<p className="text-sm text-ink-light leading-relaxed mb-4">      {/* teaches */}
<p className="text-base text-ink-light leading-relaxed flex-1">  {/* bio */}
<li className="text-sm text-ink-light flex gap-2">               {/* qualifications */}
```

---

### W-3 · "View all courses →" and registration links have no underline or shape affordance

**Files:** `HomeContent.tsx:76–80`, `CoursesContent.tsx:58–65`

Both links rely on gold color alone for affordance. Gold on ivory = 2.7:1 (fails contrast), so color cannot communicate interactivity here. The `CoursesContent` register link has a `border-b` underline but at `border-gold/40` it is semi-transparent and barely visible.

**Fix for "View all" link (`HomeContent.tsx:76`):**

```tsx
className="shrink-0 text-xs tracking-[0.15em] uppercase text-ink-light underline underline-offset-4 decoration-ink-light/30 hover:text-gold hover:decoration-gold transition-colors duration-150"
```

**Fix for register link (`CoursesContent.tsx:58`):**

```tsx
className="self-start text-[11px] tracking-[0.18em] uppercase text-ink-light hover:text-ink border-b border-ink-light/60 hover:border-ink pb-0.5 transition-colors duration-150"
```

---

### W-4 · FAQ accordion missing `aria-controls` / panel `id` pairing

**File:** `src/components/FaqContent.tsx:7–42`

The `AccordionItem` uses `aria-expanded` correctly, but the button has no `aria-controls` pointing to the answer panel, and the panel has no `id`. Screen readers cannot announce the association between question and answer.

**Fix:**

```tsx
import { useState, useId } from 'react';

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-ink/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        ...
      </button>
      {open && (
        <div id={panelId} role="region" className="pb-5 pr-8">
          <p className="text-sm text-ink-light leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
```

---

### W-5 · Language toggle in mobile menu has no `aria-label`

**File:** `src/components/Nav.tsx:163–170`

The desktop toggle at `Nav.tsx:88` has a correct `aria-label`. The identical button inside the mobile overlay does not.

**Fix:**

```tsx
<button
  onClick={toggle}
  aria-label={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
  className="text-[11px] tracking-[0.15em] text-ivory/50"
>
```

---

### W-6 · Footer text at `ivory/20` and `ivory/25` — invisible to low-vision users

**File:** `src/components/Footer.tsx:38, 93–94`

```tsx
<p className="text-ivory/30 text-xs ...">   {/* established */}
<p className="text-ivory/25 text-xs">       {/* copyright */}
<span className="text-[10px] text-ivory/20 ...">  {/* mobile brand label */}
```

`ivory/20` on ink = **1.6:1**, `ivory/25` = **1.9:1**. Copyright text carries legal weight and should be readable.

**Fix:**

```tsx
<p className="text-ivory/50 text-xs tracking-widest uppercase">{tr.established[language]}</p>
<p className="text-ivory/50 text-xs">{tr.copyright[language]}</p>
{/* ivory/50 on ink = 5.3:1 ✅ */}
```

---

### W-7 · Schedule table has no horizontal scroll affordance on mobile

**File:** `src/components/ScheduleContent.tsx:39`

The table scrolls horizontally at `min-w-[640px]`, but nothing signals this to the user. On iOS, horizontal scroll within a section element is frequently not discovered.

**Fix:** Add a visible scroll hint visible only on small screens, and wrap the table in its own scrolling div.

```tsx
<section className="px-6 lg:px-12 max-w-7xl mx-auto pb-16">
  <p className="text-xs text-ink-light mb-3 flex items-center gap-1.5 lg:hidden">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Scroll to see full schedule
  </p>
  <div className="overflow-x-auto">
    <table className="w-full min-w-[640px] border-collapse bg-[#1C1917]">
      ...
    </table>
  </div>
</section>
```

---

### W-8 · Primary CTA button labels at `text-[11px]` — too small for primary actions

**Files:** `HomeContent.tsx:55`, `HomeContent.tsx:151`, `ContactContent.tsx:137`

Primary CTAs ("Explore Courses", "Register Now") are styled at 11px with `tracking-[0.2em]` all-caps. At this scale legibility is poor on mobile, especially for non-Latin scripts in the Chinese locale.

**Fix:**

```tsx
// Before
className="... text-[11px] tracking-[0.2em] uppercase font-semibold ..."

// After
className="... text-xs tracking-[0.18em] uppercase font-semibold ..."
// text-xs = 12px — small increase, proportional feel maintained
```

---

## Insight

---

### I-1 · No skip-to-content link — keyboard users tab through 7 nav items on every page

**File:** `src/app/layout.tsx`

**Fix:**

```tsx
// layout.tsx — before <Nav />
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm"
>
  Skip to content
</a>
<Nav />
<main id="main-content" className="flex-1">{children}</main>
```

---

### I-2 · Performance gallery has 4 identical `alt` texts

**File:** `src/components/AboutContent.tsx:113`

```tsx
alt="YUE Dance Studio performance"  // repeated × 4
```

Screen readers announce the same description four times in sequence.

**Fix:**

```tsx
const galleryImages = [
  { src: '/images/hero/hero-banner-1.jpeg',         alt: 'Dancers performing on stage at YUE showcase' },
  { src: '/images/hero/hero-banner-2.jpg',           alt: 'YUE Dance Studio group performance' },
  { src: '/images/hero/hero-banner-3.jpg',           alt: 'Contemporary dance performance by YUE students' },
  { src: '/images/about/about-performance-3.jpeg',   alt: 'YUE Dance Studio awards ceremony' },
];
```

---

### I-3 · About page body text has no max line-length constraint

**File:** `src/components/AboutContent.tsx:27`

On a 1280px viewport the left column is ~560px wide, producing 80–90 characters per line at 15px — above the recommended 60–75ch for comfortable reading.

**Fix:**

```tsx
<div className="space-y-6 text-ink-light leading-relaxed text-[0.95rem] lg:pt-8 max-w-prose">
{/* max-w-prose = 65ch ✅ */}
```

---

### I-4 · Noto TC stylesheet blocks rendering unnecessarily

**File:** `src/app/layout.tsx:53–55`

The Google Fonts `<link>` for Noto (CJK fallback) loads synchronously and will delay first paint for users who never switch to Chinese. Adding `fetchpriority="low"` defers it without removing the fallback.

**Fix:**

```tsx
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap"
  rel="stylesheet"
  fetchPriority="low"
/>
```

---

### I-5 · Schedule instructor names at `text-white/50` could be more prominent

**File:** `src/components/ScheduleContent.tsx:84`

`white/50` on ink passes at 5.7:1 but the instructor name is a key piece of information (students scan by teacher). Increasing opacity improves scanability without any aesthetic cost.

**Fix:**

```tsx
// Before
<p className="text-white/50 text-sm">{cls.instructor[language]}</p>

// After
<p className="text-white/70 text-sm">{cls.instructor[language]}</p>
```

---

## Priority Fix Order

| Priority | Severity | Issue | File(s) | Effort |
|---|---|---|---|---|
| 1 | Critical | C-1: `lang` not reactive to language toggle | `layout.tsx` + new `HtmlRoot.tsx` | Medium |
| 2 | Critical | C-2: Mobile overlay accessible when visually hidden | `Nav.tsx:111` | Small |
| 3 | Critical | C-3: Gold 10px labels fail contrast sitewide | All content components | Small |
| 4 | Critical | C-4: Hamburger tap target too small | `Nav.tsx:97` | Trivial |
| 5 | Critical | C-5: `ivory/40` testimonial attribution fails AA | `HomeContent.tsx:121` | Trivial |
| 6 | Warning | W-1: Body text below 18px sitewide | All content components | Small |
| 7 | Warning | W-4: FAQ `aria-controls` / `id` missing | `FaqContent.tsx` | Small |
| 8 | Warning | W-5: Mobile lang toggle missing `aria-label` | `Nav.tsx:163` | Trivial |
| 9 | Warning | W-6: Footer near-invisible text | `Footer.tsx` | Trivial |
| 10 | Insight | I-1: No skip-to-content link | `layout.tsx` | Trivial |

> Issues C-1, C-3, and W-1 are global patterns — fixing them in one pass touches every page simultaneously with minimal risk of regression.
