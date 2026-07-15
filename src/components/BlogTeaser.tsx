'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '@/lib/translations';
import { t } from '@/lib/translations';
import { getAllPosts, formatDate } from '@/lib/blog';
import { localizedHref } from '@/lib/locale';
import ScrollReveal from '@/components/ScrollReveal';

// Homepage teaser — the three newest posts, linking into the blog. Surfaces the
// blog for visitors who never scroll to the footer.
export default function BlogTeaser({ lang }: { lang: Lang }) {
  const posts = getAllPosts().slice(0, 3);
  const b = t.blog;

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">{b.label[lang]}</p>
        <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.0] mb-12 lg:mb-16">
          {b.heading[lang]}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 100}>
            <Link href={localizedHref(`/blog/${post.slug}`, lang)} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden bg-ink/5 mb-5">
                <Image
                  src={post.cover}
                  alt={post.coverAlt[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag.en} className="text-[10px] tracking-[0.15em] uppercase text-gold-deep">
                    {tag[lang]}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl leading-snug text-ink mb-2 group-hover:text-gold-deep transition-colors duration-200">
                {post.title[lang]}
              </h3>
              <p className="text-ink/40 text-xs tracking-wide">{formatDate(post.date, lang)}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 lg:mt-14">
        <Link
          href={localizedHref('/blog', lang)}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-gold-deep hover:text-ink border-b border-gold/40 hover:border-ink pb-1 transition-colors duration-150"
        >
          {b.viewAll[lang]}
        </Link>
      </ScrollReveal>
    </section>
  );
}
