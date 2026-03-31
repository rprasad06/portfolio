import { useCallback, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import PosterSurf from '../components/PosterSurf';
import hroPosterRef from '../../assets/hro-reference.png';

const HRO_POSTER_SURF_IMAGES = Array.from({ length: 8 }, () => hroPosterRef);

/** Matches ProjectCard title row on HomePage. */
const TITLE_BAND =
  'flex h-[var(--unit)] pb-[16px] w-full max-w-[395px] shrink-0 flex-col items-start justify-end';

/** Matches ProjectCard body column on HomePage (scroll lives in section body, not window sticky). */
const BODY_STACK =
  'type-inter-14 flex w-full max-w-[395px] flex-col gap-[32px] items-start';

/** Overview includes a full-width metadata grid; keep the same gap rhythm as ProjectCard. */
const BODY_OVERVIEW =
  'type-inter-14 flex w-full max-w-[715px] flex-col gap-[32px] items-start bg-white/20';

/** At most one viewport tall; body scrolls when content is taller. */
const SECTION_CAP =
  'max-h-[100dvh] min-h-0 flex w-full flex-col overflow-hidden';

export default function HroPage() {
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
      className="relative z-[1] flex w-[715px] shrink-0 flex-col items-start"
      data-name="body"
    >
      <div
        className="h-[55dvh] py-[60px] w-full min-w-0 shrink-0"
        data-name="hro-poster-surf-shell"
      >
        <PosterSurf className="h-full w-full min-h-0" posterSrc={HRO_POSTER_SURF_IMAGES} />
      </div>
      <div
        className="flex h-[var(--viewport-height)] pt-[60px] max-h-[100dvh] w-full min-w-0 max-w-[715px] shrink-0 flex-col items-start"
        data-name="name section"
      >
        <div
          className="flex pb-[16px] w-full shrink-0 items-end"
          data-name="1/2vh"
        >
          <div className="type-xanh-26 min-w-0 shrink-0 leading-[0]">
            <p className="mb-0 leading-[normal]">Harvard-Radcliffe Orchestra</p>
            <p className="leading-[normal]">Graphic Design</p>
          </div>
        </div>
        <div className="relative min-h-px min-w-px w-full flex-[1_0_0]">
          <div className="flex size-full flex-col gap-[22px] items-start">
            <div className="w-full bg-white/20">
              <p className="type-inter-10-caps w-full leading-[normal]">
                POSTERS, EXPERIMENTAL DESIGN, VISUAL IDENTITY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
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
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            The Harvard-Radcliffe Orchestra is the oldest symphony orchestra in the United States,
            formed in 1808. The orchestra is fully student run, comprised of Harvard students and
            conducted by Maestro Federico Cortese. The orchestra performs in the historical Sanders
            Theatre and has also toured over eighteen countries. In addition to concerts, the
            orchestra initiates outreach programs for local schools and music programs for
            equitable arts access.
          </p>
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
              <dd>Adobe Illustrator</dd>
            </div>
            <div>
              <dt className="type-inter-10-caps mb-1">Team</dt>
              <dd>Rahul Prasad</dd>
            </div>
            <div>
              <dt className="type-inter-10-caps mb-1">Role</dt>
              <dd>Graphic Designer</dd>
            </div>
          </dl>
        </div>
      </section>

      <div
        className="relative flex h-[819px] max-h-[100dvh] w-full shrink-0 flex-col items-start overflow-hidden pt-32"
        data-name="photo"
      >
        <div
          className="pointer-events-none absolute left-[-416px] top-0 h-[819px] w-[1440px]"
          data-name="image 1"
        />
      </div>

      {/* Problem */}
      <section
        id="problem"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="research section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">1. The Problem</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} min-h-0 flex-1 overflow-y-auto`} data-name="body">
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            Historically, the Harvard-Radcliffe Orchestra has lacked a graphic design role and left
            the work of designing posters to the publicity chair, whose role is concerned more with
            logistics and organization of materials. In 2024, the student board decided to introduce
            the graphic design role, which I have filled since. As a result of the lack of a
            designated graphic designer, the old publication materials were uninteresting and lacked
            creativity.
          </p>
        </div>
      </section>

      {/* Case study — title band matches homepage; body uses full column width for image rows */}
      <section
        id="case-study"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="case study section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">2. Case Study: 3.8.25 Concert</span>
          </h2>
        </div>
        <div
          className="flex min-h-0 w-full min-w-0 max-w-[715px] flex-1 flex-col gap-16 overflow-y-auto"
          data-name="body"
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-8">
            <div className="flex min-w-0 max-w-[395px] flex-1 flex-col gap-3">
              <p className="type-inter-10-caps">Research</p>
              <p className="type-inter-14 leading-[normal]">
                Shostakovich&apos;s Symphony No. 11 is also titled The Year 1905.
              </p>
              <p className="type-inter-14 leading-[normal]">
                This refers to the Russian Revolution of 1905, which is depicted with a storyline
                throughout the symphony.
              </p>
              <p className="type-inter-14 leading-[normal]">
                It includes the events of Bloody Sunday on 22 January 1905 in the second movement of
                the symphony, with the climax of the movement representing the gunfire at the
                battle.
              </p>
            </div>
            <div
              className="h-[242px] w-full shrink-0 rounded-lg shadow-[2px_2px_24px_0px_rgba(0,0,0,0.25)] md:w-[430px]"
              data-name="image 2"
            />
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-8">
            <div className="flex min-w-0 max-w-[395px] flex-1 flex-col gap-3">
              <p className="type-inter-10-caps">Ideation</p>
              <p className="type-inter-14 leading-[normal]">Postcard created in 1905.</p>
              <p className="type-inter-14 leading-[normal]">
                I chose to center my poster around this piece due to its implication of the 1905
                massacre and its color scheme and aesthetic.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 md:w-[430px]">
              <div
                className="aspect-[1024/576] w-full rounded-lg shadow-[2px_2px_12px_0px_rgba(0,0,0,0.25)]"
                data-name="image 2"
              />
              <p className="type-inter-10-caps text-center leading-[normal]">
                <span className="italic">BOWLING, </span>
                ARTIST UNKNOWN. 1905.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[1043px] max-h-[100dvh] w-full shrink-0 overflow-hidden">
        <div
          className="absolute left-[-416px] top-[211px] flex h-[832px] w-[1440px] flex-col items-center justify-center bg-[#312f30]"
          data-name="photo"
        >
          <div className="relative h-[502px] w-[716px] shrink-0" data-name="image 3" />
        </div>
      </div>

      {/* Reflections */}
      <section
        id="reflections"
        className={`scroll-mt-[var(--nav-height)] ${SECTION_CAP}`}
        data-name="research section"
      >
        <div className={TITLE_BAND} data-name="title">
          <h2 className="type-xanh-26 w-full min-w-0 shrink-0 leading-[0]">
            <span className="block leading-[normal]">3. Reflections</span>
          </h2>
        </div>
        <div className={`${BODY_STACK} min-h-0 flex-1 overflow-y-auto`} data-name="body">
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            For this project with the Shostakovich symphony, it was my first time incorporating a
            pre-existing artwork into my own poster as a basis for the aesthetic and color palette
            used. I&apos;m happy with how the artwork interacts with the fonts and layering with
            the large &quot;1905&quot; text. If I were to workshop this piece further, I would find
            a more visibly accessible way to represent the logistical information (time, location,
            ticketing).
          </p>
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            I continued to use the opportunity to craft publications for the Harvard-Radcliffe
            Orchestra to experiment with my own versatility with graphic design tools and to push
            my own creativity and imagination with each new set of music that is performed. At the
            same time, with each poster, I&apos;ve found the tools that work the best for me and
            have slowly developed my style as a graphic designer in terms of workflow, patterns,
            and stylistic decisions.
          </p>
          <p className="min-w-full w-[min-content] shrink-0 leading-[normal]">
            I&apos;m grateful to have the opportunity to work on graphic design within an
            organization that I love, and to be in an environment where my designs are seen by a
            large audience. As an artist, this is part of my mission: if my poster is the reason for
            even one person to see a symphony for the first time, then I would consider it a
            worthwhile effort and a success.
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
