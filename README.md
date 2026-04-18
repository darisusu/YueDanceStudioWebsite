# YUE Dance Studio — Website Revamp

A custom-built website for **Xiang Yue Culture Arts / YUE Dance Studio**, replacing the existing Wix site with a fully static, self-hosted Next.js application.

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
