import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';


const OVERLAP_RATIO = 1.3;
const SPREAD = 1.3;
const PERSPECTIVE = 800;
const REST_Y = -50;
const STICKY = 200;
const spring = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.8 };

function marginLeft(i: number, h: number | null, overlap: number) {
  if (i === 0) return 0;
  if (h === null) return -overlap;
  const pairMargin = -overlap + overlap * SPREAD;
  if (i === h || i === h + 1) return pairMargin;
  return -overlap;
}

/** 1) Point in any card → index with nearest horizontal center. 2) Else sticky pads beside `prev`. */
function hitTest(
  x: number,
  y: number,
  refs: (HTMLElement | null)[],
  prev: number | null,
): number | null {
  const rects = refs.map((el) => el?.getBoundingClientRect() ?? null);
  let best: { i: number; d: number } | null = null;
  for (let i = 0; i < rects.length; i++) {
    const r = rects[i];
    if (!r || x < r.left || x > r.right || y < r.top || y > r.bottom) continue;
    const d = Math.abs(x - (r.left + r.right) / 2);
    if (!best || d < best.d) best = { i, d };
  }
  if (best) return best.i;
  const r = prev != null ? rects[prev] : null;
  if (
    r &&
    y >= r.top &&
    y <= r.bottom &&
    ((x >= r.left - STICKY && x < r.left) || (x > r.right && x <= r.right + STICKY))
  ) {
    return prev;
  }
  return null;
}

export default function PosterSurf({
  posterSrc,
  className,
}: {
  posterSrc: readonly string[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [overlapPx, setOverlapPx] = useState(180);
  const slotCount = posterSrc.length;
  const reduceMotion = useReducedMotion();
  const t = reduceMotion ? { duration: 0 } : spring;
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const el = cards.current[0];
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setOverlapPx(w * OVERLAP_RATIO);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    setHovered((p) => hitTest(e.clientX, e.clientY, cards.current, p));
  }, []);

  return (
    <div
      className={['flex min-h-0 w-full min-w-0 flex-col', className].filter(Boolean).join(' ')}
      data-name="poster-surf"
      role="group"
      aria-label="Poster mockups"
      onPointerLeave={() => setHovered(null)}
    >
      <div
        className="flex min-h-0 w-full flex-1 cursor-default items-end justify-center overflow-visible px-1 py-2 [transform:translateZ(0)]"
        onPointerMove={onMove}
      >
        <div className="flex h-full min-h-0 max-h-full items-end justify-center">
          {Array.from({ length: slotCount }, (_, i) => {
            const f = hovered === i;
            return (
              <motion.div
                key={i}
                className="flex h-full min-h-0 shrink-0 items-end"
                style={{
                  perspective: `${PERSPECTIVE}px`,
                  perspectiveOrigin: '50% 50%',
                  zIndex: slotCount - i,
                }}
                initial={false}
                animate={{ marginLeft: marginLeft(i, hovered, overlapPx) }}
                transition={t}
              >
                <motion.div
                  ref={(el) => {
                    cards.current[i] = el;
                  }}
                  className="relative h-full max-h-full w-auto cursor-pointer overflow-hidden rounded-[2px]"
                  style={{
                    aspectRatio: '2 / 3',
                    transformOrigin: 'center bottom',
                    transformStyle: 'preserve-3d',
                  }}
                  initial={false}
                  animate={{
                    rotateY: f ? 0 : REST_Y,
                    scale: f ? 1.14 : 1,
                    translateZ: f ? 60 : 0,
                    boxShadow: '2px 2px 30px rgba(0,0,0,0.2)'
                  }}
                  transition={t}
                >
                  {posterSrc?.[i] ? (
                    <img
                      alt=""
                      className="pointer-events-none absolute inset-0 size-full object-cover"
                      src={posterSrc[i]}
                      draggable={false}
                    />
                  ) : (
                    <div aria-hidden className="pointer-events-none absolute inset-[1px] bg-[#ececec]" />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
