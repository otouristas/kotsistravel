import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { categoryLabel, hrefOf, type Article } from "@/lib/content";

/**
 * Legacy photography maxes out at 600×400, so cards are capped around that
 * width and `sizes` never asks the browser for more than exists.
 */
const SIZES = "(min-width: 1280px) 380px, (min-width: 768px) 45vw, 92vw";

export function ArticleCard({
  article,
  showCategory = false,
  priority = false,
}: {
  article: Article;
  showCategory?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href={hrefOf(article)} className="card group flex flex-col">
      <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={SIZES}
            priority={priority}
            className="photo transition-transform duration-[900ms] ease-swift group-hover:scale-[1.06]"
          />
        ) : (
          <Placeholder label={article.title} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {article.price && (
          <span className="absolute right-3 top-3 rounded-full bg-accent-600 px-3 py-1.5 text-[0.72rem] font-bold text-white shadow-lg">
            από {article.price}
          </span>
        )}
        {showCategory && (
          <span className="absolute bottom-3 left-3 rounded-full bg-navy-950/70 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-brand-100 backdrop-blur-sm">
            {categoryLabel[article.category]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.35rem] leading-snug text-ink transition-colors group-hover:text-brand-600">
          {article.title}
        </h3>
        {article.intro && (
          <p className="mt-2.5 line-clamp-3 text-[0.9rem] leading-relaxed text-ink-soft">{article.intro}</p>
        )}
        <span className="mt-auto flex items-center gap-1.5 pt-4 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-brand-600">
          Περισσότερα
          <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/** Compact row used in dense lists (airlines, brochures, guides). */
export function ArticleRow({ article }: { article: Article }) {
  return (
    <Link
      href={hrefOf(article)}
      className="group flex items-center gap-4 rounded-xl border border-rule bg-white p-3 transition-all duration-300
                 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-[0_18px_36px_-20px_rgba(8,26,44,0.35)]"
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-paper-2">
        {article.image ? (
          <Image src={article.image} alt={article.title} fill sizes="96px" className="photo" />
        ) : (
          <Placeholder label={article.title} compact />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-ink transition-colors group-hover:text-brand-600">{article.title}</h3>
        {article.intro && <p className="mt-1 line-clamp-2 text-[0.82rem] leading-snug text-ink-soft">{article.intro}</p>}
      </div>
      <Icon
        name="arrow"
        className="h-4 w-4 shrink-0 text-ink-soft/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-600"
      />
    </Link>
  );
}

/** Tall editorial tile — used for the destination mosaic. */
export function ArticleTile({ article, className = "" }: { article: Article; className?: string }) {
  return (
    <Link
      href={hrefOf(article)}
      className={`group relative block overflow-hidden rounded-[14px] bg-navy-900 ${className}`}
    >
      {article.image ? (
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, 92vw"
          className="photo opacity-90 transition-all duration-[1100ms] ease-swift group-hover:scale-[1.07] group-hover:opacity-100"
        />
      ) : (
        <Placeholder label={article.title} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-[1.5rem] leading-tight text-paper">{article.title}</h3>
        <span className="mt-2 flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-brand-300 opacity-0 transition-all duration-400 group-hover:opacity-100">
          Ανακαλύψτε
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

/** Typographic stand-in for the handful of legacy items with no photo. */
function Placeholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-900 via-brand to-navy-950">
      <span
        className={`font-display text-paper/25 ${compact ? "text-2xl" : "text-6xl"}`}
        aria-hidden="true"
      >
        {label.trim().charAt(0)}
      </span>
    </div>
  );
}
