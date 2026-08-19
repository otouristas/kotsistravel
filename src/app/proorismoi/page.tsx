import type { Metadata } from "next";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Catalog from "@/components/Catalog";
import { SectionHead } from "@/components/Section";
import { ArticleTile } from "@/components/ArticleCard";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Προορισμοί & Πακέτα",
  description:
    "Οδηγοί για Ρώμη, Μιλάνο, Παρίσι, Λονδίνο, Βαρκελώνη, Πράγα, Βιέννη, Βερολίνο, Νέα Υόρκη και Ντουμπάι — και πακέτα city break με πτήση και διαμονή.",
};

export default function ProorismoiPage() {
  const cities = byCategory("destinations");
  const packages = byCategory("packages");

  return (
    <>
      <PageHero
        eyebrow="Ταξίδια"
        title="Προορισμοί που ξέρουμε καλά"
        lede="Αναλυτικοί οδηγοί για τις πόλεις όπου στέλνουμε τους περισσότερους ταξιδιώτες μας — τι αξίζει να δείτε, πότε να πάτε και πώς να κινηθείτε όταν φτάσετε."
        crumbs={[{ label: "Προορισμοί" }]}
        image={cities[0]?.image}
      />
      <AnchorNav
        items={[
          { label: "Πόλεις", href: "#poleis", count: cities.length },
          { label: "Πακέτα", href: "#paketa", count: packages.length },
        ]}
      />

      {/* Editorial mosaic — the lead city gets twice the room. */}
      <section id="poleis" className="scroll-mt-32 border-b border-rule bg-paper py-16 sm:py-20">
        <div className="shell-wide">
          <SectionHead
            eyebrow="Οδηγοί πόλεων"
            title="Δέκα πόλεις, δέκα οδηγοί"
            lede="Από τη Galleria του Μιλάνου και το Κολοσσαίο μέχρι τους ουρανοξύστες του Ντουμπάι."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c, i) => (
              <Reveal key={c.id} delay={Math.min(i, 8) * 60} className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}>
                <ArticleTile article={c} className={i === 0 ? "h-full min-h-[20rem]" : "h-56"} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Catalog
        id="paketa"
        eyebrow="City break"
        title="Πακέτα με πτήση & διαμονή"
        lede="Έτοιμοι συνδυασμοί για σύντομες αποδράσεις — μπορούμε να τους προσαρμόσουμε στις δικές σας ημερομηνίες."
        items={packages}
        columns={4}
        tone="white"
      />

      <ContactStrip
        title="Δεν βλέπετε τον προορισμό σας;"
        body="Ταξιδεύουμε πελάτες σε όλο τον κόσμο. Πείτε μας πού θέλετε να πάτε και θα το οργανώσουμε."
      />
    </>
  );
}
