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

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
     

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
  }}
>
  {guide.content}
</ReactMarkdown>
  </article>
</section>

      
    </main>
  );
}