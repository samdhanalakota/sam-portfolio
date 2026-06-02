/**
 * Modular MDR platform architecture diagram.
 */
export function MdrPlatformDiagram() {
  return (
    <svg viewBox="0 0 360 180" aria-label="MDR platform architecture diagram">
      <rect x="12" y="22" width="74" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="49" y="41" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Cases
      </text>

      <rect x="98" y="22" width="78" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="137" y="41" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Dashboards
      </text>

      <rect x="188" y="22" width="74" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="225" y="41" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Reports
      </text>

      <rect x="274" y="22" width="74" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="311" y="41" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Users
      </text>

      <rect x="120" y="78" width="120" height="32" rx="10" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="180" y="98" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Jotai State
      </text>

      <rect x="92" y="128" width="176" height="32" rx="10" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="180" y="148" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        GraphQL + WebSockets
      </text>

      <line x1="49" y1="52" x2="150" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="137" y1="52" x2="167" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="225" y1="52" x2="193" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="311" y1="52" x2="210" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="180" y1="110" x2="180" y2="128" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="180,128 176,122 184,122" fill="var(--lime)" />
    </svg>
  );
}
