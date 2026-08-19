import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { articles } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * The archive's photography tops out at 600×400. Rather than upscale a single
 * image into a blurry full-bleed backdrop, the hero stacks three photos at
 * roughly their native size against a typographic ground — every pixel sharp.
 */
const PICKS = ["k130", "k101", "k189"]; // Σαντορίνη · Μιλάνο · Νορβηγικά φιόρδ

export default function Hero() {
  const cards = PICKS.map((id) => articles.find((a) => a.id === id)).filter(Boolean) as typeof articles;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-36 text-paper grain sm:pb-28 sm:pt-44">
      {/* Layered light: a warm horizon low-left, cool water high-right. */}
      <div
        className="pointer-events-none absolute -right-40 -top-32 h-[46rem] w-[46rem] rounded-full opacity-[0.22] blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(54 103 178), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-40 h-[40rem] w-[40rem] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(237 32 36), transparent 72%)" }}
      />

      <div className="shell-wide relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="animate-fade-up">
          <p className="eyebrow eyebrow-dark">
            Ηγουμενίτσα · από το {site.founded}
          </p>

          <h1 className="mt-6 font-display text-display-xl text-balance">
            Μισός αιώνας
            <br />
            <span className="text-brand-300">ταξιδιών</span> από την
            <br className="hidden sm:block" /> Ηγουμενίτσα
          </h1>

          <p className="mt-7 max-w-xl text-[1.06rem] leading-relaxed text-brand-100/75 text-pretty">
            Από ένα ακτοπλοϊκό εισιτήριο για την Ανκόνα μέχρι κρουαζιέρα στην Αλάσκα. Γραφείο Γενικού
            Τουρισμού, μέλος IATA, πιστοποιημένο κατά ISO 9001 — με ιδιόκτητο στόλο οκτώ πούλμαν και
            δύο γραφεία στην Ηγουμενίτσα.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/epikoinonia" className="btn btn-primary">
              Σχεδιάστε το ταξίδι σας
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              { k: "1975", v: "Έτος ίδρυσης" },
              { k: "8", v: "Ιδιόκτητα πούλμαν" },
              { k: "IATA", v: "Πιστοποιημένο μέλος" },
              { k: "ISO 9001", v: "Διαχείριση ποιότητας" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-[1.6rem] font-bold tracking-[-0.03em] text-brand-300">{s.k}</dt>
                <dd className="mt-1 text-[0.72rem] uppercase tracking-[0.12em] text-brand-100/50">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Postcard stack */}
        <div className="relative mx-auto hidden h-[34rem] w-full max-w-[32rem] lg:block">
          {cards[0] && (
            <Postcard
              src={cards[0].image}
              alt={cards[0].title}
              caption={cards[0].title}
              className="left-0 top-0 w-[17.5rem] rotate-[-5deg]"
              delay="0s"
              priority
            />
          )}
          {cards[1] && (
            <Postcard
              src={cards[1].image}
              alt={cards[1].title}
              caption={cards[1].title}
              className="right-0 top-16 w-[15rem] rotate-[4.5deg]"
              delay="-3s"
            />
          )}
          {cards[2] && (
            <Postcard
              src={cards[2].image}
              alt={cards[2].title}
              caption={cards[2].title}
              className="bottom-0 left-10 w-[19rem] rotate-[2deg]"
              delay="-6s"
            />
          )}
        </div>

        {/* Mobile: one photo, full width, no stack. */}
        {cards[0] && (
          <div className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:hidden">
            <Image
              src={cards[0].image}
              alt={cards[0].title}
              fill
              sizes="100vw"
              priority
              className="photo opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}

function Postcard({
  src,
  alt,
  caption,
  className,
  delay,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  className: string;
  delay: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`absolute animate-drift rounded-xl bg-paper p-2.5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-paper-2">
        <Image src={src} alt={alt} fill sizes="320px" priority={priority} className="photo" />
      </div>
      <figcaption className="px-1 pb-0.5 pt-2 text-[0.9rem] font-semibold text-ink">{caption}</figcaption>
    </figure>
  );
}
