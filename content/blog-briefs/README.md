# Blog content briefs — first batch (adult studio)

Seven content briefs ("writing prompts"), one per selected post. Each is the spec to
draft a high-quality, narrative, bilingual (EN + 中文) article. Drafting comes next.

## Resolved conventions (these answer the `[verify]` flags in the briefs)

- **Post body files:** `src/content/blog/<slug>/en.mdx` and `src/content/blog/<slug>/zh.mdx`
- **URLs:** English at `/blog/<slug>`, 中文 at `/zh/blog/<slug>` — **same English slug for both locales** (hreflang parity)
- **Cover images:** `public/images/blog/<slug>.jpg`, rendered with `next/image`
- **Trial offer:** "$38 for a 1.5-hour session" is real studio copy (`src/lib/translations.ts` → `cta.trialBlurb`). Confirm it is still current before publishing.
- **E-E-A-T facts (instructors, courses, awards):** verified accurate against `src/data/instructors.ts`, `courses.ts`, `performances.ts`. Safe to cite as written.

## The seven

| # | Slug | Title | Primary intent |
|---|---|---|---|
| 2 | `too-late-to-start-dancing-as-an-adult` | Is It Too Late to Start Dancing as an Adult? | Reassurance → trial |
| 3 | `chinese-dance-ballet-or-contemporary` | Chinese Dance, Ballet or Contemporary: Which Is Right for You? | Decision → trial |
| 6 | `chinese-dance-vs-folk-vs-classical` | 华族舞、民族舞、古典舞：三者到底有什么区别？ | 中文 authority |
| 7 | `what-is-chinese-classical-dance` | What Is Chinese Classical Dance? A Beginner's Guide to 古典舞 | Informational |
| 8 | `ballet-vs-contemporary-dance` | Ballet vs Contemporary: How They Differ — and Complete Each Other | Comparison |
| 10 | `chinese-dance-living-heritage-singapore` | Chinese Dance as Living Heritage in Singapore | Brand / E-E-A-T |
| 20 | `too-stiff-to-dance-flexibility-guide` | Too Stiff to Dance? Safe Stretching & Flexibility for Adults | Practical |

All framed for **adults only** (working professionals, beginners, returning dancers) — no child/parent angles.
