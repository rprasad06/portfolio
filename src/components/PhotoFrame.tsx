import type { CSSProperties } from "react";

import * as styles from "../App.styles";

export type PhotoKey =
  | "arenal"
  | "ghungroo"
  | "db"
  | "cafe"
  | "bsn"
  | "desktop"
  | "crimlogo"
  | "lucky"
  | "julia"
  | "tree"
  | "merch"
  | "jeux"
  | "shosty"
  | "square4x100"
  | "noexitWide"
  | "orange";

const PHOTO_FRAME_PRESETS: Record<PhotoKey, { zoom: number; x: number; y: number }> = {
  arenal: { zoom: 1, x: 0, y: 0 },
  ghungroo: { zoom: 1, x: 0, y: 0 },
  db: { zoom: 1.8, x: -20, y: 40 },
  cafe: { zoom: 1, x: 0, y: 0 },
  bsn: { zoom: 1, x: 0, y: 0 },
  desktop: { zoom: 1, x: 0, y: 0 },
  crimlogo: { zoom: 1, x: 0, y: 0 },
  lucky: { zoom: 1, x: 0, y: 0 },
  julia: { zoom: 2, x: 0, y: 0 },
  tree: { zoom: 1.5, x: 30, y: -40 },
  merch: { zoom: 1, x: 0, y: 0 },
  jeux: { zoom: 1, x: 0, y: 0 },
  shosty: { zoom: 1, x: 0, y: 0 },
  square4x100: { zoom: 1, x: 0, y: 0 },
  noexitWide: { zoom: 1, x: 0, y: 0 },
  orange: { zoom: 1, x: 0, y: 0 },
};

function photoStyle(key: PhotoKey): CSSProperties {
  const preset = PHOTO_FRAME_PRESETS[key];
  return {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    objectFit: "cover",
    objectPosition: "50% 50%",
    transform: `translate(${preset.x}px, ${preset.y}px) scale(${preset.zoom})`,
    transformOrigin: "center",
  };
}

export function PhotoFrame({ photoId, src }: { photoId: PhotoKey; src: string }) {
  return (
    <div style={styles.photoFrameContainer}>
      <img alt="" style={photoStyle(photoId)} src={src} />
    </div>
  );
}
