/**
 * Smoothly scrolls the page to a section by its DOM id.
 * @param id - The id attribute of the target section element
 * @returns void
 *
 * @example
 * scrollToSection("projects");
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) {
    console.warn(`[scrollToSection] No element found with id: "${id}"`);
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
