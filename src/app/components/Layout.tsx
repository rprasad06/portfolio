import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import reticulatedOrange from './assets/reticulated_orange.png';
import { Analytics } from '@vercel/analytics/react';


export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-start bg-white" data-name="layout">
      <header className="sticky top-0 z-2 w-full bg-white">
        <Navbar />
      </header>

      {isHome ? (
        <div
          className="absolute left-[269px] top-[-672px] z-3 flex h-[1413.346px] w-[1472.184px] items-center justify-center"
          style={
            { '--transform-inner-width': '1200', '--transform-inner-height': '19' } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[-141.59deg]">
            <div className="relative h-[845.709px] w-[1208.24px]" data-name="Asset 2@4x 1">
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                src={reticulatedOrange}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="relative flex w-full max-w-[1440px] flex-[1_0_0] items-start overflow-x-visible">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
      <Analytics />
    </div>
  );
}
