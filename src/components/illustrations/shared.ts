// Shared visual conventions so every hand-built illustration reads as one system.
export const STROKE_WIDTH = 1.5;
export const NODE_RADIUS = 6;
export const CARD_RADIUS = 10;

export const PALETTE = {
  navy: "hsl(var(--navy))",
  navyForeground: "hsl(var(--navy-foreground))",
  indigo: "hsl(var(--indigo))",
  indigoLight: "hsl(var(--indigo-light))",
  indigoText: "hsl(var(--indigo-text))",
  teal: "hsl(var(--teal))",
  tealLight: "hsl(var(--teal-light))",
  tealText: "hsl(var(--teal-text))",
  wine: "hsl(var(--accent))",
  wineLight: "hsl(var(--accent-light))",
  wineText: "hsl(var(--accent-text))",
  purple: "hsl(var(--purple))",
  purpleLight: "hsl(var(--purple-light))",
  purpleText: "hsl(var(--purple-text))",
  lightBlue: "hsl(var(--light-blue))",
  blue: "hsl(var(--blue))",
  blueText: "hsl(var(--blue-text))",
  border: "hsl(var(--border))",
  muted: "hsl(var(--muted-foreground))",
} as const;
