export const metadata = {
  title: "Sleep Guides",
  description:
    "Explore practical sleep guides for better sleep habits, bedroom optimization, and sleep comfort.",
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight">
        Sleep Guides
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Explore practical guides designed to help improve sleep quality through
        better habits, better environments, and better sleep setups.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            How To Sleep Better Naturally
          </h2>

          <p className="mt-3 text-zinc-600">
            Simple lifestyle and environment improvements that support better
            sleep quality.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-semibold">
            Best Bedroom Temperature For Sleep
          </h2>

          <p className="mt-3 text-zinc-600">
            Learn how room temperature affects comfort and sleep quality.
          </p>
        </article>
      </div>
    </main>
  );
}