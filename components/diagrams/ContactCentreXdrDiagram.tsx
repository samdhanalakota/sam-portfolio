/**
 * Contact centre to XDR integration architecture diagram.
 */
export function ContactCentreXdrDiagram() {
  return (
    <svg
      viewBox="0 0 360 180"
      aria-label="Contact centre to XDR integration architecture diagram"
    >
      <rect x="12" y="72" width="72" height="36" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="48" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Genesys
      </text>

      <rect x="96" y="72" width="58" height="36" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="125" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        SQS
      </text>

      <rect x="168" y="72" width="64" height="36" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="200" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        NestJS
      </text>

      <rect x="246" y="72" width="100" height="36" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="296" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Taegis XDR
      </text>

      <line x1="84" y1="90" x2="96" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="96,90 90,86 90,94" fill="var(--lime)" />

      <line x1="154" y1="90" x2="168" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="168,90 162,86 162,94" fill="var(--lime)" />

      <line x1="232" y1="90" x2="246" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="246,90 240,86 240,94" fill="var(--lime)" />

      <text x="179" y="52" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        3-hop identity
      </text>
      <line x1="48" y1="64" x2="296" y2="64" stroke="var(--custom-border)" strokeWidth="1.5" />
    </svg>
  );
}
