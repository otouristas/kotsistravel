import Image from "next/image";

/**
 * The supplied brand mark (public/kotsilogo.png), used as-is.
 *
 * The source is 169×75 with alpha, so it is rendered at 116px wide — small
 * enough to stay effectively crisp on 2× displays without upscaling much, and
 * `unoptimized` keeps Next from re-encoding a already-tiny PNG.
 *
 * The artwork is blue-on-transparent, which disappears against the navy
 * surfaces, so the dark variant sits on a white chip rather than being
 * recoloured — the mark stays exactly as the brand owns it.
 */
export default function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={[
        "inline-flex items-center",
        dark ? "rounded-md bg-white px-2.5 py-1.5" : "",
        className,
      ].join(" ")}
    >
      <Image
        src="/kotsilogo.png"
        alt="KOTSIS Travel Services"
        width={169}
        height={75}
        priority
        unoptimized
        className="h-auto w-[104px] sm:w-[116px]"
      />
    </span>
  );
}
