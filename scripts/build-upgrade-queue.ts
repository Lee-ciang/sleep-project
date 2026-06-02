import { guides } from "../lib/guides";

function countWords(text: string) {
  return text
    .replace(/[#*()[\]`]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function countFaqs(text: string) {
  const matches = text.match(/### /g);
  return matches ? matches.length : 0;
}

function countInternalLinks(text: string) {
  const matches = text.match(/\(\/guides\//g);
  return matches ? matches.length : 0;
}

function getPageType(title: string) {
  if (
    title.startsWith("Best Bedroom Temperature") ||
    title.startsWith("How To Improve Bedroom Airflow") ||
    title.startsWith("How To Make A Bedroom Darker") ||
    title.startsWith("How To Reduce Bedroom Noise") ||
    title.startsWith("How To Sleep Better Naturally")
  ) {
    return "Hub";
  }

  if (title.startsWith("Best ")) {
    return "Product";
  }

  return "Support";
}

function getTargetWords(pageType: string) {
  if (pageType === "Hub") return 2500;
  if (pageType === "Support") return 1200;
  return 900;
}

function getTargetFaqs(pageType: string) {
  if (pageType === "Hub") return 10;
  if (pageType === "Support") return 5;
  return 5;
}

function getTargetInternalLinks(pageType: string) {
  if (pageType === "Hub") return 5;
  if (pageType === "Support") return 3;
  return 2;
}

function getPriority(pageType: string, wordGap: number, faqGap: number, linkGap: number) {
  let priority = 0;

  if (pageType === "Hub") priority += 100;
  if (pageType === "Support") priority += 60;
  if (pageType === "Product") priority += 40;

  priority += Math.min(Math.ceil(wordGap / 100), 30);
  priority += faqGap * 5;
  priority += linkGap * 5;

  return priority;
}

console.log("Sleep Project Upgrade Queue");
console.log("====================================");

const queue = guides
  .map((guide) => {
    const pageType = getPageType(guide.title);
    const wordCount = countWords(guide.content);
    const faqCount = countFaqs(guide.content);
    const internalLinks = countInternalLinks(guide.content);

    const targetWords = getTargetWords(pageType);
    const targetFaqs = getTargetFaqs(pageType);
    const targetInternalLinks = getTargetInternalLinks(pageType);

    const wordGap = Math.max(targetWords - wordCount, 0);
    const faqGap = Math.max(targetFaqs - faqCount, 0);
    const linkGap = Math.max(targetInternalLinks - internalLinks, 0);

    const priority = getPriority(pageType, wordGap, faqGap, linkGap);

    return {
      title: guide.title,
      slug: guide.slug,
      category: guide.category,
      pageType,
      wordCount,
      targetWords,
      faqCount,
      targetFaqs,
      internalLinks,
      targetInternalLinks,
      wordGap,
      faqGap,
      linkGap,
      priority,
    };
  })
  .sort((a, b) => b.priority - a.priority);

queue.forEach((guide, index) => {
  console.log("");
  console.log(`${index + 1}. ${guide.title}`);
  console.log(`Slug: ${guide.slug}`);
  console.log(`Category: ${guide.category}`);
  console.log(`Type: ${guide.pageType}`);
  console.log(`Words: ${guide.wordCount} / ${guide.targetWords}`);
  console.log(`FAQs: ${guide.faqCount} / ${guide.targetFaqs}`);
  console.log(`Internal Links: ${guide.internalLinks} / ${guide.targetInternalLinks}`);
  console.log(`Priority: ${guide.priority}`);
});