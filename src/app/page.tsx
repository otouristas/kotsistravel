import Link from "next/link";

const services = [
  { title: "Ακτοπλοϊκά Εισιτήρια", desc: "Κρατήσεις σε όλες τις ακτοπλοϊκές. Ελλάδα, Ιταλία, Αδριατική.", href: "/aktoploika", icon: "🚢" },
  { title: "Αεροπορικά Εισιτήρια", desc: "Παγκόσμιες πτήσεις σε ανταγωνιστικές τιμές. Μέλος IATA.", href: "/aeroporika", icon: "✈️" },
  { title: "Ξενοδοχεία", desc: "Κρατήσεις σε ξενοδοχεία σε όλο τον κόσμο.", href: "/xenodoxeia", icon: "🏨" },
  { title: "Οδικές Εκδρομές", desc: "Οργανωμένες εκδρομές με ιδιόκτητα πολυτελή πούλμαν.", href: "/ekdromes", icon: "🚌" },
  { title: "Κρουαζιέρες", desc: "Μεσόγειος, Καραϊβική, Βόρεια Ευρώπη και εξωτικές.", href: "/krouazieres", icon: "🛳️" },
  { title: "Ενοικιάσεις Πούλμαν", desc: "Ιδιόκτητα τουριστικά λεωφορεία και minibus.", href: "/metafores", icon: "🚐" },
];

const tours = [
  { title: "Bella Italia", price: "280€", days: "6 διανυκτερεύσεις" },
  { title: "Πανόραμα Κροατίας", price: "420€", days: "6 διανυκτερεύσεις" },
  { title: "Αναγεννησιακή Τοσκάνη", price: "345€", days: "6 διανυκτερεύσεις" },
  { title: "Ίστρια - Σλοβενία", price: "237€", days: "6 διανυκτερεύσεις" },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="text-blue-300 font-medium mb-3 uppercase text-sm tracking-wide">Από το 1975 · Ηγουμενίτσα</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Το ταξίδι σας<br /><span className="text-blue-400">ξεκινά εδώ</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Αεροπορικά & Ακτοπλοϊκά εισιτήρια, ξενοδοχεία, οργανωμένες εκδρομές, κρουαζιέρες και ενοικιάσεις πούλμαν.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-semibold transition shadow-lg">Επικοινωνήστε μαζί μας</Link>
            <Link href="/ekdromes" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold transition">Δείτε τις Εκδρομές</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Οι Υπηρεσίες μας</h2>
          <p className="text-slate-600">Ολοκληρωμένες τουριστικές υπηρεσίες με σχεδόν 50 χρόνια εμπειρίας</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Δημοφιλείς Εκδρομές</h2>
              <p className="text-slate-600">Οδικές εκδρομές με ιδιόκτητα πούλμαν</p>
            </div>
            <Link href="/ekdromes" className="text-blue-600 font-semibold hover:underline">Όλες οι εκδρομές →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map(t => (
              <Link key={t.title} href="/ekdromes" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="h-36 bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-5xl text-white/80">🗺️</div>
                <div className="p-5">
                  <h3 className="font-bold group-hover:text-blue-600 transition">{t.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{t.days}</p>
                  <p className="text-lg font-bold text-red-600 mt-2">από {t.price} <span className="text-sm font-normal text-slate-500">/ άτομο</span></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Σχεδόν 50 χρόνια εμπειρίας</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Το Γραφείο Γενικού Τουρισμού <strong>KOTSIS TRAVEL</strong> ιδρύθηκε το 1975 στην Ηγουμενίτσα. 
              Μέλος IATA, πιστοποιημένο με ISO 9001:2008.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Διαθέτουμε ιδιόκτητα πολυτελή τουριστικά λεωφορεία και συνεργαζόμαστε με τις μεγαλύτερες αεροπορικές και ακτοπλοϊκές εταιρείες.
            </p>
            <Link href="/gia-emas" className="text-blue-600 font-semibold hover:underline">Μάθετε περισσότερα →</Link>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Γιατί να μας επιλέξετε</h3>
            <ul className="space-y-4">
              <li className="flex gap-3"><span>✓</span> Άμεση εξυπηρέτηση & ανταγωνιστικές τιμές</li>
              <li className="flex gap-3"><span>✓</span> Ιδιόκτητα πούλμαν υψηλών προδιαγραφών</li>
              <li className="flex gap-3"><span>✓</span> Μέλος IATA & ISO 9001:2008</li>
              <li className="flex gap-3"><span>✓</span> Εμπειρία από το 1975</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Έτοιμοι για το επόμενο ταξίδι σας;</h2>
          <p className="text-slate-300 mb-8 text-lg">Επικοινωνήστε μαζί μας σήμερα.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+302665023053" className="bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-lg font-semibold transition">+30 26650 23053</a>
            <Link href="/contact" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-lg font-semibold transition">Φόρμα Επικοινωνίας</Link>
          </div>
        </div>
      </section>
    </>
  );
}
