import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { OrganizationJsonLd } from "@/components/JsonLd";

// Inter ships a proper Greek subset and is a variable font, so the whole
// weight range costs one file. Used for both UI and display type.
const inter = Inter({
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} στην Ηγουμενίτσα από το 1975`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Runs before the page paints: enables the scroll-reveal styles only
            when JS is present to un-hide them again. Without it every section
            renders plainly visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                     focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-sm
                     focus:font-semibold focus:text-white"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <OrganizationJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
