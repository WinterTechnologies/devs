interface TocItem {
  id: string;
  text: string;
  depth: number;
}

export function generateToc(
  headings: { depth: number; text: string; slug: string }[],
): TocItem[] {
  return headings
    .filter(({ depth }) => depth > 1 && depth < 4) // Only take h2 and h3
    .map(({ depth, text, slug }) => ({
      id: slug,
      text,
      depth,
    }));
}
