import type { Metadata } from "next";
import PageHero, { ContactStrip } from "@/components/PageHero";
import Catalog from "@/components/Catalog";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon, type IconName } from "@/components/Icon";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ειδικές Υπηρεσίες",
  description:
    "Σχολικές εκδρομές, μεταφορές, μεταφορές χρημάτων, VIP ταξίδια, επαγγελματικά ταξίδια, πρακτορεύσεις κρουαζιερόπλοιων, συνέδρια και ταξίδια κινήτρων.",
};

const CORPORATE = [
  {
    icon: "briefcase" as IconName,
    title: "Συνεδριακός τουρισμός",
    body: "Τμήμα με εξειδικευμένο προσωπικό στην οργάνωση συνεδρίων, σεμιναρίων, εκθέσεων και συμποσίων.",
  },
  {
    icon: "star" as IconName,
    title: "Ταξίδια κινήτρων",
    body: "Incentive προγράμματα για εταιρείες που θέλουν να επιβραβεύσουν ομάδες και συνεργάτες.",
  },
  {
    icon: "compass" as IconName,
    title: "Ειδικού ενδιαφέροντος",
    body: "Τουριστικά πακέτα αθλητικού, θρησκευτικού, ιστορικού και πολιτιστικού ενδιαφέροντος.",
  },
  {
    icon: "plane" as IconName,
    title: "Ναυλώσεις πτήσεων",
    body: "Εξειδικευμένα στελέχη προτείνουν το κατάλληλο αεροσκάφος για οποιονδήποτε προορισμό στον κόσμο.",
  },
];

export default function YpiresiesPage() {
  const services = byCategory("services");

  return (
    <>
      <PageHero
        eyebrow="Υπηρεσίες"
        title="Πέρα από το εισιτήριο"
        lede="Οργανώνουμε σχολικές εκδρομές, μεταφορές, εταιρικά ταξίδια και συνέδρια — και είμαστε πρακτορείο κρουαζιερόπλοιων για τη γραμμή της Ηγουμενίτσας."
        crumbs={[{ label: "Υπηρεσίες" }]}
      />

      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Εταιρικά & ομαδικά"
            title="Για ομάδες, εταιρείες και συλλόγους"
            lede="Διαθέτουμε τμήμα αφιερωμένο σε ομαδικές μετακινήσεις — από τον σχεδιασμό μέχρι τον συντονισμό επί τόπου."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORPORATE.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[1.15rem] font-bold tracking-[-0.02em] text-ink">{c.title}</h3>
                  <p className="mt-2 text-[0.87rem] leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Catalog
        eyebrow="Αναλυτικά"
        title="Οι υπηρεσίες μας"
        lede="Κάθε υπηρεσία με τις λεπτομέρειες που χρειάζεται να γνωρίζετε πριν μας καλέσετε."
        items={services}
        tone="white"
      />

      <ContactStrip
        title="Οργανώνετε ομαδικό ταξίδι;"
        body="Πείτε μας αριθμό ατόμων, ημερομηνίες και προορισμό — θα σας στείλουμε ολοκληρωμένη πρόταση."
      />
    </>
  );
}
