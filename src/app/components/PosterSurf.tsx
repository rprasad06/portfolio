import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const POSTER_COUNT = 8;
/** How much each poster overlaps the previous (px). Larger = tighter row. */
const POSTER_OVERLAP_PX = 150;

/** Local perspective distance (px) — applied per poster so identical rotateY reads the same. */
const LOCAL_PERSPECTIVE_PX = 500;

/**
 * Resting Y rotation per slot (left + / right −). These values never change when another
 * poster is focused — only scale / front-facing change applies to the hovered item.
 */
const REST_ROTATE_Y_DEG: number = -70;

const spring = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.8 };

/** Negative margin pulls each poster over the previous; 0 = no overlap on that seam. */
function overlapMarginLeft(i: number, hovered: number | null): number {
  if (i === 0) return 0;
  if (hovered === null) return -POSTER_OVERLAP_PX;
  // Focused poster: clear overlap with left neighbor and with right neighbor.
  if (i === hovered || i === hovered + 1) return 0;
  return -POSTER_OVERLAP_PX;
}

type PosterSurfProps = {
  /** Optional poster images (portrait); falls back to placeholder panels. */
  posterSrc?: readonly string[];
  className?: string;
};

export default function PosterSurf({ posterSrc, className }: PosterSurfProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={['flex min-h-0 w-full min-w-0 flex-col', className].filter(Boolean).join(' ')}
      data-name="poster-surf"
      role="group"
      aria-label="Poster mockups"
      onMouseLeave={() => setHovered(null)}
    >
      {/* Row fills vertical space from parent; posters stretch to this height (2:3 width from height). */}
      <div className="flex min-h-0 w-full flex-1 items-end justify-center overflow-visible px-1 py-2 [transform:translateZ(0)]">
        <div className="flex h-full min-h-0 max-h-full items-end justify-center">
          {Array.from({ length: POSTER_COUNT }, (_, i) => {
            const isFocused = hovered === i;
            const rotateY = isFocused ? 0 : REST_ROTATE_Y_DEG;
            const scale = isFocused ? 1.14 : 1;
            const z = isFocused ? 60 : 0;

            return (
              <motion.div
                key={i}
                className="flex h-full min-h-0 shrink-0 items-end"
                style={{
                  perspective: `${LOCAL_PERSPECTIVE_PX}px`,
                  perspectiveOrigin: '50% 50%',
                  zIndex: isFocused ? 60 : 8 + (POSTER_COUNT - 1 - i),
                }}
                initial={false}
                animate={{ marginLeft: overlapMarginLeft(i, hovered) }}
                transition={reduceMotion ? { duration: 0 } : spring}
              >
                <motion.div
                  className="relative h-full max-h-full w-auto cursor-pointer overflow-hidden rounded-[2px] border border-black/25 bg-[#e8e8e8] shadow-[2px_4px_12px_rgba(0,0,0,0.12)]"
                  style={{
                    aspectRatio: '2 / 3',
                    transformOrigin: 'center bottom',
                    transformStyle: 'preserve-3d',
                  }}
                  initial={false}
                  animate={{ rotateY, scale, translateZ: z }}
                  transition={reduceMotion ? { duration: 0 } : spring}
                  onMouseEnter={() => setHovered(i)}
                >
                  {posterSrc?.[i] ? (
                    <img
                      alt=""
                      className="pointer-events-none absolute inset-0 size-full object-cover"
                      src={posterSrc[i]}
                      draggable={false}
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-[1px] bg-[#ececec]"
                    />
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
