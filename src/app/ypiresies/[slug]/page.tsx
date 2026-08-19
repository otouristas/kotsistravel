import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { articles, bySlug, descriptionOf, sectionOf } from "@/lib/content";

const SECTION = "ypiresies";
const SECTION_LABEL = "Υπηρεσίες";

export function generateStaticParams() {
  return articles.filter((a) => sectionOf[a.category] === SECTION).map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = bySlug(params.slug);
  if (!a) return { title: "Δεν βρέθηκε" };
  return {
    title: a.title,
    description: descriptionOf(a),
    openGraph: {
      title: a.title,
      description: descriptionOf(a),
      images: a.image ? [a.image] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = bySlug(params.slug);
  if (!article || sectionOf[article.category] !== SECTION) notFound();

  return (
    <ArticleView
      article={article}
      crumbs={[{ label: SECTION_LABEL, href: `/${SECTION}` }, { label: article.title }]}
    />
  );
}
