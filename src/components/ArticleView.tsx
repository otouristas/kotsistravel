import Image from "next/image";
import Link from "next/link";
import PageHero, { ContactStrip, type Crumb } from "./PageHero";
import { ArticleCard } from "./ArticleCard";
import { Icon } from "./Icon";
import Reveal from "./Reveal";
import Blocks from "./Blocks";
import { ArticleJsonLd, BreadcrumbJsonLd } from "./JsonLd";
import { categoryLabel, hrefOf, isText, readingMinutes, related, structure, type Article } from "@/lib/content";

export default function ArticleView({ article, crumbs }: { article: Article; crumbs: Crumb[] }) {
  const blocks = structure(article.blocks);
  const minutes = readingMinutes(article);
  const rel = related(article, 3);

  // Day-by-day itineraries earn a jump list; short pages do not.
  const days = blocks.filter((b) => isText(b) && /^\d+η\s+(?:η)?μέρα/i.test(b.x)) as { t: string; x: string }[];
  const hasItinerary = days.length >= 3;

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.intro.slice(0, 200)}
        image={article.image || undefined}
        url={hrefOf(article)}
      />
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.label, url: c.href }))} />
      <PageHero
        eyebrow={categoryLabel[article.category]}
        title={article.title}
        crumbs={crumbs}
        image={article.image || undefined}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            {article.price && (
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[0.85rem] font-bold text-navy-950">
                Τιμή ανά άτομο: {article.price}
              </span>
            )}
            {minutes > 2 && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-[0.78rem] text-brand-100/70">
                <Icon name="clock" className="h-3.5 w-3.5" />
                {minutes} λεπτά ανάγνωσης
              </span>
            )}
            <Link href="/epikoinonia" className="btn btn-ghost !px-5 !py-2 text-[0.8rem]">
              Ζητήστε προσφορά
            </Link>
          </div>
        }
      />

      <article className="bg-paper py-16 sm:py-20">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
          <div className="min-w-0">
            {article.image && (
              <Reveal className="mb-12">
                <div className="relative mx-auto max-w-[600px] overflow-hidden rounded-2xl border border-rule shadow-[var(--shadow-card)]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    sizes="(min-width: 640px) 600px, 92vw"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </Reveal>
            )}

            <div className="prose-kotsis max-w-measure">
              <Blocks blocks={blocks} />
            </div>

            {article.gallery.length > 0 && (
              <Reveal className="mt-14">
                <h2 className="font-display text-display-sm text-ink">Φωτογραφίες</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {article.gallery.map((g) => (
                    <div key={g} className="overflow-hidden rounded-xl border border-rule bg-paper-2">
                      <Image
                        src={g}
                        alt={article.title}
                        width={600}
                        height={400}
                        sizes="(min-width: 640px) 45vw, 92vw"
                        className="h-auto w-full"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar: itinerary jump list + a persistent enquiry card. */}
          <aside className="lg:sticky lg:top-24">
            {hasItinerary && (
              <nav className="mb-6 rounded-2xl border border-rule bg-white p-5" aria-label="Πρόγραμμα">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-600">Πρόγραμμα</p>
                <ol className="mt-4 space-y-1.5">
                  {days.map((d) => {
                    const n = d.x.match(/^(\d+)/)?.[1];
                    const label = d.x.replace(/^\d+η\s+(?:η)?μέρα\s*[::]\s*/i, "").trim();
                    return (
                      <li key={d.x}>
                        <a
                          href={`#imera-${n}`}
                          className="group flex gap-2.5 text-[0.83rem] text-ink-soft transition-colors hover:text-ink"
                        >
                          <span className="shrink-0 font-semibold text-brand-600">{n}η</span>
                          <span className="line-clamp-1">{label || "ημέρα"}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            <div className="rounded-2xl border border-rule bg-navy-900 p-6 text-paper">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-300">
                Ενδιαφέρεστε;
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-brand-100/70">
                Καλέστε μας ή στείλτε μήνυμα και θα σας ετοιμάσουμε πλήρη πρόταση με διαθεσιμότητα και
                τιμές.
              </p>
              <Link href="/epikoinonia" className="btn btn-primary mt-5 w-full !py-2.5 text-[0.82rem]">
                Ζητήστε προσφορά
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {rel.length > 0 && (
        <section className="border-t border-rule bg-white py-16 sm:py-20">
          <div className="shell-wide">
            <h2 className="font-display text-display-sm text-ink">Δείτε επίσης</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rel.map((r) => (
                <ArticleCard key={r.id} article={r} showCategory />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactStrip />
    </>
  );
}
