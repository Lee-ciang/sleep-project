import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Sleep Guides
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Explore practical sleep improvement guides, bedroom optimization
          tips, and better sleep environment strategies.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-2xl border border-zinc-200 p-8 transition hover:border-zinc-400"
          >
            

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {guide.title}
            </h2>

            <p className="mt-4 text-zinc-600">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}