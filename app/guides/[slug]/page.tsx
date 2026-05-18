import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import { notFound } from "next/navigation";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        {guide.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        {guide.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        {guide.description}
      </p>

      <section className="mt-12 space-y-6 text-lg leading-8 text-zinc-700">
        <p>
          This guide focuses on practical, comfort-oriented ways to improve your
          sleep environment and daily sleep routine.
        </p>

        <p>
          Sleep quality is influenced by many everyday factors, including light,
          noise, temperature, bedding comfort, and evening habits.
        </p>

        <p>
          The goal is not to diagnose or treat medical sleep problems, but to
          help you build a more comfortable and consistent sleep setup.
        </p>
      </section>
    </main>
  );
}