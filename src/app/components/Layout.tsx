import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import reticulatedOrange from './assets/reticulated_orange.png';

export default function Layout() {
  return (
    
    <div className="relative flex min-h-dvh w-full flex-col items-start bg-white" data-name="layout">

      <header className="sticky z-1 top-0 w-full bg-white">
        <Navbar />
      </header>

      <div
        className="z-2 absolute flex h-[1413.346px] items-center justify-center left-[269px] top-[-672px] w-[1472.184px]"
        style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
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

        
      <div className="relative flex w-full max-w-[1440px] flex-[1_0_0] items-start overflow-x-clip">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
