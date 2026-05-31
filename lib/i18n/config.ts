/**
 * Lightweight translation utility that mimics the i18next API.
 * Supports dot-notation key access into locale JSON files.
 * Easy to swap for react-i18next when multi-language support is needed.
 */

import heroEn from "./locales/en/hero.json";
import navbarEn from "./locales/en/navbar.json";
import footerEn from "./locales/en/footer.json";

/** Supported namespaces */
export type Namespace = "hero" | "navbar" | "footer";

/** All locale data keyed by namespace */
const locales: Record<Namespace, Record<string, unknown>> = {
  hero: heroEn,
  navbar: navbarEn,
  footer: footerEn,
};

/**
 * Safely resolves nested object values using dot notation.
 * @param source - Locale dictionary
 * @param path - Dot-notation key path
 * @returns Resolved value or undefined
 */
function resolvePath(source: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (typeof acc !== "object" || acc === null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, source);
}

/**
 * Returns a translation function for the given namespace.
 * @param ns - The namespace to load translations from
 * @returns A function t(key) that returns the translated string
 *
 * @example
 * const t = getTranslations("hero");
 * t("headline_1");
 */
export function getTranslations(ns: Namespace) {
  const data = locales[ns];
  return function t(key: string): string {
    const value = resolvePath(data, key);
    if (typeof value === "string") return value;
    console.warn(
      `[i18n] Missing translation for key: "${key}" in namespace: "${ns}"`
    );
    return key;
  };
}
