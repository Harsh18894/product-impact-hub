const WORDS_PER_MINUTE = 220;

export const computeReadingTime = (text: string) => {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
};
