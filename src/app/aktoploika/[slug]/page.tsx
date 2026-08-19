import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero, { ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ferryBySlug, ferryPages, type FerryBlock } from "@/lib/content";

export function generateStaticParams() {
  return ferryPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = ferryBySlug(params.slug);
  if (!p) return { title: "Δεν βρέθηκε" };
  // Reference pages (fleet specs, schedules) are mostly tables, so there may
  // be no prose block long enough to serve as a description — compose one.
  const first = p.blocks.find((b): b is { t: string; x: string } => "x" in b && b.x.length > 80);
  const description =
    first?.x.slice(0, 160) ??
    `${p.title} — πληροφορίες για τις ακτοπλοϊκές γραμμές της Αδριατικής από την KOTSIS TRAVEL, Ηγουμενίτσα.`;
  return { title: p.title, description };
}

const isTable = (b: FerryBlock): b is { t: "table"; rows: string[][] } => b.t === "table";

export default function FerryPage({ params }: { params: { slug: string } }) {
  const page = ferryBySlug(params.slug);
  if (!page) notFound();

  // The first two `li` blocks are the legacy breadcrumb, not content.
  const blocks = page.blocks.filter((b, i) => !(b.t === "li" && i < 2));
  const scheduleDates = blocks
    .filter((b): b is { t: string; x: string } => "x" in b && /^Ισχύει/.test(b.x))
    .map((b) => b.x);

  return (
    <>
      <PageHero
        eyebrow="Ακτοπλοϊκά"
        title={page.title}
        crumbs={[{ label: "Ακτοπλοϊκά", href: "/aktoploika" }, { label: page.title }]}
        image={page.images[0]}
      />

      <article className="bg-paper py-16 sm:py-20">
        <div className="shell">
          {/* The archived timetables carry their own validity window; say so
              plainly rather than presenting them as current. */}
          {scheduleDates.length > 0 && (
            <div className="mb-12 flex gap-3.5 rounded-2xl border border-brand-300/35 bg-brand/[0.06] p-5">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-[0.88rem] leading-relaxed text-ink-soft">
                <strong className="text-ink">Αρχειακά δρομολόγια.</strong> Οι παρακάτω πίνακες αφορούν τις
                περιόδους ισχύος που αναγράφονται και διατηρούνται ως αναφορά.{" "}
                <Link href="/epikoinonia" className="font-semibold text-brand-600 underline underline-offset-2">
                  Επικοινωνήστε μαζί μας
                </Link>{" "}
                για τα τρέχοντα δρομολόγια και τις τιμές.
              </p>
            </div>
          )}

          <div className="prose-kotsis max-w-none">
            {blocks.map((b, i) => {
              if (isTable(b)) return <ScheduleTable key={i} rows={b.rows} />;
              const x = b.x;
              // A line immediately followed by "Στοιχεία Πλοίου:" is a ship name.
              const next = blocks[i + 1];
              if (next && !isTable(next) && /^Στοιχεία Πλοίου/.test(next.x)) {
                return (
                  <h3 key={i} className="mt-10 text-[1.2rem] font-bold tracking-[-0.02em] text-ink">
                    {x}
                  </h3>
                );
              }
              if (b.t === "h3" || /^(ΠΡΟΟΡΙΣΜΟΣ|SUPERFAST$|MINOAN|ANEK|GRIMALDI)/.test(x) || (x.length < 60 && x === x.toUpperCase() && /[Α-Ω]/.test(x))) {
                return (
                  <h2 key={i} className={`font-display text-[1.7rem] leading-snug text-ink ${i === 0 ? "mt-0" : "mt-12"}`}>
                    {x}
                  </h2>
                );
              }
              if (/^Στοιχεία Πλοίου/.test(x)) {
                return (
                  <p key={i} className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                    {x.replace(/:$/, "")}
                  </p>
                );
              }
              if (/^(Δρομολόγιο|Ισχύει|Σημείωση)/.test(x)) {
                return (
                  <p key={i} className="mt-3 text-[0.88rem] font-semibold text-brand-600">
                    {x}
                  </p>
                );
              }
              if (b.t === "li") {
                return (
                  <p key={i} className="mt-2 flex gap-3">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{x}</span>
                  </p>
                );
              }
              return (
                <p key={i} className="mt-4 max-w-measure">
                  {x}
                </p>
              );
            })}
          </div>

          {page.images.length > 1 && (
            <Reveal className="mt-16">
              <h2 className="font-display text-display-sm text-ink">Εικόνες</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.images.map((src) => (
                  <div key={src} className="overflow-hidden rounded-xl border border-rule bg-paper-2">
                    <Image
                      src={src}
                      alt={page.title}
                      width={600}
                      height={400}
                      sizes="(min-width: 1024px) 33vw, 92vw"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <nav className="mt-16 border-t border-rule pt-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-600">
              Άλλες σελίδες ακτοπλοϊκών
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ferryPages
                .filter((p) => p.slug !== page.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/aktoploika/${p.slug}`}
                    className="rounded-full border border-rule bg-white px-4 py-2 text-[0.83rem] font-medium text-ink-soft transition-all hover:border-brand/50 hover:text-ink"
                  >
                    {p.title}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      </article>

      <ContactStrip
        title="Χρειάζεστε τρέχοντα δρομολόγια;"
        body="Τηλεφωνήστε μας ή στείλτε μήνυμα — έχουμε ζωντανή πρόσβαση στα συστήματα κρατήσεων όλων των εταιρειών."
      />
    </>
  );
}

/**
 * Two shapes come out of the legacy markup:
 *  - schedules: header + several rows, best kept as a table;
 *  - ship specs: header + exactly one row, which reads far better transposed
 *    into label/value pairs than as a seven-column strip that must scroll.
 */
function ScheduleTable({ rows }: { rows: string[][] }) {
  const [head, ...body] = rows;

  if (body.length === 1 && head.length > 3) {
    return (
      <dl className="my-6 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {head.map((label, i) => (
          <div key={i} className="bg-white px-4 py-3">
            <dt className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</dt>
            <dd className="mt-1 text-[1.05rem] font-semibold text-ink">{body[0][i] ?? "—"}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-rule bg-white">
      <table className="w-full border-collapse text-left text-[0.86rem]">
        <thead>
          <tr className="bg-navy-900 text-paper">
            {head.map((h, i) => (
              <th key={i} className="whitespace-nowrap px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i} className="border-t border-rule even:bg-paper-2/60">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top ${j === 0 ? "font-semibold text-ink" : "text-ink-soft"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
