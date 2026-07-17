import type { Metadata } from "next";
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
        Discover sleep products designed to improve comfort, reduce noise,
        improve darkness, and create a better sleep environment.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            Best Sleep Masks
          </h2>

          <p className="mt-3 text-zinc-600">
            Comfortable sleep masks for deeper and darker sleep environments.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            Best White Noise Machines
          </h2>

          <p className="mt-3 text-zinc-600">
            Reduce unwanted noise and improve nighttime relaxation.
          </p>
        </article>
      </div>
    </main>
  );
}
