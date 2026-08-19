import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Icon } from "./Icon";
import { ContactStrip, type Crumb } from "./PageHero";
import { ArticleCard } from "./ArticleCard";
import { BreadcrumbJsonLd } from "./JsonLd";
import { categoryLabel, hrefOf, related, type Article, type Departures } from "@/lib/content";
import { site } from "@/lib/site";

/** Human labels for the canonical departures-table columns. */
const COL_LABEL: Record<string, string> = {
  tour: "Εκδρομή",
  days: "Ημέρες",
  departures: "Αναχωρήσεις",
  twin: "Δίκλινο",
  single: "Μονόκλινο",
  triple: "Τρίκλινο",
  child: "Παιδικό",
  hotel: "Ξενοδοχείο",
  taxes: "Φόροι",
  notes: "Σημειώσεις",
};
// Columns rendered as money (right-aligned, € suffixed).
const PRICE_KEYS = new Set(["twin", "single", "triple", "child", "taxes"]);

export default function TourView({ article, crumbs }: { article: Article; crumbs: Crumb[] }) {
  const t = article.tour!;
  const rel = related(article, 3);

  return (
    <>
      <TourJsonLd article={article} />
      <BreadcrumbJsonLd items={crumbs.map((c) => ({ name: c.label, url: c.href }))} />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-14 pt-32 text-white grain sm:pt-40">
        {article.image && (
          <>
            <Image src={article.image} alt="" aria-hidden fill sizes="100vw" priority
              className="object-cover opacity-[0.22]" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/85 to-navy-950" />
          </>
        )}

        <div className="shell-wide relative">
          <nav aria-label="Διαδρομή" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.76rem] text-brand-100/55">
              <li><Link href="/" className="hover:text-brand-300">Αρχική</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <span className="text-brand-100/25">/</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-300">{c.label}</Link>
                  ) : (
                    <span className="text-brand-100/85">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end">
            <div className="animate-fade-up">
              <p className="eyebrow eyebrow-dark">{categoryLabel[article.category]}</p>
              <h1 className="mt-4 text-display-lg font-bold tracking-[-0.032em] text-balance">
                {article.title}
              </h1>

              {t.subtitle && (
                <p className="mt-4 text-[1.05rem] leading-relaxed text-brand-100/80">{t.subtitle}</p>
              )}

              {t.badges.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.badges.map((b) => (
                    <li key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-3.5 py-1.5 text-[0.78rem] font-bold text-white">
                      <Icon name="star" className="h-3.5 w-3.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Key facts strip */}
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/12 pt-6">
                {t.duration > 0 && <Fact k={`${t.duration}`} v="ημέρες" />}
                {t.days.length > 0 && <Fact k={`${t.days.length}`} v="στάσεις προγράμματος" />}
                {t.departures?.rows[0]?.departures && (
                  <Fact k={t.departures.rows[0].departures} v="αναχωρήσεις" />
                )}
                {t.departures?.rows[0]?.hotel && <Fact k={t.departures.rows[0].hotel} v="ξενοδοχεία" />}
              </dl>
            </div>

            {/* Price / booking card */}
            <Reveal className="lg:justify-self-end">
              <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm lg:w-[22rem]">
                {t.priceFrom ? (
                  <>
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brand-300">
                      Τιμή από
                    </p>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span className="text-[2.6rem] font-extrabold leading-none tracking-[-0.04em]">
                        {t.priceFrom}€
                      </span>
                      <span className="text-[0.85rem] text-brand-100/60">/ άτομο σε δίκλινο</span>
                    </p>
                    {t.departures?.rows[0]?.taxes && (
                      <p className="mt-2 text-[0.8rem] text-brand-100/55">
                        Φόροι {t.departures.rows[0].taxes}€ — δεν περιλαμβάνονται
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brand-300">
                      Τιμή
                    </p>
                    <p className="mt-1 text-[1.35rem] font-bold">Κατόπιν ζήτησης</p>
                  </>
                )}

                <Link href="/epikoinonia" className="btn btn-primary mt-5 w-full">
                  Ζητήστε προσφορά
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost mt-2.5 w-full">
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-4 border-t border-white/10 pt-4 text-[0.76rem] leading-relaxed text-brand-100/50">
                  Οι τιμές αφορούν την τελευταία δημοσιευμένη αναχώρηση. Επιβεβαιώνουμε διαθεσιμότητα
                  και τρέχουσα τιμή πριν την κράτηση.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ body */}
      <div className="bg-paper py-14 sm:py-18">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <div className="min-w-0">
            {article.image && (
              <Reveal className="mb-12">
                <div className="overflow-hidden rounded-2xl border border-rule shadow-[var(--shadow-card)]">
                  <Image src={article.image} alt={article.title} width={600} height={400}
                    sizes="(min-width: 640px) 640px, 92vw" className="h-auto w-full" priority />
                </div>
              </Reveal>
            )}

            {/* Itinerary */}
            {t.days.length > 0 && (
              <section id="programma" className="scroll-mt-28">
                <h2 className="text-display-sm font-bold tracking-[-0.02em] text-ink">
                  Αναλυτικό πρόγραμμα
                </h2>
                <ol className="mt-8 space-y-0">
                  {t.days.map((d, i) => (
                    <Reveal as="li" key={d.n} delay={Math.min(i, 6) * 50} className="relative list-none pl-12 sm:pl-16">
                      {/* Timeline rail */}
                      <span
                        aria-hidden
                        className={`absolute left-[15px] top-11 w-px bg-rule sm:left-[19px] ${
                          i === t.days.length - 1 ? "h-0" : "h-[calc(100%-1rem)]"
                        }`}
                      />
                      <span
                        aria-hidden
                        className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full
                                   bg-brand text-[0.78rem] font-bold text-white sm:h-10 sm:w-10 sm:text-[0.85rem]"
                      >
                        {d.n}
                      </span>
                      <div className="pb-9">
                        <h3 id={`imera-${d.n}`} className="scroll-mt-28 text-[1.12rem] font-bold leading-snug text-ink">
                          <span className="text-brand">{d.n}η ημέρα</span>
                          {d.title && <span className="text-ink"> · {d.title}</span>}
                        </h3>
                        {d.text && (
                          <p className="mt-2.5 text-[0.98rem] leading-[1.8] text-ink-soft">{d.text}</p>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </section>
            )}

            {/* Includes / excludes */}
            {(t.includes.length > 0 || t.excludes.length > 0) && (
              <section id="perilambanontai" className="mt-14 scroll-mt-28">
                <h2 className="text-display-sm font-bold tracking-[-0.02em] text-ink">Τι περιλαμβάνει</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {t.includes.length > 0 && (
                    <Reveal>
                      <div className="h-full rounded-2xl border border-rule bg-white p-6">
                        <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                          <Icon name="check" className="h-4 w-4" />
                          Περιλαμβάνονται
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {t.includes.map((x, i) => (
                            <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                              <Icon name="check" className="mt-[0.15rem] h-4 w-4 shrink-0 text-brand" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  )}
                  {t.excludes.length > 0 && (
                    <Reveal delay={80}>
                      <div className="h-full rounded-2xl border border-rule bg-paper-2/60 p-6">
                        <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                          <Icon name="close" className="h-4 w-4" />
                          Δεν περιλαμβάνονται
                        </p>
                        <ul className="mt-4 space-y-2.5">
                          {t.excludes.map((x, i) => (
                            <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                              <Icon name="close" className="mt-[0.15rem] h-3.5 w-3.5 shrink-0 text-ink-soft/50" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  )}
                </div>
              </section>
            )}

            {/* Departures & prices */}
            {t.departures && (
              <section id="times" className="mt-14 scroll-mt-28">
                <h2 className="text-display-sm font-bold tracking-[-0.02em] text-ink">
                  Αναχωρήσεις & τιμές
                </h2>
                <p className="mt-2 text-[0.9rem] text-ink-soft">
                  Τιμές ανά άτομο σε ευρώ, όπως δημοσιεύτηκαν στον κατάλογό μας.
                </p>
                <DeparturesTable data={t.departures} />
              </section>
            )}

            {/* Notes */}
            {t.notes.length > 0 && (
              <section className="mt-12">
                <div className="rounded-2xl border border-brand/25 bg-brand/[0.05] p-6">
                  <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                    <Icon name="shield" className="h-4 w-4" />
                    Σημειώσεις
                  </p>
                  <ul className="mt-3.5 space-y-2">
                    {t.notes.map((n, i) => (
                      <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Sibling navigation, straight from the source category order */}
            {(article.meta?.prev || article.meta?.next) && (
              <nav className="mt-14 grid gap-3 border-t border-rule pt-8 sm:grid-cols-2">
                {article.meta.prev && <SiblingLink dir="prev" s={article.meta.prev} />}
                {article.meta.next && <SiblingLink dir="next" s={article.meta.next} />}
              </nav>
            )}
          </div>

          {/* ---------------------------------------------------- sidebar */}
          <aside className="lg:sticky lg:top-24">
            {t.days.length > 0 && (
              <nav className="rounded-2xl border border-rule bg-white p-5" aria-label="Πρόγραμμα">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-600">
                  Το πρόγραμμα
                </p>
                <ol className="mt-4 space-y-1.5">
                  {t.days.map((d) => (
                    <li key={d.n}>
                      <a href={`#imera-${d.n}`}
                        className="group flex gap-2.5 text-[0.83rem] text-ink-soft transition-colors hover:text-ink">
                        <span className="w-5 shrink-0 font-bold text-brand">{d.n}η</span>
                        <span className="line-clamp-1">{d.title || "ημέρα"}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 space-y-1.5 border-t border-rule pt-4">
                  {t.includes.length > 0 && <JumpLink href="#perilambanontai" label="Τι περιλαμβάνει" />}
                  {t.departures && <JumpLink href="#times" label="Αναχωρήσεις & τιμές" />}
                </div>
              </nav>
            )}

            <div className="mt-5 rounded-2xl border border-rule bg-navy-900 p-6 text-white">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-300">
                Κρατήσεις
              </p>
              {t.priceFrom && (
                <p className="mt-3 text-[1.9rem] font-extrabold leading-none tracking-[-0.03em]">
                  από {t.priceFrom}€
                </p>
              )}
              <p className="mt-3 text-[0.87rem] leading-relaxed text-brand-100/70">
                Θέσεις περιορισμένες ανά αναχώρηση. Καλέστε μας για διαθεσιμότητα.
              </p>
              <Link href="/epikoinonia" className="btn btn-primary mt-5 w-full !py-2.5 text-[0.82rem]">
                Ζητήστε προσφορά
              </Link>
            </div>

            {article.meta?.modified && (
              <p className="mt-4 text-[0.72rem] text-ink-soft/70">
                Τελευταία ενημέρωση προγράμματος:{" "}
                <time dateTime={article.meta.modified}>
                  {new Date(article.meta.modified).toLocaleDateString("el-GR", {
                    year: "numeric", month: "long",
                  })}
                </time>
              </p>
            )}
          </aside>
        </div>
      </div>

      {rel.length > 0 && (
        <section className="border-t border-rule bg-white py-16 sm:py-20">
          <div className="shell-wide">
            <h2 className="text-display-sm font-bold tracking-[-0.02em] text-ink">Παρόμοιες εκδρομές</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rel.map((r) => <ArticleCard key={r.id} article={r} showCategory />)}
            </div>
          </div>
        </section>
      )}

      <ContactStrip
        title="Ενδιαφέρεστε για αυτή την εκδρομή;"
        body="Πείτε μας πόσα άτομα και ποια αναχώρηση σας βολεύει — επιβεβαιώνουμε διαθεσιμότητα αυθημερόν."
      />
    </>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[1.35rem] font-bold leading-none tracking-[-0.03em] text-brand-300">{k}</dt>
      <dd className="mt-1.5 text-[0.72rem] uppercase tracking-[0.12em] text-brand-100/50">{v}</dd>
    </div>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="flex items-center gap-2 text-[0.83rem] font-semibold text-ink-soft hover:text-brand">
      <Icon name="arrow" className="h-3.5 w-3.5 text-brand" />
      {label}
    </a>
  );
}

function SiblingLink({ dir, s }: { dir: "prev" | "next"; s: { slug: string; title: string; category: string } }) {
  const section = s.category === "tours-air" || s.category === "tours-road" ? "ekdromes" : "ekdromes";
  return (
    <Link
      href={`/${section}/${s.slug}`}
      className={`group flex items-center gap-3 rounded-xl border border-rule bg-white p-4 transition-all
                  hover:-translate-y-0.5 hover:border-brand/50 ${dir === "next" ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      <Icon
        name="arrow"
        className={`h-4 w-4 shrink-0 text-brand transition-transform ${
          dir === "prev" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
      />
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
          {dir === "prev" ? "Προηγούμενη" : "Επόμενη"}
        </span>
        <span className="mt-0.5 block truncate text-[0.92rem] font-semibold text-ink">{s.title}</span>
      </span>
    </Link>
  );
}

/** Prices get a dedicated presentation: highlighted, right-aligned, with € units. */
function DeparturesTable({ data }: { data: Departures }) {
  const cols = data.keys.map((k, i) => ({ key: k, label: k ? COL_LABEL[k] ?? data.head[i] : data.head[i], i }));
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-rule bg-white">
      <table className="w-full border-collapse text-left text-[0.88rem]">
        <thead>
          <tr className="bg-navy-900 text-white">
            {cols.map((c) => (
              <th
                key={c.i}
                scope="col"
                className={`whitespace-nowrap px-4 py-3.5 font-semibold ${
                  c.key && PRICE_KEYS.has(c.key) ? "text-right" : ""
                }`}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="border-t border-rule">
              {cols.map((c) => {
                const v = c.key ? row[c.key] ?? "" : "";
                const isPrice = c.key && PRICE_KEYS.has(c.key);
                return (
                  <td
                    key={c.i}
                    className={`px-4 py-3.5 align-top ${
                      isPrice
                        ? "whitespace-nowrap text-right font-bold text-ink"
                        : c.key === "tour"
                          ? "font-semibold text-ink"
                          : "text-ink-soft"
                    }`}
                  >
                    {isPrice && v ? `${v}€` : v || "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** schema.org TouristTrip — itinerary as an ItemList, price as an Offer. */
function TourJsonLd({ article }: { article: Article }) {
  const t = article.tour!;
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: article.title,
    description: t.subtitle || article.intro.slice(0, 200),
    image: article.image ? `${site.url}${article.image}` : undefined,
    url: `${site.url}${hrefOf(article)}`,
    provider: { "@id": `${site.url}/#organization` },
    inLanguage: "el",
    ...(t.duration ? { subjectOf: { "@type": "CreativeWork", name: `${t.duration} ημέρες` } } : {}),
    ...(t.days.length
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: t.days.length,
            itemListElement: t.days.map((d) => ({
              "@type": "ListItem",
              position: d.n,
              item: { "@type": "TouristDestination", name: d.title || `${d.n}η ημέρα`, description: d.text || undefined },
            })),
          },
        }
      : {}),
    ...(t.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            price: t.priceFrom,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: `${site.url}/epikoinonia`,
          },
        }
      : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
