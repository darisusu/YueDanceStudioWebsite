import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Lang } from '@/lib/translations';
import { t } from '@/lib/translations';
import type { Post } from '@/data/posts';
import { formatDate } from '@/lib/blog';
import { localizedHref } from '@/lib/locale';
import { REGISTRATION_URL } from '@/data/config';

// Article shell for one post: centred title/date header, cover, the MDX body
// (styled globally via src/mdx-components.tsx), a trial CTA, and a back link.
// Server component; `children` is the imported MDX default export.
export default function BlogPostContent({
  post,
  lang,
  children,
}: {
  post: Post;
  lang: Lang;
  children: ReactNode;
}) {
  const b = t.blog;

  return (
    <article className="pb-20">
      <header className="max-w-3xl mx-auto px-6 pt-32 lg:pt-40 pb-10 text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-5">
          {post.tags.map((tag) => (
            <span key={tag.en} className="text-[10px] tracking-[0.2em] uppercase text-gold-deep">
              {tag[lang]}
            </span>
          ))}
        </div>
        <h1 className="font-display text-ink text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] mb-6">
          {post.title[lang]}
        </h1>
        <p className="text-ink/45 text-sm tracking-wide">{formatDate(post.date, lang)}</p>
      </header>

      <div className="max-w-4xl mx-auto px-6 mb-12 lg:mb-16">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink/5">
          <Image
            src={post.cover}
            alt={post.coverAlt[lang]}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6">{children}</div>

      <div className="max-w-2xl mx-auto px-6 mt-16">
        <div className="bg-ink text-ivory p-8 lg:p-10 text-center">
          <p className="font-display text-3xl mb-3">{b.ctaHeading[lang]}</p>
          <p className="text-ivory/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">{b.ctaBody[lang]}</p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold text-ink hover:bg-ivory px-6 py-3 text-[11px] uppercase font-semibold tracking-[0.18em] transition-colors duration-200"
          >
            {t.cta.bookTrial[lang]}
          </a>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={localizedHref('/blog', lang)}
            className="text-gold-deep hover:text-ink text-sm transition-colors duration-200"
          >
            {b.backToBlog[lang]}
          </Link>
        </div>
      </div>
    </article>
  );
}
