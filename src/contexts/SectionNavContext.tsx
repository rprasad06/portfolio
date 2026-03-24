import { createContext, useContext, type ReactNode } from "react";

import { useSectionNavigation } from "../sectionNavigation";

interface SectionNavContextValue {
  activeSectionId: string;
  setSectionRef: (sectionId: string, element: HTMLDivElement | null) => void;
  jumpToSection: (sectionId: string) => void;
}

const SectionNavContext = createContext<SectionNavContextValue | null>(null);

const SECTION_IDS = [
  "hero-section",
  "harvard-crimson",
  "band-with-no-name",
  "harvard-radcliffe-orchestra",
  "lowell-house-opera",
];

export function SectionNavProvider({ children }: { children: ReactNode }) {
  const value = useSectionNavigation({
    sectionIds: SECTION_IDS,
    defaultSectionId: "hero-section",
    topSectionId: "hero-section",
  });
  return (
    <SectionNavContext.Provider value={value}>{children}</SectionNavContext.Provider>
  );
}

export function useSectionNavContext() {
  return useContext(SectionNavContext);
}
