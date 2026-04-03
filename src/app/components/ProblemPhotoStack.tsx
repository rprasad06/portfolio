import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/components/ui/utils';

export type ProblemPhotoStackItem = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const STACK_SHADOW = '0 0 16px rgba(0,0,0,0.5)';
const SPREAD_SHADOW = '0 0 20px rgba(0,0,0,0.45)';

/** Width relative to largest asset (467px ref). */
const WIDTH_TO_BASE = [1, 434 / 467, 411 / 467] as const;

const LAYERS = [
  {
    stack: { x: '3%', y: '8%', rotate: -7, zIndex: 1 },
    spread: { x: '-100%', y: '2%', rotate: -11, zIndex: 12 },
  },
  {
    stack: { x: '-2%', y: '1%', rotate: 4, zIndex: 2 },
    spread: { x: 0, y: '-6%', rotate: 0, zIndex: 20 },
  },
  {
    stack: { x: '-6%', y: '-6%', rotate: -6, zIndex: 3 },
    spread: { x: '138%', y: '4%', rotate: 10, zIndex: 12 },
  },
] as const;

type Props = {
  items: readonly [ProblemPhotoStackItem, ProblemPhotoStackItem, ProblemPhotoStackItem];
  className?: string;
};

export function ProblemPhotoStack({ items, className }: Props) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const spread = hovered || focused;
  const useSpread = spread && !reduceMotion;

  const layerTransition = (i: number) =>
    reduceMotion
      ? { duration: 0 }
      : {
          type: 'spring' as const,
          stiffness: 280,
          damping: 28,
          mass: 0.85,
          delay: i * 0.055,
        };

  return (
    <div
      className={cn(
        'relative mx-auto w-full min-w-0 [container-type:inline-size] outline-none',

        '[--photo-w:min(50cqw,clamp(10rem,min(46dvw,92cqw),36rem))]',
        'min-h-[min(120dvh,clamp(22rem,min(100cqw,85dvw),55rem))]',
        'focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2',
        className,
      )}
      tabIndex={0}
      role="group"
      aria-label="Band photos; hover or focus to spread the stack"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-[42%] w-full min-h-[clamp(14rem,min(70cqw,65dvw),40rem)] -translate-x-1/2 -translate-y-1/2">
        {items.map((item, i) => {
          const cfg = LAYERS[i];
          const pose = useSpread ? cfg.spread : cfg.stack;
          const scale = WIDTH_TO_BASE[i];
          return (
            <motion.div
              key={item.src}
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              transition={{ duration: 0 }}
            >
              <motion.img
                src={item.src}
                alt={item.alt ?? ''}
                width={item.width}
                height={item.height}
                draggable={false}
                className="h-auto max-w-none rounded-sm"
                style={{ width: `calc(var(--photo-w) * ${scale})` }}
                initial={false}
                animate={{
                  x: pose.x,
                  y: pose.y,
                  rotate: pose.rotate,
                  boxShadow: useSpread ? SPREAD_SHADOW : STACK_SHADOW,
                }}
                transition={layerTransition(i)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
