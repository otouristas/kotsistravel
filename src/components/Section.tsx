import Link from "next/link";
import Reveal from "./Reveal";
import { Icon } from "./Icon";

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  action,
  tone = "light",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={[
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
      ].join(" ")}
    >
      <div className={centered ? "max-w-measure" : "max-w-2xl"}>
        {eyebrow && (
          <p className={`eyebrow ${centered ? "eyebrow-center" : ""} ${tone === "dark" ? "eyebrow-dark" : ""}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={[
            "mt-4 font-display text-display-md text-balance",
            tone === "dark" ? "text-paper" : "text-ink",
          ].join(" ")}
        >
          {title}
        </h2>
        {lede && (
          <p
            className={[
              "mt-4 text-[1.02rem] leading-relaxed text-pretty",
              tone === "dark" ? "text-brand-100/75" : "text-ink-soft",
            ].join(" ")}
          >
            {lede}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={[
            "group inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors",
            tone === "dark" ? "text-brand-300 hover:text-white" : "text-brand-600 hover:text-ink",
          ].join(" ")}
        >
          {action.label}
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "paper2" | "deep" | "white";
  id?: string;
}) {
  const bg = {
    paper: "bg-paper",
    paper2: "bg-paper-2",
    white: "bg-white",
    deep: "bg-navy-900 text-paper",
  }[tone];
  return (
    <section id={id} className={`relative ${bg} py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
