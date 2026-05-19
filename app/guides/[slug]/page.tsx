import Link from "next/link";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import ReactMarkdown from "react-markdown";
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
  const relatedGuides = getAllGuides()
  .filter((relatedGuide) => relatedGuide.slug !== slug)
  .slice(0, 4);

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
     <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
  <a
    href="/"
    className="transition hover:text-zinc-900 hover:underline"
  >
    Home
  </a>

  <span>/</span>

  <a
    href="/guides"
    className="transition hover:text-zinc-900 hover:underline"
  >
    Sleep Guides
  </a>

  <span>/</span>

  <span className="text-zinc-900">
    {guide.title}
  </span>
</nav>

      <h1 className="mt-4 text-5xl font-bold tracking-tight">
        {guide.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        {guide.description}
      </p>
      <section className="mt-12">
  <article className="prose prose-zinc max-w-none">
    <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h2 className="mt-10 text-3xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h3 className="mt-8 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-lg leading-8 text-zinc-700">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-700">
        {children}
      </ul>
    ),
        a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
      >
        {children}
      </Link>
    ),
  }}
>
  {guide.content}
</ReactMarkdown>
  </article>
</section>
{relatedGuides.length > 0 && (
  <section className="mt-20 border-t border-zinc-200 pt-12">
    <h2 className="text-3xl font-bold tracking-tight">
      More Sleep Guides
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {relatedGuides.map((relatedGuide) => (
        <Link
          key={relatedGuide.slug}
          href={`/guides/${relatedGuide.slug}`}
          className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400"
        >
          <h3 className="text-2xl font-semibold tracking-tight">
            {relatedGuide.title}
          </h3>

          <p className="mt-3 text-zinc-600">
            {relatedGuide.description}
          </p>
        </Link>
      ))}
    </div>
  </section>
)}
      
    </main>
  );
}