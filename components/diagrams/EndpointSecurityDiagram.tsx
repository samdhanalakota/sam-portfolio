/**
 * Endpoint security mobile architecture diagram.
 */
export function EndpointSecurityDiagram() {
  return (
    <svg viewBox="0 0 360 180" aria-label="Endpoint security mobile architecture diagram">
      <rect x="120" y="20" width="120" height="36" rx="10" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="180" y="42" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        React Native
      </text>

      <rect x="94" y="78" width="56" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="122" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        iOS
      </text>

      <rect x="210" y="78" width="56" height="30" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="238" y="97" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Android
      </text>

      <rect x="36" y="130" width="118" height="32" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="95" y="150" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Protection
      </text>

      <rect x="206" y="130" width="118" height="32" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="265" y="150" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Device Mgmt
      </text>

      <line x1="180" y1="56" x2="122" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="180" y1="56" x2="238" y2="78" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="122" y1="108" x2="95" y2="130" stroke="var(--lime)" strokeWidth="1.5" />
      <line x1="238" y1="108" x2="265" y2="130" stroke="var(--lime)" strokeWidth="1.5" />
    </svg>
  );
}
