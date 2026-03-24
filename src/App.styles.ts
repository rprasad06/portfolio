export const fontXanh: React.CSSProperties = {
  fontFamily: "'Xanh Mono', monospace",
  fontStyle: "normal",
};

export const fontInterLight: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontStyle: "normal",
};

export const fontInterLightItalic: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontStyle: "italic",
};

export const appRoot: React.CSSProperties = {
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
};

export const photoFrameContainer: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  pointerEvents: "none",
};

export const dividerContainer: React.CSSProperties = {
  height: 0,
  position: "relative",
  flexShrink: 0,
  width: "100%",
};

export const dividerInner: React.CSSProperties = {
  position: "absolute",
  inset: "-0.3px 0 0 0",
};

export const collageGrid: React.CSSProperties = {
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
};

export const collageCell: React.CSSProperties = {
  justifySelf: "stretch",
  alignSelf: "stretch",
  position: "relative",
  flexShrink: 0,
};

export const sidebarWrap: React.CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  pointerEvents: "none",
};

export const sidebar: React.CSSProperties = {
  backgroundColor: "white",
  height: "100dvh",
  minHeight: "100vh",
  pointerEvents: "auto",
  position: "sticky",
  top: 0,
  width: "240px",
  zIndex: 11,
  boxSizing: "border-box",
};

export const sidebarInner: React.CSSProperties = {
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
};

export const sidebarTopBlock: React.CSSProperties = {
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
};

export const sidebarName: React.CSSProperties = {
  ...fontInterLight,
  fontSize: "12px",
  color: "black",
  lineHeight: "normal",
  margin: 0,
  flexShrink: 0,
  width: "min-content",
  whiteSpace: "nowrap",
};

export const sidebarProjectList: React.CSSProperties = {
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
};

export const sidebarProjectButton: React.CSSProperties = {
  ...fontInterLight,
  fontSize: "12px",
  color: "black",
  lineHeight: "normal",
  margin: 0,
  padding: 0,
  border: "none",
  background: "transparent",
  textAlign: "left",
  width: "100%",
  cursor: "pointer",
  textDecorationLine: "none",
  textDecorationStyle: "solid",
  textDecorationColor: "#4392dc",
  textDecorationThickness: "1.4px",
  textUnderlineOffset: "3px",
  textDecorationSkipInk: "none",
};

export const sidebarNameButton: React.CSSProperties = {
  ...sidebarProjectButton,
  width: "min-content",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

export const sidebarProjectButtonActive: React.CSSProperties = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "#4392dc",
  textDecorationThickness: "1.4px",
  textUnderlineOffset: "3px",
  textDecorationSkipInk: "none",
};

export const sidebarBorder: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  border: "0.5px solid #4392dc",
  pointerEvents: "none",
};

export const sectionRow: React.CSSProperties = {
  display: "flex",
  gap: "32px",
  alignItems: "center",
  position: "relative",
  flexShrink: 0,
  width: "100%",
};

export const leftSpacer: React.CSSProperties = {
  height: "216px",
  flexShrink: 0,
  width: "181px",
};

export const stickyCenter: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexShrink: 0,
  position: "sticky",
  top: 0,
  width: "395px",
};

export const heroStickyCenter: React.CSSProperties = {
  ...stickyCenter,
  gap: "10px",
  padding: "127px 0",
};

export const centerContent: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  alignItems: "flex-start",
  position: "relative",
  flexShrink: 0,
  width: "100%",
};

export const nameBlock: React.CSSProperties = {
  ...fontXanh,
  fontSize: "26px",
  lineHeight: "normal",
  color: "black",
  height: "61px",
  width: "94px",
  flexShrink: 0,
  position: "relative",
};

export const bodyText: React.CSSProperties = {
  ...fontInterLight,
  fontSize: "14px",
  color: "black",
  lineHeight: "normal",
  width: "100%",
};

export const educationText: React.CSSProperties = {
  ...fontInterLight,
  fontSize: "14px",
  color: "black",
  lineHeight: "normal",
};

export const aboutWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  alignItems: "flex-start",
  paddingBottom: "32px",
  paddingTop: "64px",
  position: "relative",
  flexShrink: 0,
  width: "100%",
};

export const aboutLink: React.CSSProperties = {
  ...fontXanh,
  fontSize: "20px",
  color: "black",
  lineHeight: "normal",
  margin: 0,
  whiteSpace: "nowrap",
};

export const rightSpacer: React.CSSProperties = {
  flex: "1 0 0",
  height: "254px",
  minHeight: "1px",
  minWidth: "1px",
  position: "relative",
};

export const featureTitle: React.CSSProperties = {
  ...fontXanh,
  fontSize: "26px",
  color: "black",
  lineHeight: "normal",
  flexShrink: 0,
  position: "relative",
};

export const featureSubtitle: React.CSSProperties = {
  ...fontInterLightItalic,
  fontSize: "14px",
  color: "black",
  lineHeight: "normal",
  width: "100%",
};

export const featureDates: React.CSSProperties = {
  ...fontInterLight,
  fontSize: "14px",
  color: "black",
  lineHeight: "normal",
};

export const featureRight: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  flexShrink: 0,
  width: "608px",
};

export const featureGrid: React.CSSProperties = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gridTemplateRows: "repeat(2, minmax(0, 1fr))",
  height: "232px",
  overflow: "clip",
  position: "relative",
  flexShrink: 0,
  width: "100%",
};

export const featureSection: React.CSSProperties = {
  scrollMarginTop: "16px",
};

export const decorativeAssetWrap: React.CSSProperties = {
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
};

export const decorativeAssetRotator: React.CSSProperties = {
  flexShrink: 0,
  transform: "rotate(-146.53deg)",
};

export const decorativeAssetFrame: React.CSSProperties = {
  height: "1136.812px",
  position: "relative",
  width: "1624.131px",
};
