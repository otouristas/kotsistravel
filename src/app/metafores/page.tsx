import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Μεταφορές & Πούλμαν", description: "Ιδιόκτητα υπερπολυτελή τουριστικά λεωφορεία και minibus." };
export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/" className="hover:text-blue-600">Αρχική</Link> / <span className="text-slate-900">Μεταφορές</span></nav>
      <h1 className="text-4xl font-bold mb-6">Μεταφορές & Πούλμαν</h1>
      <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-4 text-slate-700">
        <p>Με τα <strong>ιδιόκτητα, υπερπολυτελή τουριστικά λεωφορεία</strong> μας και με έμπειρους επαγγελματίες οδηγούς, παρέχουμε υπηρεσίες μεταφορών και εκδρομών στην Ελλάδα και το εξωτερικό.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ενοικιάσεις τουριστικών λεωφορείων (πούλμαν)</li>
          <li>Minibus & VAN</li>
          <li>Transfers αεροδρομίων / λιμανιών</li>
          <li>Σχολικές εκδρομές</li>
          <li>VIP μεταφορές</li>
        </ul>
        <p className="pt-4">Για προσφορές: <a href="tel:+302665023053" className="text-blue-600 font-semibold">+30 26650 23053</a></p>
        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">Ζητήστε προσφορά</Link>
      </div>
    </div>
  );
}
