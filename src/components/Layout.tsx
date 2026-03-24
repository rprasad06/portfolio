import { Outlet, useLocation } from "react-router-dom";

import * as styles from "../App.styles";
import { useSectionNavContext } from "../contexts/SectionNavContext";
import type { SectionNavItem } from "../sectionNavigation";
import { PROJECT_IDS_WITH_PAGES } from "./Sidebar";
import { Sidebar } from "./Sidebar";

const SIDEBAR_ITEMS: SectionNavItem[] = [
  { id: "harvard-crimson", label: "The Harvard Crimson" },
  { id: "band-with-no-name", label: "The Band with No Name" },
  { id: "harvard-radcliffe-orchestra", label: "Harvard-Radcliffe Orchestra" },
  { id: "lowell-house-opera", label: "Lowell House Opera" },
];

const HERO_ITEM: SectionNavItem = { id: "hero-section", label: "Rahul Prasad" };

function getActiveSectionId(pathname: string): string {
  if (pathname === "/") return "hero-section";
  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (match) {
    const projectId = match[1];
    if (PROJECT_IDS_WITH_PAGES.includes(projectId as (typeof PROJECT_IDS_WITH_PAGES)[number])) {
      return projectId;
    }
  }
  return "hero-section";
}

export function Layout() {
  const location = useLocation();
  const sectionNav = useSectionNavContext();
  const pathBasedId = getActiveSectionId(location.pathname);
  const activeSectionId =
    location.pathname === "/" && sectionNav ? sectionNav.activeSectionId : pathBasedId;
  const onItemClick =
    location.pathname === "/" && sectionNav ? sectionNav.jumpToSection : undefined;

  return (
    <div style={styles.appRoot}>
      <Sidebar
        heroItem={HERO_ITEM}
        items={SIDEBAR_ITEMS}
        activeSectionId={activeSectionId}
        onItemClick={onItemClick}
      />
      <Outlet />
    </div>
  );
}
