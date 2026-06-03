/**
 * Type declarations for Cal.com embed API.
 * Loaded via script tag from https://app.cal.com/embed/embed.js
 */

interface CalApi {
  (method: string, ...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[];
}

declare global {
  interface Window {
    Cal: CalApi;
  }
}

export {};
