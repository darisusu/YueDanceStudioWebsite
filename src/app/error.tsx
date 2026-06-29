'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Error</p>
      <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-6">
        Something Went Wrong
      </h1>
      <p className="text-ink-light text-base mb-10 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center border border-ink text-ink hover:border-gold hover:text-gold px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-150"
      >
        Try Again
      </button>
    </section>
  );
}
