'use client';

interface Props {
  items: string[];
}

export default function Marquee({ items }: Props) {
  const repeated = [...items, ...items];

  return (
    <div className="bg-ink overflow-hidden py-4 select-none" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-sm tracking-[0.2em] text-ivory/70 px-8 shrink-0">
            {item}
            <span className="text-gold mx-8">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
