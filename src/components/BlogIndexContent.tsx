import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '@/lib/translations';
import { t } from '@/lib/translations';
import { getAllPosts, formatDate } from '@/lib/blog';
import { localizedHref } from '@/lib/locale';

// Blog index — dark hero + card grid, newest first. Server component; `lang`
// comes from the locale route so it renders server-side for crawlers.
export default function BlogIndexContent({ lang }: { lang: Lang }) {
  const posts = getAllPosts();
  const b = t.blog;

  return (
    <>
      <section className="relative bg-ink text-ivory overflow-hidden grain pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-12">
        <span
          className="absolute right-[4vw] -bottom-[8vh] font-display text-[34vw] leading-none text-ivory/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          悦
        </span>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">{b.label[lang]}</p>
          <h1 className="font-display text-ivory text-[clamp(3rem,8vw,7rem)] leading-[0.92] mb-8">
            {b.heading[lang]}
          </h1>
          <p className="text-ivory/55 text-base leading-relaxed max-w-2xl">{b.intro[lang]}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((post) => {
            const href = localizedHref(`/blog/${post.slug}`, lang);
            return (
              <article key={post.slug} className="group">
                <Link href={href} className="block">
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
                  <h2 className="font-display text-2xl leading-snug text-ink mb-2 group-hover:text-gold-deep transition-colors duration-200">
                    {post.title[lang]}
                  </h2>
                  <p className="text-ink/60 text-sm leading-relaxed mb-3 line-clamp-3">{post.description[lang]}</p>
                  <p className="text-ink/40 text-xs tracking-wide">{formatDate(post.date, lang)}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
