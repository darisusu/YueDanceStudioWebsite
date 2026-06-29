# YUE Dance Studio — Website

A fully static Next.js site for **Xiang Yue Culture Arts / YUE Dance Studio**, a Singapore dance school established in 2018. Rebuilt from Wix — faster, free to host, and fully owned.

**Live:** [xiangyueculturearts.com](https://www.xiangyueculturearts.com)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |
| Forms | Google Form (external link) |

## Prerequisites

- **Node.js** >= 20 (developed on v26)
- **npm** >= 10

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Production build

```bash
npm run build      # static export
npm run start      # serve locally
```

Pushes to `main` auto-deploy via Vercel.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout, fonts, analytics, JSON-LD
│   ├── page.tsx          # Home
│   ├── about/
│   ├── courses/
│   ├── schedule/
│   ├── instructors/
│   ├── performances/
│   ├── voices/           # Full testimonial archive
│   ├── contact/
│   ├── faq/
│   ├── sitemap.ts
│   └── robots.ts
├── components/           # Page-level and shared UI components
├── data/                 # Structured content (see Content Architecture)
│   ├── config.ts         # Site URLs, social links, JSON-LD schema
│   ├── courses.ts
│   ├── instructors.ts
│   ├── performances.ts
│   ├── schedule.ts
│   └── testimonials.ts
└── lib/
    └── translations.ts   # All bilingual UI strings (EN / 中文)
public/
└── images/               # Optimised static assets
```

---

## Design System

| Token | Value |
|---|---|
| Background | Warm ivory `#F5F0E8` |
| Text | Deep ink `#1C1917` |
| Accent | Muted gold `#B8945A` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

Aesthetic: editorial, minimal, generous whitespace — closer to a refined arts magazine than a typical small-business site.

---

## Content Architecture

Site content is split into two layers:

| Layer | Location | Purpose |
|---|---|---|
| UI strings | `src/lib/translations.ts` | Nav labels, headings, button text, FAQ copy — all bilingual |
| Structured data | `src/data/` | Records that change independently of the UI |
| Site config | `src/data/config.ts` | Registration URL, social links, address, JSON-LD |

### How to Update Content

| What | Where | Notes |
|---|---|---|
| **Instructor** | `src/data/instructors.ts` | Update `INSTRUCTOR_PROFILES.md` first (owner-supplied source of truth), then reflect changes into the data file. TypeScript flags missing fields at build. |
| **Course** | `src/data/courses.ts` | Append a `Course` entry. Both the home grid and `/courses` read from this file. |
| **Schedule** | `src/data/schedule.ts` | `day`: 0 (Mon) – 6 (Sun). `band`: 0 (morning) – 4 (evening). |
| **Performance** | `src/data/performances.ts` | Prepend new entries so most recent appears first. |
| **Testimonial** | `src/data/testimonials.ts` | Set `featured: true` + a `tag` to show on the homepage wall (max 2 per tag: `TAG_BEGINNER`, `TAG_GUIDANCE`, `TAG_BEAUTY`). All entries appear on `/voices`. |
| **Any copy / translation** | `src/lib/translations.ts` | Both EN and 中文 strings live here. |
| **URLs / social links** | `src/data/config.ts` | Registration form, Google Maps, Facebook, Instagram, Douyin. |

---

## Features

- **Bilingual toggle** — EN / 中文 via `LanguageContext`, no page reload
- **SEO** — `title`, `description`, `openGraph`, `twitter`, `canonical` on every page
- **Sitemap & robots.txt** — generated from `app/sitemap.ts` and `app/robots.ts`
- **Structured data** — JSON-LD (`DanceSchool` + `LocalBusiness`) on Home and Contact
- **Google Analytics 4** — via `@next/third-parties` (measurement ID pending setup)
- **Optimised assets** — all images via `next/image`, all fonts via `next/font`

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, course grid, testimonial wall |
| `/about` | Studio story and mission |
| `/instructors` | Instructor profile cards |
| `/courses` | Dance course listings |
| `/schedule` | Class timetable grid |
| `/performances` | Performance history and awards timeline |
| `/voices` | Student Voices archive — full testimonials |
| `/contact` | Address, details, registration form link |
| `/faq` | Accordion FAQ — 4 categories |

---

## Known TODOs

- `TODO: ADD_GA4_MEASUREMENT_ID` in `layout.tsx` — pending GA4 account creation
- Legacy GitHub Actions workflows (`.github/workflows/deploy.yml`, `nextjs.yml`) from a previous GitHub Pages experiment — safe to delete

## DNS

Domain `xiangyueculturearts.com` is managed through Wix DNS, pointed at Vercel.

---

## Development Notes

See `AGENTS.md` before modifying any Next.js-specific code — this project uses Next.js 16, which has breaking changes from prior versions.

No environment variables are required. All config (URLs, social links, schema data) lives in `src/data/config.ts`.
