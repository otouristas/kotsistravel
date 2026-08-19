import type { Metadata } from "next";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Catalog from "@/components/Catalog";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Οργανωμένες Εκδρομές",
  description:
    "Οδικές και αεροπορικές εκδρομές σε Ιταλία, Κροατία, Ελβετία, Αυστρία, Ουγγαρία, Τσεχία και Ισπανία, με αναλυτικό πρόγραμμα ανά ημέρα.",
};

export default function EkdromesPage() {
  const road = byCategory("tours-road");
  const air = byCategory("tours-air");

  return (
    <>
      <PageHero
        eyebrow="Οργανωμένα ταξίδια"
        title="Εκδρομές με πλήρες πρόγραμμα"
        lede="Κάθε εκδρομή μας έχει αναλυτική διαδρομή ανά ημέρα, οργανωμένες ξεναγήσεις και ξεκάθαρη λίστα με το τι περιλαμβάνεται και τι όχι — ώστε να ξέρετε ακριβώς τι αγοράζετε."
        crumbs={[{ label: "Εκδρομές" }]}
        image={road[0]?.image}
      />
      <AnchorNav
        items={[
          { label: "Οδικές εκδρομές", href: "#odikes", count: road.length },
          { label: "Αεροπορικές εκδρομές", href: "#aeroporikes", count: air.length },
        ]}
      />
      <Catalog
        id="odikes"
        eyebrow="Με πούλμαν"
        title="Οδικές εκδρομές"
        lede="Αναχωρήσεις με τα ιδιόκτητα υπερπολυτελή λεωφορεία μας και έμπειρους αρχηγούς."
        items={road}
      />
      <Catalog
        id="aeroporikes"
        eyebrow="Με πτήση"
        title="Αεροπορικές εκδρομές"
        lede="Για προορισμούς που αξίζει να φτάσετε γρήγορα και να αφιερώσετε τον χρόνο σας στην περιήγηση."
        items={air}
        tone="white"
      />
      <ContactStrip
        title="Ενδιαφέρεστε για κάποια εκδρομή;"
        body="Ρωτήστε μας για αναχωρήσεις, διαθεσιμότητα και τιμές ομάδων."
      />
    </>
  );
}
