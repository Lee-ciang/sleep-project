import { guide as bedroomTemperatureGuide } from "@/content/guides/best-bedroom-temperature-for-sleep";

import { guide as naturalSleepGuide } from "@/content/guides/how-to-sleep-better-naturally";


export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const guides: Guide[] = [
  bedroomTemperatureGuide,
  naturalSleepGuide,
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}