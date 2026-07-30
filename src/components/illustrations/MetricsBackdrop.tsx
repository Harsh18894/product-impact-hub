// Decorative texture for the (navy) Impact strip — a faint growth curve + tick marks.
// Purely presentational; sits behind the metric tiles at very low opacity.
const MetricsBackdrop = () => (
  <svg
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M0 170 C 150 160, 250 120, 380 100 C 520 78, 620 130, 760 90 C 900 52, 1000 70, 1200 20"
      stroke="hsl(var(--teal-vivid))"
      strokeWidth={2}
      strokeLinecap="round"
    />
    {[120, 340, 560, 780, 1000].map((x, i) => (
      <circle key={x} cx={x} cy={140 - i * 18} r={3} fill="hsl(var(--teal-vivid))" />
    ))}
  </svg>
);

export default MetricsBackdrop;
