import { guide as bedroomTemperatureGuide } from "@/content/guides/best-bedroom-temperature-for-sleep";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const guides: Guide[] = [
  bedroomTemperatureGuide,
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}