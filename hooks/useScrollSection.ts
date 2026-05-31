'use client';

import { useEffect, useState } from "react";

/**
 * Hook that tracks which section is currently visible in the viewport.
 * Uses IntersectionObserver for performance.
 *
 * @param sectionIds - Array of section ids to observe
 * @returns The id of the currently visible section
 *
 * @example
 * const activeSection = useScrollSection(["intro", "about", "projects"]);
 */
export function useScrollSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-35% 0px -45% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
