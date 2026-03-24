import { Link, useLocation } from "react-router-dom";

import arenal from "../assets/arenal.JPG";
import * as styles from "../App.styles";
import type { SectionNavItem } from "../sectionNavigation";
import { PhotoFrame } from "./PhotoFrame";

export const PROJECT_IDS_WITH_PAGES = ["harvard-crimson", "band-with-no-name", "harvard-radcliffe-orchestra"] as const;

export interface SidebarProps {
  heroItem: SectionNavItem;
  items: SectionNavItem[];
  activeSectionId: string;
  onItemClick?: (sectionId: string) => void;
}

export function Sidebar({ heroItem, items, activeSectionId, onItemClick }: SidebarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleHeroClick = () => {
    if (isHome && onItemClick) {
      onItemClick(heroItem.id);
    }
  };

  const handleProjectClick = (item: SectionNavItem) => {
    if (isHome && onItemClick) {
      onItemClick(item.id);
    }
  };

  return (
    <div style={styles.sidebarWrap}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarInner}>
          <div style={styles.sidebarTopBlock}>
            <div style={{ position: "relative", flexShrink: 0, width: "105px", height: "105px" }}>
              <PhotoFrame photoId="arenal" src={arenal} />
            </div>
            {isHome ? (
              <button
                style={{
                  ...styles.sidebarName,
                  ...styles.sidebarNameButton,
                  ...(activeSectionId === heroItem.id ? styles.sidebarProjectButtonActive : null),
                }}
                type="button"
                onClick={handleHeroClick}
              >
                {heroItem.label}
              </button>
            ) : (
              <Link
                to="/"
                style={{
                  ...styles.sidebarName,
                  ...styles.sidebarNameButton,
                  ...styles.sidebarProjectButton,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {heroItem.label}
              </Link>
            )}
          </div>

          <div style={styles.dividerContainer}>
            <div style={styles.dividerInner}>
              <svg
                style={{ display: "block", width: "100%", height: "100%" }}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 176 0.3"
              >
                <line stroke="black" strokeWidth="0.3" x2={176} y1="0.15" y2="0.15" />
              </svg>
            </div>
          </div>

          <div style={styles.sidebarProjectList}>
            {items.map((item) => {
              const hasPage = PROJECT_IDS_WITH_PAGES.includes(item.id as (typeof PROJECT_IDS_WITH_PAGES)[number]);
              const isActive = activeSectionId === item.id;

              if (isHome) {
                return (
                  <button
                    key={item.id}
                    style={{
                      ...styles.sidebarProjectButton,
                      ...(isActive ? styles.sidebarProjectButtonActive : null),
                    }}
                    type="button"
                    onClick={() => handleProjectClick(item)}
                  >
                    {item.label}
                  </button>
                );
              }

              if (hasPage) {
                return (
                  <Link
                    key={item.id}
                    to={`/projects/${item.id}`}
                    style={{
                      ...styles.sidebarProjectButton,
                      ...(isActive ? styles.sidebarProjectButtonActive : null),
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.id}
                  to="/"
                  style={{
                    ...styles.sidebarProjectButton,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div aria-hidden="true" style={styles.sidebarBorder} />
      </div>
    </div>
  );
}
