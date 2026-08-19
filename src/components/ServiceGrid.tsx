import Link from "next/link";
import Reveal from "./Reveal";
import { Icon, type IconName } from "./Icon";
import { services } from "@/lib/site";

export default function ServiceGrid() {
  return (
    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={i * 55}>
          <Link
            href={s.href}
            className="group relative flex h-full flex-col bg-paper p-7 transition-colors duration-400 hover:bg-white"
          >
            {/* Brass wipe on hover, drawn from the left edge. */}
            <span className="absolute inset-y-0 left-0 w-0.5 bg-brand opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/[0.06] text-brand-600 transition-all duration-400 group-hover:bg-brand group-hover:text-white">
              <Icon name={s.icon as IconName} className="h-[1.35rem] w-[1.35rem]" />
            </span>

            <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-600">{s.kicker}</p>
            <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-ink">{s.title}</h3>
            <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">{s.blurb}</p>

            <span className="mt-6 flex items-center gap-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors group-hover:text-brand-600">
              Δείτε περισσότερα
              <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
