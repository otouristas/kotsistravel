import type { Metadata } from "next";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Catalog from "@/components/Catalog";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Κρουαζιέρες",
  description:
    "Κρουαζιέρες σε Καραϊβική, Αλάσκα, Βαλτική και νορβηγικά φιόρδ. Πρακτορεύσεις κρουαζιερόπλοιων και έντυπα των μεγαλύτερων εταιρειών.",
};

export default function KrouazieresPage() {
  const cruises = byCategory("cruises");
  const brochures = byCategory("cruise-brochures");

  return (
    <>
      <PageHero
        eyebrow="Θαλάσσιος τουρισμός"
        title="Κρουαζιέρες σε πέντε θάλασσες"
        lede="Αναλαμβάνουμε κρατήσεις πολυήμερων κρουαζιέρων σε όλους τους προορισμούς, καθώς και την ενοικίαση πολυτελών σκαφών. Είμαστε πρακτορείο κρουαζιερόπλοιων με πρόσβαση στους καταλόγους όλων των μεγάλων εταιρειών."
        crumbs={[{ label: "Κρουαζιέρες" }]}
        image={cruises[0]?.image}
      />
      <AnchorNav
        items={[
          { label: "Προορισμοί", href: "#proorismoi", count: cruises.length },
          { label: "Έντυπα κρουαζιέρας", href: "#entypa", count: brochures.length },
        ]}
      />
      <Catalog
        id="proorismoi"
        eyebrow="Προορισμοί"
        title="Πού μπορείτε να ταξιδέψετε"
        lede="Από τους παγετώνες της Αλάσκας και τον ήλιο του μεσονυκτίου στα νορβηγικά φιόρδ, μέχρι την Ανατολική και Δυτική Καραϊβική."
        items={cruises}
      />
      <Catalog
        id="entypa"
        eyebrow="Κατάλογοι"
        title="Έντυπα κρουαζιέρας"
        lede="Τα επίσημα έντυπα των συνεργαζόμενων εταιρειών, όπως τα κρατάμε στο αρχείο του γραφείου."
        items={brochures}
        layout="rows"
        columns={2}
        tone="white"
      />
      <ContactStrip
        title="Ας βρούμε την κρουαζιέρα σας"
        body="Πείτε μας περίοδο, διάρκεια και προορισμό — θα σας στείλουμε διαθέσιμες αναχωρήσεις και καμπίνες."
      />
    </>
  );
}
