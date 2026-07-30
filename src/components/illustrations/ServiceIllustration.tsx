import { PALETTE } from "./shared";

export type ServiceIllustrationVariant = "activation" | "growth-metrics" | "zero-to-one";

const Activation = () => (
  <>
    <path
      d="M8 50 Q 30 20, 52 38 T 96 16"
      stroke={PALETTE.teal}
      strokeWidth={1.5}
      strokeDasharray="3 5"
      strokeLinecap="round"
      fill="none"
    />
    {[
      [8, 50],
      [52, 38],
      [74, 26],
    ].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r={4} fill={PALETTE.teal} />
    ))}
    <g transform="translate(92, 8)">
      <circle r={9} fill={PALETTE.indigoLight} stroke={PALETTE.indigo} strokeWidth={1.5} />
      <path d="M-3 0 L-1 3 L4 -3" stroke={PALETTE.indigo} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </>
);

const GrowthMetrics = () => (
  <>
    {[
      { x: 10, h: 16 },
      { x: 28, h: 26 },
      { x: 46, h: 20 },
      { x: 64, h: 34 },
      { x: 82, h: 44 },
    ].map(({ x, h }) => (
      <rect key={x} x={x} y={56 - h} width={12} height={h} rx={2} fill={PALETTE.indigo} fillOpacity={0.14} />
    ))}
    <path
      d="M10 44 L28 34 L46 38 L64 20 L88 10"
      stroke={PALETTE.teal}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx={88} cy={10} r={3} fill={PALETTE.teal} />
  </>
);

const ZeroToOne = () => (
  <>
    <g transform="translate(4, 6)">
      <circle cx={8} cy={8} r={8} fill={PALETTE.indigoLight} stroke={PALETTE.indigo} strokeWidth={1.5} />
      <path d="M8 4 V8 L11 11" stroke={PALETTE.indigo} strokeWidth={1.5} strokeLinecap="round" />
    </g>
    <path d="M28 14 H42" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
    <rect x={44} y={4} width={20} height={20} rx={4} fill="none" stroke={PALETTE.teal} strokeWidth={1.5} strokeDasharray="2 3" />
    <path d="M70 14 H84" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
    <rect x={86} y={2} width={24} height={24} rx={5} fill={PALETTE.tealLight} stroke={PALETTE.teal} strokeWidth={1.5} />
    <path d="M116 14 H128" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" />
    <path d="M122 8 L128 14 L122 20" stroke={PALETTE.muted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x={132} y={0} width={28} height={28} rx={6} fill={PALETTE.indigo} fillOpacity={0.9} />
    <path d="M140 14 L145 19 L153 8" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

const scenes: Record<ServiceIllustrationVariant, { el: JSX.Element; viewBox: string }> = {
  activation: { el: <Activation />, viewBox: "0 0 108 60" },
  "growth-metrics": { el: <GrowthMetrics />, viewBox: "0 0 100 60" },
  "zero-to-one": { el: <ZeroToOne />, viewBox: "0 0 162 30" },
};

const ServiceIllustration = ({
  variant,
  className,
}: {
  variant: ServiceIllustrationVariant;
  className?: string;
}) => (
  <svg viewBox={scenes[variant].viewBox} className={className} fill="none" aria-hidden="true">
    {scenes[variant].el}
  </svg>
);

export default ServiceIllustration;
