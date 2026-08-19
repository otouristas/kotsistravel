import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionHead } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { offices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με την KOTSIS TRAVEL. Εθνικής Αντίστασης 140, Ηγουμενίτσα 46100. Τηλ. 26650 23053, info@kotsistravel.gr — και υποκατάστημα στο Νέο Λιμάνι.",
};

// Igoumenitsa town centre; the embed is a static link-out so no third-party
// script runs on the page.
const MAP_QUERY = encodeURIComponent("Εθνικής Αντίστασης 140, Ηγουμενίτσα 46100");

export default function EpikoinoniaPage() {
  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Πείτε μας πού θέλετε να πάτε"
        lede="Χρησιμοποιήστε τα παρακάτω στοιχεία για να επικοινωνήσετε μαζί μας. Θα χαρούμε να σας εξυπηρετήσουμε."
        crumbs={[{ label: "Επικοινωνία" }]}
        image="/legacy/site/kotsis_newport.jpg"
      />

      {/* Direct channels */}
      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "phone" as const,
              label: "Τηλέφωνο",
              value: site.phoneDisplay,
              href: `tel:${site.phone.replace(/\s/g, "")}`,
              note: "Καθημερινά, επτά ημέρες την εβδομάδα",
            },
            {
              icon: "mail" as const,
              label: "E-mail",
              value: site.email,
              href: `mailto:${site.email}`,
              note: "Απαντάμε συνήθως εντός μίας εργάσιμης",
            },
            {
              icon: "fax" as const,
              label: "Fax",
              value: site.faxDisplay,
              note: "Για αποστολή εγγράφων κράτησης",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <div className="card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
                  <Icon name={c.icon} className="h-[1.35rem] w-[1.35rem]" />
                </span>
                <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-1.5 block break-all text-[1.25rem] font-bold tracking-[-0.02em] text-ink transition-colors hover:text-brand"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-[1.25rem] font-bold tracking-[-0.02em] text-ink">{c.value}</p>
                )}
                <p className="mt-2 text-[0.83rem] text-ink-soft">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offices + map */}
      <section className="border-b border-rule bg-white py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Τα γραφεία μας"
            title="Δύο σημεία στην Ηγουμενίτσα"
            lede="Το κεντρικό γραφείο για τον σχεδιασμό του ταξιδιού σας, και το γραφείο στο Νέο Λιμάνι για τις ώρες των αναχωρήσεων."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="space-y-4">
              {offices.map((o, i) => (
                <Reveal key={o.id} delay={i * 80}>
                  <div className="card p-7">
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
                          <dt className="flex items-center gap-2 text-ink-soft">
                            <Icon name="clock" className="h-3.5 w-3.5 text-brand/60" />
                            {h.days}
                          </dt>
                          <dd className="shrink-0 font-semibold text-ink">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${o.street}, ${o.postcode} ${o.city}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-[0.83rem] font-semibold text-brand-600 transition-colors hover:text-ink"
                    >
                      Άνοιγμα στους χάρτες
                      <Icon name="external" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-rule">
                <iframe
                  title="Χάρτης — Ηγουμενίτσα"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed&hl=el`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[26rem] w-full border-0"
                />
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-rule">
                <Image
                  src="/legacy/site/kotsis_newport.jpg"
                  alt="Το γραφείο μας στο Νέο Λιμάνι Ηγουμενίτσας"
                  width={400}
                  height={300}
                  sizes="(min-width: 1024px) 620px, 92vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-navy-950 py-16 text-white grain sm:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Αίτημα προσφοράς</p>
            <h2 className="mt-4 text-display-md font-bold tracking-[-0.026em] text-balance">
              Πείτε μας τα βασικά
            </h2>
            <p className="mt-5 leading-relaxed text-brand-100/70">
              Συμπληρώστε ό,τι γνωρίζετε ήδη — προορισμό, ημερομηνίες, αριθμό ατόμων — και θα
              επανέλθουμε με ολοκληρωμένη πρόταση.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Απάντηση εντός μίας εργάσιμης ημέρας",
                "Χωρίς δέσμευση — η προσφορά είναι δωρεάν",
                "Πρόταση σε τρεις κατηγορίες τιμών όπου είναι εφικτό",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[0.9rem] text-brand-100/80">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {/* Posts straight to the office inbox — no backend to maintain. */}
            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Ονοματεπώνυμο" name="onoma" required />
                <Field label="Τηλέφωνο" name="tilefono" type="tel" required />
                <Field label="E-mail" name="email" type="email" required className="sm:col-span-2" />
                <Field label="Προορισμός" name="proorismos" className="sm:col-span-2" />
                <Field label="Ημερομηνία αναχώρησης" name="anaxorisi" type="date" />
                <Field label="Άτομα" name="atoma" type="number" />
              </div>

              <label className="mt-4 block">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-100/70">
                  Το αίτημά σας
                </span>
                <textarea
                  name="minima"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900/60 px-4 py-3 text-[0.92rem] text-white
                             placeholder:text-brand-100/30 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand/40"
                  placeholder="Περιγράψτε το ταξίδι που έχετε στο μυαλό σας…"
                />
              </label>

              <button type="submit" className="btn btn-primary mt-6 w-full">
                Αποστολή αιτήματος
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-[0.76rem] text-brand-100/45">
                Ή καλέστε μας απευθείας στο{" "}
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-semibold text-brand-300">
                  {site.phoneDisplay}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brand-100/70">
        {label}
        {required && <span className="ml-1 text-accent-400">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-white/15 bg-navy-900/60 px-4 py-2.5 text-[0.92rem] text-white
                   placeholder:text-brand-100/30 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand/40
                   [color-scheme:dark]"
      />
    </label>
  );
}
