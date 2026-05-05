import type { PortableTextBlock } from "astro-portabletext";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(body: unknown): HeadingItem[] {
  if (!Array.isArray(body)) return [];

  const headingCounts: Record<string, number> = {};
  const headings: HeadingItem[] = [];

  const blocks = body as PortableTextBlock[];

  const hasHeadings = blocks.some(
    (block) =>
      block._type === "block" &&
      typeof block.style === "string" &&
      /^h[1-6]$/.test(block.style)
  );

  if (blocks.length > 0 && hasHeadings) {
    const firstBlock = blocks[0];
    const isFirstHeading =
      firstBlock._type === "block" &&
      typeof firstBlock.style === "string" &&
      /^h[1-6]$/.test(firstBlock.style);

    if (!isFirstHeading) {
      headings.push({ id: "inicio", text: "Inicio", level: 2 });
      headingCounts["inicio"] = 1;
    }
  }

  blocks
    .filter((block): block is PortableTextBlock => {
      return (
        block._type === "block" &&
        typeof block.style === "string" &&
        /^h[1-6]$/.test(block.style)
      );
    })
    .forEach((block) => {
      const text = extractTextFromBlock(block);
      const level = parseInt(block.style!.replace("h", ""), 10);
      const baseSlug = slugify(text);
      const count = (headingCounts[baseSlug] || 0) + 1;
      headingCounts[baseSlug] = count;
      const id = count > 1 ? `${baseSlug}-${count}` : baseSlug;

      headings.push({ id, text, level });
    });

  return headings;
}

function extractTextFromBlock(block: PortableTextBlock): string {
  if (!block.children) return "";
  return block.children
    .map((child) => {
      if ("text" in child) return (child as { text: string }).text;
      return "";
    })
    .join("")
    .trim();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
