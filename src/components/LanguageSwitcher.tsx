"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Google Translate flag switcher, ported from the legacy GTranslate module.
 *
 * Only the switching mechanism is implemented — no hand-written translations.
 * Google's widget rewrites the page in place; the chosen language lives in the
 * `googtrans` cookie, so it survives navigation between routes.
 */
export const LANGS = [
  { code: "el", label: "Ελληνικά", title: "Greek" },
  { code: "en", label: "English", title: "English" },
  { code: "it", label: "Italiano", title: "Italian" },
  { code: "de", label: "Deutsch", title: "German" },
  { code: "fr", label: "Français", title: "French" },
  { code: "es", label: "Español", title: "Spanish" },
  { code: "ru", label: "Русский", title: "Russian" },
  { code: "bg", label: "Български", title: "Bulgarian" },
  { code: "sq", label: "Shqip", title: "Albanian" },
  { code: "tr", label: "Türkçe", title: "Turkish" },
] as const;

const SOURCE = "el";

/** Reads the language Google stored, e.g. "/el/de" -> "de". */
function currentLang(): string {
  if (typeof document === "undefined") return SOURCE;
  const m = document.cookie.match("(^|;) ?googtrans=([^;]*)(;|$)");
  return m ? (m[2].split("/")[2] || SOURCE) : SOURCE;
}

function translateTo(lang: string) {
  const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
  if (!combo) {
    // The widget script has not finished booting yet — try again shortly.
    setTimeout(() => translateTo(lang), 400);
    return;
  }
  combo.value = lang === SOURCE ? "" : lang;
  combo.dispatchEvent(new Event("change"));
}

export default function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [active, setActive] = useState<string>(SOURCE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setActive(currentLang());
    setReady(true);
  }, []);

  const pick = (code: string) => {
    setActive(code);
    translateTo(code);
  };

  return (
    <>
      {/* Google's own mount point. It renders a <select> we drive from the flags. */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <Script id="gtranslate-init" strategy="afterInteractive">
        {`function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'${SOURCE}',autoDisplay:false},'google_translate_element')}`}
      </Script>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <div
        className="flex items-center gap-1"
        role="group"
        aria-label="Επιλογή γλώσσας"
        // Google must not translate the language names themselves.
        translate="no"
      >
        {LANGS.map((l) => {
          const on = ready && active === l.code;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => pick(l.code)}
              title={`${l.label} (${l.title})`}
              aria-label={l.label}
              aria-pressed={on}
              className={[
                "notranslate flex h-6 w-6 items-center justify-center rounded transition-all duration-200",
                on
                  ? "ring-2 ring-offset-1 " +
                    (tone === "dark" ? "ring-brand-300 ring-offset-navy-950" : "ring-brand ring-offset-white")
                  : "opacity-55 hover:opacity-100",
              ].join(" ")}
            >
              <Image
                src={`/flags/${l.code}.png`}
                alt=""
                width={16}
                height={16}
                unoptimized
                className="h-4 w-4 rounded-[2px]"
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
