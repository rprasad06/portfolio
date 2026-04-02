import { useCallback, useLayoutEffect, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { cn } from '@/components/ui/utils';
import macBookHeroUrl from '../components/assets/crimson_assets/MacBook Pro 16.svg?url';
import phoneMockupUrl from '../components/assets/crimson_assets/phone mockup.svg?url';
import desktopMockup from '../components/assets/crimson_assets/crimson_desktop_mockup.png';
import redMockup from '../components/assets/crimson_assets/redmockup.png';
import fullHomepageMockup from '../components/assets/crimson_assets/full homepage mockup.png';
import homepageMobileMockup from '../components/assets/crimson_assets/homepage_mobile.png';
import mobileWriterPageFeedback from '../components/assets/crimson_assets/mobile writer page feedback.png';

/** Matches ProjectCard title row on HomePage. */
const TITLE_BAND =
  'flex h-[var(--unit)] pb-[16px] w-full max-w-[395px] shrink-0 flex-col items-start justify-end';

/** Matches ProjectCard body column on HomePage. */
const BODY_STACK =
  'type-inter-14 flex w-full flex-col gap-[32px] items-start';

const BODY_OVERVIEW =
  'type-inter-14 flex w-full max-w-[var(--half-viewport-width)] flex-col gap-[32px] items-start bg-white/20';

const SECTION_CAP = 'flex w-full flex-col overflow-hidden';

const MACBOOK_VIEWBOX = { w: 907, h: 605 } as const;
const MACBOOK_SCREEN = {
  x: 246.717,
  y: 114.207 + 12.2016,
  w: 412.415,
  h: 263.067,
} as const;

const macbookScreenStyle = {
  left: `${(MACBOOK_SCREEN.x / MACBOOK_VIEWBOX.w) * 100}%`,
  top: `${(MACBOOK_SCREEN.y / MACBOOK_VIEWBOX.h) * 100}%`,
  width: `${(MACBOOK_SCREEN.w / MACBOOK_VIEWBOX.w) * 100}%`,
  height: `${(MACBOOK_SCREEN.h / MACBOOK_VIEWBOX.h) * 100}%`,
  borderRadius: `${(6.508 / MACBOOK_SCREEN.w) * 100}% / ${(6.508 / MACBOOK_SCREEN.h) * 100}%`,
} as const;

/** phone mockup.svg viewBox 0 0 148 298 — screen inset matches prior Figma scroll frame. */
const PHONE_VIEWBOX = { w: 148, h: 298 } as const;
const PHONE_SCREEN = {
  x: 7.52,
  y: 6.1,
  w: 131.371,
  h: 283.892,
} as const;

const phoneScreenStyle = {
  left: `${(PHONE_SCREEN.x / PHONE_VIEWBOX.w) * 100}%`,
  top: `${(PHONE_SCREEN.y / PHONE_VIEWBOX.h) * 100}%`,
  width: `${(PHONE_SCREEN.w / PHONE_VIEWBOX.w) * 100}%`,
  height: `${(PHONE_SCREEN.h / PHONE_VIEWBOX.h) * 100}%`,
  borderRadius: `${(19 / PHONE_SCREEN.w) * 100}% / ${(19 / PHONE_SCREEN.h) * 100}%`,
} as const;

export type PageTabId = 'homepage' | 'writer' | 'news';

const PAGE_TAB_ORDER: readonly PageTabId[] = ['homepage', 'writer', 'news'];

const PAGE_TAB_PREVIEWS: Record<PageTabId, { desktop: string; mobile: string }> = {
  homepage: {
    desktop: fullHomepageMockup,
    mobile: homepageMobileMockup,
  },
  writer: {
    desktop: desktopMockup,
    mobile: mobileWriterPageFeedback,
  },
  news: {
    desktop: redMockup,
    mobile: homepageMobileMockup,
  },
};

function PageTabs({
  value,
  onChange,
}: {
  value: PageTabId;
  onChange: (id: PageTabId) => void;
}) {
  const tabs: { id: PageTabId; label: string }[] = [
    { id: 'homepage', label: 'Homepage' },
    { id: 'writer', label: 'Writer Page' },
    { id: 'news', label: 'News Content Page' },
  ];

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = PAGE_TAB_ORDER.indexOf(value);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onChange(PAGE_TAB_ORDER[(i + 1) % PAGE_TAB_ORDER.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onChange(PAGE_TAB_ORDER[(i - 1 + PAGE_TAB_ORDER.length) % PAGE_TAB_ORDER.length]);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onChange(PAGE_TAB_ORDER[0]);
    } else if (e.key === 'End') {
      e.preventDefault();
      onChange(PAGE_TAB_ORDER[PAGE_TAB_ORDER.length - 1]);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Device preview page"
      className="grid h-[45px] w-full max-w-[468px] grid-cols-3 rounded-lg border border-black/50"
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab, index) => {
        const selected = value === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            id={`crimson-tab-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              'type-inter-12 flex h-full items-center justify-center px-2.5 transition-colors',
              index === 0 && 'rounded-l-lg',
              index === 2 && 'rounded-r-lg',
              index === 1 && 'border-x border-black/50',
              selected
                ? 'bg-[#b41616] text-white'
                : 'bg-white/90 text-black hover:bg-white',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function MacBookShowcase({ screen }: { screen?: ReactNode }) {
  return (
    <div className="relative w-full max-w-[min(906px,85vw)] shrink-0">
      <img
        alt=""
        src={macBookHeroUrl}
        width={907}
        height={605}
        draggable={false}
        className="relative z-0 block h-auto w-full"
      />
      <div
        className="pointer-events-auto absolute z-10 overflow-hidden"
        style={macbookScreenStyle}
        data-name="macbook-screen"
      >
        {screen != null ? (
          <div className="h-full w-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain">
            {screen}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PhoneShowcase({ screen }: { screen?: ReactNode }) {
  return (
    <div className="relative ml-[-120px] w-[148px] shrink-0">
      <img
        alt=""
        src={phoneMockupUrl}
        width={148}
        height={298}
        draggable={false}
        className="relative z-0 block h-auto w-full"
      />
      <div
        className="pointer-events-auto absolute z-10 overflow-hidden"
        style={phoneScreenStyle}
        data-name="phone-screen"
      >
        {screen != null ? (
          <div className="h-full w-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain">
            {screen}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function CrimsonPage() {
  const location = useLocation();
  const [pageTab, setPageTab] = useState<PageTabId>('homepage');
  const preview = PAGE_TAB_PREVIEWS[pageTab];

  const backToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const opts: ScrollIntoViewOptions = {
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    };
    const raf = requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView(opts);
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.search, location.key]);

  return (
    <article
      className="relative z-[1] pt-[5dvh] flex w-[var(--half-viewport-width)] shrink-0 flex-col items-start"
      data-name="body"
    >
      <div
        className="flex w-full min-w-0 shrink-0 flex-col items-start justify-start gap-0 py-10"
        data-name="crimson-device-hero"
      >
        <PageTabs value={pageTab} onChange={setPageTab} />
        <div className="flex w-full min-w-0 flex-row items-center ml-[-200px] pb-4">
          <MacBookShowcase
            screen={
              <img
                key={pageTab}
                alt=""
                src={preview.desktop}
                draggable={false}
                className="block h-auto w-full max-w-none bg-white"
              />
            }
          />
          <PhoneShowcase
            screen={
              <img
                key={pageTab}
                alt=""
                src={preview.mobile}
                draggable={false}
                className="block h-auto w-full max-w-full bg-white"
              />
            }
          />
        </div>
      </div>

      <div
        className="flex h-[var(--unit)] pt-[60px] max-h-[100dvh] w-full min-w-0 max-w-[var(--half-viewport-width)] shrink-0 flex-col items-start"
        data-name="name section"
      >
        <div className="flex w-full shrink-0 items-end pb-4">
          <div className="type-xanh-26 min-w-0 shrink-0 leading-[0]">
            <p className="mb-0 leading-[normal]">The Harvard Crimson</p>
            <p className="leading-[normal]">Website Redesign</p>
          </div>
        </div>
        <div className="relative min-h-px min-w-px w-full flex-[1_0_0]">
          <div className="flex size-full flex-col items-start gap-[22px]">
            <div className="w-full bg-white/20">
              <p className="type-inter-10-caps w-full leading-[normal]">
                UI/UX, WEBSITE, VISUAL IDENTITY, BRANDING
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        id="overview"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="overview"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">Overview</span>
          </h2>
        </div>
        <div className={`${BODY_OVERVIEW} min-h-0 flex-1 overflow-y-auto`} data-name="body">
          <div className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            <p className="mb-0">
              The Harvard Crimson is Harvard&apos;s premier student newspaper, with a weekly
              published paper in print and digital news site at thecrimson.com. The website
              receives over a million views a month.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              The Crimson began its new website redesign project last January, aiming to rework the
              inaccessible UI, dated aesthetic, and style inconsistencies. Working with my digital
              design co-executive as well as the Crimson&apos;s president, technology board,
              digital strategist, and the Crimson board, we embarked on this project to re-vitalize
              the Crimson&apos;s web and mobile experience.
            </p>
          </div>
          <dl className="type-inter-12 grid w-full min-w-0 grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4">
            <div>
              <dt className="type-inter-10-caps mb-1">Timeline</dt>
              <dd className="leading-[normal]">
                January 2024 –<br />
                December 2025
              </dd>
            </div>
            <div>
              <dt className="type-inter-10-caps mb-1">Tools</dt>
              <dd>Figma</dd>
            </div>
            <div>
              <dt className="type-inter-10-caps mb-1">Team</dt>
              <dd className="leading-[normal]">
                Rahul Prasad
                <br />
                Natalie Zhang
              </dd>
            </div>
            <div>
              <dt className="type-inter-10-caps mb-1">Role</dt>
              <dd>Digital Design Lead</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="relative flex h-[min(914px,120dvh)] w-full shrink-0 flex-col items-start justify-center py-[108px]" data-name="photo">
        <div className="relative h-full min-h-[400px] w-full max-w-[1074px]">
          <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={desktopMockup} />
        </div>
      </div>

      <section
        id="research"
        className={`scroll-mt-[var(--nav-height)] min-h-[100dvh] ${SECTION_CAP}`}
        data-name="research section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">1. Research</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} min-h-0 flex-1 overflow-y-auto`} data-name="body">
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            The first step of the redesign process was to understand the motivation for a redesign.
            Meetings, meetings, meetings!
          </p>
          <div className="grid w-full gap-10 md:grid-cols-3 md:gap-9">
            <div>
              <p className="type-inter-10-caps mb-4">The Crimson&apos;s Executive Boards</p>
              <ul className="list-disc pl-5 leading-[normal]">
                <li>
                  <span className="font-medium">Qualitative</span> internal data: what are the
                  internal needs of each sector of the crimson?
                </li>
              </ul>
            </div>
            <div>
              <p className="type-inter-10-caps mb-4">Other News Publications</p>
              <ul className="list-disc pl-5 leading-[normal]">
                <li>
                  <span className="font-medium">Quantitative</span> external data: website traffic,
                  clicks, UI flow. What do the users need for a better experience?
                </li>
              </ul>
            </div>
            <div>
              <p className="type-inter-10-caps mb-4">The Crimson Student Base</p>
              <ul className="list-disc pl-5 leading-[normal]">
                <li>
                  <span className="font-medium">Qualitative</span> external data: what do other
                  established publications do well?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="design"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="design section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">2. Design</span>
          </h2>
        </div>
        <div
          className={`${BODY_OVERVIEW}`}
          data-name="body"
        >
          <p className="min-w-full max-w-[641px] shrink-0 leading-[normal]">
            We began redesigning each page of the website. Following our established core values,
            styles and assets, and feedback from users and executive boards, we crafted multiple
            iterations of each page to send out to the Crimson for rounds of feedback and refine
            each week.
          </p>
          <p className="min-w-full max-w-[641px] shrink-0 leading-[normal]">
            With complete mockups, we handed them off to the Technology board to begin development.
          </p>
          <div className="relative h-[495px] w-full min-h-[280px] overflow-hidden">
            <img
              alt=""
              className="pointer-events-none absolute inset-x-0 top-[-8.79%] h-[109.3%] w-full max-w-none object-cover"
              src={redMockup}
            />
          </div>
        </div>
      </section>

      <section
        id="outcome"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="outcome section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">3. Outcome</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} min-h-0 flex-1 overflow-y-auto`} data-name="body">
          <div className="min-w-full shrink-0 leading-[normal]">
            <p className="mb-0">
              This project has been handed off to the next group of designers that we trained for
              this role at the Crimson. The project is aimed to launch by summer 2026.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">We also learned the following:</p>
            <p className="mb-0">&nbsp;</p>
            <ul className="mb-0 list-disc pl-5">
              <li>
                <span className="font-medium">Everyone needs different things.</span> Making
                everybody happy is impossible. We learned that some aspects aren&apos;t worth
                debating, especially early in the process. Build the foundation first, worry about
                details later.
              </li>
            </ul>
            <p className="mb-0">&nbsp;</p>
            <ul className="mb-0 list-disc pl-5">
              <li>
                <span className="font-medium">Progress isn&apos;t linear.</span>{' '}
                We had to push the completion date back for this project, particularly because I
                re-worked the entire asset library during my internship in summer 2024. In order to
                create a design system that not only looks good, but will hold up against the test of
                time, these sacrifices are sometimes necessary.
              </li>
            </ul>
            <p className="mb-0">&nbsp;</p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-medium">Organization is key.</span> For a major project in such
                a large organization, the biggest pitfalls during the process were losing track of
                pixels, assets, people, requests, pages, versions, and along with those things,
                our focus and motivation. The library rework allowed us to spend our energy on
                what&apos;s important: delivering designs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="relative h-[223px] max-h-[100dvh] w-full shrink-0">
        <div className="flex h-full flex-col justify-end">
          <div className="flex flex-col items-start justify-end pb-[25px] pr-[74px]">
            <button
              type="button"
              onClick={backToTop}
              className="type-xanh-20 w-full cursor-pointer border-0 bg-transparent p-0 text-left underline decoration-solid transition-opacity hover:opacity-70"
            >
              Return to top
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
