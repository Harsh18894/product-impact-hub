import { PALETTE } from "./shared";

type ThumbnailTheme = "ai" | "growth" | "strategy" | "research" | "analytics" | "execution" | "leadership";

const THEME_STYLES: Record<ThumbnailTheme, { bg: string; fg: string }> = {
  ai: { bg: PALETTE.purpleLight, fg: PALETTE.purple },
  growth: { bg: PALETTE.wineLight, fg: PALETTE.wine },
  strategy: { bg: "hsl(var(--secondary))", fg: PALETTE.navy },
  research: { bg: PALETTE.tealLight, fg: PALETTE.teal },
  analytics: { bg: PALETTE.tealLight, fg: PALETTE.teal },
  execution: { bg: "hsl(var(--secondary))", fg: PALETTE.navy },
  leadership: { bg: "hsl(var(--secondary))", fg: PALETTE.navy },
};

const ICONS: Record<ThumbnailTheme, JSX.Element> = {
  ai: (
    <>
      <circle cx={16} cy={32} r={4} fill="currentColor" />
      <circle cx={44} cy={16} r={4} fill="currentColor" />
      <circle cx={44} cy={48} r={4} fill="currentColor" />
      <path d="M20 32 L40 16 M20 32 L40 48" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
  growth: (
    <path
      d="M8 46 L20 34 L30 40 L48 14"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  strategy: (
    <>
      <circle cx={12} cy={40} r={3} fill="currentColor" />
      <circle cx={30} cy={16} r={3} fill="currentColor" />
      <circle cx={48} cy={38} r={3} fill="currentColor" />
      <path d="M12 40 Q 20 20 30 16 T 48 38" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 4" fill="none" />
    </>
  ),
  research: (
    <>
      <circle cx={24} cy={24} r={16} stroke="currentColor" strokeWidth={2.5} fill="none" />
      <line x1={36} y1={36} x2={48} y2={48} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
    </>
  ),
  analytics: (
    <>
      <rect x={8} y={30} width={9} height={18} fill="currentColor" opacity={0.5} />
      <rect x={22} y={20} width={9} height={28} fill="currentColor" opacity={0.75} />
      <rect x={36} y={10} width={9} height={38} fill="currentColor" />
    </>
  ),
  execution: (
    <>
      <rect x={8} y={8} width={40} height={40} rx={8} stroke="currentColor" strokeWidth={2.5} fill="none" />
      <path d="M17 28 L24 35 L39 18" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  leadership: (
    <>
      <circle cx={24} cy={24} r={18} stroke="currentColor" strokeWidth={2.5} fill="none" />
      <path d="M24 14 L28 22 L18 30 Z" fill="currentColor" />
    </>
  ),
};

const AI_SLUGS = new Set(["ai-observability", "ai-embedded-workflows", "notion-ai-agent", "chatgpt-ads"]);

const CATEGORY_THEME: Record<string, ThumbnailTheme> = {
  "product analytics": "analytics",
  strategy: "strategy",
  research: "research",
  execution: "execution",
  growth: "growth",
  leadership: "leadership",
};

const resolveTheme = (category: string, slug: string, title: string): ThumbnailTheme => {
  const haystack = `${category} ${slug} ${title}`.toLowerCase();
  if (AI_SLUGS.has(slug) || /\bai\b/.test(haystack)) {
    return "ai";
  }
  return CATEGORY_THEME[category.toLowerCase()] ?? "analytics";
};

interface WritingThumbnailProps {
  category: string;
  slug: string;
  title: string;
  className?: string;
}

const WritingThumbnail = ({ category, slug, title, className }: WritingThumbnailProps) => {
  const theme = resolveTheme(category, slug, title);
  const style = THEME_STYLES[theme];

  return (
    <div className={className} style={{ backgroundColor: style.bg }}>
      <svg viewBox="0 0 56 56" className="h-10 w-10" style={{ color: style.fg }} fill="none" aria-hidden="true">
        {ICONS[theme]}
      </svg>
    </div>
  );
};

export default WritingThumbnail;
