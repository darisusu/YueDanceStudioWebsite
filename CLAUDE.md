@AGENTS.md

# YUE Dance Studio — Project Context

Next.js 16 site (App Router) for a Singapore dance school. Bilingual EN/中文 via locale-segmented routes (English at root, 中文 under `/zh`). Deployed on Vercel (Node runtime), auto-deploys on push to `main` — server redirects/rewrites are available (see `next.config.ts`).

## Tech

- **Next.js 16** / React 19 / TypeScript 5 / Tailwind CSS v4
- No environment variables — all config in `src/data/config.ts`
- No CMS, no database — content is TypeScript files

## Directory Map

```
src/
├── app/              Pages (App Router). Each subfolder = one route.
│   └── layout.tsx    Root layout: fonts, analytics, metadata, JSON-LD
├── components/       One component per page (*Content.tsx) + shared UI
├── data/             Structured content files (see below)
│   └── config.ts     URLs (registration, social, maps), JSON-LD schema
└── lib/
    └── translations.ts   ALL UI strings — bilingual { en, zh }
public/images/        Static images served by next/image
```

## Content Editing Rules

All user-facing text lives in **two places only**:

1. **`src/lib/translations.ts`** — UI strings (headings, labels, button text, FAQ copy). Type: `{ en: string; zh: string }`.
2. **`src/data/*.ts`** — structured records: `courses.ts`, `instructors.ts`, `schedule.ts`, `performances.ts`, `testimonials.ts`.

Never hardcode display text in components. Always add to translations or data files.

### Key data types

| File | Key fields |
|---|---|
| `instructors.ts` | name, title, bio, photo path, qualifications |
| `courses.ts` | name, instructor, description, image |
| `schedule.ts` | day (0=Mon–6=Sun), band (0–4), time, name, instructor |
| `performances.ts` | event, date, venue, awards |
| `testimonials.ts` | bilingual text, attribution, tags, `featured` flag |

### Instructor edits

`INSTRUCTOR_PROFILES.md` is the owner-supplied source of truth for bios. Update that first, then reflect into `src/data/instructors.ts`.

## Bilingual System

- **URL-driven locale:** English at root (`/about`), 中文 under `/zh` (`/zh/about`). Two route groups, `src/app/(en)` and `src/app/(zh)`, each with its own root layout owning `<html lang>`.
- `LanguageContext` is fed the locale by the root layout (`<LanguageProvider lang>`); `useLanguage()` returns `{ language }` (no toggle — switching is a link to the other locale, handled in `Nav.tsx`).
- Components destructure `t.section.key` and index with `[language]`
- Pattern: `const { language } = useLanguage(); ... t.home.hero.line1[language]`
- Per-page SEO copy lives in `src/data/pageSeo.ts`; `src/lib/seo.ts` builds metadata + hreflang; `src/lib/jsonld.ts` builds per-locale structured data; `src/lib/locale.ts` maps paths between locales.

## Design Tokens

| Token | Value |
|---|---|
| Background | `#F5F0E8` (warm ivory) |
| Text | `#1C1917` (deep ink) |
| Accent | `#B8945A` (muted gold) |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

## Conventions

- **Commit style:** `type(scope): message` — e.g. `fix(seo):`, `feat(i18n):`, `docs(readme):`
- **No env vars** — everything is in `src/data/config.ts`
- **Vercel Node deployment** — server redirects/rewrites in `next.config.ts` run (no `output: 'export'`)
- **Images** — always use `next/image`, place files in `public/images/`
- **No comments** unless the WHY is non-obvious
