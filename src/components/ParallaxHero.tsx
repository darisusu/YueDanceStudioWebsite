'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
}

export default function ParallaxHero({ src, alt, objectPosition = 'center', priority = false }: Props) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

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
        sizes="100vw"
        className={`object-cover object-[${objectPosition}]`}
      />
    </div>
  );
}
