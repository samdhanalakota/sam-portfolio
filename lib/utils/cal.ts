/**
 * Initializes the Cal.com embed API and renders an inline calendar.
 * Must be called after the DOM element with the given selector exists.
 *
 * @param calLink - Cal.com event link (e.g. "username/event-name")
 * @param elementSelector - CSS selector or element ID for the embed container
 */
export function initCalEmbed(calLink: string, elementSelector: string): void {
  const C = window;
  const A = "https://app.cal.com/embed/embed.js";
  const L = "init";

  const p = (a: CalApi, ar: unknown) => {
    a.q.push(ar);
  };

  const d = document;

  C.Cal =
    C.Cal ||
    (function (...args: unknown[]) {
      const cal = C.Cal;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const scriptEl = d.createElement("script");
        scriptEl.src = A;
        scriptEl.async = true;
        d.head.appendChild(scriptEl);
        cal.loaded = true;
      }
      if (args[0] === L) {
        const api: CalApi = function (...apiArgs: unknown[]) {
          p(api, apiArgs);
        } as CalApi;
        const namespace = args[1];
        api.q = api.q || [];
        api.ns = api.ns || {};
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], args);
          p(cal, ["initNamespace", namespace]);
        } else {
          p(cal, args);
        }
        return;
      }
      p(cal, args);
    } as CalApi);

  window.Cal("init", "30min", { origin: "https://cal.com" });
  window.Cal.ns["30min"]("inline", {
    elementOrSelector: elementSelector,
    calLink,
    layout: "month_view",
    config: { layout: "month_view" },
  });
  window.Cal.ns["30min"]("ui", {
    theme: "dark",
    hideEventTypeDetails: true,
    layout: "month_view",
    styles: {
      branding: { brandColor: "#84cc16" },
      body: { background: "transparent" },
    },
  });
}
