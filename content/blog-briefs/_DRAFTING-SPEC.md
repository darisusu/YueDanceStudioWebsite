# Shared drafting spec — YUE Dance Studio blog posts

You are drafting ONE bilingual blog article. Write TWO files and return only a short summary.

## Studio context
YUE Dance Studio (翔悦文艺 · 悦舞坊 / "Xiang Yue Culture Arts") — an **adult-focused** dance
school in Singapore, est. 2018, at 47 Beach Road (City Hall / Bugis). Styles: Chinese dance
(classical 古典舞, folk/ethnic 民族舞, the umbrella 华族舞), ballet, contemporary, folk.
Students are **adults** of all levels — working professionals, complete beginners, returning
dancers. Bilingual audience (English + Simplified 中文). Brand voice: elegant, warm,
encouraging, culturally grounded, never gimmicky — "find the beauty in life through dance."
Trial offer: any class **$38 for a 1.5-hour session** (this is real site copy in
`src/lib/translations.ts` → `cta.trialBlurb`; treat as current).

## Accuracy (non-negotiable)
- Cite studio facts — instructor names/credentials, course names, awards, performances — **only**
  from `src/data/instructors.ts`, `src/data/courses.ts`, `src/data/performances.ts`. Read those
  files when you need a fact. **Never invent** names, titles, dates, stats, or prices.
- For outside claims (studies, health mechanisms, history), stay general and mark anything
  uncertain inline as `[verify]`. No fabricated statistics.
- No PII. Do not name real individual students; use composite/illustrative framing ("many of
  our adult students…", "imagine…").

## Audience & framing
- **Adults only.** No children, no parents, no kids' exam/syllabus framing.
- Health/wellbeing benefits: phrase as lived experience, not medical claims.

## File output (critical)
- Create the folder `src/content/blog/<slug>/` and write:
  - English body → `src/content/blog/<slug>/en.mdx`
  - 中文 body → `src/content/blog/<slug>/zh.mdx`
- Do **NOT** include the H1 title, any frontmatter, the date, or a cover image — those come
  from the post registry. **Start directly with the opening paragraph.**
- Headings: `##` for sections, `###` for sub-sections.
- Allowed: `**bold**`, `-` bullet lists, `1.` numbered lists, at most ONE `>` blockquote, and a
  single GFM table only if the brief calls for a comparison table.
- **MDX safety:** this is MDX, not plain Markdown. Do not use raw `<` or `>` as characters in
  prose (write "under" / "over" / "less than"), do not use raw HTML tags, and avoid stray `{`
  `}` braces. Plain punctuation and Chinese characters are fine.
- **Internal links** as markdown, locale-correct:
  - `en.mdx` → `/courses`, `/schedule`, `/instructors`, `/performances`, `/voices`, `/faq`, `/contact`
  - `zh.mdx` → `/zh/courses`, `/zh/schedule`, `/zh/instructors`, `/zh/performances`, `/zh/voices`, `/zh/faq`, `/zh/contact`
  Link naturally in context, not stacked. Do not embed images.

## Craft
- Follow the brief's hook and outline (when a brief exists). Write as a **flowing narrative
  essay**, not a listicle — vary sentence length, use concrete images, keep the elegant, warm
  voice. Open with the specified scene/hook.
- End with the post's call to action: a soft invitation to a trial class (any class, $38 /
  1.5 hours), linked to `/contact` (`/zh/contact` in the 中文 file).
- **中文 is a native adaptation, not a literal translation** — re-craft idioms, examples, and
  the hook so they read naturally to a Singaporean Chinese reader.

## Length (unless the brief says otherwise)
- EN: ~1,300–1,700 words. 中文: comparable reading length.
- Where a brief specifies different counts (e.g. #3, #6), follow the brief.

## Return format (do NOT paste the article text)
Return only 4–6 lines: the two file paths written, approx word counts (EN / 中文), and any
`[verify]` flags you left in. Nothing else.
