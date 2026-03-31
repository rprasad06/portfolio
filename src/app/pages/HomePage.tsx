import { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router';

function NameSection() {
  return (
    <div
      className="flex h-[var(--viewport-height)] w-full min-w-0 max-w-[715px] shrink-0 flex-col items-start"
      data-name="name section"
    >
      {/* Name Header */}
      <div
        className="flex h-[var(--unit)] pb-[16px] w-full shrink-0 items-end"
        data-name="1/2vh"
      >
        <div className="type-xanh-26 h-[61px] w-[94px] shrink-0 leading-[0]">
          <p className="mb-0 leading-[normal]">Rahul</p>
          <p className="leading-[normal]">Prasad</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="relative min-h-px min-w-px w-full flex-[1_0_0]">
        <div className="flex size-full flex-col gap-[22px] items-start">
          <div className="min-w-full w-[min-content] shrink-0 leading-[0]">
            <p className="type-inter-14 mb-[10px] leading-[normal]">
              I'm a designer who loves making things look and feel good.
            </p>
            <p className="type-inter-14 mb-[10px]">
              I believe in revealing{" "}
              <span className="type-inter-14-italic">identity</span>
              {" "}in what I design,
            </p>
            <p className="type-inter-14">
              weaving metaphors into elements that imply the things that are important.
            </p>
          </div>

          {/* Divider Line */}
          <div className="relative h-0 w-[488px] shrink-0">
            <div className="absolute inset-[-0.3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 488 0.3">
                <line stroke="var(--stroke-0, black)" strokeWidth="0.3" x2="488" y1="0.15" y2="0.15" />
              </svg>
            </div>
          </div>

          {/* Education */}
          <div className="type-inter-14 min-w-full w-[min-content] shrink-0 leading-[0]">
            <p className="mb-px leading-[normal]">2022 – 2026</p>
            <p className="mb-px leading-[normal]">B.A. in Computer Science & Music</p>
            <p className="leading-[normal]">Harvard College</p>
          </div>

          {/* About Me Link */}
          <div
            className="flex w-full shrink-0 flex-col items-start pt-[64px]"
            data-name="left"
          >
            <p className="type-xanh-20 shrink-0 whitespace-nowrap text-center leading-[0]">
              <span className="underline decoration-solid">about me</span>
              <span className="leading-[normal]"> →</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  to: string;
  title: string;
  subtitle: string;
  timeframe: string;
  tags: string;
}

function ProjectCard({ to, title, subtitle, timeframe, tags }: ProjectCardProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start justify-center">
      {/* Title Section */}
      <div
        className="flex h-[var(--unit)] pb-[16px] w-full max-w-[395px] shrink-0 flex-col items-start justify-end"
        data-name="title"
      >
        <Link
          to={to}
          className="type-xanh-26 shrink-0 whitespace-nowrap leading-[0] text-inherit no-underline"
        >
          <p className="mb-0 underline decoration-solid leading-[normal]">{title}:</p>
          <p>
            <span className="underline decoration-solid leading-[normal]">{subtitle}</span>
            <span className="leading-[normal]"> →</span>
          </p>
        </Link>
      </div>

      {/* Body Section */}
      <div
        className="type-inter-14 sticky top-0 flex w-full max-w-[395px] shrink-0 flex-col gap-[32px] items-start"
        data-name="body"
      >
        <div
          className="min-w-full w-[min-content] shrink-0 leading-[1.5]"
          dangerouslySetInnerHTML={{ __html: timeframe }}
        />
        <p className="type-inter-10-caps shrink-0 whitespace-pre-wrap leading-[normal]">
          {tags}
        </p>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 'harvard-crimson',
    path: '/harvard-crimson',
    title: 'The Harvard Crimson',
    subtitle: 'UI/UX Design',
    timeframe: 'Part-time: January 2024 – December 2025<br />Full-time: June 2024 – August 2024',
    tags: 'UI/UX, Website, visual identity, branding',
  },
  {
    id: 'band-no-name',
    path: '/band-no-name',
    title: 'The Band with No Name',
    subtitle: 'Brand Design',
    timeframe: 'June 2023 – Present',
    tags: 'LOGO, VISUAL IDENTITY, MARKETING, SOCIAL MEDIA',
  },
  {
    id: 'hro',
    path: '/hro',
    title: 'Harvard-Radcliffe Orchestra',
    subtitle: 'Graphic Design',
    timeframe: 'Part-time: January 2024 – March 2026',
    tags: 'Posters, experimental design, visual identity',
  },
  {
    id: 'lowell-opera',
    path: '/lowell-opera',
    title: 'Lowell House Opera',
    subtitle: 'Graphic Design',
    timeframe: 'Commissioned work; February 2026',
    tags: 'Posters, experimental design, visual IDENTITY',
  },
] as const;

/** Sidebar WORK links — same order and labels as project sections on the home page. */
export const workNavItems = projects.map((p) => ({ id: p.id, name: p.title }));

export default function HomePage() {
  const location = useLocation();

  // Use `window.location.hash`, not `location.hash`: React Router’s location can omit the
  // fragment on client-side navigations, while the URL bar still has `#…` (reload then uses
  // the real URL, so native fragment scroll masked the bug).
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
    <div
      className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start"
      data-name="body"
    >
      <NameSection />
      {projects.map((project) => {
        const { id, path, ...card } = project;
        return (
          <section key={id} id={id} className="scroll-mt-[var(--nav-height)] w-full">
            <ProjectCard to={path} {...card} />
          </section>
        );
      })}
    </div>
  );
}
