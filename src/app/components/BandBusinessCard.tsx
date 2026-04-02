import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/components/ui/utils';
import cardBackPlaceholder from './assets/tbwnn/back.png';
import cardFrontPlaceholder from './assets/tbwnn/front.png';

/** Distance from viewer to the z=0 plane — lower = stronger foreshortening. */
const CARD_SCENE_PERSPECTIVE_PX = 3000;

/**
 * Where the vanishing point sits on the perspective box (CSS `perspective-origin`).
 * Use `%`, `px`, or keywords (`left` | `center` | `right` for X).
 */
const CARD_SCENE_PERSPECTIVE_ORIGIN_X = '50%';
const CARD_SCENE_PERSPECTIVE_ORIGIN_Y = '50%';

/** Resting tilt of the card (degrees) before hover/focus flip. */
const CARD_TILT_ROTATE_X_DEG = 40;
const CARD_TILT_ROTATE_Y_DEG = 0;
const CARD_TILT_ROTATE_Z_DEG = 30;

/** Y rotation when flipped (front → back). */
const CARD_FLIP_ROTATE_Y_DEG = 180;

/**
 * ~1″ float above a surface: card is nudged toward the viewer in 3D, and shadows sit *below*
 * the card (positive Y), soft and wide — no tight “contact” halo (that reads as sitting on the desk).
 */
const CARD_FLOAT_TRANSLATE_Z_PX = 0;

/** Primary cast — offset down, soft edge, slight negative spread keeps it under the card. */
const CARD_SHADOW_FLOAT_NEAR = '0 22px 132px -14px rgba(0, 24, 32, 0.24)';
/** Mid penumbra — larger, lighter, reads as gap before the floor. */
const CARD_SHADOW_FLOAT_MID = '0 44px 156px -20px rgba(0, 0, 0, 0.21)';
/** Wide ambient pool on the “table”. */
const CARD_SHADOW_FLOAT_FAR = '0 64px 196px -28px rgba(0, 0, 0, 0.17)';
const cardBoxShadow = `${CARD_SHADOW_FLOAT_NEAR}, ${CARD_SHADOW_FLOAT_MID}, ${CARD_SHADOW_FLOAT_FAR}`;

const cardTiltTransform = `rotateX(${CARD_TILT_ROTATE_X_DEG}deg) rotateY(${CARD_TILT_ROTATE_Y_DEG}deg) rotateZ(${CARD_TILT_ROTATE_Z_DEG}deg)`;

function pointInRect(clientX: number, clientY: number, r: DOMRectReadOnly) {
  return clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
}

export function BandBusinessCard({ align = 'center' }: { align?: 'center' | 'start' }) {
  const reduceMotion = useReducedMotion();
  const flipTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 26 };

  const hitRef = useRef<HTMLDivElement>(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const [pointerInside, setPointerInside] = useState(false);
  const [focused, setFocused] = useState(false);

  const syncPointerInside = useCallback(() => {
    const el = hitRef.current;
    if (!el) return;
    const { x, y } = lastPointerRef.current;
    const r = el.getBoundingClientRect();
    const inside = pointInRect(x, y, r);
    setPointerInside((p) => (p === inside ? p : inside));
  }, []);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      syncPointerInside();
    };
    const onScrollOrResize = () => syncPointerInside();

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [syncPointerInside]);

  const flipped = pointerInside || focused;

  return (
    <div
      className={cn(
        'flex h-full w-full min-h-0 min-w-0 [container-type:size] justify-center',
        align === 'start' ? 'items-start' : 'items-center',
      )}
      style={{
        perspective: `${CARD_SCENE_PERSPECTIVE_PX}px`,
        perspectiveOrigin: `${CARD_SCENE_PERSPECTIVE_ORIGIN_X} ${CARD_SCENE_PERSPECTIVE_ORIGIN_Y}`,
      }}
    >
      <div
        ref={hitRef}
        className="origin-center aspect-[3.5/2] w-[min(100cqw,calc(100cqh*3.5/2))] max-h-full max-w-full"
        style={{
          transform: cardTiltTransform,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="h-full w-full min-h-0 min-w-0"
          style={{
            transform: `translateZ(${CARD_FLOAT_TRANSLATE_Z_PX}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            aria-label="Band business card — hover or focus to flip"
            className="relative h-full w-full min-h-0 min-w-0 cursor-pointer rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#001820]/40 focus-visible:ring-offset-2"
            style={{ transformStyle: 'preserve-3d', boxShadow: cardBoxShadow }}
            animate={{ rotateY: flipped ? CARD_FLIP_ROTATE_Y_DEG : 0,
                      translateY: flipped ? '-200px' : '0px',
                      translateX: flipped ? '-100px' : '0px',
                      boxShadow: flipped ? '-100px 300px 132px 0px rgba(0, 0, 0, 0.3)' : '10px 10px 20px 0px rgba(0, 0, 0, 0.34)',
            }}
            transition={flipTransition}
            tabIndex={0}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-md border border-black/80"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              <img
                src={cardFrontPlaceholder}
                alt=""
                width={350}
                height={200}
                draggable={false}
                className="block h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden rounded-md border border-black/25"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: `rotateY(${CARD_FLIP_ROTATE_Y_DEG}deg)`,
              }}
            >
              <img
                src={cardBackPlaceholder}
                alt=""
                width={350}
                height={200}
                draggable={false}
                className="block h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
