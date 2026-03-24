import { useCallback, useEffect, useRef, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

interface UseSectionNavigationOptions {
  sectionIds: string[];
  defaultSectionId: string;
  /** When jumping to this section, scroll to top of page instead of element */
  topSectionId?: string;
}

const CLICK_OVERRIDE_MS = 600;

export function useSectionNavigation({
  sectionIds,
  defaultSectionId,
  topSectionId,
}: UseSectionNavigationOptions) {
  const [activeSectionId, setActiveSectionId] = useState(defaultSectionId);
  const sectionMapRef = useRef(new Map<string, HTMLDivElement>());
  const clickOverrideRef = useRef(false);
  const overrideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (overrideTimeoutRef.current) {
        clearTimeout(overrideTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => sectionMapRef.current.get(id))
      .filter((section): section is HTMLDivElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickOverrideRef.current) return;

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const nextId = visibleEntries[0]?.target.id;
        if (nextId) {
          setActiveSectionId(nextId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -15% 0px",
        threshold: [0.1, 0.2, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  const setSectionRef = useCallback((sectionId: string, element: HTMLDivElement | null) => {
    if (element) {
      sectionMapRef.current.set(sectionId, element);
      return;
    }

    sectionMapRef.current.delete(sectionId);
  }, []);

  const jumpToSection = useCallback(
    (sectionId: string) => {
      if (sectionId === topSectionId) {
        if (overrideTimeoutRef.current) {
          clearTimeout(overrideTimeoutRef.current);
        }
        clickOverrideRef.current = true;
        setActiveSectionId(sectionId);
        window.scrollTo({ top: 0, behavior: "smooth" });
        overrideTimeoutRef.current = setTimeout(() => {
          clickOverrideRef.current = false;
          overrideTimeoutRef.current = null;
        }, CLICK_OVERRIDE_MS);
        return;
      }

      const targetSection = sectionMapRef.current.get(sectionId);
      if (!targetSection) {
        return;
      }

      if (overrideTimeoutRef.current) {
        clearTimeout(overrideTimeoutRef.current);
      }

      clickOverrideRef.current = true;
      setActiveSectionId(sectionId);
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      overrideTimeoutRef.current = setTimeout(() => {
        clickOverrideRef.current = false;
        overrideTimeoutRef.current = null;
      }, CLICK_OVERRIDE_MS);
    },
    [topSectionId],
  );

  return {
    activeSectionId,
    setSectionRef,
    jumpToSection,
  };
}
