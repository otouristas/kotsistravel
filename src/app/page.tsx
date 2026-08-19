import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { ArticleCard, ArticleTile, ArticleRow } from "@/components/ArticleCard";
import { Icon } from "@/components/Icon";
import { byCategory } from "@/lib/content";
import { site } from "@/lib/site";

const ADRIATIC_ROUTES = [
  { from: "Ηγουμενίτσα", to: "Ανκόνα", note: "μέσω Πάτρας" },
  { from: "Ηγουμενίτσα", to: "Μπάρι", note: "μέσω Κέρκυρας" },
  { from: "Ηγουμενίτσα", to: "Βενετία", note: "μέσω Πάτρας" },
  { from: "Ηγουμενίτσα", to: "Τεργέστη", note: "Grimaldi Lines" },
];

const FERRY_LINES = [
  { name: "Minoan Lines", logo: "/legacy/site/minoan_lines_logo14212.jpg" },
  { name: "ANEK Lines", logo: "/legacy/site/anek.jpg" },
  { name: "Superfast Ferries", logo: "/legacy/site/Superfast.jpg" },
  { name: "ANEK / Superfast", logo: "/legacy/site/anek-superfast.jpg" },
  { name: "Grimaldi Lines", logo: "/legacy/site/grimaldi_group_withe.jpg" },
];

export default function HomePage() {
  const roadTours = byCategory("tours-road");
  const airTours = byCategory("tours-air");
  const cruises = byCategory("cruises");
  const destinations = byCategory("destinations");
  const corfu = byCategory("flights-corfu");
  const airlines = byCategory("airlines", "airlines-lowcost");
  const guides = byCategory("before", "advice", "info");

  // Priced tours lead the rail — a concrete number beats a generic teaser.
  const featuredTours = [...roadTours, ...airTours]
    .sort((a, b) => (b.price ? 1 : 0) - (a.price ? 1 : 0))
    .slice(0, 3);

  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- services */}
      <Section tone="paper">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Τι κάνουμε"
            title="Ένα γραφείο, όλο το ταξίδι"
            lede="Εισιτήρια, διαμονή, εκδρομές και μεταφορές οργανωμένα από την ίδια ομάδα — ώστε να μην χρειάζεται να συντονίζετε εσείς τα κομμάτια."
          />
          <ServiceGrid />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- adriatic */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-paper grain sm:py-28">
        <div
          className="pointer-events-none absolute -right-32 top-1/4 h-[34rem] w-[34rem] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(54 103 178), transparent 66%)" }}
        />
        <div className="shell-wide relative">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <SectionHead
                tone="dark"
                eyebrow="Η ειδικότητά μας"
                title="Η Αδριατική, από την πόρτα μας"
                lede="Η Ηγουμενίτσα είναι η πύλη της Ελλάδας προς την Ιταλία — και το γραφείο μας βρίσκεται στο Νέο Λιμάνι, έναντι του Ο.Λ.ΗΓ. Εκδίδουμε εισιτήρια για όλες τις εταιρείες της γραμμής."
              />

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {ADRIATIC_ROUTES.map((r, i) => (
                  <Reveal as="li" key={r.to} delay={i * 70} className="list-none">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors hover:border-brand-300/40">
                      <Icon name="ferry" className="h-5 w-5 shrink-0 text-brand-300" />
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[0.95rem] font-semibold">
                          {r.from}
                          <Icon name="arrow" className="h-3 w-3 text-brand-300/80" />
                          {r.to}
                        </span>
                        <span className="text-[0.76rem] text-brand-100/50">{r.note}</span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/aktoploika" className="btn btn-primary">
                  Δρομολόγια & εταιρείες
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/aktoploika/ports" className="btn btn-ghost">
                  Οδηγός λιμανιών
                </Link>
              </div>
            </div>

            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/legacy/site/kotsis_newport.jpg"
                  alt="Το γραφείο της KOTSIS TRAVEL στο Νέο Λιμάνι Ηγουμενίτσας"
                  width={400}
                  height={300}
                  sizes="(min-width: 1024px) 560px, 92vw"
                  className="h-auto w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand-300">
                    Υποκατάστημα
                  </p>
                  <p className="mt-1 font-display text-xl">Νέο Λιμάνι Ηγουμενίτσας</p>
                  <p className="mt-0.5 text-[0.82rem] text-brand-100/60">Καθημερινά 14:00 – 22:00</p>
                </figcaption>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                {FERRY_LINES.map((f) => (
                  <span
                    key={f.name}
                    className="flex h-11 items-center rounded-lg bg-white/95 px-3"
                    title={f.name}
                  >
                    <Image
                      src={f.logo}
                      alt={f.name}
                      width={110}
                      height={30}
                      className="h-6 w-auto object-contain"
                    />
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- tours */}
      <Section tone="paper">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Οργανωμένες εκδρομές"
            title="Προγράμματα με αναλυτική διαδρομή"
            lede="Κάθε εκδρομή έχει πλήρες πρόγραμμα ανά ημέρα, ξεναγήσεις και σαφή λίστα με το τι περιλαμβάνεται."
            action={{ label: "Όλες οι εκδρομές", href: "/ekdromes" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <ArticleCard article={t} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- destinations mosaic */}
      <Section tone="white">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Προορισμοί"
            title="Πόλεις που αξίζει να δείτε"
            lede="Αναλυτικοί οδηγοί για τις πόλεις που ταξιδεύουν συχνότερα οι πελάτες μας — τι να δείτε, πότε να πάτε, πώς να κινηθείτε."
            action={{ label: "Όλοι οι προορισμοί", href: "/proorismoi" }}
          />

          {/* Asymmetric mosaic: one tall lead tile, four supporting. */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {destinations.slice(0, 5).map((d, i) => (
              <Reveal
                key={d.id}
                delay={i * 70}
                className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <ArticleTile article={d} className={i === 0 ? "h-full min-h-[22rem]" : "h-56"} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- cruises */}
      <Section tone="paper2">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Θαλάσσιος τουρισμός"
            title="Κρουαζιέρες σε πέντε θάλασσες"
            lede="Από τα φιόρδ της Νορβηγίας και τους παγετώνες της Αλάσκας μέχρι την Ανατολική και Δυτική Καραϊβική."
            action={{ label: "Όλες οι κρουαζιέρες", href: "/krouazieres" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cruises.slice(0, 4).map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <ArticleCard article={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- flights */}
      <Section tone="white">
        <div className="shell-wide grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHead
              eyebrow="Αεροπορικά"
              title="Πτήσεις από Κέρκυρα"
              lede="Απευθείας συνδέσεις προς ευρωπαϊκές πρωτεύουσες, με τιμές ανά άτομο όπως καταγράφηκαν στον κατάλογό μας."
              action={{ label: "Όλα τα αεροπορικά", href: "/aeroporika" }}
            />
            <div className="mt-10 space-y-2.5">
              {corfu.map((f, i) => (
                <Reveal key={f.id} delay={i * 50}>
                  <Link
                    href={`/aeroporika/${f.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-rule bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white hover:shadow-[0_18px_36px_-20px_rgba(8,26,44,0.3)]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon name="plane" className="h-4 w-4 shrink-0 text-brand-600" />
                      <span className="font-semibold text-ink">{f.title}</span>
                    </span>
                    {f.price && (
                      <span className="shrink-0 font-display text-xl text-brand-600">{f.price}</span>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <p className="eyebrow">Συνεργαζόμενες εταιρείες</p>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
              Εκδίδουμε εισιτήρια για {airlines.length} αεροπορικές εταιρείες — από τους μεγάλους
              ευρωπαϊκούς αερομεταφορείς μέχρι τις low cost.
            </p>
            <div className="mt-8 grid max-h-[26rem] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 scrollbar-none">
              {airlines.slice(0, 16).map((a) => (
                <ArticleRow key={a.id} article={a} />
              ))}
            </div>
            <Link
              href="/aeroporika#etaireies"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-ink"
            >
              Δείτε και τις {airlines.length}
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- heritage */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper grain sm:py-28">
        <div className="shell-wide relative grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Από το 1975</p>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Πενήντα χρόνια στον ίδιο δρόμο
            </h2>
            <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-brand-100/70">
              <p>
                Το Γραφείο Γενικού Τουρισμού KOTSIS TRAVEL ιδρύθηκε το 1975 και με σταθερά ανοδική
                πορεία κέρδισε επάξια μια ηγετική θέση στον ελληνικό τουρισμό.
              </p>
              <p>
                Μέλος των τουριστικών οργανισμών IATA, το γραφείο μας έχει πιστοποιηθεί με το σύστημα
                διαχείρισης ποιότητας κατά ISO 9001:2008 και αναγράφεται στον κατάλογο πιστοποιημένων
                επιχειρήσεων της LL-C.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/gia-emas" className="btn btn-primary">
                Η ιστορία μας
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/epikoinonia" className="btn btn-ghost">
                Επικοινωνία
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "check", t: "Άμεση εξυπηρέτηση", d: "Δύο γραφεία, ανοιχτά επτά ημέρες την εβδομάδα." },
              { icon: "star", t: "Ποιότητα υπηρεσιών", d: "Πιστοποιημένες διαδικασίες κατά ISO 9001." },
              { icon: "shield", t: "Ανταγωνιστικές τιμές", d: "Απευθείας συμβάσεις με εταιρείες και ξενοδοχεία." },
              { icon: "bus", t: "Ιδιόκτητος στόλος", d: "Οκτώ υπερπολυτελή πούλμαν με έμπειρους οδηγούς." },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-300/35"
              >
                <Icon name={c.icon as "check"} className="h-5 w-5 text-brand-300" />
                <h3 className="mt-4 font-display text-xl">{c.t}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-brand-100/60">{c.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- guides */}
      <Section tone="paper">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Πριν φύγετε"
            title="Ό,τι χρειάζεται να ξέρετε"
            lede="Διαβατήρια και βίζα, αποσκευές, εμβολιασμοί, ευρωπαϊκή κάρτα ασφάλισης, συνάλλαγμα — οι οδηγοί που ετοιμάσαμε για τους ταξιδιώτες μας."
            action={{ label: "Όλοι οι οδηγοί", href: "/xrisima" }}
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 9).map((g, i) => (
              <Reveal key={g.id} delay={i * 45}>
                <ArticleRow article={g} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden bg-brand-700 py-16 text-white sm:py-20">
        <div className="shell-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-display-md text-balance">
              Πείτε μας πού θέλετε να πάτε
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-brand-100/85">
              Το έμπειρο προσωπικό μας θα σχεδιάσει το επόμενο ταξίδι σας σύμφωνα με τις δικές σας
              απαιτήσεις και το δικό σας πρόγραμμα.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="btn btn-primary transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link href="/epikoinonia" className="btn border border-white/30 text-white hover:bg-white/10">
              Στείλτε μήνυμα
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
