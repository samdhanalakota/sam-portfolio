/**
 * Type declarations for Cal.com embed API.
 * Loaded via script tag from https://app.cal.com/embed/embed.js
 */

declare global {
  interface CalApi {
    (method: string, ...args: unknown[]): void;
    loaded?: boolean;
    ns: Record<string, CalApi>;
    q: unknown[];
  }

  interface Window {
    Cal: CalApi;
  }
}

export {};
