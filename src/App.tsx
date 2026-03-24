import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

import arenal from "./assets/arenal.JPG";
import bsn from "./assets/bsn.jpeg";
import cafe from "./assets/cafe.JPG";
import crimlogo from "./assets/crimlogo.png";
import db from "./assets/db.jpg";
import desktop from "./assets/desktop.png";
import ghungroo from "./assets/ghungroo.JPG";
import jeux from "./assets/jeux.png";
import julia from "./assets/julia.jpeg";
import lucky from "./assets/lucky.jpeg";
import merch from "./assets/merch.png";
import noexitWide from "./assets/noexit_wide.png";
import orange from "./assets/orange.png";
import shosty from "./assets/shosty.png";
import square4x100 from "./assets/square@4x-100 1.png";
import tree from "./assets/tree.jpeg";
import * as styles from "./App.styles";
import { PhotoFrame } from "./components/PhotoFrame";
import { useSectionNavContext } from "./contexts/SectionNavContext";
import type { PhotoKey } from "./components/PhotoFrame";
import type { SectionNavItem } from "./sectionNavigation";

function Divider({ width = 395 }: { width?: number }) {
  return (
    <div style={styles.dividerContainer}>
      <div style={styles.dividerInner}>
        <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox={`0 0 ${width} 0.3`}>
          <line stroke="black" strokeWidth="0.3" x2={width} y1="0.15" y2="0.15" />
        </svg>
      </div>
    </div>
  );
}

function FullDivider() {
  return (
    <div style={styles.dividerContainer}>
      <div style={styles.dividerInner}>
        <svg style={{ display: "block", width: "100%", height: "0.3px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 1248 0.3">
          <line stroke="black" strokeWidth="0.3" x2="1248" y1="0.15" y2="0.15" />
        </svg>
      </div>
    </div>
  );
}

interface GridImagePlacement {
  photoId: PhotoKey;
  src: string;
  style: CSSProperties;
}

interface ProjectConfig {
  id: string;
  sidebarLabel: string;
  zIndex: number;
  hasProjectPage: boolean;
  title: ReactNode;
  subtitle: string;
  dates: ReactNode;
  images: GridImagePlacement[];
}

const HERO_SECTION: SectionNavItem = { id: "hero-section", label: "Rahul Prasad" };

const COLLAGE_IMAGES: GridImagePlacement[] = [
  { photoId: "arenal", src: arenal, style: { ...styles.collageCell, gridColumn: 1, gridRow: 1 } },
  { photoId: "ghungroo", src: ghungroo, style: { ...styles.collageCell, gridColumn: 3, gridRow: 3 } },
  { photoId: "db", src: db, style: { ...styles.collageCell, gridColumn: 5, gridRow: 4 } },
  { photoId: "cafe", src: cafe, style: { position: "absolute", left: "49px", width: "111.2px", height: "111.2px", top: "485px" } },
  { photoId: "bsn", src: bsn, style: { position: "absolute", left: "392px", width: "111.2px", height: "111.2px", top: "34px" } },
];

const PROJECTS: ProjectConfig[] = [
  {
    id: "harvard-crimson",
    sidebarLabel: "The Harvard Crimson",
    zIndex: 8,
    hasProjectPage: true,
    title: (
      <p style={{ margin: 0 }}>
        <Link to="/projects/harvard-crimson" style={{ color: "inherit", textDecoration: "underline" }}>
          The Harvard Crimson: UI/UX
        </Link>
        {" \u2192"}
      </p>
    ),
    subtitle: "Website | Visual Identity | Branding",
    dates: (
      <>
        <p style={{ margin: "0 0 1px 0" }}>Part-time: January 2024 - December 2025</p>
        <p style={{ margin: 0 }}>Full-time: June 2024 - August 2024</p>
      </>
    ),
    images: [
      { photoId: "desktop", src: desktop, style: { ...styles.collageCell, gridColumn: 2, gridRow: 1 } },
      { photoId: "crimlogo", src: crimlogo, style: { gridColumn: 4, gridRow: 2, alignSelf: "stretch", flexShrink: 0, position: "relative", width: "113.6px" } },
    ],
  },
  {
    id: "band-with-no-name",
    sidebarLabel: "The Band with No Name",
    zIndex: 6,
    hasProjectPage: true,
    title: (
      <div>
        <p style={{ margin: 0 }}>
          <Link to="/projects/band-with-no-name" style={{ color: "inherit", textDecoration: "underline" }}>
            The Band with No Name; Brand
          </Link>
        </p>
        <p style={{ margin: 0 }}>
          <Link to="/projects/band-with-no-name" style={{ color: "inherit", textDecoration: "underline" }}>
            Design
          </Link>
          {" \u2192"}
        </p>
      </div>
    ),
    subtitle: "Logo | Visual Identity | Posters | Social Media",
    dates: <p style={{ margin: 0 }}>June 2023 - Present</p>,
    images: [
      { photoId: "lucky", src: lucky, style: { ...styles.collageCell, gridColumn: 5, gridRow: 1 } },
      { photoId: "julia", src: julia, style: { ...styles.collageCell, gridColumn: 3, gridRow: 1 } },
      { photoId: "tree", src: tree, style: { ...styles.collageCell, gridColumn: 1, gridRow: 2 } },
    ],
  },
  {
    id: "harvard-radcliffe-orchestra",
    sidebarLabel: "Harvard-Radcliffe Orchestra",
    zIndex: 4,
    hasProjectPage: true,
    title: (
      <div>
        <p style={{ margin: 0 }}>
          <Link to="/projects/harvard-radcliffe-orchestra" style={{ color: "inherit", textDecoration: "underline" }}>
            Harvard-Radcliffe
          </Link>
        </p>
        <p style={{ margin: 0 }}>
          <Link to="/projects/harvard-radcliffe-orchestra" style={{ color: "inherit", textDecoration: "underline" }}>
            Orchestra: Graphic Design
          </Link>
          {" \u2192"}
        </p>
      </div>
    ),
    subtitle: "Posters | Experimental Design | Visual Identity",
    dates: <p style={{ margin: 0 }}>Part-time: January 2024 - March 2026</p>,
    images: [
      { photoId: "merch", src: merch, style: { ...styles.collageCell, gridColumn: 4, gridRow: 1 } },
      { photoId: "jeux", src: jeux, style: { ...styles.collageCell, gridColumn: 2, gridRow: 2 } },
      { photoId: "shosty", src: shosty, style: { ...styles.collageCell, gridColumn: 5, gridRow: 2 } },
    ],
  },
  {
    id: "lowell-house-opera",
    sidebarLabel: "Lowell House Opera",
    zIndex: 2,
    hasProjectPage: false,
    title: (
      <div>
        <p style={{ margin: 0 }}>Lowell House Opera: Graphic</p>
        <p style={{ margin: 0 }}>Design</p>
      </div>
    ),
    subtitle: "Posters | Experimental Design | Visual Identity",
    dates: <p style={{ margin: 0 }}>Commissioned Work: February 2026</p>,
    images: [
      { photoId: "square4x100", src: square4x100, style: { ...styles.collageCell, gridColumn: 2, gridRow: 1 } },
      { photoId: "noexitWide", src: noexitWide, style: { gridColumn: "4 / span 2", gridRow: 2, justifySelf: "stretch", position: "relative", flexShrink: 0, aspectRatio: "1176/401" } },
    ],
  },
];

function ImageGrid({ items, gridStyle }: { items: GridImagePlacement[]; gridStyle: CSSProperties }) {
  return (
    <div style={gridStyle}>
      {items.map(({ photoId, src, style }) => (
        <div key={`${photoId}-${src}`} style={style}>
          <PhotoFrame photoId={photoId} src={src} />
        </div>
      ))}
    </div>
  );
}

function PhotoCollage() {
  return <ImageGrid items={COLLAGE_IMAGES} gridStyle={styles.collageGrid} />;
}

interface HeroSectionProps {
  sectionId: string;
  sectionRef: (element: HTMLDivElement | null) => void;
}

function HeroSection({ sectionId, sectionRef }: HeroSectionProps) {
  return (
    <div id={sectionId} ref={sectionRef} style={{ ...styles.sectionRow, ...styles.featureSection, zIndex: 10 }}>
      <div style={styles.leftSpacer} />

      <div style={styles.heroStickyCenter}>
        <div style={styles.centerContent}>
          <div style={styles.nameBlock}>
            <p style={{ margin: "0 0 0 0" }}>Rahul</p>
            <p style={{ margin: 0 }}>Prasad</p>
          </div>

          <div style={styles.bodyText}>
            <p style={{ margin: "0 0 10px 0" }}>I'm a designer who loves making things look and feel good.</p>
            <p style={{ margin: "0 0 10px 0" }}>
              I believe in revealing{" "}
              <em style={{ fontStyle: "italic" }}>identity</em>
              {" "}in what I design,
            </p>
            <p style={{ margin: 0 }}>weaving metaphors into elements that imply the things that are important.</p>
          </div>

          <Divider width={395} />

          <div style={styles.educationText}>
            <p style={{ margin: "0 0 1px 0" }}>2022 - 2026</p>
            <p style={{ margin: "0 0 1px 0" }}>B.A. in Computer Science & Music</p>
            <p style={{ margin: 0 }}>Harvard College</p>
          </div>
        </div>

        <div style={styles.aboutWrap}>
          <p style={styles.aboutLink}>
            <span style={{ textDecoration: "underline" }}>about me</span>
            {" \u2192"}
          </p>
        </div>
      </div>

      <div style={styles.rightSpacer} />
    </div>
  );
}

interface FeatureRowProps {
  projectId: string;
  sectionRef: (element: HTMLDivElement | null) => void;
  zIndex: number;
  title: ReactNode;
  subtitle: string;
  dates: ReactNode;
  images: GridImagePlacement[];
}

function FeatureRow({ projectId, sectionRef, zIndex, title, subtitle, dates, images }: FeatureRowProps) {
  return (
    <div id={projectId} ref={sectionRef} style={{ ...styles.sectionRow, ...styles.featureSection, zIndex }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch" }}>
        <div style={{ height: "100%", position: "relative", flexShrink: 0, width: "181px" }} />
      </div>

      <div style={styles.stickyCenter}>
        <div style={styles.centerContent}>
          <div style={styles.featureTitle}>{title}</div>

          <div style={styles.featureSubtitle}>
            <p style={{ margin: "0 0 10px 0" }}>{subtitle}</p>
            <p style={{ margin: 0 }}>&nbsp;</p>
          </div>

          <Divider width={395} />

          <div style={styles.featureDates}>{dates}</div>
        </div>
      </div>

      <div style={styles.featureRight}>
        <ImageGrid items={images} gridStyle={styles.featureGrid} />
      </div>
    </div>
  );
}

export default function App() {
  const sectionNav = useSectionNavContext();
  const setSectionRef = sectionNav?.setSectionRef ?? (() => {});

  return (
    <>
      <PhotoCollage />

      <div style={styles.decorativeAssetWrap}>
        <div style={styles.decorativeAssetRotator}>
          <div style={styles.decorativeAssetFrame}>
            <PhotoFrame photoId="orange" src={orange} />
          </div>
        </div>
      </div>

      <HeroSection sectionId={HERO_SECTION.id} sectionRef={(element) => setSectionRef(HERO_SECTION.id, element)} />
      <FullDivider />

      {PROJECTS.map((project, index) => (
        <Fragment key={project.zIndex}>
          <FeatureRow
            projectId={project.id}
            sectionRef={(element) => setSectionRef(project.id, element)}
            zIndex={project.zIndex}
            title={project.title}
            subtitle={project.subtitle}
            dates={project.dates}
            images={project.images}
          />
          {index < PROJECTS.length - 1 && <FullDivider />}
        </Fragment>
      ))}
    </>
  );
}
