import { useCallback, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { cn } from '@/components/ui/utils';
import { BandBusinessCard } from '../components/BandBusinessCard';
import hatsUrl from '../components/assets/tbwnn/hats.jpg';
import photoA from '../components/assets/tbwnn/photo-a.png';
import photoB from '../components/assets/tbwnn/photo-b.png';
import summerSchedule from '../components/assets/tbwnn/summer-schedule.png';
import woodPlank from '../components/assets/tbwnn/wood_plank.png';

const TITLE_BAND =
  'flex h-[var(--unit)] pb-[16px] w-full max-w-[395px] shrink-0 flex-col items-start justify-end';

const BODY_STACK =
  'type-inter-14 flex w-full flex-col gap-[32px] items-start';

const BODY_OVERVIEW =
  'type-inter-14 flex w-full max-w-[var(--half-viewport-width)] flex-col gap-[32px] items-start bg-white/20';

const SECTION_CAP = 'flex w-full flex-col';

function SwatchRow({ hex, label }: { hex: string; label: string }) {
  const h = hex.toUpperCase();
  const lightSurface = h === '#FFFFFF' || h === '#95D1D8' || h === '#EAE0D5';
  return (
    <div
      className="flex h-8 w-full max-w-[452px] items-center rounded px-4 sm:max-w-none"
      style={{ backgroundColor: hex }}
    >
      <span className={cn('text-[13px] leading-4', lightSurface ? 'text-black' : 'text-white')}>
        {label}
      </span>
    </div>
  );
}

export default function BandWithNoNamePage() {
  const location = useLocation();

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
      className="relative z-[1] flex w-[var(--half-viewport-width)] shrink-0 flex-col items-start"
      data-name="body"
    >
      
      <div
        className="flex  w-full min-w-0 max-w-[var(--half-viewport-width)] shrink-0 flex-col items-start"
        data-name="name section"
      >
        <div className="flex h-[var(--unit)] flex-col justify-end pb-[16px] w-full shrink-0">
          <div className="type-xanh-26 min-w-0 shrink-0 leading-[0]">
            <p className="mb-0 leading-[normal]">The Band with No Name</p>
          </div>
        </div>
        
        <div className="flex w-full max-w-[395px] flex-col gap-[22px]">
          <p className="type-inter-14 mb-0 leading-[17px]">June 2023 – Present</p>
          <p className="type-inter-10-caps mb-0 leading-[12px]">
            LOGO, VISUAL IDENTITY, MARKETING, SOCIAL MEDIA
          </p>
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
          <p className="min-w-full shrink-0 leading-[17px]">
            In late spring 2022, I formed the Band with No Name with five high school friends. This
            summer, we&apos;re headlining the annual Braintree Day—Braintree&apos;s biggest festival.
            We began playing live shows in the summer of 2023, and continue to play shows today,
            every summer and winter. Since then, we have earned over $50,000 from local bars,
            restaurants, festivals, and tips from listeners. Within the band, I am responsible for
            outreach and booking shows, creating publication materials, maintaining our social
            medias, and tracking finances. We have played over 50 live shows to date and have many
            more upcoming in 2026!
          </p>
        </div>
      </section>

      <section
        id="problem"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="problem"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">1. The Problem</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} max-w-[var(--half-viewport-width)]`} data-name="body">
          <p className="min-w-full shrink-0 leading-[17px]">
            As we started booking bars, restaurants, and festivals, we needed a visual system that
            stayed legible on posters and phone screens—simple enough to reproduce on a deadline,
            strong enough to carry our name.
          </p>
          <div className="flex w-full flex-col gap-4">
            <h3 className="type-xanh-26 mb-0 leading-[normal]">The Logo</h3>
            <p className="mb-0 leading-[17px]">Simple. Reproducible. Iconic.</p>
          </div>
          <div className="relative mt-[-4dvh] ml-[8dvw] flex h-[80dvh] min-h-[320px] w-[calc(100dvw)] min-w-0 shrink-0 flex-col">
            <div className="relative min-h-0 flex-1 h-full">
              <div
                className="pointer-events-none absolute top-0 z-0 rounded-md [filter:drop-shadow(-30_100px_72px_rgba(0,0,0,0.2))]"
                aria-hidden
              >
                <img
                  src={woodPlank}
                  alt=""
                  draggable={false}
                  className="size-full object-cover object-center"
                />
              </div>
              <div className="absolute h-[30dvh] ml-[-42dvw] mt-[10dvh] inset-0 z-10 min-h-0 min-w-0">
                <BandBusinessCard align="start" />
              </div>
            </div>
          </div>
        </div>
      

      
      

        <div className="relative mb-10 min-h-[min(880px,120dvh)] w-full max-w-[715px] overflow-y-visible">
          <img
            src={photoA}
            alt=""
            width={467}
            height={580}
            draggable={false}
            className="absolute right-0 top-8 z-0 w-[min(467px,85vw)] max-w-[467px] rotate-[-7deg] shadow-[0_0_16px_rgba(0,0,0,0.5)]"
          />
          <img
            src={photoB}
            alt=""
            width={435}
            height={540}
            draggable={false}
            className="absolute left-[-12%] top-0 z-[1] w-[min(434px,78vw)] max-w-[434px] rotate-[4deg] shadow-[0_0_12px_rgba(0,0,0,0.5)] sm:left-[-8%]"
          />
          <img
            src={hatsUrl}
            alt=""
            width={411}
            height={511}
            draggable={false}
            className="absolute bottom-0 left-[2%] z-[2] w-[min(411px,82vw)] max-w-[411px] rotate-[-6deg] shadow-[0_0_16px_rgba(0,0,0,0.5)]"
          />
        </div>

      </section>
      <section
        id="2025summer"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="2025summer"
      >
        <div className="w-[calc(100dvw-var(--sidebar-width))]">
          <div className="h-[20dvh] bg-gradient-to-b from-white to-[#F9F9F9]"/>
          <div className="bg-[#F9F9F9]">
            <div className="flex flex-col-reverse gap-32 pl-8 py-8 lg:flex-row lg:items-start lg:gap-8">
              <div className="flex max-w-[315px] flex-col gap-8 lg:shrink-0">
                <p className="type-new-spirit-summer mb-0 text-black">2025 Summer:</p>
                <p className="type-new-spirit-summer mb-0 text-black">
                  A brand new, expanded design system.
                </p>
                <p className="type-inter-14 mb-0 leading-[1.13] text-black">
                  In the way of a design refresh for the upcoming season of live music, I introduced
                  some small changes to recent design and publication materials that kept the brand
                  fresh and set the tone for the summer. I designed this poster to have more
                  character than our 2024 season advertisements while maintaining a clear and readable
                  show list. The inspiration comes from the photo, where the reds of the shed,
                  guitar, and flag stood out to me as an accent color — and I expanded on that in
                  the rest of the poster, while keeping our iconic navy blue in the foreground.
                </p>
                <div className="flex flex-col gap-3 rounded-2xl py-2">
                  <SwatchRow hex="#001820" label="#001820" />
                  <SwatchRow hex="#143C49" label="#143C49" />
                  <SwatchRow hex="#A93423" label="#A93423" />
                  <SwatchRow hex="#EAE0D5" label="#EAE0D5" />
                </div>
              </div>
              <div className="min-h-[400px] min-w-0 flex-1 lg:min-h-[min(926px,85dvh)]">
                <img
                  src={summerSchedule}
                  alt="2025 summer show schedule poster"
                  draggable={false}
                  className="h-full w-full object-contain shadow-[inset_0_0_11px_rgba(0,0,0,0.25),0_0_25px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
          </div>
          <div className="h-[20dvh] bg-gradient-to-b from-[#F9F9F9] to-white"/>
        </div>
      </section>

      <section
        id="reflections"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="reflections"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">3. Reflections</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} max-w-[var(--half-viewport-width)]`} data-name="body">
          <p className="min-w-full shrink-0 leading-[17px]">
            Having the opportunity to manage, conduct outreach, and design for a group and hobby
            that I am so passionate about is truly a privilege and motivates me to do all this
            background work that creates a successful music group. Of course, I don&apos;t do all of
            this work completely alone — my dear bandmates all have their own roles with the
            operations of the band, and I&apos;ve received much guidance from other people in the
            industry like musicians and booking agents that have been doing this a lot longer than I
            have. The largest takeaways I&apos;ve had so far is learning how marketing works in a
            hands-on environment with my own small business. I&apos;ve learned to stand my ground
            and fight for the shows that we want, the payments that we deserve, and the connections
            that will push our career forward. For these reasons, I&apos;m so lucky to have a band
            that I can push my skills in business, design, and advertising to see real results for
            us as a group.
          </p>
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
