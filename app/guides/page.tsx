import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Sleep Guides",
  description:
    "Explore practical sleep improvement guides, bedroom optimization tips, and better sleep environment strategies.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Sleep Guides",
    description:
      "Explore practical sleep improvement guides, bedroom optimization tips, and better sleep environment strategies.",
    url: "/guides",
  },
};

export default function GuidesPage() {
  const guides = getAllGuides();

const categories = Array.from(
  new Set(guides.map((guide) => guide.category))
);
const categoryDescriptions: Record<string, string> = {
  "Temperature & Cooling":
    "Cooling strategies, bedroom temperature optimization, and hot sleep solutions.",

  "Darkness & Light":
    "Sleep masks, blackout curtains, and bedroom light reduction strategies.",

  "Noise & Sound":
    "White noise, earplugs, noisy neighbors, and reducing sleep disruptions.",

  "Airflow & Air Quality":
    "Bedroom airflow, humidity balance, air purifiers, and cleaner sleep environments.",

  "Bedding & Comfort":
    "Cooling bedding, breathable sheets, pillows, and nighttime comfort improvements.",

  "Sleep Habits":
    "Natural sleep improvement habits, routines, and better nighttime behaviors.",
};
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-2xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
    <a
      href="/"
      className="rounded-md px-2 py-1 transition hover:bg-zinc-100 hover:text-zinc-900"
    >
      Home
    </a>

    <span>/</span>

    <span className="font-medium text-zinc-900">
      Sleep Guides
    </span>
  </nav>
        <h1 className="text-5xl font-bold tracking-tight">
          Sleep Guides
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Explore practical sleep improvement guides, bedroom optimization
          tips, and better sleep environment strategies.
        </p>
      </div>
      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Browse By Sleep Topic
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-600">
          Explore sleep guides by bedroom environment topic, including
          temperature, darkness, noise, airflow, and air quality.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/guides/best-bedroom-temperature-for-sleep"
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">Temperature & Cooling</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Hot bedrooms, cooling products, airflow, and sleep temperature.
            </p>
          </Link>

          <Link
            href="/guides/how-to-make-bedroom-darker-for-sleep"
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">Darkness & Light Control</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Darker bedrooms, blackout curtains, sleep masks, and light control.
            </p>
          </Link>

          <Link
            href="/guides/how-to-reduce-bedroom-noise-for-better-sleep"
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">Noise & Sleep Comfort</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Bedroom noise, noisy neighbors, white noise, and earplugs.
            </p>
          </Link>

          <Link
            href="/guides/how-to-improve-bedroom-airflow-for-sleep"
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold">Airflow & Air Quality</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Bedroom airflow, humidity, air purifiers, and humidifiers.
            </p>
          </Link>
        </div>
      </section>
      <div className="mt-16 space-y-16">
  {categories.map((category) => {
    const categoryGuides = guides.filter(
      (guide) => guide.category === category
    );

    return (
      <section key={category}>
        <div className="flex items-center justify-between gap-4">
          <div>
  <h2 className="text-3xl font-bold tracking-tight">
    {category}
  </h2>

  <p className="mt-3 max-w-2xl text-zinc-600">
    {categoryDescriptions[category]}
  </p>
</div>

<span className="text-sm text-zinc-500">
  {categoryGuides.length} guides
</span>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {categoryGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-2xl border border-zinc-200 p-8 transition hover:border-zinc-400"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {guide.title}
              </h3>

              <p className="mt-4 text-zinc-600">
                {guide.description}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                {guide.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    );
  })}
</div>
    </main>
  );
}
