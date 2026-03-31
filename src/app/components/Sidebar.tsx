import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router';
import { workNavItems } from '../pages/HomePage';

export default function Sidebar() {
  const spacerAboveRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = spacerAboveRef.current;
    const root = document.documentElement;
    if (!el) return;

    const sync = () => {
      root.style.setProperty('--unit', `${el.getBoundingClientRect().height}px`);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty('--unit');
    };
  }, []);

  return (
    <div
      className="sticky top-[var(--nav-height)] flex h-[100dvh] w-[var(--sidebar-width)] flex-col items-start self-start"
      data-name="sidebar"
    >
      <div
        ref={spacerAboveRef}
        aria-hidden
        className="min-h-0 w-full flex-1"
        data-sidebar-spacer="above"
      />
      <div className="min-w-0 w-full max-w-[203px] shrink-0">
        <div className="flex flex-col gap-[16px] items-start px-[16px]">
          <p id="sidebar-work-label" className="type-inter-10-caps w-full shrink-0">
            WORK
          </p>
          {workNavItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className="type-inter-12 w-full shrink-0 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div aria-hidden className="min-h-0 w-full flex-1" data-sidebar-spacer="below" />
      <div id="navbar-offset" aria-hidden className="h-[var(--nav-height)] w-full" data-sidebar-spacer="below" />
    </div>
  );
}
