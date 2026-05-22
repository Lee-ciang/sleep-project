import { guide as bedroomTemperatureGuide } from "@/content/guides/best-bedroom-temperature-for-sleep";

import { guide as naturalSleepGuide } from "@/content/guides/how-to-sleep-better-naturally";
import { guide as darkerBedroomGuide } from "@/content/guides/how-to-make-bedroom-darker-for-sleep";
import { guide as blackoutCurtainsGuide } from "@/content/guides/best-blackout-curtains-for-sleep";
import { guide as sleepMaskGuide } from "@/content/guides/best-sleep-masks-for-side-sleepers";
import { guide as whiteNoiseGuide } from "@/content/guides/best-white-noise-machines-for-sleep";
import { guide as coolingBlanketGuide } from "@/content/guides/best-cooling-blankets-for-hot-sleepers";
import { guide as bedroomFanGuide } from "@/content/guides/best-fans-for-sleeping-comfortably";
import { guide as breathableSheetsGuide } from "@/content/guides/best-breathable-sheets-for-better-sleep";
import { guide as coolingPillowcaseGuide } from "@/content/guides/best-pillowcases-for-cooler-sleep";
import { guide as coolingPillowGuide } from "@/content/guides/best-cooling-pillows-for-hot-sleepers";
import { guide as humidityGuide } from "@/content/guides/best-humidity-level-for-sleeping-comfortably";
import { guide as airPurifierGuide } from "@/content/guides/best-air-purifiers-for-better-sleep";
import { guide as humidifierGuide } from "@/content/guides/best-humidifiers-for-better-sleep";
import { guide as airflowGuide } from "@/content/guides/how-to-improve-bedroom-airflow-for-sleep";
import { guide as bedroomNoiseGuide } from "@/content/guides/how-to-reduce-bedroom-noise-for-better-sleep";
import { guide as earplugsGuide } from "@/content/guides/best-earplugs-for-sleeping";
import { guide as noisyNeighborsGuide } from "@/content/guides/how-to-sleep-with-noisy-neighbors";
import { guide as hotBedroomGuide } from "@/content/guides/how-to-sleep-in-a-hot-bedroom";
import { guide as coldBedroomGuide } from "@/content/guides/how-to-sleep-in-a-cold-bedroom";
import { guide as stuffyAirGuide } from "@/content/guides/how-to-reduce-stuffy-air-in-bedroom";
import { guide as airPurifierVsFanGuide } from "@/content/guides/air-purifier-vs-fan-for-sleep";
import { guide as bedroomVentilationGuide } from "@/content/guides/best-bedroom-ventilation-for-sleep";
import { guide as blockWindowLightGuide } from "@/content/guides/how-to-block-light-from-bedroom-window";
import { guide as brightRoomGuide } from "@/content/guides/how-to-sleep-when-your-room-is-too-bright";
import { guide as outsideNoiseGuide } from "@/content/guides/how-to-block-outside-noise-in-bedroom";
import { guide as trafficNoiseGuide } from "@/content/guides/how-to-sleep-with-traffic-noise";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  updatedAt: string;
  readingTime: string;
  category: string;
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
  coolingPillowcaseGuide,
  coolingPillowGuide,
  humidityGuide,
  airPurifierGuide,
  humidifierGuide,
  airflowGuide,
  bedroomNoiseGuide,
  earplugsGuide,
  noisyNeighborsGuide,
  hotBedroomGuide,
  coldBedroomGuide,
  stuffyAirGuide,
  airPurifierVsFanGuide,
  bedroomVentilationGuide,
  blockWindowLightGuide,
  brightRoomGuide,
  outsideNoiseGuide,
  trafficNoiseGuide,
];

export function getAllGuides() {
  return guides;
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}