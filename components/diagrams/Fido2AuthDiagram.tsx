/**
 * FIDO2 authentication migration architecture diagram.
 */
export function Fido2AuthDiagram() {
  return (
    <svg viewBox="0 0 360 180" aria-label="FIDO2 authentication architecture diagram">
      <rect x="10" y="72" width="60" height="36" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="40" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        React
      </text>

      <rect x="82" y="72" width="74" height="36" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="119" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Rails API
      </text>

      <rect x="168" y="72" width="72" height="36" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="204" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Cognito
      </text>

      <rect x="252" y="72" width="56" height="36" rx="8" fill="var(--bg-card)" stroke="var(--custom-border)" />
      <text x="280" y="94" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        Lambda
      </text>

      <rect x="262" y="126" width="84" height="32" rx="8" fill="var(--bg-card)" stroke="var(--lime)" />
      <text x="304" y="146" textAnchor="middle" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-display)">
        DynamoDB + Redis
      </text>

      <line x1="70" y1="90" x2="82" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="82,90 76,86 76,94" fill="var(--lime)" />

      <line x1="156" y1="90" x2="168" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="168,90 162,86 162,94" fill="var(--lime)" />

      <line x1="240" y1="90" x2="252" y2="90" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="252,90 246,86 246,94" fill="var(--lime)" />

      <line x1="280" y1="108" x2="280" y2="126" stroke="var(--lime)" strokeWidth="1.5" />
      <polygon points="280,126 276,120 284,120" fill="var(--lime)" />
    </svg>
  );
}
