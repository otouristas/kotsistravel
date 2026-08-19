import type { Metadata } from "next";
import PageHero, { AnchorNav, ContactStrip } from "@/components/PageHero";
import Catalog from "@/components/Catalog";
import { byCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Χρήσιμες Πληροφορίες",
  description:
    "Διαβατήρια και βίζα, αποσκευές, εμβολιασμοί, ευρωπαϊκή κάρτα ασφάλισης, πρεσβείες, αεροδρόμια, λιμεναρχεία, συνάλλαγμα και ταξιδιωτικές συμβουλές.",
};

export default function XrisimaPage() {
  const before = byCategory("before");
  const info = byCategory("info");
  const advice = byCategory("advice");
  const faq = byCategory("faq");

  return (
    <>
      <PageHero
        eyebrow="Οδηγοί"
        title="Ό,τι χρειάζεται να ξέρετε πριν φύγετε"
        lede="Οι οδηγοί που ετοιμάσαμε για τους ταξιδιώτες μας — από τα δικαιολογητικά και τις αποσκευές μέχρι το jet lag και το φιλοδώρημα ανά χώρα."
        crumbs={[{ label: "Χρήσιμα" }]}
      />
      <AnchorNav
        items={[
          { label: "Πριν το ταξίδι", href: "#before", count: before.length },
          { label: "Πληροφορίες", href: "#info", count: info.length },
          { label: "Συμβουλές", href: "#advice", count: advice.length },
          { label: "Συχνές ερωτήσεις", href: "#faq", count: faq.length },
        ]}
      />
      <Catalog
        id="before"
        eyebrow="Προετοιμασία"
        title="Πριν το ταξίδι"
        lede="Δικαιολογητικά, αποσκευές, ασφάλιση και εμβολιασμοί — τα βασικά που πρέπει να τακτοποιήσετε εγκαίρως."
        items={before}
        layout="rows"
        columns={2}
      />
      <Catalog
        id="info"
        eyebrow="Αναφορές"
        title="Χρήσιμες πληροφορίες"
        lede="Πλήρεις κατάλογοι ελληνικών πρεσβειών, αεροδρομίων εσωτερικού και κεντρικών λιμεναρχείων."
        items={info}
        layout="rows"
        columns={2}
        tone="white"
      />
      <Catalog
        id="advice"
        eyebrow="Από την εμπειρία μας"
        title="Ταξιδιωτικές συμβουλές"
        lede="Πότε συμφέρει να κλείσετε εισιτήριο, πότε να αλλάξετε συνάλλαγμα και πώς να αντιμετωπίσετε το jet lag."
        items={advice}
        layout="rows"
        columns={2}
      />
      <Catalog
        id="faq"
        eyebrow="Ερωτήσεις"
        title="Συχνές ερωτήσεις"
        lede="Τα ερωτήματα που δεχόμαστε συχνότερα στο γραφείο."
        items={faq}
        layout="rows"
        columns={2}
        tone="white"
      />
      <ContactStrip
        title="Έχετε κάποια απορία;"
        body="Αν δεν βρήκατε την απάντηση, τηλεφωνήστε μας — απαντάμε επτά ημέρες την εβδομάδα."
      />
    </>
  );
}
