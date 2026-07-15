// Path data mirrors the brand-os skill's assets/icons/*.svg (original
// line-art, not copied from any existing icon library). Linework uses
// currentColor so it inherits the Icon component's `color` prop; the red
// accent is fixed to the brand red, matching the source assets.

export function SavingsPaths() {
  return (
    <>
      <g fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 76c0-22 18-38 40-38s40 16 40 38c0 10-6 18-14 22v14H86v-10H50v10H38V98c-8-4-14-12-14-22Z" />
        <circle cx={88} cy={52} r={4} fill="currentColor" stroke="none" />
        <path d="M104 60l14-6-8 16" stroke="var(--ocbc-red)" />
      </g>
      <rect x={52} y={30} width={14} height={10} rx={2} fill="var(--ocbc-red)" />
    </>
  );
}

export function GrowthPaths() {
  return (
    <>
      <g stroke="currentColor" strokeWidth={6} strokeLinecap="round">
        <line x1={20} y1={108} x2={108} y2={108} />
      </g>
      <rect x={30} y={80} width={14} height={28} fill="currentColor" />
      <rect x={52} y={64} width={14} height={44} fill="currentColor" />
      <rect x={74} y={44} width={14} height={64} fill="var(--ocbc-red)" />
      <path d="M30 60 L58 40 L74 52 L100 24" fill="none" stroke="var(--ocbc-red)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88 24 L100 24 L100 36" fill="none" stroke="var(--ocbc-red)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export function ProtectionPaths() {
  return (
    <>
      <path
        d="M64 18 L100 32 V62 C100 88 84 104 64 112 C44 104 28 88 28 62 V32 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <path d="M46 62 L58 74 L84 46" fill="none" stroke="var(--ocbc-red)" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export function WalletPaths() {
  return (
    <>
      <rect x={20} y={40} width={88} height={60} rx={10} fill="none" stroke="currentColor" strokeWidth={6} />
      <path d="M20 56 L88 56 Q100 56 100 44" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
      <circle cx={86} cy={72} r={10} fill="var(--ocbc-red)" />
    </>
  );
}

export function GoalPaths() {
  return (
    <>
      <circle cx={64} cy={64} r={44} fill="none" stroke="currentColor" strokeWidth={6} />
      <circle cx={64} cy={64} r={26} fill="none" stroke="currentColor" strokeWidth={6} />
      <circle cx={64} cy={64} r={8} fill="var(--ocbc-red)" />
      <path d="M92 36 L106 22 M106 22 L102 34 L114 30 Z" fill="var(--ocbc-red)" stroke="var(--ocbc-red)" strokeWidth={4} strokeLinejoin="round" />
    </>
  );
}

export function PartnershipPaths() {
  return (
    <>
      <circle cx={50} cy={64} r={30} fill="none" stroke="currentColor" strokeWidth={6} />
      <circle cx={78} cy={64} r={30} fill="none" stroke="var(--ocbc-red)" strokeWidth={6} />
    </>
  );
}
