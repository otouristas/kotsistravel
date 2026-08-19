import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <Image src="https://www.kotsistravel.gr/images/espa.jpg" alt="ΕΣΠΑ" width={500} height={70} className="h-14 md:h-16 w-auto object-contain" unoptimized />
          <p className="text-slate-700 text-sm text-center">Με τη συγχρηματοδότηση της Ελλάδας και της Ευρωπαϊκής Ένωσης</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Kotsis Travel</h3>
          <p className="text-sm leading-relaxed">Γραφείο Γενικού Τουρισμού από το 1975. Αεροπορικά & Ακτοπλοϊκά, ξενοδοχεία, εκδρομές, κρουαζιέρες, πούλμαν.</p>
          <p className="text-sm mt-2">Μέλος IATA · ISO 9001:2008</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Υπηρεσίες</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/aktoploika" className="hover:text-blue-400">Ακτοπλοϊκά</Link></li>
            <li><Link href="/aeroporika" className="hover:text-blue-400">Αεροπορικά</Link></li>
            <li><Link href="/xenodoxeia" className="hover:text-blue-400">Ξενοδοχεία</Link></li>
            <li><Link href="/ekdromes" className="hover:text-blue-400">Εκδρομές</Link></li>
            <li><Link href="/krouazieres" className="hover:text-blue-400">Κρουαζιέρες</Link></li>
            <li><Link href="/metafores" className="hover:text-blue-400">Πούλμαν</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Χρήσιμα</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/gia-emas" className="hover:text-blue-400">Για Εμάς</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Επικοινωνία</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Επικοινωνία</h3>
          <ul className="space-y-2 text-sm">
            <li>Εθνικής Αντιστάσεως 140<br />46100 Ηγουμενίτσα</li>
            <li><a href="tel:+302665023053" className="hover:text-blue-400">+30 26650 23053</a></li>
            <li><a href="mailto:info@kotsistravel.gr" className="hover:text-blue-400">info@kotsistravel.gr</a></li>
            <li className="pt-1">Ωράριο: 09:00–14:30 & 17:00–21:00<br />Κυριακή 11:00–14:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kotsis Travel Services. Όλα τα δικαιώματα διατηρούνται.
      </div>
    </footer>
  );
}
