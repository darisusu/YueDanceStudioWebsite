# Review spec — quality-check one blog post (and fix it in place)

You are a demanding bilingual editor. Review ONE post's two files, FIX problems directly
with Edit, then return a short verdict. The bar: both language versions must read as
genuinely well-written, on-brand essays — not AI filler.

## Read first
- `src/content/blog/<slug>/en.mdx` and `src/content/blog/<slug>/zh.mdx`
- If a brief exists (told in your task), read `content/blog-briefs/<brief-file>` — the post must honour its hook, outline, and CTA.
- Studio facts live in `src/data/instructors.ts`, `src/data/courses.ts`, `src/data/performances.ts`; the trial price is in `src/lib/translations.ts` (`cta.trialBlurb`). Read these when checking any factual claim.

## Rubric — FIX, don't just flag
1. **Narrative quality.** Compelling opening hook; flows as an essay, not a listicle; varied
   sentence rhythm; elegant, warm, culturally-grounded brand voice; concrete images; a close
   that lands. **Rewrite** generic AI boilerplate ("in today's fast-paced world", "whether
   you're a… or a…", hollow transitions), cut repetition, and sharpen flat sentences.
2. **Adult framing.** Zero children/parent content. Fix any that slips in.
3. **Accuracy.** Every studio-specific fact (instructor name/credential, course name, award,
   performance, price) must match `src/data` / translations. Fix or remove anything not
   supported. Keep `[verify]` only on genuinely external claims (studies, history, health
   mechanisms), phrased generally — never on studio facts.
4. **Structure.** Starts at the opening paragraph (no H1/frontmatter/date/cover); `##`/`###`
   headings only; ends with a soft trial CTA linking `/contact` (`/zh/contact`). No embedded images.
5. **MDX safety.** No raw `<` or `>` in prose, no stray `{` `}`, no HTML tags. Re-verify after
   your edits — do not introduce any.
6. **Links.** Locale-correct (EN → `/courses` etc; 中文 → `/zh/courses` etc); a few natural
   in-context internal links, not stacked.
7. **Bilingual.** The 中文 file must read as fluent native writing — not translationese. Fix
   awkward calques and English word order, use correct full-width punctuation (，。？！：「」),
   and ensure it covers the same ground as the EN with comparable depth.
8. **SEO.** The primary keyword/topic appears naturally in the opening and in at least one
   heading.

## Constraints
- Preserve the author's structure and voice; edit **surgically**. Do not gut or drastically
  shorten a sound piece. Never invent facts. Keep the two languages aligned in meaning.

## Return (do NOT paste the article text)
5–8 lines: a one-word verdict per file (well-written / minor-fixes / needed-work), a bullet
list of the specific fixes you made, any remaining `[verify]` flags, and a final line
confirming the post now reads as well-written in both languages.
