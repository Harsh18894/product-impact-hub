import { PALETTE } from "./shared";

export type CareerNodeVariant = "builder" | "educator" | "product" | "education" | "future-ai";

export const careerNodeColor: Record<CareerNodeVariant, string> = {
  builder: PALETTE.teal,
  educator: PALETTE.indigo,
  product: PALETTE.indigo,
  education: PALETTE.muted,
  "future-ai": PALETTE.indigo,
};

const glyphs: Record<CareerNodeVariant, JSX.Element> = {
  builder: (
    <>
      <path d="M12 4 L18 16 H6 Z" />
      <circle cx={12} cy={12} r={2} fill="currentColor" stroke="none" />
    </>
  ),
  educator: (
    <>
      <path d="M4 6 C7 4.5 10 4.5 12 6 C14 4.5 17 4.5 20 6 V17 C17 15.5 14 15.5 12 17 C10 15.5 7 15.5 4 17 Z" />
      <path d="M12 6 V17" />
    </>
  ),
  product: (
    <>
      <rect x={4} y={9} width={12} height={9} rx={1.5} />
      <rect x={8} y={4} width={12} height={9} rx={1.5} fill="hsl(var(--background))" />
    </>
  ),
  education: (
    <>
      <path d="M2 8 L12 4 L22 8 L12 12 Z" />
      <path d="M7 10.5 V16 C7 17.5 16.5 17.5 17 16 V10.5" />
    </>
  ),
  "future-ai": (
    <>
      <circle cx={6} cy={12} r={2} fill="currentColor" stroke="none" />
      <circle cx={18} cy={7} r={2} fill="currentColor" stroke="none" />
      <circle cx={18} cy={17} r={2} fill="currentColor" stroke="none" />
      <path d="M8 12 L16 7 M8 12 L16 17" />
    </>
  ),
};

const CareerNodeIcon = ({ variant, className }: { variant: CareerNodeVariant; className?: string }) => (
  <svg
    viewBox="0 0 24 22"
    className={className}
    fill="none"
    stroke={careerNodeColor[variant]}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {glyphs[variant]}
  </svg>
);

export default CareerNodeIcon;
