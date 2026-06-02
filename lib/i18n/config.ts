/**
 * Lightweight translation utility that mimics the i18next API.
 * Supports dot-notation key access into locale JSON files.
 * Easy to swap for react-i18next when multi-language support is needed.
 */

import heroEn from "./locales/en/hero.json";
import navbarEn from "./locales/en/navbar.json";
import footerEn from "./locales/en/footer.json";
import aboutEn from "./locales/en/about.json";
import projectsEn from "./locales/en/projects.json";
import skillsEn from "./locales/en/skills.json";
import journeyEn from "./locales/en/journey.json";
import contactEn from "./locales/en/contact.json";

/** Supported namespaces */
export type Namespace =
  | "hero"
  | "navbar"
  | "footer"
  | "about"
  | "projects"
  | "skills"
  | "journey"
  | "contact";

/** All locale data keyed by namespace */
const locales: Record<Namespace, Record<string, unknown>> = {
  hero: heroEn,
  navbar: navbarEn,
  footer: footerEn,
  about: aboutEn,
  projects: projectsEn,
  skills: skillsEn,
  journey: journeyEn,
  contact: contactEn,
};

type TranslationOptions = {
  returnObjects?: boolean;
};

type TranslationFunction = {
  (key: string): unknown;
  <T>(key: string, options: { returnObjects: true }): T;
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
  return function t<T = string>(
    key: string,
    options?: TranslationOptions
  ): unknown | T {
    const value = resolvePath(data, key);
    if (options?.returnObjects) return value as T;
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value;
    if (typeof value === "object" && value !== null) return value;
    console.warn(
      `[i18n] Missing translation for key: "${key}" in namespace: "${ns}"`
    );
    return key;
  } as TranslationFunction;
}
