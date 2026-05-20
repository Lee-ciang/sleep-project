import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export default function Home() {
  const guides = getAllGuides().slice(0, 6);

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
    <h2 className="text-xl font-semibold">
      Temperature & Cooling
    </h2>

    <p className="mt-3 text-zinc-600">
      Explore guides about cooling sleep products, bedroom temperature,
      airflow, and hot sleep environments.
    </p>

    <div className="mt-4 flex flex-col gap-2 text-sm">
      <Link
        href="/guides/how-to-sleep-in-a-hot-bedroom"
        className="underline"
      >
        Hot Bedroom Guides
      </Link>

      <Link
        href="/guides/best-cooling-blankets-for-hot-sleepers"
        className="underline"
      >
        Cooling Sleep Products
      </Link>
    </div>
  </div>

  <div className="rounded-2xl border border-zinc-200 p-6">
    <h2 className="text-xl font-semibold">
      Darkness & Light Control
    </h2>

    <p className="mt-3 text-zinc-600">
      Improve bedroom darkness and nighttime comfort with blackout and
      light-blocking sleep solutions.
    </p>

    <div className="mt-4 flex flex-col gap-2 text-sm">
      <Link
        href="/guides/how-to-make-bedroom-darker-for-sleep"
        className="underline"
      >
        Dark Bedroom Guides
      </Link>

      <Link
        href="/guides/best-blackout-curtains-for-sleep"
        className="underline"
      >
        Blackout Products
      </Link>
    </div>
  </div>

  <div className="rounded-2xl border border-zinc-200 p-6">
    <h2 className="text-xl font-semibold">
      Noise & Sleep Comfort
    </h2>

    <p className="mt-3 text-zinc-600">
      Discover ways to reduce bedroom noise and improve nighttime sleep
      comfort.
    </p>

    <div className="mt-4 flex flex-col gap-2 text-sm">
      <Link
        href="/guides/how-to-sleep-with-noisy-neighbors"
        className="underline"
      >
        Noise Reduction Guides
      </Link>

      <Link
        href="/guides/best-earplugs-for-sleeping"
        className="underline"
      >
        Sleep Noise Products
      </Link>
    </div>
  </div>
</section>
<section className="mx-auto max-w-6xl px-6 pb-16">
  <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
    <h2 className="text-3xl font-bold tracking-tight">
      Featured Sleep Topics
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
      Build a better sleep environment by focusing on the bedroom factors that
      often affect nighttime comfort: temperature, light, noise, airflow, and
      bedding.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Link
        href="/guides/best-bedroom-temperature-for-sleep"
        className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <h3 className="font-semibold">
          Bedroom Temperature
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Learn how warmer and cooler rooms can affect sleep comfort.
        </p>
      </Link>

      <Link
        href="/guides/how-to-make-bedroom-darker-for-sleep"
        className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <h3 className="font-semibold">
          Bedroom Darkness
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Reduce unwanted light and create a calmer nighttime setup.
        </p>
      </Link>

      <Link
        href="/guides/how-to-reduce-bedroom-noise-for-better-sleep"
        className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <h3 className="font-semibold">
          Bedroom Noise
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Explore simple ways to reduce nighttime sound disruptions.
        </p>
      </Link>

      <Link
        href="/guides/how-to-improve-bedroom-airflow-for-sleep"
        className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
      >
        <h3 className="font-semibold">
          Bedroom Airflow
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Improve air movement and make your room feel more comfortable.
        </p>
      </Link>
    </div>
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