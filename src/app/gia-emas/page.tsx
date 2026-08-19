import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Για Εμάς", description: "Το ιστορικό του Kotsis Travel από το 1975." };
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/" className="hover:text-blue-600">Αρχική</Link> / <span className="text-slate-900">Για Εμάς</span></nav>
      <h1 className="text-4xl font-bold mb-8">Για Εμάς</h1>
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>Το Γραφείο Γενικού Τουρισμού <strong>KOTSIS TRAVEL</strong> ιδρύθηκε το 1975 με σταθερά ανοδική πορεία και έχει κερδίσει επάξια ηγετική θέση στον Ελληνικό τουρισμό.</p>
        <p>Έδρα: <strong>Ηγουμενίτσα</strong>, Εθνικής Αντιστάσεως 140. Υποκατάστημα στο Νέο Λιμάνι απέναντι από τον ΟΛΗΓ.</p>
        <p>Μέλος <strong>IATA</strong>, πιστοποιημένο με <strong>ISO 9001:2008</strong>.</p>
        <h2 className="text-2xl font-bold text-slate-900 mt-8">Υπηρεσίες</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Αεροπορικά & Ακτοπλοϊκά εισιτήρια</li>
          <li>Ξενοδοχεία παγκοσμίως</li>
          <li>Συνεδριακός τουρισμός & Incentives</li>
          <li>Οδικές μεταφορές με ιδιόκτητα πούλμαν</li>
          <li>Γαμήλια ταξίδια & κρουαζιέρες</li>
        </ul>
        <h2 className="text-2xl font-bold text-slate-900 mt-8">Ωράριο</h2>
        <p>Κεντρικό: Καθημερινά 09:00–14:30 & 17:00–21:00 · Κυριακή 11:00–14:00<br/>Υποκατάστημα Νέο Λιμάνι: 14:00–22:00</p>
      </div>
    </div>
  );
}
