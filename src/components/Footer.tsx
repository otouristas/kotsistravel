import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Icon } from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import { credentials, nav, offices, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-brand-100 grain">
      {/* Soft light pooling behind the top edge. */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(54 103 178), transparent 68%)" }}
      />

      <div className="shell-wide relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-brand-100/65">
              Γραφείο Γενικού Τουρισμού με έδρα την Ηγουμενίτσα. Από το {site.founded} σχεδιάζουμε ταξίδια — από
              ένα ακτοπλοϊκό εισιτήριο μέχρι τον γύρο του κόσμου.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c.label}
                  title={c.detail}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[0.72rem] font-semibold tracking-wide text-brand-100/80"
                >
                  {c.label}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-100/70 transition-all hover:border-brand hover:text-brand-300"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-100/70 transition-all hover:border-brand hover:text-brand-300"
              >
                <Icon name="twitter" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <FooterNav
              title="Υπηρεσίες"
              links={[
                { label: "Ακτοπλοϊκά εισιτήρια", href: "/aktoploika" },
                { label: "Αεροπορικά εισιτήρια", href: "/aeroporika" },
                { label: "Ξενοδοχεία", href: "/xenodoxeia" },
                { label: "Κρουαζιέρες", href: "/krouazieres" },
                { label: "Εκδρομές", href: "/ekdromes" },
                { label: "Οδικές μεταφορές", href: "/metafores" },
                { label: "Γαμήλια ταξίδια", href: "/gamilia-taxidia" },
              ]}
            />
            <FooterNav
              title="Πληροφορίες"
              links={[
                { label: "Πριν το ταξίδι", href: "/xrisima#before" },
                { label: "Χρήσιμες πληροφορίες", href: "/xrisima#info" },
                { label: "Ταξιδιωτικές συμβουλές", href: "/xrisima#advice" },
                { label: "Συχνές ερωτήσεις", href: "/xrisima#faq" },
                { label: "Ειδικές υπηρεσίες", href: "/ypiresies" },
                { label: "Τραπεζικοί λογαριασμοί", href: "/gia-emas#trapezes" },
              ]}
            />

            <div>
              <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">Επικοινωνία</h3>
              <ul className="mt-5 space-y-4 text-[0.88rem]">
                {offices.map((o) => (
                  <li key={o.id} className="flex gap-2.5">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand/70" />
                    <span className="text-brand-100/70">
                      <span className="block font-semibold text-brand-100/90">{o.label}</span>
                      {o.street}
                      <br />
                      {o.postcode} {o.city}
                    </span>
                  </li>
                ))}
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-brand-100/70 transition-colors hover:text-brand-300"
                  >
                    <Icon name="phone" className="h-4 w-4 shrink-0 text-brand/70" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-brand-100/70">
                  <Icon name="fax" className="h-4 w-4 shrink-0 text-brand/70" />
                  {site.faxDisplay}
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-2.5 break-all text-brand-100/70 transition-colors hover:text-brand-300"
                  >
                    <Icon name="mail" className="h-4 w-4 shrink-0 text-brand/70" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full section map, mirroring the header's IA. */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2.5" aria-label="Χάρτης ιστότοπου">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[0.78rem] font-medium text-brand-100/50 transition-colors hover:text-brand-300"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-300">Γλώσσα</p>
          <div className="mt-3">
            <LanguageSwitcher tone="dark" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.76rem] text-brand-100/45">
            © {year} {site.legalName}. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex items-center gap-5">
            <Image
              src="/legacy/site/espa.jpg"
              alt="ΕΣΠΑ — Επιχειρησιακό Πρόγραμμα"
              width={190}
              height={54}
              className="h-11 w-auto rounded bg-white/95 p-1"
            />
            <Image
              src="/legacy/site/ETOA-logo1.png"
              alt="ETOA — European Tourism Association"
              width={78}
              height={31}
              className="h-7 w-auto opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterNav({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-[0.88rem] text-brand-100/70 transition-colors hover:text-brand-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
