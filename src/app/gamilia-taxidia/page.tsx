import type { Metadata } from "next";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Catalog from "@/components/Catalog";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Γαμήλια & Εξωτικά Ταξίδια",
  description:
    "Μαλδίβες, Μπαλί, Σεϋχέλλες, Μαυρίκιος, Πολυνησία, Ταϊλάνδη και τα ομορφότερα νησιά του κόσμου — για το σημαντικότερο ταξίδι της ζωής σας.",
};

export default function GamiliaPage() {
  const honeymoon = byCategory("honeymoon");
  const islands = byCategory("islands");

  return (
    <>
      <PageHero
        eyebrow="Honeymoon"
        title="Γαμήλια & εξωτικά ταξίδια"
        lede="Για το σημαντικότερο ταξίδι της ζωής σας, το ειδικευμένο προσωπικό μας θα φροντίσει να ικανοποιήσει όλα όσα ονειρευτήκατε — από τη διαμονή μέχρι την τελευταία μεταφορά."
        crumbs={[{ label: "Γαμήλια ταξίδια" }]}
        image={islands[0]?.image}
      />
      <AnchorNav
        items={[
          { label: "Προορισμοί & κατάλογοι", href: "#proorismoi", count: honeymoon.length },
          { label: "Τα ομορφότερα νησιά", href: "#nisia", count: islands.length },
        ]}
      />
      <Catalog
        id="proorismoi"
        eyebrow="Εξωτικά"
        title="Προορισμοί & κατάλογοι"
        lede="Μαλδίβες, Μπαλί, Πουκέτ, Σαμούι, Σιγκαπούρη, Σεϋχέλλες, Μαυρίκιος, Κούβα, Μεξικό και Δομινικανή Δημοκρατία."
        items={honeymoon}
      />
      <Catalog
        id="nisia"
        eyebrow="Επιλογή μας"
        title="Τα ομορφότερα νησιά του κόσμου"
        lede="Δέκα νησιά που ξεχωρίζουν — από τη Σαντορίνη και την Μπόρα-Μπόρα μέχρι τη Νόζι Μπε και τη Νήσο του Πάσχα."
        items={islands}
        columns={4}
        tone="white"
      />
      <ContactStrip
        title="Ας σχεδιάσουμε τον μήνα του μέλιτος"
        body="Πείτε μας τι φαντάζεστε και σε τι προϋπολογισμό κινείστε — αναλαμβάνουμε τα υπόλοιπα."
      />
    </>
  );
}
