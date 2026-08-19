import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero, { ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon, type IconName } from "@/components/Icon";
import Catalog from "@/components/Catalog";
import { byCategory, hrefOf } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ξενοδοχεία",
  description:
    "Κρατήσεις ξενοδοχείων σε όλο τον κόσμο μέσω του ελληνικού και διεθνούς δικτύου συνεργατών μας — από city hotels μέχρι resorts και boutique διαμονή.",
};

const TYPES: { icon: IconName; title: string; body: string }[] = [
  { icon: "bed", title: "City hotels", body: "Κεντρική διαμονή σε ευρωπαϊκές πρωτεύουσες, κοντά στα αξιοθέατα και τα μέσα μεταφοράς." },
  { icon: "star", title: "Resorts", body: "Παραθαλάσσια συγκροτήματα με πλήρεις παροχές, ιδανικά για οικογένειες και μεγάλες διαμονές." },
  { icon: "rings", title: "Ρομαντικά", body: "Boutique επιλογές για γαμήλια ταξίδια και επετείους, με ιδιωτικότητα και θέα." },
  { icon: "shield", title: "Οικογενειακά", body: "Καταλύματα με παιδότοπους, οικογενειακά δωμάτια και προγράμματα απασχόλησης." },
  { icon: "compass", title: "Spa resorts", body: "Θερμαλιστικά κέντρα και wellness προγράμματα, στην Ελλάδα και το εξωτερικό." },
  { icon: "briefcase", title: "Επαγγελματικά", body: "Ξενοδοχεία με συνεδριακούς χώρους και υπηρεσίες για εταιρικούς ταξιδιώτες." },
];

export default function XenodoxeiaPage() {
  // The legacy hotel listings no longer resolve upstream; the honeymoon and
  // island archives carry the surviving property photography.
  const inspiration = byCategory("islands").slice(0, 6);
  const guides = byCategory("hotels");

  return (
    <>
      <PageHero
        eyebrow="Διαμονή"
        title="Ξενοδοχεία σε όλο τον κόσμο"
        lede="Μέσω του ελληνικού και διεθνούς δικτύου των συνεργατών μας προσφέρουμε εξαιρετικά χαμηλές τιμές σε ξενοδοχεία σε όλο τον κόσμο — από μία διανυκτέρευση μέχρι ολόκληρες ομάδες."
        crumbs={[{ label: "Ξενοδοχεία" }]}
        image={inspiration[0]?.image}
      />

      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Τύποι διαμονής"
            title="Βρίσκουμε το κατάλυμα που ταιριάζει στο ταξίδι"
            lede="Πείτε μας τι μετράει για εσάς — τοποθεσία, προϋπολογισμός, παροχές — και θα φιλτράρουμε εμείς τις επιλογές."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((t, i) => (
              <Reveal key={t.title} delay={i * 55}>
                <div className="group h-full bg-paper p-7 transition-colors hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/[0.08] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[1.2rem] font-bold tracking-[-0.02em] text-ink">{t.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-white py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Έμπνευση"
            title="Προορισμοί για μεγάλες διαμονές"
            lede="Τα νησιά που προτείνουμε συχνότερα όταν το ζητούμενο είναι ησυχία, θάλασσα και σωστό ξενοδοχείο."
            action={{ label: "Δείτε όλα τα νησιά", href: "/gamilia-taxidia#nisia" }}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inspiration.map((a, i) => (
              <Reveal key={a.id} delay={i * 60}>
                <Link href={hrefOf(a)} className="card group block overflow-hidden">
                  <div className="relative aspect-[3/2] bg-paper-2">
                    {a.image && (
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                        className="photo transition-transform duration-[900ms] ease-swift group-hover:scale-[1.06]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 to-transparent" />
                    <h3 className="absolute inset-x-0 bottom-0 p-4 text-[1.2rem] font-bold text-white">{a.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <Catalog
          eyebrow="Από το αρχείο μας"
          title="Οδηγοί ξενοδοχείων"
          lede="Επιλογές που ξεχωρίσαμε διαβάζοντας εκατοντάδες καταλόγους."
          items={guides}
          columns={3}
        />
      )}

      <ContactStrip
        title="Ζητήστε διαθεσιμότητα"
        body="Στείλτε μας προορισμό, ημερομηνίες και αριθμό ατόμων — θα σας προτείνουμε ξενοδοχεία σε τρεις κατηγορίες τιμών."
      />
    </>
  );
}
