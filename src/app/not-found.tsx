import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">404</p>
      <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
        Page Not Found
      </h1>
      <p className="text-ink-light text-base mb-10 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-150"
      >
        Back to Home
      </Link>
    </section>
  );
}
