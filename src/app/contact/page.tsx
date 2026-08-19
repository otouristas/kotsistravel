import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Επικοινωνία", description: "Επικοινωνήστε με το Kotsis Travel." };
export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <nav className="text-sm text-slate-500 mb-6"><Link href="/" className="hover:text-blue-600">Αρχική</Link> / <span className="text-slate-900">Επικοινωνία</span></nav>
      <h1 className="text-4xl font-bold mb-4">Επικοινωνία</h1>
      <p className="text-slate-600 mb-10">Θα χαρούμε να σας εξυπηρετήσουμε.</p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-bold mb-4">Kotsis Travel Services</h2>
            <p className="mb-3"><strong>Διεύθυνση</strong><br/>Εθνικής Αντιστάσεως 140<br/>46100 Ηγουμενίτσα</p>
            <p className="mb-3"><strong>Τηλέφωνο</strong><br/><a href="tel:+302665023053" className="text-blue-600 text-lg font-medium">+30 26650 23053</a></p>
            <p className="mb-3"><strong>Fax</strong><br/>+30 26650 24963</p>
            <p><strong>Email</strong><br/><a href="mailto:info@kotsistravel.gr" className="text-blue-600">info@kotsistravel.gr</a></p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-bold mb-4">Ωράριο</h2>
            <p>Καθημερινά 09:00–14:30 & 17:00–21:00<br/>Κυριακή 11:00–14:00<br/>Υποκατάστημα Νέο Λιμάνι: 14:00–22:00</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-6">Στείλτε μήνυμα</h2>
          <form className="space-y-4" action="mailto:info@kotsistravel.gr" method="post" encType="text/plain">
            <div><label className="block text-sm font-medium mb-1">Ονοματεπώνυμο</label><input name="name" required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" /></div>
            <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" name="email" required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" /></div>
            <div><label className="block text-sm font-medium mb-1">Τηλέφωνο</label><input type="tel" name="phone" className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" /></div>
            <div><label className="block text-sm font-medium mb-1">Μήνυμα</label><textarea name="message" rows={4} required className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" /></div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">Αποστολή</button>
          </form>
        </div>
      </div>
    </div>
  );
}
