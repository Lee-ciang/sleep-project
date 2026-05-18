export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

export const guides: Guide[] = [
  {
    slug: "how-to-sleep-better-naturally",
    title: "How To Sleep Better Naturally",
    description:
      "Practical comfort, lifestyle, and sleep environment tips to support better sleep naturally.",
    category: "Sleep Habits",
  },
  {
    slug: "best-bedroom-temperature-for-sleep",
    title: "Best Bedroom Temperature For Sleep",
    description:
      "Learn how bedroom temperature affects sleep comfort and how to create a better sleep environment.",
    category: "Bedroom Optimization",
  },
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}