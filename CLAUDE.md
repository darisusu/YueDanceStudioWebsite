@AGENTS.md

# YUE Dance Studio — Project Context

Fully static Next.js 16 site (App Router) for a Singapore dance school. Bilingual EN/中文. Hosted on Vercel, auto-deploys on push to `main`.

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

- `LanguageContext` provides current language + toggle
- Components destructure `t.section.key` and index with `[lang]`
- Pattern: `const { lang } = useLanguage(); ... t.home.hero.line1[lang]`

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
- **Static export** — no server components, no API routes, no middleware
- **Images** — always use `next/image`, place files in `public/images/`
- **No comments** unless the WHY is non-obvious
