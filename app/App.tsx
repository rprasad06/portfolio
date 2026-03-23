import imgImg09001 from "figma:asset/3a5b82a9a4623f949a98665e8068e7b101e4f357.png";
import imgImg09441 from "figma:asset/cd38d1506cf9080758add7ab485d3118e99afd43.png";
import imgImg66782 from "figma:asset/016d1a2c97dc00d2cadf1f61a49cf9fc3b046e93.png";
import img20260218 from "figma:asset/b6dec957130867f5f642ae6002b148b194a4a72f.png";
import imgImg05591 from "figma:asset/ac3d04d91a7bcb425595120936cc6f0852f94760.png";
import imgAsset24X1 from "figma:asset/3984dc973dfec0764e39fa59ed686e37ec783136.png";
import imgCrimsonDesktopMockup1 from "figma:asset/1ca9bbe1257e5c4758df6001f5f2bdf9bbff2b07.png";
import imgCrimlogo1 from "figma:asset/e4f43bd231303a90ceecf24d24cfce08fcca3d61.png";
import imgDsc053451 from "figma:asset/3086412a4e5015fde31e692a4a38c59368db8514.png";
import imgImg62311 from "figma:asset/1c1a933a19931e26b6407e02f326cc24c5b0c7f3.png";
import imgDsc039831 from "figma:asset/9873ce9c130f897dcaedcd4e216ca67649780c65.png";
import imgInstagram4X1 from "figma:asset/842cd586b5ee6b8e227f271480f865baf9c046d4.png";
import imgMerchSubmissionV41 from "figma:asset/51cd615fc03b460b8af0e90e8f5c4816a5d81d3d.png";
import imgInstagram4X2 from "figma:asset/d4c354419d3c27bfa698218c31326f7abc980679.png";
import imgSquare4X1001 from "figma:asset/4e00ccddd301b32c0b7f2385bf41252ecea30474.png";
import img1175X4001001 from "figma:asset/ee2cc1fb40f8d19f94766c2c214a8c2b1c5eb479.png";

// ─── Shared style tokens ────────────────────────────────────────────────────
const fontXanh: React.CSSProperties = {
  fontFamily: "'Xanh Mono', monospace",
  fontStyle: "normal",
};
const fontInterLight: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontStyle: "normal",
};
const fontInterLightItalic: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontStyle: "italic",
};

// ─── Thin divider line ───────────────────────────────────────────────────────
function Divider({ width = 395 }: { width?: number }) {
  return (
    <div style={{ height: 0, position: "relative", flexShrink: 0, width: "100%" }}>
      <div style={{ position: "absolute", inset: "-0.3px 0 0 0" }}>
        <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox={`0 0 ${width} 0.3`}>
          <line stroke="black" strokeWidth="0.3" x2={width} y1="0.15" y2="0.15" />
        </svg>
      </div>
    </div>
  );
}

// ─── Full-width divider ──────────────────────────────────────────────────────
function FullDivider() {
  return (
    <div style={{ height: 0, position: "relative", flexShrink: 0, width: "100%" }}>
      <div style={{ position: "absolute", inset: "-0.3px 0 0 0" }}>
        <svg style={{ display: "block", width: "100%", height: "0.3px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 1248 0.3">
          <line stroke="black" strokeWidth="0.3" x2="1248" y1="0.15" y2="0.15" />
        </svg>
      </div>
    </div>
  );
}

// ─── Scattered photo collage (top-right) ─────────────────────────────────────
function PhotoCollage() {
  return (
    <div
      style={{
        position: "absolute",
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gridTemplateRows: "repeat(5, minmax(0, 1fr))",
        left: "calc(50% + 67px)",
        overflow: "clip",
        width: "596px",
        height: "596px",
        top: "79px",
        zIndex: 13,
      }}
    >
      {/* col-1 row-1 */}
      <div style={{ gridColumn: 1, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgImg09001} />
      </div>
      {/* col-3 row-3 */}
      <div style={{ gridColumn: 3, gridRow: 3, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "249.07%", left: "-49.13%", top: "-44.37%", width: "149.3%", maxWidth: "none" }} src={imgImg09441} />
        </div>
      </div>
      {/* col-5 row-4 */}
      <div style={{ gridColumn: 5, gridRow: 4, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgImg66782} />
      </div>
      {/* absolute floaters */}
      <div style={{ position: "absolute", left: "49px", width: "111.2px", height: "111.2px", top: "485px" }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={img20260218} />
      </div>
      <div style={{ position: "absolute", left: "392px", width: "111.2px", height: "111.2px", top: "34px" }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgImg05591} />
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        height: "2284px",
        left: 0,
        pointerEvents: "none",
        top: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "832px",
          pointerEvents: "auto",
          position: "sticky",
          top: 0,
          width: "240px",
          zIndex: 11,
          boxSizing: "border-box",
        }}
      >
        {/* Inner content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
            justifyContent: "center",
            overflow: "hidden",
            padding: "0 32px",
            position: "relative",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Photo + name */}
          <div
            style={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "column",
              gap: "32px",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              minHeight: "1px",
              minWidth: "1px",
              position: "relative",
              width: "100%",
            }}
          >
            <div style={{ position: "relative", flexShrink: 0, width: "105px", height: "105px" }}>
              <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgImg09001} />
            </div>
            <p
              style={{
                ...fontInterLight,
                fontSize: "12px",
                color: "black",
                lineHeight: "normal",
                margin: 0,
                textDecoration: "underline",
                textDecorationColor: "#4392dc",
                flexShrink: 0,
                width: "min-content",
                whiteSpace: "nowrap",
              }}
            >
              Rahul Prasad
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: 0, position: "relative", flexShrink: 0, width: "100%" }}>
            <div style={{ position: "absolute", inset: "-0.3px 0 0 0" }}>
              <svg style={{ display: "block", width: "100%", height: "0.3px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 176 0.3">
                <line stroke="black" strokeWidth="0.3" x2="176" y1="0.15" y2="0.15" />
              </svg>
            </div>
          </div>

          {/* Project list */}
          <div
            style={{
              display: "flex",
              flex: "1 0 0",
              flexDirection: "column",
              gap: "16px",
              alignItems: "flex-start",
              minHeight: "1px",
              minWidth: "1px",
              position: "relative",
              width: "100%",
              ...fontInterLight,
              fontSize: "12px",
              color: "black",
              lineHeight: "normal",
            }}
          >
            {["The Harvard Crimson", "The Band with No Name", "Harvard-Radcliffe Orchestra", "Lowell House Opera"].map((item) => (
              <p key={item} style={{ margin: 0, flexShrink: 0, width: "100%" }}>{item}</p>
            ))}
          </div>
        </div>

        {/* Blue border overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            border: "0.5px solid #4392dc",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

// ─── Hero / Top section ──────────────────────────────────────────────────────
function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "center",
        position: "relative",
        flexShrink: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      {/* Left spacer */}
      <div style={{ height: "216px", flexShrink: 0, width: "181px" }} />

      {/* Center: bio */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
          padding: "127px 0",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          width: "395px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "100%" }}>
          {/* Name */}
          <div style={{ ...fontXanh, fontSize: "26px", lineHeight: "normal", color: "black", height: "61px", width: "94px", flexShrink: 0, position: "relative" }}>
            <p style={{ margin: "0 0 0 0" }}>Rahul</p>
            <p style={{ margin: 0 }}>Prasad</p>
          </div>

          {/* Bio text */}
          <div style={{ ...fontInterLight, fontSize: "14px", color: "black", lineHeight: "normal", width: "100%" }}>
            <p style={{ margin: "0 0 10px 0" }}>I'm a designer who loves making things look and feel good.</p>
            <p style={{ margin: "0 0 10px 0" }}>
              I believe in revealing{" "}
              <em style={{ fontStyle: "italic" }}>identity</em>
              {" "}in what I design,
            </p>
            <p style={{ margin: 0 }}>weaving metaphors into elements that imply the things that are important.</p>
          </div>

          <Divider width={395} />

          {/* Education */}
          <div style={{ ...fontInterLight, fontSize: "14px", color: "black", lineHeight: "normal" }}>
            <p style={{ margin: "0 0 1px 0" }}>2022 – 2026</p>
            <p style={{ margin: "0 0 1px 0" }}>B.A. in Computer Science & Music</p>
            <p style={{ margin: 0 }}>Harvard College</p>
          </div>
        </div>

        {/* About me link */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            alignItems: "flex-start",
            paddingBottom: "32px",
            paddingTop: "64px",
            position: "relative",
            flexShrink: 0,
            width: "100%",
          }}
        >
          <p style={{ ...fontXanh, fontSize: "20px", color: "black", lineHeight: "normal", margin: 0, whiteSpace: "nowrap" }}>
            <span style={{ textDecoration: "underline" }}>about me</span>
            {" →"}
          </p>
        </div>
      </div>

      {/* Right spacer */}
      <div style={{ flex: "1 0 0", height: "254px", minHeight: "1px", minWidth: "1px", position: "relative" }} />
    </div>
  );
}

// ─── Project feature row ─────────────────────────────────────────────────────
interface FeatureRowProps {
  zIndex: number;
  title: React.ReactNode;
  subtitle: string;
  dates: React.ReactNode;
  images: React.ReactNode;
}

function FeatureRow({ zIndex, title, subtitle, dates, images }: FeatureRowProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "center",
        position: "relative",
        flexShrink: 0,
        width: "100%",
        zIndex,
      }}
    >
      {/* Left spacer */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch" }}>
        <div style={{ height: "100%", position: "relative", flexShrink: 0, width: "181px" }} />
      </div>

      {/* Center: project info */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          width: "395px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "100%" }}>
          {/* Title */}
          <div style={{ ...fontXanh, fontSize: "26px", color: "black", lineHeight: "normal", flexShrink: 0, position: "relative" }}>
            {title}
          </div>

          {/* Subtitle */}
          <div style={{ ...fontInterLightItalic, fontSize: "14px", color: "black", lineHeight: "normal", width: "100%" }}>
            <p style={{ margin: "0 0 10px 0" }}>{subtitle}</p>
            <p style={{ margin: 0 }}>&nbsp;</p>
          </div>

          <Divider width={395} />

          {/* Dates */}
          <div style={{ ...fontInterLight, fontSize: "14px", color: "black", lineHeight: "normal" }}>
            {dates}
          </div>
        </div>
      </div>

      {/* Right: images */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", flexShrink: 0, width: "608px" }}>
        <div
          style={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gridTemplateRows: "repeat(2, minmax(0, 1fr))",
            height: "232px",
            overflow: "clip",
            position: "relative",
            flexShrink: 0,
            width: "100%",
          }}
        >
          {images}
        </div>
      </div>
    </div>
  );
}

// ─── Project 1: Harvard Crimson ──────────────────────────────────────────────
function CrimsonImages() {
  return (
    <>
      <div style={{ gridColumn: 2, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgCrimsonDesktopMockup1} />
      </div>
      <div style={{ gridColumn: 4, gridRow: 2, alignSelf: "stretch", flexShrink: 0, position: "relative", width: "113.6px" }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgCrimlogo1} />
      </div>
    </>
  );
}

// ─── Project 2: Band with No Name ───────────────────────────────────────────
function BandImages() {
  return (
    <>
      <div style={{ gridColumn: 5, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "124.22%", left: "-30.99%", top: "-24.37%", width: "162%", maxWidth: "none" }} src={imgDsc053451} />
        </div>
      </div>
      <div style={{ gridColumn: 3, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "221.62%", left: "-56.73%", top: "-110.66%", width: "288.73%", maxWidth: "none" }} src={imgImg62311} />
        </div>
      </div>
      <div style={{ gridColumn: 1, gridRow: 2, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "155.7%", left: "-51.8%", top: "-21.95%", width: "203.51%", maxWidth: "none" }} src={imgDsc039831} />
        </div>
      </div>
    </>
  );
}

// ─── Project 3: Harvard-Radcliffe Orchestra ──────────────────────────────────
function OrchestraImages() {
  return (
    <>
      <div style={{ gridColumn: 4, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgInstagram4X1} />
      </div>
      <div style={{ gridColumn: 2, gridRow: 2, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "311.15%", left: "-121.82%", top: "-55.89%", width: "498.72%", maxWidth: "none" }} src={imgMerchSubmissionV41} />
        </div>
      </div>
      <div style={{ gridColumn: 5, gridRow: 2, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgInstagram4X2} />
      </div>
    </>
  );
}

// ─── Project 4: Lowell House Opera ──────────────────────────────────────────
function OperaImages() {
  return (
    <>
      <div style={{ gridColumn: 2, gridRow: 1, justifySelf: "stretch", alignSelf: "stretch", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", height: "102.34%", left: 0, top: "-1.17%", width: "100%", maxWidth: "none" }} src={imgSquare4X1001} />
        </div>
      </div>
      <div style={{ gridColumn: "4 / span 2", gridRow: 2, justifySelf: "stretch", position: "relative", flexShrink: 0, aspectRatio: "1176/401" }}>
        <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={img1175X4001001} />
      </div>
    </>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        isolation: "isolate",
        alignItems: "flex-start",
        padding: "96px",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative scattered photos */}
      <PhotoCollage />

      {/* Large decorative asset (background texture) */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          height: "1843.969px",
          alignItems: "center",
          justifyContent: "center",
          left: "-82px",
          top: "-968px",
          width: "1981.758px",
          zIndex: 12,
          pointerEvents: "none",
        }}
      >
        <div style={{ flexShrink: 0, transform: "rotate(-146.53deg)" }}>
          <div style={{ height: "1136.812px", position: "relative", width: "1624.131px" }}>
            <img alt="" style={{ position: "absolute", inset: 0, objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%" }} src={imgAsset24X1} />
          </div>
        </div>
      </div>

      {/* Sticky sidebar */}
      <Sidebar />

      {/* Hero / Bio */}
      <HeroSection />

      {/* Full-width divider */}
      <FullDivider />

      {/* Project 1: Harvard Crimson */}
      <FeatureRow
        zIndex={8}
        title={
          <p style={{ margin: 0 }}>
            <span style={{ textDecoration: "underline" }}>The Harvard Crimson: UI/UX</span>
            {" →"}
          </p>
        }
        subtitle="Website | Visual Identity | Branding"
        dates={
          <>
            <p style={{ margin: "0 0 1px 0" }}>Part-time: January 2024 – December 2025</p>
            <p style={{ margin: 0 }}>Full-time: June 2024 – August 2024</p>
          </>
        }
        images={<CrimsonImages />}
      />

      <FullDivider />

      {/* Project 2: Band with No Name */}
      <FeatureRow
        zIndex={6}
        title={
          <div>
            <p style={{ margin: "0 0 0 0", textDecoration: "underline" }}>The Band with No Name; Brand</p>
            <p style={{ margin: 0 }}>
              <span style={{ textDecoration: "underline" }}>Design</span>
              {" →"}
            </p>
          </div>
        }
        subtitle="Logo | Visual Identity | Posters | Social Media"
        dates={<p style={{ margin: 0 }}>June 2023 – Present</p>}
        images={<BandImages />}
      />

      <FullDivider />

      {/* Project 3: Harvard-Radcliffe Orchestra */}
      <FeatureRow
        zIndex={4}
        title={
          <div>
            <p style={{ margin: "0 0 0 0", textDecoration: "underline" }}>Harvard-Radcliffe</p>
            <p style={{ margin: 0 }}>
              <span style={{ textDecoration: "underline" }}>Orchestra: Graphic Design</span>
              {" →"}
            </p>
          </div>
        }
        subtitle="Posters | Experimental Design | Visual Identity"
        dates={<p style={{ margin: 0 }}>Part-time: January 2024 – March 2026</p>}
        images={<OrchestraImages />}
      />

      <FullDivider />

      {/* Project 4: Lowell House Opera */}
      <FeatureRow
        zIndex={2}
        title={
          <div>
            <p style={{ margin: "0 0 0 0" }}>Lowell House Opera: Graphic</p>
            <p style={{ margin: 0 }}>Design</p>
          </div>
        }
        subtitle="Posters | Experimental Design | Visual Identity"
        dates={<p style={{ margin: 0 }}>Commissioned Work: February 2026</p>}
        images={<OperaImages />}
      />
    </div>
  );
}
