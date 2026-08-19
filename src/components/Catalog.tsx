import Reveal from "./Reveal";
import { SectionHead } from "./Section";
import { ArticleCard, ArticleRow } from "./ArticleCard";
import type { Article } from "@/lib/content";

/**
 * One catalogue block on an index page. `layout` picks the density:
 * cards for browsable products, rows for reference lists.
 */
export default function Catalog({
  id,
  eyebrow,
  title,
  lede,
  items,
  layout = "cards",
  columns = 3,
  tone = "paper",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  items: Article[];
  layout?: "cards" | "rows";
  columns?: 2 | 3 | 4;
  tone?: "paper" | "white" | "paper2";
}) {
  if (items.length === 0) return null;

  const bg = { paper: "bg-paper", white: "bg-white", paper2: "bg-paper-2" }[tone];
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section id={id} className={`scroll-mt-32 border-b border-rule ${bg} py-16 sm:py-20`}>
      <div className="shell-wide">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div
          className={
            layout === "cards" ? `mt-12 grid gap-6 ${cols}` : `mt-12 grid gap-3 ${cols}`
          }
        >
          {items.map((a, i) => (
            <Reveal key={a.id} delay={Math.min(i, 8) * 55}>
              {layout === "cards" ? <ArticleCard article={a} /> : <ArticleRow article={a} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
