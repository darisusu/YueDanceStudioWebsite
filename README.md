# YUE Dance Studio — Website Revamp

A custom-built website for **Xiang Yue Culture Arts / YUE Dance Studio**, a Singapore dance school established in 2018. Rebuilt from Wix as a fully static Next.js application — faster, free to host, and fully owned.

**Live site:** [xiangyueculturearts.com](https://www.xiangyueculturearts.com)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Hosting | GitHub Pages (moving to Vercel) |
| Forms | Google Form (external link) |

## Design System

| Token | Value |
|---|---|
| Background | Warm ivory `#F5F0E8` |
| Text | Deep ink `#1C1917` |
| Accent | Muted gold `#B8945A` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

Aesthetic: editorial, minimal, generous whitespace — closer to a refined arts magazine than a typical small business site.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, course grid, testimonial carousel |
| `/about` | Studio story, mission |
| `/performances` | Performance history and awards |
| `/instructors` | Instructor profile cards |
| `/courses` | Dance course listings |
| `/schedule` | Class timetable grid |
| `/contact` | Address, contact details, registration form |
| `/faq` | Accordion FAQ — 4 categories |

---

## Content Architecture

Site content is split into two layers:

| Layer | Location | Purpose |
|---|---|---|
| UI strings | `src/lib/translations.ts` | Nav labels, headings, button text, FAQ copy — all bilingual |
| Structured data | `src/data/` | Records that change independently of the UI |

### Data files

| File | Type | Description |
|---|---|---|
| `src/data/instructors.ts` | `Instructor[]` | Name, title, bio, photo path, qualifications |
| `src/data/courses.ts` | `Course[]` | Course name, instructor, description, image |
| `src/data/schedule.ts` | `ScheduleClass[]` | Day (0–6 Mon–Sun), time band (0–4), time string, name, instructor |
| `src/data/performances.ts` | `Performance[]` | Past performances and awards |

### Common updates

**Instructor** — edit `src/data/instructors.ts`. TypeScript will flag missing required fields at build time.

**Schedule** — edit `src/data/schedule.ts`. `day` is 0 (Mon) – 6 (Sun); `band` is a time-row index 0 (morning) – 4 (evening).

**Course** — append a `Course` entry to `src/data/courses.ts`. Both the home page grid and `/courses` page read from this file.

**Performance** — prepend a `Performance` entry to `src/data/performances.ts`.

**Any copy or translation** — edit `src/lib/translations.ts`. Both EN and 中文 strings live here.

---

## Features

- Bilingual EN / 中文 toggle — client-side via `LanguageContext`, no page reload
- Full SEO metadata on every page (`title`, `description`, `openGraph`, `twitter`, `canonical`)
- Sitemap at `/sitemap.xml` via `app/sitemap.ts`
- Robots.txt via `app/robots.ts`
- JSON-LD structured data (`DanceSchool` + `LocalBusiness`) on Home and Contact pages
- Google Analytics 4 via `@next/third-parties` — measurement ID pending setup
- All images via `next/image`, all fonts via `next/font`

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # production build
npm run start   # local production server
```

Deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

---

## Notes

- See `AGENTS.md` before modifying any Next.js-specific code — this project uses Next.js 16, which has breaking changes from prior versions.
- A `TODO: ADD_GA4_MEASUREMENT_ID` placeholder is in `layout.tsx` pending GA4 account creation.
- Domain `xiangyueculturearts.com` is managed through Wix DNS. DNS cutover to Vercel is deferred until the new site is fully live and tested.
