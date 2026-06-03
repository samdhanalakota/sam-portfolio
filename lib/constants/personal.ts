/**
 * Personal contact constants loaded from environment variables.
 * All values are set in .env.local and exposed via NEXT_PUBLIC_ prefix.
 */
export const PERSONAL = {
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
} as const;
