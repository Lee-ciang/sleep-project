import { guide as bedroomTemperatureGuide } from "@/content/guides/best-bedroom-temperature-for-sleep";

import { guide as naturalSleepGuide } from "@/content/guides/how-to-sleep-better-naturally";
import { guide as darkerBedroomGuide } from "@/content/guides/how-to-make-bedroom-darker-for-sleep";
import { guide as blackoutCurtainsGuide } from "@/content/guides/best-blackout-curtains-for-sleep";
import { guide as sleepMaskGuide } from "@/content/guides/best-sleep-masks-for-side-sleepers";
import { guide as whiteNoiseGuide } from "@/content/guides/best-white-noise-machines-for-sleep";
import { guide as coolingBlanketGuide } from "@/content/guides/best-cooling-blankets-for-hot-sleepers";
import { guide as bedroomFanGuide } from "@/content/guides/best-fans-for-sleeping-comfortably";
import { guide as breathableSheetsGuide } from "@/content/guides/best-breathable-sheets-for-better-sleep";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const guides: Guide[] = [
  bedroomTemperatureGuide,
  naturalSleepGuide,
  darkerBedroomGuide,
  blackoutCurtainsGuide,
  sleepMaskGuide,
  whiteNoiseGuide,
  coolingBlanketGuide,
  bedroomFanGuide,
  breathableSheetsGuide,
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}