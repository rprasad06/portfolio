import imgAsset24X1 from "figma:asset/3984dc973dfec0764e39fa59ed686e37ec783136.png";

function Frame2() {
  return (
    <div className="h-[332px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[20px] relative text-black w-full">
          <p className="type-inter-10-caps relative shrink-0 w-full">WORK</p>
          <p className="type-inter-12 relative shrink-0 w-full">The Harvard Crimson</p>
          <p className="type-inter-12 relative shrink-0 w-full">The Band with No Name</p>
          <p className="type-inter-12 relative shrink-0 w-full">Harvard-Radcliffe Orchestra</p>
          <p className="type-inter-12 relative shrink-0 w-full">Lowell House Opera</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-[203px]">
      <Frame2 />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Component12Vh() {
  return (
    <div className="content-stretch flex h-[332px] items-end relative shrink-0 w-full" data-name="1/2vh">
      <div className="type-xanh-26 h-[61px] leading-[0] not-italic relative shrink-0 text-black w-[94px]">
        <p className="leading-[normal] mb-0">Rahul</p>
        <p className="leading-[normal]">Prasad</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[64px] relative shrink-0 w-full" data-name="left">
      <p className="type-xanh-20 leading-[0] relative shrink-0 text-black text-center whitespace-nowrap">
        <span className="decoration-solid leading-[normal] underline">about me</span>
        <span className="leading-[normal]">{` →`}</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[22px] items-start pt-[16px] relative size-full">
        <div className="leading-[0] min-w-full not-italic relative shrink-0 text-black w-[min-content]">
          <p className="type-inter-14 leading-[normal] mb-[10px]">I’m a designer who loves making things look and feel good.</p>
          <p className="type-inter-14 mb-[10px]">
            <span className="leading-[normal]">{`I believe in `}</span>
            <span className="leading-[normal]">revealing</span>
            <span className="leading-[normal]">{` `}</span>
            <span className="type-inter-14-italic leading-[normal]">identity</span>
            <span className="leading-[normal]">{` in what I design,`}</span>
          </p>
          <p className="type-inter-14">
            <span className="leading-[normal]">weaving metaphors into elements that</span>
            <span className="leading-[normal]">{` imply`}</span>
            <span className="leading-[normal]">{` the things that are important.`}</span>
          </p>
        </div>
        <div className="h-0 relative shrink-0 w-[488px]">
          <div className="absolute inset-[-0.3px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 0.3">
              <line id="Line 2" stroke="var(--stroke-0, black)" strokeWidth="0.3" x2="488" y1="0.15" y2="0.15" />
            </svg>
          </div>
        </div>
        <div className="type-inter-14 leading-[0] min-w-full not-italic relative shrink-0 text-black w-[min-content]">
          <p className="leading-[normal] mb-px">2022 – 2026</p>
          <p className="leading-[normal] mb-px">{`B.A. in Computer Science & Music`}</p>
          <p className="leading-[normal]">Harvard College</p>
        </div>
        <Left />
      </div>
    </div>
  );
}

function NameSection() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[832px] items-start relative shrink-0 w-[var(--half-viewport-width)]" data-name="name section">
      <Component12Vh />
      <Frame4 />
    </div>
  );
}

function Title() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[332px] items-start justify-end relative shrink-0 w-[395px]" data-name="title">
      <div className="type-xanh-26 leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="decoration-solid leading-[normal] mb-0 underline">The Harvard Crimson:</p>
        <p>
          <span className="decoration-solid leading-[normal] underline">UI/UX Design</span>
          <span className="leading-[normal]">{` →`}</span>
        </p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] type-inter-14 content-stretch flex flex-col gap-[32px] items-start not-italic py-[16px] shrink-0 sticky text-black top-0 w-[395px]" data-name="body">
      <div className="leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[1.5] mb-px">Part-time: January 2024 – December 2025</p>
        <p className="leading-[1.5]">Full-time: June 2024 – August 2024</p>
      </div>
      <p className="type-inter-10-caps leading-[normal] relative shrink-0 whitespace-nowrap">UI/UX, Website, visual identity, branding</p>
    </div>
  );
}

function Feature({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"} data-name="feature 1">
      <Title />
      <Body1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[332px] items-start justify-end relative shrink-0 w-[395px]" data-name="title">
      <div className="type-xanh-26 leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="decoration-solid leading-[normal] mb-0 underline">The Band with No Name:</p>
        <p>
          <span className="decoration-solid leading-[normal] underline">Brand Design</span>
          <span className="leading-[normal]">{` →`}</span>
        </p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] type-inter-14 content-stretch flex flex-col gap-[32px] items-start not-italic py-[16px] shrink-0 sticky text-black top-0 w-[395px]" data-name="body">
      <p className="leading-[1.5] min-w-full relative shrink-0 w-[min-content]">June 2023 – Present</p>
      <p className="type-inter-10-caps leading-[normal] relative shrink-0 whitespace-pre">{`LOGO, VISUAL IDENTITY,  MARKETING, SOCIAL MEDIA`}</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[332px] items-start justify-end relative shrink-0 w-[395px]" data-name="title">
      <div className="type-xanh-26 leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="decoration-solid leading-[normal] mb-0 underline">Harvard-Radcliffe Orchestra:</p>
        <p>
          <span className="decoration-solid leading-[normal] underline">Graphic Design</span>
          <span className="leading-[normal]">{` →`}</span>
        </p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] type-inter-14 content-stretch flex flex-col gap-[32px] items-start not-italic py-[16px] shrink-0 sticky text-black top-0 w-[395px]" data-name="body">
      <p className="leading-[1.5] min-w-full relative shrink-0 w-[min-content]">Part-time: January 2024 – March 2026</p>
      <p className="type-inter-10-caps leading-[normal] relative shrink-0 whitespace-nowrap">Posters, experimental design, visual identity</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[332px] items-start justify-end relative shrink-0 w-[395px]" data-name="title">
      <div className="type-xanh-26 leading-[0] relative shrink-0 text-black whitespace-nowrap">
        <p className="decoration-solid leading-[normal] mb-0 underline">Lowell House Opera:</p>
        <p>
          <span className="decoration-solid leading-[normal] underline">Graphic Design</span>
          <span className="leading-[normal]">{` →`}</span>
        </p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] type-inter-14 content-stretch flex flex-col gap-[32px] items-start not-italic py-[16px] shrink-0 sticky text-black top-0 w-[395px]" data-name="body">
      <p className="leading-[1.5] min-w-full relative shrink-0 w-[min-content]">Commissioned work; February 2026</p>
      <p className="type-inter-10-caps leading-[normal] relative shrink-0 whitespace-nowrap">{`Posters, experimental design, visual IDENTITY `}</p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[1]" data-name="body">
      <NameSection />
      <Feature />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="feature 8">
        <Title1 />
        <Body2 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="feature 10">
        <Title2 />
        <Body3 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="feature 9">
        <Title3 />
        <Body4 />
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] isolate items-start min-h-px min-w-px overflow-clip relative w-[1440px] z-[1]" data-name="root">
      <div className="content-stretch flex flex-col h-[832px] items-start justify-center shrink-0 sticky top-0 w-[416px] z-[2]" data-name="sidebar">
        <Frame />
      </div>
      <Body />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="homepage">
      <div className="absolute flex h-[1413.346px] items-center justify-center left-[269px] top-[-672px] w-[1472.184px] z-[3]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-141.59deg]">
          <div className="h-[845.709px] relative w-[1208.24px]" data-name="Asset 2@4x 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset24X1} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[3726px] left-0 pointer-events-none top-0">
        <div className="type-inter-12 bg-[rgba(255,255,255,0.2)] content-stretch flex h-[47px] items-center p-[16px] pointer-events-auto sticky text-black top-0 w-[1440px] z-[2]" data-name="nav">
          <p className="h-full relative shrink-0 w-[400px]">Rahul Prasad</p>
          <p className="h-full relative shrink-0 w-[400px]">Cambridge, MA</p>
          <p className="flex-[1_0_0] h-full min-h-px min-w-px relative text-right">Contact</p>
        </div>
      </div>
      <Root />
    </div>
  );
}