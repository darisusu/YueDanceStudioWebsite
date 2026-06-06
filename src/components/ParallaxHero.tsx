'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
  imgClassName?: string;
}

export default function ParallaxHero({ src, alt, objectPosition = 'center', priority = false, imgClassName = '' }: Props) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // Respect reduced-motion: skip the scroll-driven parallax translate entirely.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Skip parallax on mobile/touch: scroll-driven transforms over a full-bleed
    // image are expensive on phone GPUs and add little at small sizes.
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (el) {
            const scrolled = window.scrollY;
            el.style.transform = `translateY(${scrolled * 0.35}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ top: '-15%', bottom: '-15%' }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={75}
        sizes="100vw"
        className={`object-cover ${imgClassName}`}
        style={{ objectPosition }}
      />
    </div>
  );
}
