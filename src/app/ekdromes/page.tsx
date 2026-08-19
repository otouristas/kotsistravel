import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Εκδρομές", description: "Οργανωμένες οδικές και αεροπορικές εκδρομές με ιδιόκτητα πούλμαν." };
export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/" className="hover:text-blue-600">Αρχική</Link> / <span className="text-slate-900">Εκδρομές</span></nav>
      <h1 className="text-4xl font-bold mb-6">Εκδρομές</h1>
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <p className="text-slate-600 leading-relaxed mb-6">Οργανωμένες οδικές και αεροπορικές εκδρομές με ιδιόκτητα πούλμαν.</p>
        <p className="text-slate-600 mb-8">Για πληροφορίες και κρατήσεις καλέστε: <a href="tel:+302665023053" className="text-blue-600 font-semibold">+30 26650 23053</a></p>
        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">Επικοινωνία</Link>
      </div>
    </div>
  );
}
