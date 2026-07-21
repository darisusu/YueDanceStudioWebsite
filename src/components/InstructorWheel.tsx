'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { instructors } from '@/data/instructors';

// useLayoutEffect on the server logs a warning; fall back to useEffect there.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function InstructorWheel() {
  const { language } = useLanguage();
  const tr = t.instructors;
  const trackRef = useRef<HTMLDivElement>(null);
  const n = instructors.length;

  // Two clones on each side so a neighbour is ALWAYS present during a wrap:
  // [clone n-2, clone n-1, ...reals, clone 0, clone 1]. When a scroll settles on
  // a clone it jumps to the identical real card (offset by n), so the loop is
  // seamless — the landed-on clone has real neighbours on both sides, no blank.
  const slides = useMemo(() => {
    const list: { pos: number; realIndex: number }[] = [
      { pos: 0, realIndex: n - 2 },
      { pos: 1, realIndex: n - 1 },
    ];
    for (let i = 0; i < n; i++) list.push({ pos: i + 2, realIndex: i });
    list.push({ pos: n + 2, realIndex: 0 });
    list.push({ pos: n + 3, realIndex: 1 });
    return list;
  }, [n]);

  const firstRealPos = 2;
  const lastRealPos = n + 1;
  const lastPos = n + 3;

  const [activePos, setActivePos] = useState(firstRealPos);
  const [flippedPos, setFlippedPos] = useState<number | null>(null);
  const activePosRef = useRef(firstRealPos);
  const programmaticRef = useRef(false);
  const setActive = (pos: number) => {
    activePosRef.current = pos;
    setActivePos(pos);
  };

  // Absolute scrollLeft that centres the card at `pos`. Absolute (not a relative
  // scrollBy) so rapid/overlapping navigations retarget the SAME destination
  // instead of stacking deltas against an in-flight animation — the latter is
  // what let the wheel overshoot onto a clone and oscillate between two cards.
  const scrollTargetFor = (pos: number): number | null => {
    const track = trackRef.current;
    if (!track) return null;
    const el = track.querySelector<HTMLElement>(`[data-pos="${pos}"]`);
    if (!el) return null;
    const cardRect = el.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const delta = cardRect.left + cardRect.width / 2 - (trackRect.left + trackRect.width / 2);
    return track.scrollLeft + delta;
  };

  const centerPos = (pos: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const left = scrollTargetFor(pos);
    if (track && left !== null) track.scrollTo({ left, behavior });
  };

  // Instantly re-centre a card with snapping momentarily OFF, so mandatory-snap
  // can't fight the reposition (boundary oscillation) or override the initial
  // position (landing on the wrong card on mobile). Restore to '' so the Tailwind
  // `snap-mandatory` class governs again — never a stale captured value that
  // could leave snapping stuck off.
  const jumpTo = (pos: number) => {
    const track = trackRef.current;
    const left = scrollTargetFor(pos);
    if (!track || left === null) return;
    track.style.scrollSnapType = 'none';
    track.scrollLeft = left;
    requestAnimationFrame(() => {
      track.style.scrollSnapType = '';
    });
  };

  const centeredPos = (): number | null => {
    const track = trackRef.current;
    if (!track) return null;
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    let bestPos: number | null = null;
    let bestDist = Infinity;
    track.querySelectorAll<HTMLElement>('[data-pos]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestPos = Number(el.dataset.pos);
      }
    });
    return bestPos;
  };

  // Land on the first real card (Daniel) before first paint, then correct once
  // more after layout settles — on mobile a late reflow (viewport units / URL
  // bar) can shift the centre after the first pass and mandatory-snap re-snaps to
  // a clone. Also keep the active card centred through resize/orientation change.
  useIsoLayoutEffect(() => {
    jumpTo(firstRealPos);
    const raf = requestAnimationFrame(() => jumpTo(firstRealPos));
    const onResize = () => jumpTo(activePosRef.current);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track the centred card while scrolling; when it settles on a clone, jump to
  // the matching real card so the loop is seamless. Any navigation flips the
  // card back to its photo.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let settle: ReturnType<typeof setTimeout>;

    const handleSettle = () => {
      const pos = centeredPos();
      if (pos === null) return;
      programmaticRef.current = false;
      const onClone = pos < firstRealPos || pos > lastRealPos;
      if (!onClone) {
        setActive(pos);
        setFlippedPos(null);
        return;
      }
      // Settled on a clone → hop to the identical real card. jumpTo lands EXACTLY
      // on it, so the scroll event it fires re-runs handleSettle on a real card
      // and stops there — self-terminating, no clone/real ping-pong.
      const real = pos < firstRealPos ? pos + n : pos - n;
      jumpTo(real);
      setActive(real);
      setFlippedPos(null);
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          // During a programmatic move, active is already the intended target;
          // don't overwrite it with the transient mid-animation centre (that
          // made rapid arrow taps read a moving position and misfire).
          if (programmaticRef.current) return;
          const pos = centeredPos();
          if (pos !== null) setActive(pos);
        });
      }
      clearTimeout(settle);
      settle = setTimeout(handleSettle, 150);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A freshly flipped card opens its back at the top.
  useEffect(() => {
    if (flippedPos === null) return;
    const el = trackRef.current?.querySelector<HTMLElement>(`[data-pos="${flippedPos}"] [data-scroll]`);
    if (el) el.scrollTop = 0;
  }, [flippedPos]);

  const go = (dir: 1 | -1) => {
    setFlippedPos(null);
    const target = Math.max(0, Math.min(lastPos, activePosRef.current + dir));
    // Commit the target up front so a quick second tap steps from HERE (2→3→4),
    // not from wherever the animation happens to be.
    programmaticRef.current = true;
    setActive(target);
    centerPos(target, 'smooth');
  };

  // Front "click for more": flip the active card, or centre a tapped neighbour.
  const handleMore = (pos: number) => {
    if (pos === activePosRef.current) {
      setFlippedPos((prev) => (prev === pos ? null : pos));
    } else {
      setFlippedPos(null);
      programmaticRef.current = true;
      setActive(pos);
      centerPos(pos, 'smooth');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'Escape') {
      setFlippedPos(null);
    }
  };

  const activeReal = slides.find((s) => s.pos === activePos)?.realIndex ?? 0;
  const activeName =
    language === 'en' ? instructors[activeReal].name : instructors[activeReal].nameZh;

  return (
    <section className="relative pb-16 overflow-x-clip">
      <div className="relative">
        <div
          ref={trackRef}
          onKeyDown={onKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label={tr.label[language]}
          className="flex items-center gap-4 sm:gap-6 h-[62vh] min-h-[430px] sm:h-[80vh] sm:min-h-[520px] max-h-[760px]
                     overflow-x-auto overscroll-x-contain snap-x snap-mandatory no-scrollbar
                     py-8 px-[13vw] sm:px-[calc(50%-13.5rem)]"
        >
          {slides.map((s) => {
            const p = instructors[s.realIndex];
            const isActive = s.pos === activePos;
            const isClone = s.pos < firstRealPos || s.pos > lastRealPos;
            const isFlipped = !isClone && s.pos === flippedPos;
            const frontFocusable = !isClone && !isFlipped;
            const displayName = language === 'en' ? p.name : p.nameZh;
            return (
              <article
                key={s.pos}
                data-pos={s.pos}
                aria-hidden={isClone || undefined}
                aria-roledescription="slide"
                aria-label={`${displayName}, ${p.title[language]}`}
                className={`wheel-card ${isActive ? 'is-active' : ''} relative shrink-0 snap-center
                           w-[74vw] sm:w-[27rem] h-full rounded-sm bg-ivory
                           shadow-[0_10px_28px_-16px_rgba(28,25,23,0.45)]`}
              >
                <div className="flip-card h-full">
                  <div className={`flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* ── FRONT: photo + name + discipline + click for more ── */}
                    <div
                      aria-hidden={isFlipped || undefined}
                      className="flip-face flip-front group flex flex-col overflow-hidden rounded-sm bg-ivory"
                    >
                      <div className="relative h-[54%] shrink-0">
                        <Image
                          src={p.photo}
                          alt={`${displayName}, ${p.title[language]}`}
                          fill
                          preload={s.pos === firstRealPos}
                          sizes="(max-width: 640px) 74vw, 27rem"
                          className="object-cover"
                          style={{ objectPosition: p.focalPoint }}
                        />
                        <p
                          className="text-vertical absolute top-5 left-5 font-display text-[10px] tracking-[0.4em] text-ivory/40 select-none"
                          aria-hidden="true"
                        >
                          {p.nameZh}
                        </p>
                      </div>

                      <div className="flex-1 flex flex-col px-6 pt-5 pb-6 sm:px-7">
                        <div className="w-8 h-px bg-gold mb-3" />
                        <h2 className="font-display text-3xl sm:text-4xl leading-[0.95]">
                          {p.nameZh}
                        </h2>
                        {p.nameZh !== p.name && (
                          <p className="text-ink-light text-xs mt-1">{p.name}</p>
                        )}
                        <p className="text-[10px] tracking-[0.25em] uppercase text-gold-deep mt-2">
                          {p.title[language]}
                        </p>
                        <p className="text-xs tracking-[0.15em] text-ink-light mt-3">
                          {p.teaches[language]}
                        </p>

                        <span
                          className="mt-auto self-start inline-flex items-center gap-2 pb-1
                                     text-[11px] tracking-[0.2em] uppercase text-gold-deep
                                     border-b border-gold-deep/40 transition-colors
                                     group-hover:text-ink group-hover:border-ink/40"
                        >
                          {tr.clickForMore[language]}
                          <span aria-hidden="true" className="text-sm">⟳</span>
                        </span>
                      </div>

                      {/* The whole front is the flip target */}
                      <button
                        type="button"
                        onClick={() => handleMore(s.pos)}
                        tabIndex={frontFocusable ? undefined : -1}
                        aria-label={`${tr.clickForMore[language]} — ${displayName}`}
                        className="absolute inset-0 cursor-pointer"
                      />
                    </div>

                    {/* ── BACK: bio + qualifications (click anywhere to flip back) ── */}
                    <div
                      aria-hidden={!isFlipped || undefined}
                      onClick={() => setFlippedPos(null)}
                      className="flip-face flip-back flex flex-col overflow-hidden rounded-sm bg-ivory cursor-pointer"
                    >
                      <div className="shrink-0 flex items-start justify-between gap-4 px-6 pt-5 sm:px-7">
                        <div>
                          <div className="w-8 h-px bg-gold mb-3" />
                          <h3 className="font-display text-2xl leading-[0.95]">{p.nameZh}</h3>
                          <p className="text-[10px] tracking-[0.25em] uppercase text-gold-deep mt-2">
                            {p.title[language]}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFlippedPos(null)}
                          tabIndex={isFlipped ? undefined : -1}
                          aria-label={tr.backLabel[language]}
                          className="shrink-0 mt-1 flex h-9 w-9 items-center justify-center rounded-full
                                     border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-ink/5"
                        >
                          <span aria-hidden="true">↺</span>
                        </button>
                      </div>

                      <div
                        data-scroll
                        tabIndex={isFlipped ? 0 : -1}
                        aria-label={`${displayName} — ${tr.qualifications[language]}`}
                        className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-6 pt-4 pb-8 sm:px-7"
                      >
                        <p className="text-[11px] tracking-[0.15em] uppercase text-ink-light mb-4">
                          <span className="text-gold-deep">{tr.teaches[language]}</span> · {p.teaches[language]}
                        </p>
                        <p className="text-ink-light text-sm leading-relaxed mb-6">{p.bio[language]}</p>
                        {p.qualifications && (
                          <div className="pt-5 border-t border-ink/8">
                            <p className="text-[10px] tracking-[0.25em] uppercase text-ink-light mb-3">
                              {tr.qualifications[language]}
                            </p>
                            <ul className="space-y-2">
                              {p.qualifications[language].map((q, qi) => (
                                <li
                                  key={qi}
                                  className="text-[13px] leading-snug text-ink-light flex gap-2.5 items-start"
                                >
                                  <span className="text-gold-deep shrink-0 mt-0.5">—</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Side arrows — flanking the card; the wheel loops endlessly */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={tr.prevLabel[language]}
          className="absolute z-10 top-1/2 -translate-y-1/2 left-0 sm:left-[calc(50%-17.5rem)]
                     flex h-12 w-12 items-center justify-center text-2xl leading-none
                     text-ink/70 transition-colors hover:text-ink
                     [text-shadow:0_1px_4px_rgba(245,240,232,0.9)]"
        >
          <span aria-hidden="true">◀</span>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={tr.nextLabel[language]}
          className="absolute z-10 top-1/2 -translate-y-1/2 right-0 sm:right-[calc(50%-17.5rem)]
                     flex h-12 w-12 items-center justify-center text-2xl leading-none
                     text-ink/70 transition-colors hover:text-ink
                     [text-shadow:0_1px_4px_rgba(245,240,232,0.9)]"
        >
          <span aria-hidden="true">▶</span>
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {activeName}
      </p>
    </section>
  );
}
