import type { Metadata } from "next";
import Image from "next/image";
import PageHero, { ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon, type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Οδικές Μεταφορές",
  description:
    "Ενοικιάσεις λεωφορείων, πούλμαν και minibus με οκτώ ιδιόκτητα υπερπολυτελή τουριστικά λεωφορεία, καθώς και υπηρεσίες ταξί με γλωσσομαθείς οδηγούς.",
};

const FLEET: { icon: IconName; title: string; body: string; tag: string }[] = [
  {
    icon: "bus",
    title: "Τουριστικά πούλμαν",
    tag: "8 ιδιόκτητα",
    body: "Υπερπολυτελή λεωφορεία μεγάλης χωρητικότητας για εκδρομές, συνέδρια και ομαδικές μετακινήσεις σε Ελλάδα και εξωτερικό.",
  },
  {
    icon: "bus",
    title: "Minibus",
    tag: "Μικρές ομάδες",
    body: "Ευέλικτη λύση για παρέες και μικρά γκρουπ, με πρόσβαση σε δρόμους όπου δεν κινείται μεγάλο λεωφορείο.",
  },
  {
    icon: "compass",
    title: "Ταξί & transfer",
    tag: "Γλωσσομαθείς οδηγοί",
    body: "Μετακινούμε μεμονωμένους πελάτες από και προς οποιονδήποτε προορισμό — αεροδρόμια, λιμάνια, ξενοδοχεία.",
  },
];

const USES = [
  "Σχολικές εκδρομές",
  "Συνέδρια & εκθέσεις",
  "Μεταφορές αεροδρομίου",
  "Μεταφορές λιμανιού",
  "Εκδρομές συλλόγων",
  "Γαμήλιες μετακινήσεις",
  "Εταιρικές μετακινήσεις",
  "Πολυήμερες περιηγήσεις",
];

export default function MetaforesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ιδιόκτητος στόλος"
        title="Οδικές μεταφορές & ενοικιάσεις"
        lede="Με τα οκτώ ιδιόκτητα, υπερπολυτελή τουριστικά λεωφορεία μας και έμπειρους επαγγελματίες οδηγούς, παρέχουμε υπηρεσίες μεταφορών και εκδρομών τόσο στην Ελλάδα όσο και στο εξωτερικό."
        crumbs={[{ label: "Μεταφορές" }]}
        image="/legacy/articles/NeoplanTourliner2.jpg"
      />

      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Ο στόλος"
            title="Τρεις κατηγορίες οχημάτων"
            lede="Επιλέγουμε το όχημα με βάση το μέγεθος της ομάδας και τη διαδρομή — όχι το αντίστροφο."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {FLEET.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
                      <Icon name={f.icon} className="h-[1.35rem] w-[1.35rem]" />
                    </span>
                    <span className="pill pill-accent">{f.tag}</span>
                  </div>
                  <h3 className="mt-5 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-navy-950 py-16 text-white grain sm:py-20">
        <div className="shell-wide grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Πού μας καλούν</p>
            <h2 className="mt-4 text-display-md font-bold tracking-[-0.026em] text-balance">
              Από σχολική εκδρομή μέχρι πολυήμερη περιήγηση
            </h2>
            <p className="mt-5 max-w-measure leading-relaxed text-brand-100/70">
              Αναλαμβάνουμε τη μεταφορά ως ξεχωριστή υπηρεσία ή ως μέρος ενός πλήρους ταξιδιωτικού
              πακέτου — μαζί με εισιτήρια, διαμονή και ξεναγήσεις.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {USES.map((u) => (
                <li
                  key={u}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-[0.82rem] text-brand-100/85"
                >
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-white/12">
              <Image
                src="/legacy/articles/NeoplanTourliner2.jpg"
                alt="Τουριστικό λεωφορείο του στόλου μας"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/12">
              <Image
                src="/legacy/articles/school.coach.bus.JPG"
                alt="Λεωφορείο σχολικής εκδρομής"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactStrip
        title="Ζητήστε προσφορά μεταφοράς"
        body="Πείτε μας διαδρομή, ημερομηνία και αριθμό επιβατών — θα σας απαντήσουμε με τιμή και διαθέσιμο όχημα."
      />
    </>
  );
}
