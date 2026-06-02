/**
 * EA Play social platform architecture diagram.
 */
export function EaPlayDiagram() {
  return (
    <svg viewBox="0 0 360 180" aria-label="EA Play social platform architecture diagram">
      <rect x="12" y="76" width="74" height="34" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="49" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        React/TS
      </text>

      <rect x="100" y="76" width="90" height="34" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="145" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        WebSockets
      </text>

      <rect x="204" y="26" width="74" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="241" y="45" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Messaging
      </text>

      <rect x="204" y="76" width="74" height="34" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="241" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Presence
      </text>

      <rect x="204" y="130" width="74" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="241" y="149" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Friends
      </text>

      <rect x="288" y="66" width="62" height="54" rx="10" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="319" y="95" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Cube
      </text>
      <text x="319" y="107" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Framework
      </text>

      <line x1="86" y1="93" x2="100" y2="93" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="100,93 94,89 94,97" fill="var(--lime)" />

      <line x1="190" y1="93" x2="204" y2="41" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="190" y1="93" x2="204" y2="93" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="190" y1="93" x2="204" y2="145" stroke="var(--lime)" strokeWidth="1.5" />

      <line x1="278" y1="41" x2="288" y2="82" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="278" y1="93" x2="288" y2="93" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="278" y1="145" x2="288" y2="104" stroke="var(--lime)" strokeWidth="1.5" />
    </svg>
  );
}
