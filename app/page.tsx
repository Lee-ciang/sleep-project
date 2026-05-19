import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export default function Home() {
  const guides = getAllGuides();

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Better Sleep Starts With A Better Sleep Environment
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          Discover practical sleep setup ideas, bedroom optimization tips,
          sleep products, and comfort-focused guides designed to help you sleep
          better naturally.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/guides"
            className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            Explore Sleep Guides
          </Link>

          <Link
            href="/best"
            className="rounded-full border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
          >
            Best Sleep Products
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Bedroom Optimization</h2>
          <p className="mt-3 text-zinc-600">
            Improve lighting, temperature, noise control, and sleep comfort.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Sleep Product Reviews</h2>
          <p className="mt-3 text-zinc-600">
            Discover pillows, sleep masks, blackout curtains, and more.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Better Sleep Habits</h2>
          <p className="mt-3 text-zinc-600">
            Build healthier nighttime routines and sustainable sleep habits.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Sleep Guides
            </h2>
            <p className="mt-3 text-zinc-600">
              Start with practical guides for improving your sleep environment.
            </p>
          </div>

          <Link href="/guides" className="text-sm font-medium underline">
            View all guides
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {guide.title}
              </h3>

              <p className="mt-3 text-zinc-600">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}