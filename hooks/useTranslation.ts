'use client';

import { getTranslations, type Namespace } from "@/lib/i18n/config";

/**
 * Returns translation function for the given namespace.
 * Mimics react-i18next useTranslation API.
 *
 * @param ns - Namespace matching a locale JSON file
 * @returns Object with t() translation function
 *
 * @example
 * const { t } = useTranslation("hero");
 * t("headline_1");
 */
export function useTranslation(ns: Namespace) {
  const t = getTranslations(ns);
  return { t };
}
