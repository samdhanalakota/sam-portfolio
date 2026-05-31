/**
 * @fileoverview Navigation constants used across Navbar and Footer.
 * @module lib/constants/navigation
 */

/**
 * Navigation items for the main menu.
 * Each item maps a display label to a section id.
 */
export interface NavItem {
  /** Display label shown in the navbar */
  label: string;
  /** DOM id of the target section */
  id: string;
}

/** Primary navigation items used in Navbar and Footer */
export const NAV_ITEMS: NavItem[] = [
  { label: "INTRO", id: "intro" },
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "SKILLS", id: "skills" },
  { label: "JOURNEY", id: "journey" },
  { label: "CONTACT", id: "contact" },
] as const;

/** Social links used in Footer and Hero */
export const SOCIAL_LINKS = {
  email: "mailto:samdsiva1994@gmail.com",
  linkedin: "https://linkedin.com/in/sam-dhanalakota-946649147",
  github: "https://github.com/samdhanalakota",
} as const;
