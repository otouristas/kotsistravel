import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Ακτοπλοϊκά Εισιτήρια", description: "Κρατήσεις ακτοπλοϊκών εισιτηρίων για Ελλάδα, Ιταλία και Αδριατική." };
export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/" className="hover:text-blue-600">Αρχική</Link> / <span className="text-slate-900">Ακτοπλοϊκά</span></nav>
      <h1 className="text-4xl font-bold mb-6">Ακτοπλοϊκά Εισιτήρια</h1>
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <p className="text-slate-600 leading-relaxed mb-6">Κρατήσεις και έκδοση ακτοπλοϊκών εισιτηρίων για Ελλάδα, Ιταλία και Αδριατική. Συνεργασία με όλες τις μεγάλες ακτοπλοϊκές εταιρείες.</p>
        <p className="text-slate-600 mb-8">Καλέστε: <a href="tel:+302665023053" className="text-blue-600 font-semibold">+30 26650 23053</a></p>
        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">Επικοινωνία</Link>
      </div>
    </div>
  );
}
