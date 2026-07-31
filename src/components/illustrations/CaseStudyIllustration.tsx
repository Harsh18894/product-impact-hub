import { PALETTE } from "./shared";

export type CaseStudyIllustrationVariant =
  | "funnel-growth"
  | "pmf-convergence"
  | "conversion-funnel"
  | "user-journey"
  | "quality-filter";

interface CaseStudyIllustrationProps {
  variant: CaseStudyIllustrationVariant;
  colors: [string, string];
  className?: string;
}

// A shut-down high-ticket funnel gives way to a self-serve AI flywheel that grows.
const FunnelGrowth = ({ colors }: { colors: [string, string] }) => (
  <>
    <g opacity={0.4}>
      <path d="M14 18 H70 L56 42 H28 Z" fill="none" stroke={PALETTE.muted} strokeWidth={1.4} strokeDasharray="3 3" />
      <path d="M28 42 H56 L47 58 H37 Z" fill="none" stroke={PALETTE.muted} strokeWidth={1.4} strokeDasharray="3 3" />
      <path d="M30 26 L54 50 M54 26 L30 50" stroke={PALETTE.muted} strokeWidth={1.6} strokeLinecap="round" />
    </g>

    <path d="M78 48 H104" stroke={colors[1]} strokeWidth={1.8} strokeLinecap="round" />
    <path d="M97 42 L104 48 L97 54" stroke={colors[1]} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    <circle cx={150} cy="52" r={26} fill="none" stroke={colors[0]} strokeWidth={1.8} strokeDasharray="4 3.5" />
    <path d="M150 26 A26 26 0 0 1 173 65" stroke={colors[0]} strokeWidth={2.4} fill="none" strokeLinecap="round" />
    <path d="M167 59 L173 65 L179 57" stroke={colors[0]} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    <g>
      <circle cx={150} cy="22" r={10} fill={colors[1]} fillOpacity={0.16} stroke={colors[1]} strokeWidth={1.4} />
      <path d="M150 17 L152 21 L150 25 L148 21 Z" fill={colors[1]} />
    </g>
    <g>
      <circle cx={122} cy="72" r={10} fill={colors[1]} fillOpacity={0.16} stroke={colors[1]} strokeWidth={1.4} />
      <path d="M118 69 H126 M118 73 H126 M118 77 H122" stroke={colors[1]} strokeWidth={1.2} strokeLinecap="round" />
    </g>
    <g>
      <circle cx={178} cy="72" r={10} fill={colors[1]} fillOpacity={0.16} stroke={colors[1]} strokeWidth={1.4} />
      <path
        d="M173 68 H183 A2 2 0 0 1 185 70 V76 A2 2 0 0 1 183 78 H177 L173 82 V78 A2 2 0 0 1 171 76 V70 A2 2 0 0 1 173 68 Z"
        fill={colors[1]}
      />
    </g>

    <path
      d="M16 196 C 60 190, 92 162, 118 148 C 138 137, 148 122, 168 104"
      stroke={colors[0]}
      strokeWidth={2.4}
      strokeLinecap="round"
      fill="none"
    />
    <path d="M160 106 L168 104 L166 112" stroke={colors[0]} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx={16} cy="196" r={3.5} fill={colors[0]} />
    <circle cx={65} cy="184" r={2.5} fill={colors[0]} />
    <circle cx={110} cy="152" r={2.5} fill={colors[0]} />
  </>
);

// Several rough attempts, each less faded than the last, converge on a validated bullseye — then scale.
const PmfConvergence = ({ colors }: { colors: [string, string] }) => (
  <>
    <rect x={16} y="20" width="30" height="22" rx="4" fill="none" stroke={PALETTE.muted} strokeWidth={1.3} strokeDasharray="2 3" opacity={0.55} />
    <path d="M46 34 Q 95 52 132 92" stroke={PALETTE.muted} strokeWidth={1.2} strokeDasharray="2 3" fill="none" opacity={0.55} />

    <path d="M30 78 L46 68 L62 78 V96 L46 106 L30 96 Z" fill="none" stroke={colors[1]} strokeWidth={1.4} opacity={0.6} />
    <path d="M60 90 Q 100 98 130 106" stroke={colors[1]} strokeWidth={1.3} strokeDasharray="2 3" fill="none" opacity={0.65} />

    <path d="M26 150 L46 136 L66 150 L58 172 H34 Z" fill={colors[1]} fillOpacity={0.18} stroke={colors[1]} strokeWidth={1.6} />
    <path d="M62 156 Q 96 132 130 118" stroke={colors[1]} strokeWidth={1.5} fill="none" />

    <circle cx={150} cy="108" r={30} fill="none" stroke={colors[0]} strokeWidth={1.4} opacity={0.35} />
    <circle cx={150} cy="108" r={20} fill="none" stroke={colors[0]} strokeWidth={1.8} opacity={0.65} />
    <circle cx={150} cy="108" r={10} fill={colors[0]} fillOpacity={0.16} stroke={colors[0]} strokeWidth={2} />
    <path d="M144 108 L148 113 L157 97" stroke={colors[0]} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />

    <g fill={colors[0]}>
      <rect x={150} y="182" width={8} height={12} rx={1.6} opacity={0.5} />
      <rect x={161} y="172" width={8} height={22} rx={1.6} opacity={0.7} />
      <rect x={172} y="160" width={8} height={34} rx={1.6} />
    </g>
  </>
);

// A literal, multi-stage marketing funnel — click, form, payment, handshake.
const ConversionFunnel = ({ colors }: { colors: [string, string] }) => (
  <>
    <path d="M14 18 H140 L120 50 H34 Z" fill="none" stroke={colors[0]} strokeWidth={1.6} />
    <path d="M34 50 H120 L100 80 H54 Z" fill="none" stroke={colors[0]} strokeWidth={1.6} />
    <path d="M54 80 H100 L84 108 H70 Z" fill={colors[0]} fillOpacity={0.12} stroke={colors[0]} strokeWidth={1.6} />
    <path d="M70 108 H84 L79 132 H75 Z" fill={colors[1]} fillOpacity={0.35} stroke={colors[1]} strokeWidth={1.6} />
    <circle cx={77} cy="138" r={3.6} fill={colors[1]} />

    <g transform="translate(160, 32)">
      <circle r={11} fill={colors[0]} fillOpacity={0.12} stroke={colors[0]} strokeWidth={1.4} />
      <path d="M-4 -6 L5 -1 L1 1 L4 7 L1 8 L-2 2 L-4 6 Z" fill={colors[0]} />
    </g>
    <g transform="translate(160, 64)">
      <circle r={11} fill={colors[0]} fillOpacity={0.12} stroke={colors[0]} strokeWidth={1.4} />
      <rect x={-6} y="-8" width={12} height={16} rx={2} fill="none" stroke={colors[0]} strokeWidth={1.3} />
      <path d="M-3 -3 H3 M-3 1 H3 M-3 5 H1" stroke={colors[0]} strokeWidth={1.1} strokeLinecap="round" />
    </g>
    <g transform="translate(160, 96)">
      <circle r={11} fill={colors[1]} fillOpacity={0.14} stroke={colors[1]} strokeWidth={1.4} />
      <text x={0} y={4} textAnchor="middle" fontSize={12} fontWeight={700} fill={colors[1]}>
        ₹
      </text>
    </g>
    <g transform="translate(160, 128)">
      <circle r={11} fill={colors[1]} fillOpacity={0.14} stroke={colors[1]} strokeWidth={1.4} />
      <path d="M-6 0 H6" stroke={colors[1]} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M1 -5 L7 0 L1 5" stroke={colors[1]} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    <path d="M16 188 C 36 182, 50 168, 68 158" stroke={colors[0]} strokeWidth={2.2} strokeLinecap="round" fill="none" />
    <path d="M60 160 L68 158 L67 166" stroke={colors[0]} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

// Three parallel tracks — learning, placement, live sessions — merge into one dashboard.
const UserJourney = ({ colors }: { colors: [string, string] }) => (
  <>
    <g transform="translate(24, 40)">
      <circle r={11} fill={colors[0]} fillOpacity={0.14} stroke={colors[0]} strokeWidth={1.5} />
      <path d="M-3 -5 L5 0 L-3 5 Z" fill={colors[0]} />
    </g>
    <path d="M36 40 Q 80 26 128 58" stroke={colors[0]} strokeWidth={1.5} strokeDasharray="3 4" fill="none" />
    <circle cx={72} cy="32" r={3} fill={colors[0]} />
    <circle cx={104} cy="44" r={3} fill={colors[0]} />

    <g transform="translate(24, 110)">
      <circle r={11} fill={colors[1]} fillOpacity={0.14} stroke={colors[1]} strokeWidth={1.5} />
      <rect x={-6} y="-4" width={12} height={9} rx={1.6} fill="none" stroke={colors[1]} strokeWidth={1.3} />
      <path d="M-3 -4 V-6 A3 3 0 0 1 3 -6 V-4" stroke={colors[1]} strokeWidth={1.2} fill="none" />
    </g>
    <path d="M36 110 Q 80 110 128 100" stroke={colors[1]} strokeWidth={1.5} strokeDasharray="3 4" fill="none" />
    <circle cx={72} cy="110" r={3} fill={colors[1]} />
    <circle cx={104} cy="103" r={3} fill={colors[1]} />

    <g transform="translate(24, 180)">
      <circle r={11} fill={colors[0]} fillOpacity={0.14} stroke={colors[0]} strokeWidth={1.5} />
      <rect x={-6} y="-6" width={12} height={12} rx={1.6} fill="none" stroke={colors[0]} strokeWidth={1.3} />
      <path d="M-6 -2 H6" stroke={colors[0]} strokeWidth={1.1} />
    </g>
    <path d="M36 180 Q 80 192 128 148" stroke={colors[0]} strokeWidth={1.5} strokeDasharray="3 4" fill="none" />
    <circle cx={72} cy="188" r={3} fill={colors[0]} />
    <circle cx={104} cy="168" r={3} fill={colors[0]} />

    <rect x={138} y="82" width={54} height="60" rx={7} fill="none" stroke={colors[1]} strokeWidth={1.8} />
    <path d="M147 98 H179 M147 109 H179 M147 120 H165" stroke={colors[1]} strokeWidth={1.4} strokeLinecap="round" opacity={0.7} />
    <path d="M150 131 L157 137 L172 120" stroke={colors[0]} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

// Many candidates pass through two competency gates; only the qualified few get placed.
const QualityFilter = ({ colors }: { colors: [string, string] }) => (
  <>
    <g fill={PALETTE.muted} fillOpacity={0.6}>
      {[24, 44, 64, 84, 104, 124, 144, 164].map((x, i) => (
        <circle key={x} cx={x} cy={18 + (i % 2) * 8} r={3.2} />
      ))}
    </g>

    <path d="M14 32 H174 L130 78 H58 Z" fill="none" stroke={colors[0]} strokeWidth={1.6} />
    <path d="M58 78 H130" stroke={colors[0]} strokeWidth={1.3} strokeDasharray="4 3" />
    <g stroke={PALETTE.muted} strokeWidth={1.4} strokeLinecap="round">
      <path d="M40 88 L46 94 M46 88 L40 94" />
      <path d="M150 93 L156 99 M156 93 L150 99" />
    </g>

    <path d="M58 78 H130 L108 116 H80 Z" fill="none" stroke={colors[0]} strokeWidth={1.6} />
    <path d="M80 116 H108" stroke={colors[1]} strokeWidth={1.3} strokeDasharray="4 3" />
    <g stroke={PALETTE.muted} strokeWidth={1.4} strokeLinecap="round">
      <path d="M62 126 L68 132 M68 126 L62 132" />
    </g>

    <path d="M80 116 H108 L96 144 H92 Z" fill={colors[1]} fillOpacity={0.25} stroke={colors[1]} strokeWidth={1.6} />

    <g fill={colors[1]}>
      <circle cx={88} cy="158" r={3.6} />
      <circle cx={94} cy="164" r={3.6} />
      <circle cx={100} cy="158" r={3.6} />
    </g>

    <g transform="translate(94, 192)">
      <circle r={17} fill={colors[1]} fillOpacity={0.15} stroke={colors[1]} strokeWidth={1.8} />
      <path d="M-6 0 L-1 5 L8 -7" stroke={colors[1]} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </>
);

const CaseStudyIllustration = ({ variant, colors, className }: CaseStudyIllustrationProps) => {
  const scenes: Record<CaseStudyIllustrationVariant, JSX.Element> = {
    "funnel-growth": <FunnelGrowth colors={colors} />,
    "pmf-convergence": <PmfConvergence colors={colors} />,
    "conversion-funnel": <ConversionFunnel colors={colors} />,
    "user-journey": <UserJourney colors={colors} />,
    "quality-filter": <QualityFilter colors={colors} />,
  };

  return (
    <svg
      viewBox="0 0 200 220"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {scenes[variant]}
    </svg>
  );
};

export default CaseStudyIllustration;
