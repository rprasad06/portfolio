import { useCallback } from 'react';
import hroReference from '../../assets/hro-reference.png';

const SECTION_CLASS = 'min-h-[var(--section-min-height)] snap-start';
const HEADER_BAND_CLASS = 'flex h-[calc(var(--unit)-var(--nav-height))] w-full shrink-0 items-end';
const BODY_START_CLASS = 'flex min-h-0 w-full flex-1 flex-col pt-[var(--bio-to-name-gap)]';

function TextSection({
  id,
  title,
  children,
}: {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex w-full max-w-[715px] shrink-0 flex-col items-start scroll-mt-[var(--nav-height)] ${SECTION_CLASS}`}
    >
      <div className={HEADER_BAND_CLASS}>
        <h2 className="type-xanh-26 w-full leading-[normal]">{title}</h2>
      </div>
      <div className={BODY_START_CLASS}>{children}</div>
    </section>
  );
}

export default function Hro() {
  const backToTop = useCallback(() => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <article
      className="flex h-[calc(100dvh-var(--nav-height))] w-full min-w-0 snap-y snap-mandatory flex-col overflow-y-auto overscroll-y-contain"
      data-name="hro-page"
    >
      <TextSection id="overview" title="Overview">
        <div className="flex w-full max-w-[52ch] flex-col gap-6">
          <p className="type-inter-14 leading-[normal]">
            The Harvard-Radcliffe Orchestra is the oldest symphony orchestra in the United States, formed in 1808. The
            orchestra is fully student run, comprised of Harvard students and conducted by Maestro Federico Cortese.
            The orchestra performs in the historical Sanders Theatre and has also toured over eighteen countries. In
            addition to concerts, the orchestra initiates outreach programs for local schools and music programs for
            equitable arts access.
          </p>
        </div>

        <dl className="type-inter-12 mt-auto grid w-full max-w-[52ch] grid-cols-2 gap-x-8 gap-y-4 border-t border-black/10 pt-8 sm:grid-cols-4">
          <div>
            <dt className="type-inter-10-caps mb-1">Timeline</dt>
            <dd>January 2024 — December 2025</dd>
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
      </TextSection>

      <TextSection id="problem" title="1. The Problem">
        <p className="type-inter-14 max-w-[52ch] leading-[normal]">
          Historically, the Harvard-Radcliffe Orchestra has lacked a graphic design role and left the work of designing
          posters to the publicity chair, whose role is concerned more with logistics and organization of materials. In
          2024, the student board decided to introduce the graphic design role, which I have filled since. As a result
          of the lack of a designated graphic designer, the old publication materials were uninteresting and lacked
          creativity.
        </p>
      </TextSection>

      <TextSection id="case-study" title="2. Case Study: 3.8.25 Concert">
        <div className="grid w-full max-w-[52ch] grid-cols-1 gap-10 md:max-w-none md:grid-cols-[52ch_1fr] md:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="type-inter-10-caps">Research</p>
              <p className="type-inter-14 leading-[normal]">
                Shostakovich&apos;s Symphony No. 11 is also titled <span className="italic">The Year 1905.</span>
              </p>
              <p className="type-inter-14 leading-[normal]">
                This refers to the Russian Revolution of 1905, which is depicted with a storyline throughout the
                symphony.
              </p>
              <p className="type-inter-14 leading-[normal]">
                It includes the events of Bloody Sunday on 22 January 1905 in the second movement of the symphony,
                with the climax of the movement representing the gunfire at the battle.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="type-inter-10-caps">Ideation</p>
              <p className="type-inter-14 leading-[normal]">Postcard created in 1905.</p>
              <p className="type-inter-14 leading-[normal]">
                I chose to center my poster around this piece due to its implication of the 1905 massacre and its
                color scheme and aesthetic.
              </p>
              <p className="type-inter-10-caps leading-[normal]">Bowling, Artist Unknown. 1905.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
              <img alt="" className="size-full object-cover grayscale" src={hroReference} />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
              <img alt="" className="size-full object-cover opacity-90" src={hroReference} />
            </div>
          </div>
        </div>
      </TextSection>

      <TextSection id="reflections" title="3. Reflections">
        <div className="type-inter-14 flex max-w-[52ch] flex-col gap-4 leading-[normal]">
          <p>
            For this project with the Shostakovich symphony, it was my first time incorporating a pre-existing artwork
            into my own poster as a basis for the aesthetic and color palette used. I&apos;m happy with how the artwork
            interacts with the fonts and layering with the large &quot;1905&quot; text. If I were to workshop this piece
            further, I would find a more visibly accessible way to represent the logistical information (time, location,
            ticketing).
          </p>
          <p>
            I continued to use the opportunity to craft publications for the Harvard-Radcliffe Orchestra to experiment
            with my own versatility with graphic design tools and to push my own creativity and imagination with each
            new set of music that is performed. At the same time, with each poster, I&apos;ve found the tools that work the
            best for me and have slowly developed my style as a graphic designer in terms of workflow, patterns, and
            stylistic decisions.
          </p>
          <p>
            I&apos;m grateful to have the opportunity to work on graphic design within an organization that I love, and to
            be in an environment where my designs are seen by a large audience. As an artist, this is part of my
            mission: if my poster is the reason for even one person to see a symphony for the first time, then I would
            consider it a worthwhile effort and a success.
          </p>
        </div>

        <p className="mt-auto pt-16">
          <button type="button" onClick={backToTop} className="type-xanh-20 underline decoration-solid">
            Return to top
          </button>
        </p>
      </TextSection>
    </article>
  );
}
