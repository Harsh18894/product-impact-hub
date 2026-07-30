import { PALETTE } from "./shared";

export type PhilosophyIllustrationVariant = "reframe" | "research" | "filter";

const Reframe = () => (
  <>
    {/* broken funnel */}
    <path
      d="M10 14 H62 L48 40 H24 Z"
      fill="none"
      stroke={PALETTE.muted}
      strokeWidth={1.5}
      strokeDasharray="3 4"
    />
    <path d="M24 40 L18 54" stroke={PALETTE.muted} strokeWidth={1.5} strokeDasharray="2 3" />
    <circle cx={16} cy={58} r={2.5} fill={PALETTE.muted} />

    {/* arrow */}
    <path d="M92 32 H124" stroke={PALETTE.indigo} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M118 26 L124 32 L118 38" stroke={PALETTE.indigo} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* reframed clean funnel */}
    <path d="M148 14 H208 L192 40 H164 Z" fill={PALETTE.tealLight} stroke={PALETTE.teal} strokeWidth={1.5} />
    <path d="M164 40 H192 L182 58 H174 Z" fill={PALETTE.teal} fillOpacity={0.4} stroke={PALETTE.teal} strokeWidth={1.5} />
    <path d="M178 58 C 182 72, 196 76, 206 66" stroke={PALETTE.teal} strokeWidth={2} strokeLinecap="round" fill="none" />
    <path d="M200 62 L206 66 L202 72" stroke={PALETTE.teal} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

const Research = () => (
  <>
    {/* research: magnifying glass */}
    <circle cx={26} cy={30} r={14} fill="none" stroke={PALETTE.indigo} strokeWidth={1.5} />
    <line x1={36} y1={40} x2={46} y2={50} stroke={PALETTE.indigo} strokeWidth={1.5} strokeLinecap="round" />
    <circle cx={22} cy={26} r={2} fill={PALETTE.indigo} fillOpacity={0.5} />
    <circle cx={30} cy={34} r={1.5} fill={PALETTE.indigo} fillOpacity={0.5} />

    <path d="M64 30 H92" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M86 24 L92 30 L86 36" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* insight: small radiating burst */}
    <circle cx={120} cy={30} r={10} fill={PALETTE.tealLight} stroke={PALETTE.teal} strokeWidth={1.5} />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 120 + Math.cos(rad) * 13;
      const y1 = 30 + Math.sin(rad) * 13;
      const x2 = 120 + Math.cos(rad) * 18;
      const y2 = 30 + Math.sin(rad) * 18;
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PALETTE.teal} strokeWidth={1.5} strokeLinecap="round" />;
    })}

    <path d="M150 30 H178" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M172 24 L178 30 L172 36" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* decision: small card with check */}
    <rect x={196} y={14} width={32} height={32} rx={6} fill={PALETTE.indigoLight} stroke={PALETTE.indigo} strokeWidth={1.5} />
    <path d="M204 30 L210 36 L222 22" stroke={PALETTE.indigo} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

const Filter = () => (
  <>
    {/* unfiltered row */}
    {[10, 24, 38, 52, 66].map((x, i) => (
      <circle key={`u-${x}`} cx={x} cy={12 + (i % 2) * 4} r={2.5} fill={PALETTE.muted} fillOpacity={0.6} />
    ))}
    <path d="M78 16 H108" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 3" />
    <path d="M102 10 L108 16 L102 22" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {[128, 140, 152].map((x) => (
      <g key={`x-${x}`} transform={`translate(${x}, 10)`}>
        <line x1={0} y1={0} x2={6} y2={6} stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={6} y1={0} x2={0} y2={6} stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
      </g>
    ))}
    <text x={172} y={17} fontSize={9} fill={PALETTE.muted}>
      weak outcomes
    </text>

    <line x1={0} y1={40} x2={228} y2={40} stroke={PALETTE.border} strokeWidth={1} />

    {/* filtered row */}
    {[10, 24, 38, 52, 66].map((x, i) => (
      <circle key={`f-${x}`} cx={x} cy={52 + (i % 2) * 4} r={2.5} fill={PALETTE.indigo} fillOpacity={0.55} />
    ))}
    <path d="M78 56 H92 L82 76 H70 Z" fill={PALETTE.tealLight} stroke={PALETTE.teal} strokeWidth={1.5} />
    <path d="M100 66 H124" stroke={PALETTE.teal} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M118 60 L124 66 L118 72" stroke={PALETTE.teal} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {[140, 154].map((x) => (
      <circle key={`o-${x}`} cx={x} cy={66} r={3} fill={PALETTE.teal} />
    ))}
    <text x={172} y={70} fontSize={9} fill={PALETTE.tealText}>
      better outcomes
    </text>
  </>
);

const scenes: Record<PhilosophyIllustrationVariant, JSX.Element> = {
  reframe: <Reframe />,
  research: <Research />,
  filter: <Filter />,
};

const viewBoxes: Record<PhilosophyIllustrationVariant, string> = {
  reframe: "0 0 228 78",
  research: "0 0 228 48",
  filter: "0 0 228 84",
};

const PhilosophyIllustration = ({
  variant,
  className,
}: {
  variant: PhilosophyIllustrationVariant;
  className?: string;
}) => (
  <svg viewBox={viewBoxes[variant]} className={className} fill="none" aria-hidden="true">
    {scenes[variant]}
  </svg>
);

export default PhilosophyIllustration;
