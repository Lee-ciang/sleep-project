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

function getUpgradeReasons(wordCount: number, faqCount: number, internalLinks: number) {
  const reasons: string[] = [];

  if (wordCount < 600) {
    reasons.push("Very thin content");
  } else if (wordCount < 1000) {
    reasons.push("Needs more depth");
  }

  if (faqCount < 3) {
    reasons.push("Missing or weak FAQ section");
  } else if (faqCount < 5) {
    reasons.push("FAQ section should be expanded");
  }

  if (internalLinks < 2) {
    reasons.push("Needs more internal links");
  }

  return reasons;
}

function getPriority(wordCount: number, faqCount: number, internalLinks: number) {
  let priority = 0;

  if (wordCount < 600) priority += 50;
  else if (wordCount < 1000) priority += 25;

  if (faqCount < 3) priority += 30;
  else if (faqCount < 5) priority += 15;

  if (internalLinks < 2) priority += 20;

  return priority;
}

console.log("Sleep Project Content Audit v2");
console.log("====================================");

const results = guides.map((guide) => {
  const wordCount = countWords(guide.content);
  const faqCount = countFaqs(guide.content);
  const internalLinks = countInternalLinks(guide.content);
  const reasons = getUpgradeReasons(wordCount, faqCount, internalLinks);
  const priority = getPriority(wordCount, faqCount, internalLinks);

  return {
    title: guide.title,
    slug: guide.slug,
    category: guide.category,
    wordCount,
    faqCount,
    internalLinks,
    needsUpgrade: reasons.length > 0,
    priority,
    reasons,
  };
});

const upgradeCandidates = results
  .filter((guide) => guide.needsUpgrade)
  .sort((a, b) => b.priority - a.priority);

console.log("");
console.log(`Total guides: ${results.length}`);
console.log(`Upgrade candidates: ${upgradeCandidates.length}`);

console.log("");
console.log("Top Upgrade Candidates");
console.log("====================================");

upgradeCandidates.forEach((guide, index) => {
  console.log("");
  console.log(`${index + 1}. ${guide.title}`);
  console.log(`Slug: ${guide.slug}`);
  console.log(`Category: ${guide.category}`);
  console.log(`Words: ${guide.wordCount}`);
  console.log(`FAQs: ${guide.faqCount}`);
  console.log(`Internal Links: ${guide.internalLinks}`);
  console.log(`Priority: ${guide.priority}`);
  console.log(`Reasons: ${guide.reasons.join(", ")}`);
});