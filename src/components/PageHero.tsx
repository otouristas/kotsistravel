import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export type Crumb = { label: string; href?: string };

/**
 * Shared masthead for every interior route. Optional artwork sits behind the
 * type at low opacity — legacy photos are small, so it is scaled by CSS cover
 * and heavily darkened, where softness reads as atmosphere rather than a flaw.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  crumbs = [],
  image,
  meta,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  image?: string;
  meta?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-36 text-paper grain sm:pb-20 sm:pt-44">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/80 to-navy-950" />
        </>
      )}
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(54 103 178), transparent 66%)" }}
      />

      <div className="shell-wide relative">
        {crumbs.length > 0 && (
          <nav aria-label="Διαδρομή" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.76rem] text-brand-100/55">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-300">
                  Αρχική
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <span className="text-brand-100/25">/</span>
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-brand-300">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-brand-100/85">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <p className="eyebrow eyebrow-dark">{eyebrow}</p>}
          <h1 className="mt-5 font-display text-display-lg text-balance">{title}</h1>
          {lede && (
            <p className="mt-6 max-w-measure text-[1.05rem] leading-relaxed text-brand-100/70 text-pretty">{lede}</p>
          )}
          {meta && <div className="mt-8">{meta}</div>}
        </div>
      </div>
    </section>
  );
}

/** Jump-links row used on index pages with several stacked catalogues. */
export function AnchorNav({ items }: { items: { label: string; href: string; count?: number }[] }) {
  return (
    <div className="sticky top-[4.25rem] z-30 border-y border-rule bg-paper/92 backdrop-blur-xl">
      <div className="shell-wide flex gap-1 overflow-x-auto py-2.5 scrollbar-none">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="group flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[0.82rem] font-semibold text-ink-soft transition-colors hover:bg-ink/[0.05] hover:text-ink"
          >
            {i.label}
            {i.count !== undefined && (
              <span className="rounded-full bg-brand/12 px-1.5 py-0.5 text-[0.68rem] font-bold text-brand-600">
                {i.count}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

/** Bottom-of-page conversion block, shared by all catalogue routes. */
export function ContactStrip({
  title = "Θέλετε προσφορά;",
  body = "Στείλτε μας τις ημερομηνίες και τον προορισμό σας και θα επανέλθουμε με πλήρη πρόταση.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-rule bg-paper-2 py-16">
      <div className="shell-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-display-sm text-ink">{title}</h2>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{body}</p>
        </div>
        <Link href="/epikoinonia" className="btn btn-primary shrink-0">
          Επικοινωνία
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
