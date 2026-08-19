"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";
import { Icon } from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";

/** Marketing indicators shown against nav entries. */
const BADGES: Record<string, { text: string; tone: "accent" | "brand" }> = {
  Ακτοπλοϊκά: { text: "Η ειδικότητά μας", tone: "accent" },
  Αεροπορικά: { text: "από 25€", tone: "accent" },
  Κρουαζιέρες: { text: "Νέοι προορισμοί", tone: "brand" },
  Εκδρομές: { text: "15 προγράμματα", tone: "brand" },
};

const MOBILE_HIGHLIGHTS = [
  { label: "Ακτοπλοϊκά Αδριατικής", href: "/aktoploika", note: "Ανκόνα · Μπάρι · Βενετία · Τεργέστη", icon: "ferry" as const },
  { label: "Πτήσεις από Κέρκυρα", href: "/aeroporika#korfu", note: "Τιμές από 25,00€", icon: "plane" as const },
  { label: "Οργανωμένες εκδρομές", href: "/ekdromes", note: "Πλήρες πρόγραμμα ανά ημέρα", icon: "route" as const },
  { label: "Κρουαζιέρες", href: "/krouazieres", note: "Καραϊβική · Αλάσκα · Βαλτική", icon: "ship" as const },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Grace period so the pointer can travel from trigger to panel.
  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={hoverClose}>
      {/* Utility strip — navy, always opaque, collapses on scroll. */}
      <div
        className={`overflow-hidden bg-navy-950 transition-[max-height,opacity] duration-400 ease-swift ${
          scrolled ? "max-h-0 opacity-0" : "max-h-11 opacity-100"
        }`}
      >
        <div className="shell-wide flex h-10 items-center justify-between gap-6 text-[0.74rem]">
          <p className="flex items-center gap-2 text-brand-100/75">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-400" />
            <span className="hidden sm:inline">Γραφείο Γενικού Τουρισμού στην Ηγουμενίτσα από το {site.founded}</span>
            <span className="sm:hidden">Από το {site.founded} στην Ηγουμενίτσα</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <LanguageSwitcher tone="dark" />
            </div>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand-300"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1.5 text-brand-100/70 transition-colors hover:text-white sm:flex"
            >
              <Icon name="mail" className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — solid white, never transparent. */}
      <div
        className={`border-b border-rule bg-white transition-shadow duration-300 ${
          scrolled || openMenu ? "shadow-[0_4px_24px_-8px_rgba(8,20,38,0.16)]" : ""
        }`}
      >
        <div className="shell-wide flex h-[4.25rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} — αρχική`} className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Κύρια πλοήγηση">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const open = openMenu === item.label;
              const badge = BADGES[item.label];
              return (
                <div key={item.label} className="relative" onMouseEnter={() => hoverOpen(item.label)}>
                  <Link
                    href={item.href}
                    aria-expanded={item.children ? open : undefined}
                    className={`relative flex items-center gap-1 px-3.5 py-6 text-[0.85rem] font-semibold transition-colors duration-200 ${
                      active || open ? "text-brand" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <Icon
                        name="chevron"
                        className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    )}
                    {/* Active/hover underline anchored to the bar's bottom edge. */}
                    <span
                      className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t bg-brand transition-transform duration-300 ease-swift ${
                        active || open ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>

                  {item.children && (
                    <div
                      className={`absolute left-1/2 top-full w-[27rem] -translate-x-1/2 origin-top rounded-b-2xl border border-t-0 border-rule bg-white p-2.5 shadow-[0_28px_60px_-24px_rgba(8,20,38,0.35)] transition-all duration-200 ease-swift ${
                        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1.5 opacity-0"
                      }`}
                    >
                      {badge && (
                        <div className="mb-1.5 flex items-center justify-between rounded-lg bg-paper-2 px-3 py-2">
                          <span className="text-[0.72rem] font-semibold text-ink-soft">{item.label}</span>
                          <span className={badge.tone === "accent" ? "pill pill-accent" : "pill pill-brand"}>
                            {badge.text}
                          </span>
                        </div>
                      )}
                      {item.children.map((c) => (
                        <Link
                          key={c.href + c.label}
                          href={c.href}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-brand/[0.06]"
                        >
                          <span className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full bg-brand/50 transition-all duration-300 group-hover:w-3.5 group-hover:bg-brand" />
                          <span className="min-w-0">
                            <span className="block text-[0.86rem] font-semibold text-ink">{c.label}</span>
                            {c.note && (
                              <span className="mt-0.5 block truncate text-[0.76rem] text-ink-soft">{c.note}</span>
                            )}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/epikoinonia" className="btn btn-primary hidden !px-5 !py-2.5 text-[0.82rem] sm:inline-flex">
              Ζητήστε προσφορά
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-rule text-ink transition-colors hover:bg-paper-2 xl:hidden"
            >
              <Icon name={mobileOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- mobile: full screen */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-navy-950 text-white transition-all duration-300 ease-swift xl:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Its own bar so the panel truly covers edge to edge. */}
        <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-8">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Logo dark />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Κλείσιμο μενού"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {/* Marketing rail */}
          <div className="border-b border-white/10 px-5 py-6 sm:px-8">
            <p className="eyebrow eyebrow-dark">Δημοφιλή</p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {MOBILE_HIGHLIGHTS.map((h) => (
                <Link
                  key={h.href}
                  href={h.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3.5 rounded-xl border border-white/12 bg-white/[0.05] p-3.5 transition-colors active:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/25 text-brand-300">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.92rem] font-semibold">{h.label}</span>
                    <span className="mt-0.5 block truncate text-[0.76rem] text-brand-100/60">{h.note}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          <nav className="px-5 py-2 sm:px-8" aria-label="Πλοήγηση κινητού">
            {nav.map((item) => {
              const badge = BADGES[item.label];
              return (
                <details key={item.label} className="group border-b border-white/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2.5">
                      <span className="text-[1.15rem] font-bold tracking-[-0.02em]">{item.label}</span>
                      {badge && <span className="pill pill-dark">{badge.text}</span>}
                    </span>
                    {item.children ? (
                      <Icon
                        name="chevron"
                        className="h-4 w-4 shrink-0 text-brand-100/50 transition-transform duration-300 group-open:rotate-180"
                      />
                    ) : (
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-brand-100/50" />
                    )}
                  </summary>

                  <div className="pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="mb-1 flex items-center gap-2.5 rounded-lg py-2 text-[0.88rem] font-semibold text-brand-300"
                    >
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                      Όλα στην ενότητα «{item.label}»
                    </Link>
                    {item.children?.map((c) => (
                      <Link
                        key={c.href + c.label}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 rounded-lg py-2.5 transition-colors active:bg-white/5"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-brand-300/70" />
                        <span className="min-w-0">
                          <span className="block text-[0.92rem] text-brand-100/90">{c.label}</span>
                          {c.note && (
                            <span className="mt-0.5 block text-[0.76rem] text-brand-100/45">{c.note}</span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </nav>

          {/* Language */}
          <div className="border-t border-white/10 px-5 py-6 sm:px-8">
            <p className="eyebrow eyebrow-dark">Γλώσσα</p>
            <div className="mt-4">
              <LanguageSwitcher tone="dark" />
            </div>
          </div>

          {/* Trust row */}
          <div className="px-5 pb-7 sm:px-8">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { k: "1975", v: "Από το" },
                { k: "IATA", v: "Μέλος" },
                { k: "ISO 9001", v: "Πιστοποίηση" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.14em] text-brand-100/45">{s.v}</p>
                  <p className="mt-1 text-[1.05rem] font-bold text-brand-300">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky action bar */}
        <div className="shrink-0 border-t border-white/10 bg-navy-900 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
          <div className="flex gap-2.5">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-ghost flex-1 whitespace-nowrap !px-4 !py-3 !text-[0.82rem]">
              <Icon name="phone" className="h-4 w-4" />
              Καλέστε μας
            </a>
            <Link
              href="/epikoinonia"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary flex-1 whitespace-nowrap !px-4 !py-3 !text-[0.82rem]"
            >
              Ζητήστε προσφορά
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
