import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon } from "@/components/Icon";
import Catalog from "@/components/Catalog";
import { byCategory, hrefOf } from "@/lib/content";

export const metadata: Metadata = {
  title: "Αεροπορικά Εισιτήρια",
  description:
    "Αεροπορικά εισιτήρια για κάθε προορισμό παγκοσμίως. Απευθείας πτήσεις από Κέρκυρα, Πρέβεζα και Θεσσαλονίκη, με 24 συνεργαζόμενες και 11 low cost εταιρείες.",
};

const AIRPORTS = [
  { city: "Κέρκυρα", code: "CFU", note: "Κρατικός Αερολιμένας «Ιωάννης Καποδίστριας»" },
  { city: "Πρέβεζα", code: "PVK", note: "Αερολιμένας Ακτίου" },
  { city: "Θεσσαλονίκη", code: "SKG", note: "Αερολιμένας «Μακεδονία»" },
];

export default function AeroporikaPage() {
  const corfu = byCategory("flights-corfu");
  const airlines = byCategory("airlines");
  const lowcost = byCategory("airlines-lowcost");
  const airportGuides = byCategory("airports");
  const offers = byCategory("air-offers");

  // Cheapest first — the price is the reason this section exists.
  const priced = [...corfu].sort(
    (a, b) => parseFloat(a.price.replace(/[^\d,]/g, "").replace(",", ".")) -
      parseFloat(b.price.replace(/[^\d,]/g, "").replace(",", ".")),
  );

  return (
    <>
      <PageHero
        eyebrow="Αεροπορικά"
        title="Πτήσεις για κάθε προορισμό"
        lede="Αναλαμβάνουμε κρατήσεις και εκδόσεις αεροπορικών εισιτηρίων για οποιονδήποτε προορισμό παγκοσμίως, τόσο για μεμονωμένους ταξιδιώτες όσο και για ομαδικές μετακινήσεις — ως πιστοποιημένο μέλος IATA."
        crumbs={[{ label: "Αεροπορικά" }]}
        image={corfu[0]?.image}
      />
      <AnchorNav
        items={[
          { label: "Πτήσεις από Κέρκυρα", href: "#korfu", count: corfu.length },
          { label: "Αεροδρόμια", href: "#aerodromia", count: airportGuides.length },
          { label: "Συνεργαζόμενες εταιρείες", href: "#etaireies", count: airlines.length },
          { label: "Low cost", href: "#lowcost", count: lowcost.length },
        ]}
      />

      {/* Priced flights — the headline product. */}
      <section id="korfu" className="scroll-mt-32 border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Απευθείας συνδέσεις"
            title="Πτήσεις από Κέρκυρα"
            lede="Οι διαδρομές που ζητούνται περισσότερο από το αεροδρόμιο της Κέρκυρας, με την τιμή ανά άτομο όπως καταγράφηκε στον κατάλογό μας."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priced.map((f, i) => (
              <Reveal key={f.id} delay={i * 60}>
                <Link href={hrefOf(f)} className="card group flex h-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
                    {f.image && (
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                        className="photo transition-transform duration-[900ms] ease-swift group-hover:scale-[1.06]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                      <span className="flex items-center gap-2 text-[0.95rem] font-bold text-white">
                        <Icon name="plane" className="h-4 w-4 text-brand-300" />
                        {f.title}
                      </span>
                      <span className="shrink-0 rounded-lg bg-accent-600 px-2.5 py-1 text-[0.9rem] font-extrabold text-white">
                        {f.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="line-clamp-3 text-[0.88rem] leading-relaxed text-ink-soft">{f.intro}</p>
                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-[0.76rem] font-bold uppercase tracking-[0.1em] text-brand-600">
                      Δείτε τον προορισμό
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[0.8rem] text-ink-soft">
            Οι τιμές είναι ενδεικτικές, ανά άτομο, όπως καταγράφηκαν στον κατάλογό μας.{" "}
            <Link href="/epikoinonia" className="font-semibold text-brand-600 underline underline-offset-2">
              Ρωτήστε μας
            </Link>{" "}
            για τρέχουσα διαθεσιμότητα.
          </p>
        </div>
      </section>

      {/* Departure airports */}
      <section id="aerodromia" className="scroll-mt-32 border-b border-rule bg-navy-950 py-16 text-white grain sm:py-20">
        <div className="shell-wide">
          <SectionHead
            tone="dark"
            eyebrow="Αεροδρόμια αναχώρησης"
            title="Τρεις βάσεις στη Δυτική Ελλάδα"
            lede="Οργανώνουμε τη μετακίνησή σας από το γραφείο μέχρι το αεροδρόμιο — με πούλμαν ή ταξί, ανάλογα με το μέγεθος της παρέας."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {AIRPORTS.map((a, i) => {
              // Link the airport to its destination guide where one survives.
              const guide = airportGuides.find((g) => g.title.includes(a.city));
              const Card = (
                <div className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.05] p-6 transition-colors hover:border-brand-300/40">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[1.4rem] font-bold tracking-[-0.02em]">{a.city}</h3>
                    <span className="rounded bg-brand/25 px-2 py-0.5 text-[0.72rem] font-bold tracking-[0.1em] text-brand-300">
                      {a.code}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[0.85rem] leading-relaxed text-brand-100/60">{a.note}</p>
                  {guide && (
                    <span className="mt-5 flex items-center gap-1.5 text-[0.76rem] font-bold uppercase tracking-[0.1em] text-brand-300">
                      Προορισμοί από {a.city}
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
              return (
                <Reveal key={a.code} delay={i * 80}>
                  {guide ? (
                    <Link href={hrefOf(guide)} className="group block h-full">
                      {Card}
                    </Link>
                  ) : (
                    Card
                  )}
                </Reveal>
              );
            })}
          </div>

          {airportGuides.length > 0 && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {airportGuides.map((g) => (
                <Link
                  key={g.id}
                  href={hrefOf(g)}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-brand-300/40"
                >
                  <Icon name="compass" className="h-4 w-4 shrink-0 text-brand-300" />
                  <span className="min-w-0 flex-1 truncate text-[0.9rem] font-medium">{g.title}</span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 text-brand-100/40 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {offers.length > 0 && (
        <Catalog
          id="prosfores"
          eyebrow="Προσφορές"
          title="Τρέχουσες προσφορές αεροπορικών"
          lede="Ναύλοι που ξεχωρίσαμε από τους καταλόγους των συνεργαζόμενων εταιρειών."
          items={offers}
          tone="white"
        />
      )}

      <AirlineWall
        id="etaireies"
        eyebrow="Συνεργασίες"
        title="Συνεργαζόμενες αεροπορικές εταιρείες"
        lede="Εκδίδουμε εισιτήρια για τους μεγάλους ευρωπαϊκούς και διεθνείς αερομεταφορείς. Επιλέξτε εταιρεία για στοιχεία στόλου, δικτύου και πολιτικής αποσκευών."
        items={airlines}
        tone="white"
      />

      <AirlineWall
        id="lowcost"
        eyebrow="Οικονομικές πτήσεις"
        title="Low cost εταιρείες"
        lede="Όταν το κριτήριο είναι η τιμή, συγκρίνουμε και τις low cost — προσέχοντας τις χρεώσεις αποσκευών που συχνά αλλάζουν την τελική εικόνα."
        items={lowcost}
        tone="paper"
      />

      <ContactStrip
        title="Ψάχνετε πτήση;"
        body="Στείλτε μας ημερομηνίες και προορισμό — θα συγκρίνουμε εταιρείες και θα σας προτείνουμε τη συμφερότερη λύση."
      />
    </>
  );
}

/** Dense logo-led grid: airline pages are reference material, not products. */
function AirlineWall({
  id,
  eyebrow,
  title,
  lede,
  items,
  tone,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  items: ReturnType<typeof byCategory>;
  tone: "white" | "paper";
}) {
  if (items.length === 0) return null;
  return (
    <section
      id={id}
      className={`scroll-mt-32 border-b border-rule py-16 sm:py-20 ${tone === "white" ? "bg-white" : "bg-paper"}`}
    >
      <div className="shell-wide">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((a, i) => (
            <Reveal key={a.id} delay={Math.min(i, 10) * 40}>
              <Link
                href={hrefOf(a)}
                className="group flex h-full items-center gap-4 rounded-xl border border-rule bg-paper-2/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white hover:shadow-[0_16px_32px_-20px_rgba(8,20,38,0.3)]"
              >
                <span className="flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.title}
                      width={110}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Icon name="plane" className="h-5 w-5 text-brand/50" />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.95rem] font-semibold text-ink transition-colors group-hover:text-brand">
                    {a.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[0.76rem] text-ink-soft">
                    Στοιχεία εταιρείας
                  </span>
                </span>
                <Icon
                  name="arrow"
                  className="h-4 w-4 shrink-0 text-ink-soft/40 transition-all group-hover:translate-x-1 group-hover:text-brand"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
