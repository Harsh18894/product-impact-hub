// One-time (re-run manually when copy changes) OG card generator.
// Renders simple branded SVG cards and rasterizes them to PNG via sharp —
// no headless browser dependency, safe to run in any sandboxed build.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "og");

const COLORS = {
  background: "#FAF8F4",
  foreground: "#1A1A1A",
  muted: "#737065",
  accent: "#F59E0B",
};

const WIDTH = 1200;
const HEIGHT = 630;

const cards = [
  { file: "home", eyebrow: "HARSH DEEP SINGH · SENIOR PRODUCT MANAGER", headline: "I find what the data was already telling us." },
  { file: "case-studies", eyebrow: "SELECTED WORK", headline: "Case Studies" },
  {
    file: "career-launchpad",
    eyebrow: "MONETIZATION · 0→1 PLG PRODUCT",
    headline: "Career Launchpad: Rebuilding Monetization From the Ground Up",
  },
  {
    file: "placement-guarantee-courses",
    eyebrow: "PRODUCT-MARKET FIT",
    headline: "Finding PMF: From Job-Oriented Specializations to Placement Guarantee Courses",
  },
  {
    file: "growth-funnel-overhaul",
    eyebrow: "CONVERSION OPTIMIZATION",
    headline: "The Growth Funnel Overhaul",
  },
  {
    file: "rebuilding-the-learning-experience",
    eyebrow: "PRODUCT DESIGN · RETENTION",
    headline: "Rebuilding the Learning Experience",
  },
  {
    file: "competency-guardrails",
    eyebrow: "OUTCOMES & SYSTEMS",
    headline: "Value Funnel Overhaul and Competency Guardrails",
  },
];

const escapeXml = (text) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const wrapText = (text, maxCharsPerLine) => {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
};

const buildSvg = ({ eyebrow, headline }) => {
  const lines = wrapText(headline, 28);
  const lineHeight = 66;
  const fontSize = 52;
  const startY = HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;

  const headlineTspans = lines
    .map(
      (line, index) =>
        `<tspan x="96" y="${startY + index * lineHeight}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.background}" />
  <rect x="0" y="0" width="16" height="${HEIGHT}" fill="${COLORS.accent}" />
  <text x="96" y="120" font-family="Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="2" fill="${COLORS.accent}">${escapeXml(eyebrow)}</text>
  <text font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="${COLORS.foreground}">${headlineTspans}</text>
  <text x="96" y="${HEIGHT - 64}" font-family="Arial, sans-serif" font-size="24" font-weight="500" fill="${COLORS.muted}">Harsh Deep Singh · Product Manager</text>
</svg>`;
};

async function main() {
  await mkdir(outDir, { recursive: true });

  for (const card of cards) {
    const svg = buildSvg(card);
    const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
    const outPath = path.join(outDir, `${card.file}.png`);
    await writeFile(outPath, buffer);
    console.log(`Wrote ${outPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
