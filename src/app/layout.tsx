import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: {
    default: "Kotsis Travel | Αεροπορικά - Ακτοπλοϊκά - Εκδρομές - Κρουαζιέρες",
    template: "%s | Kotsis Travel",
  },
  description: "Γραφείο Γενικού Τουρισμού στην Ηγουμενίτσα από το 1975. Αεροπορικά & ακτοπλοϊκά εισιτήρια, ξενοδοχεία, εκδρομές, κρουαζιέρες, πούλμαν. Μέλος IATA.",
  keywords: ["ταξιδιωτικό γραφείο", "Ηγουμενίτσα", "ακτοπλοϊκά", "αεροπορικά", "εκδρομές", "Kotsis Travel"],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "Kotsis Travel",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
