import type { MDXComponents } from 'mdx/types';

// Global styling for every MDX blog post body. Maps generated HTML elements to
// the studio's design tokens (Cormorant display headings, DM Sans body, gold
// accents on ink text) so articles inherit the site's look without a typography
// plugin. Consumed automatically by @next/mdx in Server Components.
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-ink text-[clamp(2.25rem,5vw,3.25rem)] leading-tight mt-14 mb-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-ink text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight mt-14 mb-5">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-ink text-[clamp(1.4rem,2.5vw,1.9rem)] leading-snug mt-10 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-ink/80 text-[1.075rem] leading-[1.85] mb-6">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-gold-deep underline underline-offset-2 decoration-gold/40 hover:decoration-gold-deep transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-ink/80 text-[1.075rem] leading-[1.7] marker:text-gold">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-ink/80 text-[1.075rem] leading-[1.7] marker:text-gold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold pl-6 my-8 font-display text-2xl leading-snug text-ink/70 italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  hr: () => <hr className="border-0 border-t border-ink/10 my-12" />,
  code: ({ children }) => (
    <code className="bg-ink/[0.06] text-ink px-1.5 py-0.5 rounded text-[0.9em] font-mono">
      {children}
    </code>
  ),
  // Markdown images have no intrinsic dimensions, so next/image (which requires
  // width/height) can't wrap them here; a lazy, responsive native <img> is the
  // pragmatic path for in-article figures.
  img: ({ src, alt }) => (
    <img src={src as string} alt={alt ?? ''} loading="lazy" className="w-full h-auto rounded my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left text-[0.95rem] border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-ink/20 py-2 pr-4 font-semibold text-ink">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-ink/10 py-2 pr-4 text-ink/80">{children}</td>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
