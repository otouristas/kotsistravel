import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Η σελίδα δεν βρέθηκε",
  description:
    "Η σελίδα που ζητήσατε δεν υπάρχει ή έχει μετακινηθεί. Δείτε τις υπηρεσίες μας ή επικοινωνήστε με την KOTSIS TRAVEL.",
  robots: { index: false, follow: true },
};

/**
 * The old Joomla site is still indexed and widely linked, so a fair share of
 * arrivals hit a legacy URL. Redirects in next.config.mjs catch the known
 * patterns; anything else lands here, and this page has to route people onward
 * rather than dead-end them on Next's bare default.
 */
const DESTINATIONS = [
  { href: "/aktoploika", label: "Ακτοπλοϊκά εισιτήρια", note: "Ηγουμενίτσα – Ιταλία", icon: "ferry" as const },
  { href: "/aeroporika", label: "Αεροπορικά εισιτήρια", note: "Ελλάδα & εξωτερικό", icon: "plane" as const },
  { href: "/ekdromes", label: "Οργανωμένες εκδρομές", note: "Οδικές & αεροπορικές", icon: "route" as const },
  { href: "/krouazieres", label: "Κρουαζιέρες", note: "Μεσόγειος & εξωτικοί προορισμοί", icon: "ship" as const },
  { href: "/xenodoxeia", label: "Ξενοδοχεία", note: "Κρατήσεις σε όλο τον κόσμο", icon: "bed" as const },
  { href: "/xrisima", label: "Χρήσιμες πληροφορίες", note: "Πριν το ταξίδι", icon: "compass" as const },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-28 text-white grain sm:py-36">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(54 103 178), transparent 66%)" }}
      />

      <div className="shell relative">
        <p className="eyebrow eyebrow-dark">Σφάλμα 404</p>
        <h1 className="mt-5 max-w-3xl text-display-lg font-bold tracking-[-0.032em] text-balance">
          Η σελίδα που ζητήσατε δεν βρέθηκε
        </h1>
        <p className="mt-6 max-w-measure text-[1.05rem] leading-relaxed text-brand-100/75 text-pretty">
          Ανανεώσαμε πρόσφατα την ιστοσελίδα μας και ορισμένες παλιές διευθύνσεις
          άλλαξαν. Ξεκινήστε από μία από τις παρακάτω ενότητες ή επικοινωνήστε
          μαζί μας — θα σας εξυπηρετήσουμε άμεσα.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Αρχική σελίδα
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
            <Icon name="phone" className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <nav aria-label="Δημοφιλείς ενότητες" className="mt-14">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-300">
            Δημοφιλείς ενότητες
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group flex h-full items-center gap-3.5 rounded-xl border border-white/12 bg-white/[0.05] p-4 transition-colors hover:border-brand-300/45 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/25 text-brand-300">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] font-semibold">{d.label}</span>
                    <span className="mt-0.5 block truncate text-[0.78rem] text-brand-100/60">
                      {d.note}
                    </span>
                  </span>
                  <Icon
                    name="arrow"
                    className="ml-auto h-4 w-4 shrink-0 text-brand-100/40 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 border-t border-white/10 pt-8 text-[0.9rem] text-brand-100/60">
          Δεν βρίσκετε αυτό που ψάχνατε;{" "}
          <Link href="/epikoinonia" className="font-semibold text-brand-300 underline underline-offset-4">
            Επικοινωνήστε μαζί μας
          </Link>{" "}
          ή καλέστε στο{" "}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="font-semibold text-brand-300 underline underline-offset-4"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
