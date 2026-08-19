import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero, { ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { ferryPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ακτοπλοϊκά Εισιτήρια Αδριατικής",
  description:
    "Εισιτήρια για όλες τις γραμμές της Αδριατικής από την Ηγουμενίτσα, την Πάτρα και την Κέρκυρα προς Ανκόνα, Μπάρι, Βενετία και Τεργέστη. Minoan Lines, ANEK, Superfast, Grimaldi.",
};

const ROUTES = [
  {
    to: "Ανκόνα",
    from: "Πάτρα · Ηγουμενίτσα",
    lines: "ANEK / Superfast · Minoan Lines",
    image: "/legacy/site/ancona.jpg",
  },
  {
    to: "Μπάρι",
    from: "Πάτρα · Ηγουμενίτσα · Κέρκυρα",
    lines: "Superfast Ferries",
    image: "/legacy/site/bari.jpg",
  },
  {
    to: "Βενετία",
    from: "Πάτρα · Ηγουμενίτσα",
    lines: "ANEK / Superfast · Minoan Lines",
    image: "/legacy/site/venezia.jpeg",
  },
  {
    to: "Τεργέστη",
    from: "Ηγουμενίτσα",
    lines: "Grimaldi Lines",
    image: "/legacy/site/trieste.jpg",
  },
];

const COMPANIES = [
  { slug: "minoan", name: "Minoan Lines", logo: "/legacy/site/minoan_lines_logo14212.jpg" },
  { slug: "anek", name: "ANEK Lines", logo: "/legacy/site/anek.jpg" },
  { slug: "superfast", name: "Superfast Ferries", logo: "/legacy/site/Superfast.jpg" },
  { slug: "anek-superfast", name: "ANEK / Superfast", logo: "/legacy/site/anek-superfast.jpg" },
  { slug: "grimaldi", name: "Grimaldi Lines", logo: "/legacy/site/grimaldi_group_withe.jpg" },
];

const GUIDES = [
  {
    slug: "greece-italy",
    title: "Αναχωρήσεις Ελλάδα → Ιταλία",
    note: "Δρομολόγια ανά εταιρεία και προορισμό",
    icon: "ferry" as const,
  },
  {
    slug: "italy-greece",
    title: "Αναχωρήσεις Ιταλία → Ελλάδα",
    note: "Επιστροφές προς Ηγουμενίτσα & Πάτρα",
    icon: "ferry" as const,
  },
  {
    slug: "ports",
    title: "Λιμάνια Αδριατικής",
    note: "Ηγουμενίτσα, Πάτρα, Ανκόνα, Τεργέστη, Μπάρι, Βενετία",
    icon: "pin" as const,
  },
  {
    slug: "fleet",
    title: "Στόλος Αδριατικής",
    note: "Τεχνικά στοιχεία των πλοίων της γραμμής",
    icon: "ship" as const,
  },
];

export default function AktoploikaPage() {
  return (
    <>
      <PageHero
        eyebrow="Η ειδικότητά μας"
        title="Ακτοπλοϊκά εισιτήρια Αδριατικής"
        lede="Η Ηγουμενίτσα είναι η πύλη της Ελλάδας προς τη Δύση. Με γραφείο μέσα στο Νέο Λιμάνι, εκδίδουμε εισιτήρια για κάθε εταιρεία που δραστηριοποιείται στη γραμμή — για επιβάτες, οχήματα και ομαδικές μετακινήσεις."
        crumbs={[{ label: "Ακτοπλοϊκά" }]}
        image="/legacy/site/igoumenitsa.jpg"
      />

      {/* Routes */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Γραμμές"
            title="Τέσσερις προορισμοί στην Ιταλία"
            lede="Καθημερινές αναχωρήσεις όλο τον χρόνο, με πυκνότερα δρομολόγια το καλοκαίρι."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROUTES.map((r, i) => (
              <Reveal key={r.to} delay={i * 70}>
                <div className="group relative h-64 overflow-hidden rounded-2xl bg-navy-900">
                  <Image
                    src={r.image}
                    alt={r.to}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw"
                    className="photo opacity-70 transition-all duration-[1100ms] ease-swift group-hover:scale-[1.07] group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-300">
                      {r.from}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl">{r.to}</h3>
                    <p className="mt-1 text-[0.78rem] text-brand-100/60">{r.lines}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-rule bg-white py-16 sm:py-24">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Οδηγοί γραμμής"
            title="Δρομολόγια, λιμάνια και πλοία"
            lede="Αναλυτικές πληροφορίες όπως καταγράφηκαν στο αρχείο μας. Για τρέχουσα διαθεσιμότητα και τιμές, επικοινωνήστε μαζί μας."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {GUIDES.map((g, i) => (
              <Reveal key={g.slug} delay={i * 70}>
                <Link
                  href={`/aktoploika/${g.slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-rule bg-paper p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white hover:shadow-[0_22px_44px_-24px_rgba(8,26,44,0.35)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900/[0.06] text-brand-600 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={g.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl text-ink">{g.title}</span>
                    <span className="mt-1 block text-[0.85rem] text-ink-soft">{g.note}</span>
                  </span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 text-ink-soft/40 transition-all group-hover:translate-x-1 group-hover:text-brand-600"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Εταιρείες"
            title="Οι ναυτιλιακές της Αδριατικής"
            lede="Συνεργαζόμαστε με όλες τις εταιρείες της γραμμής — μπορούμε να συγκρίνουμε δρομολόγια και τιμές και να προτείνουμε τη λύση που σας ταιριάζει."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANIES.map((c, i) => {
              const page = ferryPages.find((p) => p.slug === c.slug);
              const intro = page?.blocks.find((b) => "x" in b && b.t === "p" && b.x.length > 80);
              return (
                <Reveal key={c.slug} delay={i * 60}>
                  <Link
                    href={`/aktoploika/${c.slug}`}
                    className="card group flex h-full flex-col p-6"
                  >
                    <span className="flex h-14 items-center">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        width={150}
                        height={40}
                        className="h-9 w-auto object-contain"
                      />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-ink">{c.name}</h3>
                    {intro && "x" in intro && (
                      <p className="mt-2 line-clamp-3 flex-1 text-[0.86rem] leading-relaxed text-ink-soft">
                        {intro.x}
                      </p>
                    )}
                    <span className="mt-5 flex items-center gap-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-brand-600">
                      Στοιχεία εταιρείας
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactStrip
        title="Κράτηση ακτοπλοϊκού εισιτηρίου"
        body="Πείτε μας ημερομηνία, προορισμό και αν ταξιδεύετε με όχημα — αναλαμβάνουμε τα υπόλοιπα."
      />
    </>
  );
}
