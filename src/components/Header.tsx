'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Αρχική' },
  { href: '/gia-emas', label: 'Για Εμάς' },
  { href: '/aktoploika', label: 'Ακτοπλοϊκά' },
  { href: '/aeroporika', label: 'Αεροπορικά' },
  { href: '/xenodoxeia', label: 'Ξενοδοχεία' },
  { href: '/ekdromes', label: 'Εκδρομές' },
  { href: '/krouazieres', label: 'Κρουαζιέρες' },
  { href: '/metafores', label: 'Μεταφορές' },
  { href: '/contact', label: 'Επικοινωνία' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="bg-slate-950 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex gap-4">
            <span>Τηλ: +30 26650 23053</span>
            <span>info@kotsistravel.gr</span>
          </div>
          <span className="text-slate-400">Ηγουμενίτσα</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://www.kotsistravel.gr/images/LOGO5.png" alt="Kotsis Travel" width={150} height={48} className="h-11 w-auto object-contain" priority unoptimized />
        </Link>
        <nav className="hidden lg:flex gap-1">
          {navItems.map(i => (
            <Link key={i.href} href={i.href} className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800 hover:text-blue-300 transition">{i.label}</Link>
          ))}
        </nav>
        <a href="tel:+302665023053" className="hidden md:inline-flex bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition">Καλέστε μας</a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-slate-800 border-t border-slate-700 px-4 py-3 space-y-1">
          {navItems.map(i => (
            <Link key={i.href} href={i.href} className="block px-3 py-2.5 rounded-md hover:bg-slate-700 text-sm" onClick={() => setOpen(false)}>{i.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
