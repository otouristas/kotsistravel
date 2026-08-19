import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import TourView from "@/components/TourView";
import { articles, bySlug, descriptionOf, isTour, sectionOf } from "@/lib/content";

const SECTION = "ekdromes";
const SECTION_LABEL = "Εκδρομές";

export function generateStaticParams() {
  return articles.filter((a) => sectionOf[a.category] === SECTION).map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = bySlug(params.slug);
  if (!a) return { title: "Δεν βρέθηκε" };
  const desc = descriptionOf(a);
  return {
    title: a.title,
    description: desc || undefined,
    openGraph: {
      title: a.title,
      description: desc || undefined,
      images: a.image ? [a.image] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = bySlug(params.slug);
  if (!article || sectionOf[article.category] !== SECTION) notFound();

  const crumbs = [{ label: SECTION_LABEL, href: `/${SECTION}` }, { label: article.title }];
  // Tours carry a modelled itinerary, includes/excludes and a prices table,
  // which deserve a purpose-built template rather than a prose page.
  return isTour(article) ? (
    <TourView article={article} crumbs={crumbs} />
  ) : (
    <ArticleView article={article} crumbs={crumbs} />
  );
}
