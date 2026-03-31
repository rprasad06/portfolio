import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const POSTER_COUNT = 8;
/** Local perspective distance (px) — applied per poster so identical rotateY reads the same. */
const LOCAL_PERSPECTIVE_PX = 300;

/**
 * Resting Y rotation per slot (left + / right −). These values never change when another
 * poster is focused — only scale / front-facing change applies to the hovered item.
 */
const REST_ROTATE_Y_DEG: number = -60

const spring = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.8 };

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
      className={className}
      data-name="poster-surf"
      role="group"
      aria-label="Poster mockups"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative flex w-full justify-center overflow-visible py-6 [transform:translateZ(0)]">
        <div className="flex items-end justify-center">
          {Array.from({ length: POSTER_COUNT }, (_, i) => {
            const isFocused = hovered === i;
            const rotateY = isFocused ? 0 : REST_ROTATE_Y_DEG;
            const scale = isFocused ? 1.14 : 1;
            const z = isFocused ? 60 : 0;

            return (
              <div
                key={i}
                className="shrink-0"
                style={{
                  perspective: `${LOCAL_PERSPECTIVE_PX}px`,
                  perspectiveOrigin: '50% 50%',
                  marginLeft: i === 0 ? 0 : -20,
                  zIndex: isFocused ? 60 : 8 + i,
                }}
              >
                <motion.div
                  className="relative cursor-pointer overflow-hidden rounded-[2px] border border-black/25 bg-[#e8e8e8] shadow-[2px_4px_12px_rgba(0,0,0,0.12)]"
                  style={{
                    width: '76px',
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
