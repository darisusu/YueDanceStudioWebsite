# YUE Dance Studio — Website Revamp

A custom-built website for **Xiang Yue Culture Arts / YUE Dance Studio**, a fully static, self-hosted Next.js application.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Hosting | Vercel (Hobby tier) |
| Forms | Google Form (external link) |

## Design System

- **Background:** Warm ivory `#F5F0E8`
- **Text:** Deep ink `#1C1917`
- **Accent:** Muted gold `#B8945A`
- **Display font:** Cormorant Garamond
- **Body font:** DM Sans
- **Aesthetic:** Editorial, minimal, generous whitespace

## Pages

- `/` — Home (hero, course grid, testimonial)
- `/about` — Studio story, performances & awards
- `/instructors` — Instructor profile cards
- `/courses` — Dance course listings
- `/schedule` — Class timetable
- `/contact` — Address, contact details, registration form
- `/faq` — Accordion FAQ (4 categories)

## Content Architecture

Site content is split into two layers:

| Layer | Location | What goes here |
|---|---|---|
| **UI strings** | `src/lib/translations.ts` | Nav labels, page headings, button text, FAQ copy — anything that is part of the UI chrome |
| **Content data** | `src/data/` | Structured records that change independently of the UI |

### Data files

| File | Type | Description |
|---|---|---|
| `src/data/instructors.ts` | `Instructor[]` | Instructor profiles: name, title, bio, photo path, qualifications |
| `src/data/courses.ts` | `Course[]` | Course listings: name, instructor, description, image |
| `src/data/schedule.ts` | `ScheduleClass[]` | Timetable entries: day (0–6), time band (0–4), time string, name, instructor |
| `src/data/performances.ts` | `Performance[]` | Past performances & awards listed on the About page |

### How to make common updates

**Add or edit an instructor** — edit `src/data/instructors.ts`. Each entry is a typed `Instructor` object; TypeScript will flag missing fields at build time.

**Change the schedule** — edit `src/data/schedule.ts`. `day` is 0 (Mon) – 6 (Sun); `band` is a time-row index 0 (morning) – 4 (evening).

**Add a new course** — append a `Course` entry to `src/data/courses.ts`. The home page course grid and the `/courses` page both read from this file.

**Add a performance** — prepend a `Performance` entry to `src/data/performances.ts`.

## Features

- Bilingual EN / 中文 toggle (client-side, via `LanguageContext`)
- Full SEO metadata on every page (`title`, `description`, `openGraph`, `twitter`, `canonical`)
- Sitemap via `app/sitemap.ts`
- Robots.txt via `app/robots.ts`
- JSON-LD structured data (`DanceSchool` + `LocalBusiness`) on Home and Contact pages
- Google Analytics 4 integration via `@next/third-parties` (measurement ID pending)
- All images via `next/image`, fonts via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm run start
```

Deploys automatically to Vercel on push to `main`.

## Notes

- See `AGENTS.md` before modifying Next.js-specific code — this project uses Next.js 16, which has breaking changes from prior versions.
- A `TODO: ADD_GA4_MEASUREMENT_ID` placeholder is left in `layout.tsx` pending GA4 account setup.
- Domain `xiangyueculturearts.com` is managed through Wix DNS. DNS cutover to Vercel is deferred until the new site is fully live and tested.
