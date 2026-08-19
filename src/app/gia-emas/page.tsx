import type { Metadata } from "next";
import Image from "next/image";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon, type IconName } from "@/components/Icon";
import { banks, credentials, offices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Για Εμάς",
  description:
    "Το Γραφείο Γενικού Τουρισμού KOTSIS TRAVEL ιδρύθηκε το 1975 στην Ηγουμενίτσα. Μέλος IATA, πιστοποιημένο κατά ISO 9001:2008, με ιδιόκτητο στόλο οκτώ πούλμαν.",
};

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "check",
    title: "Άμεση εξυπηρέτηση",
    body: "Δύο γραφεία στην Ηγουμενίτσα — στο κέντρο και μέσα στο Νέο Λιμάνι — ανοιχτά επτά ημέρες την εβδομάδα.",
  },
  {
    icon: "star",
    title: "Ποιότητα υπηρεσιών",
    body: "Πιστοποιημένες διαδικασίες κατά ISO 9001:2008, με πεδίο εφαρμογής τις γενικές τουριστικές και ταξιδιωτικές υπηρεσίες.",
  },
  {
    icon: "shield",
    title: "Ανταγωνιστικές τιμές",
    body: "Απευθείας συνεργασία με τις μεγαλύτερες αεροπορικές και ακτοπλοϊκές εταιρείες και με τα καλύτερα ξενοδοχεία.",
  },
];

const SERVICE_LIST = [
  "Οργανωμένα ταξίδια στην Ελλάδα & το εξωτερικό",
  "Μεμονωμένα ταξίδια",
  "Κρουαζιέρες",
  "Ταξίδια κινήτρων – Συνέδρια",
  "Ταξίδια συλλόγων",
  "Επαγγελματικά ταξίδια",
  "Αεροπορικά εισιτήρια",
  "Γαμήλια ταξίδια",
  "Πακέτα για spa & θεματικά ταξίδια",
];

export default function GiaEmasPage() {
  return (
    <>
      <PageHero
        eyebrow={`Από το ${site.founded}`}
        title="Μισός αιώνας στον ελληνικό τουρισμό"
        lede="Το Γραφείο Γενικού Τουρισμού KOTSIS TRAVEL ιδρύθηκε το 1975 και με μια σταθερά ανοδική πορεία έχει κερδίσει επάξια μια ηγετική θέση στον ελληνικό τουρισμό, όπως και την εμπιστοσύνη των πελατών στο μεγαλύτερο μέρος της αγοράς."
        crumbs={[{ label: "Για εμάς" }]}
        image="/legacy/site/k_022.jpg"
      />
      <AnchorNav
        items={[
          { label: "Η ιστορία μας", href: "#istoria" },
          { label: "Πιστοποιήσεις", href: "#pistopoiiseis" },
          { label: "Γραφεία & ωράριο", href: "#grafeia" },
          { label: "Τραπεζικοί λογαριασμοί", href: "#trapezes" },
        ]}
      />

      {/* Story */}
      <section id="istoria" className="scroll-mt-32 border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Reveal>
            <p className="eyebrow">Η ιστορία μας</p>
            <h2 className="mt-4 text-display-md font-bold tracking-[-0.026em] text-ink text-balance">
              Η απαίτηση των καιρών για ένα καλύτερο ταξίδι
            </h2>
            <div className="prose-kotsis mt-6 max-w-measure space-y-4">
              <p>
                Η έδρα της επιχείρησης είναι στην Ηγουμενίτσα, στην οδό Εθνικής Αντίστασης 140, και
                διαθέτει υποκατάστημα στην Ιονίου Πελάγους, στο Νέο Λιμάνι, έναντι Ο.Λ.ΗΓ.
              </p>
              <p>
                Η μακρά και επιτυχημένη διαδρομή των στελεχών του μέσα στον τουριστικό χώρο έρχεται να
                καλύψει την απαίτηση των καιρών για ένα καλύτερο και ποιοτικότερο ταξίδι.
              </p>
              <p>
                Η συνεργασία μας με τις μεγαλύτερες αεροπορικές και ακτοπλοϊκές εταιρείες, καθώς και με
                τα καλύτερα ξενοδοχεία στην Ελλάδα αλλά και σε όλο τον κόσμο, θα προσφέρουν στο ταξίδι
                σας τη λεπτομέρεια που του αρμόζει.
              </p>
              <p>
                Καταβάλλοντας συνεχείς προσπάθειες για την ικανοποίηση των αναγκών και των απαιτήσεων
                των πελατών, φροντίζουμε να επιλέγουμε πάντα το καλύτερο — ξεκινώντας από πολυτελή
                ξενοδοχεία πολλών αστέρων και άνετα μέσα μετακίνησης, και ολοκληρώνοντας με γεύματα που
                συνδυάζουν τη μοναδικότητα των τοπικών γεύσεων.
              </p>
              <p>
                <strong>
                  Εμείς έχουμε τη λύση, εσείς έχετε την ποιότητα και τη σιγουριά μας.
                </strong>{" "}
                Το έμπειρο προσωπικό είναι πάντα έτοιμο να σας βοηθήσει να κάνετε τα όνειρά σας…
                ταξίδια.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-rule shadow-[var(--shadow-card)]">
              <Image
                src="/legacy/site/k_022.jpg"
                alt="Το γραφείο της KOTSIS TRAVEL"
                width={400}
                height={266}
                sizes="(min-width: 1024px) 460px, 92vw"
                className="h-auto w-full"
              />
            </div>

            <ul className="mt-6 space-y-2.5">
              {SERVICE_LIST.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[0.9rem] text-ink-soft">
                  <Icon name="check" className="mt-[0.2rem] h-4 w-4 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-rule bg-white py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead eyebrow="Γιατί εμάς" title="Τρεις δεσμεύσεις" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
                    <Icon name={p.icon} className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <h3 className="mt-5 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="pistopoiiseis" className="scroll-mt-32 border-b border-rule bg-navy-950 py-16 text-white grain sm:py-20">
        <div className="shell-wide grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Πιστοποιήσεις</p>
            <h2 className="mt-4 text-display-md font-bold tracking-[-0.026em] text-balance">
              Πιστοποιημένη ποιότητα, τεκμηριωμένα
            </h2>
            <p className="mt-5 max-w-measure leading-relaxed text-brand-100/70">
              Μέλος των τουριστικών οργανισμών IATA, το γραφείο μας έχει πιστοποιηθεί με το σύστημα
              διαχείρισης ποιότητας κατά ISO 9001:2008 και αναγράφεται στον κατάλογο πιστοποιημένων
              επιχειρήσεων της LL-C, με πεδίο εφαρμογής «Γενικές Τουριστικές, Ταξιδιωτικές Υπηρεσίες –
              Μεταφορές».
            </p>
            <div className="mt-8 space-y-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex gap-4 rounded-xl border border-white/12 bg-white/[0.05] p-4"
                >
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  <div>
                    <p className="font-semibold">{c.label}</p>
                    <p className="mt-0.5 text-[0.84rem] leading-relaxed text-brand-100/60">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-center gap-5">
            <Image
              src="/legacy/site/logo_for_clients_9001.jpg"
              alt="Πιστοποιητικό ISO 9001"
              width={300}
              height={300}
              sizes="280px"
              className="h-auto w-56 rounded-xl bg-white p-4"
            />
            <Image
              src="/legacy/site/ETOA-logo1.png"
              alt="ETOA — European Tourism Association"
              width={156}
              height={62}
              className="h-12 w-auto rounded bg-white/95 px-3 py-1.5"
            />
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section id="grafeia" className="scroll-mt-32 border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Πού θα μας βρείτε"
            title="Δύο γραφεία στην Ηγουμενίτσα"
            lede="Το κεντρικό γραφείο εξυπηρετεί κρατήσεις και σχεδιασμό ταξιδιών· το γραφείο στο Νέο Λιμάνι είναι ανοιχτό τις ώρες των αναχωρήσεων."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 80}>
                <div className="card h-full p-7">
                  <span className="pill pill-brand">{o.label}</span>
                  <p className="mt-4 flex items-start gap-2.5 text-[1.02rem] font-semibold text-ink">
                    <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>
                      {o.street}
                      <br />
                      {o.postcode} {o.city}, {o.country}
                    </span>
                  </p>
                  <dl className="mt-5 space-y-2 border-t border-rule pt-5">
                    {o.hours.map((h) => (
                      <div key={h.days} className="flex items-baseline justify-between gap-4 text-[0.88rem]">
                        <dt className="text-ink-soft">{h.days}</dt>
                        <dd className="shrink-0 font-semibold text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banks */}
      <section id="trapezes" className="scroll-mt-32 border-b border-rule bg-white py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Πληρωμές"
            title="Τραπεζικοί λογαριασμοί"
            lede="Για κατάθεση προκαταβολής ή εξόφλησης. Αναγράψτε το ονοματεπώνυμό σας και τον κωδικό κράτησης στην αιτιολογία."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {banks.map((b, i) => (
              <Reveal key={b.name} delay={i * 70}>
                <div className="card h-full p-6">
                  <div className="flex h-10 items-center">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      width={160}
                      height={40}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <dl className="mt-5 space-y-3 text-[0.85rem]">
                    <div>
                      <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-soft">IBAN</dt>
                      <dd className="mt-1 select-all break-all font-semibold text-ink">{b.iban}</dd>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-soft">BIC</dt>
                        <dd className="mt-1 select-all font-semibold text-ink">{b.bic}</dd>
                      </div>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                        Δικαιούχος
                      </dt>
                      <dd className="mt-1 text-ink">{b.holder}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
