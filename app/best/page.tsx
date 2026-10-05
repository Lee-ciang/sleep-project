import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Sleep Products",
  description:
    "Discover the best sleep products for comfort, relaxation, and better sleep quality.",
  alternates: {
    canonical: "/best",
  },
  openGraph: {
    title: "Best Sleep Products",
    description:
      "Discover the best sleep products for comfort, relaxation, and better sleep quality.",
    url: "/best",
  },
};

export default function BestPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight">
        Best Sleep Products
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Different bedroom problems call for different tools. A sleep mask
        addresses unwanted light, while a white noise machine adds steady
        background sound. Start with the distraction you notice most, then
        explore the guide that matches it. Comfort, fit, and your room setup
        matter more than buying more equipment.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            Sleep Masks
          </h2>

          <p className="mt-3 leading-7 text-zinc-600">
            Consider a sleep mask when streetlights, early daylight, or shared
            lighting make the room brighter than you prefer. It can be a
            practical option when you cannot fully darken the bedroom, such as
            in a rental, shared room, or temporary sleeping space.
          </p>
          <p className="mt-3 leading-7 text-zinc-600">
            Side sleepers should pay particular attention to how the mask
            feels against a pillow. A low-profile shape, soft edges, and an
            adjustable strap may be easier to wear comfortably. The guide
            compares fit, eye clearance, and light coverage.
          </p>
          <Link
            href="/guides/best-sleep-masks-for-side-sleepers"
            className="mt-5 inline-block font-medium underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Best Sleep Masks for Side Sleepers
          </Link>
        </article>

        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            White Noise Machines
          </h2>

          <p className="mt-3 leading-7 text-zinc-600">
            Consider a white noise machine when traffic, neighbors, or
            household activity create inconsistent background noise. A steady
            sound can make changes in the surrounding sound environment less
            noticeable. This is masking: it does not physically block sound
            from entering the bedroom or make the room soundproof.
          </p>
          <p className="mt-3 leading-7 text-zinc-600">
            Look for a sound you find comfortable, useful volume control, and
            unobtrusive nighttime lights. Keep the volume modest and make sure
            important alarms remain audible. The guide explains sound options,
            placement, and the tradeoffs between different machine types.
          </p>
          <Link
            href="/guides/best-white-noise-machines-for-sleep"
            className="mt-5 inline-block font-medium underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Best White Noise Machines for Sleep
          </Link>
        </article>
      </div>

      <section className="mt-12 max-w-2xl border-t border-zinc-200 pt-8">
        <h2 className="text-2xl font-semibold">How To Choose</h2>
        <p className="mt-3 leading-7 text-zinc-600">
          If light is the main distraction, start with the sleep-mask guide.
          If changing sounds are the problem, explore white noise machines.
          When both are present, decide which bothers you most and try one
          change at a time so you can judge its usefulness.
        </p>
        <p className="mt-3 leading-7 text-zinc-600">
          Neither category addresses every bedroom concern. For heat, airflow,
          bedding, or broader room changes, browse the{" "}
          <Link
            href="/guides"
            className="font-medium underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Sleep Guides
          </Link>{" "}
          to find a more relevant starting point.
        </p>
      </section>
    </main>
  );
}
