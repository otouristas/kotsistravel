"use client";

import { useEffect, useRef, useState } from "react";

type Tag = "div" | "li" | "section" | "article" | "figure";

/**
 * Reveals children once when they first scroll into view.
 * Falls back to visible immediately if IntersectionObserver is unavailable.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: Tag;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const props = {
    "data-shown": shown,
    style: { transitionDelay: delay ? `${delay}ms` : undefined },
    className: `reveal ${className}`,
    children,
  };

  // Explicit branches keep the ref concretely typed — a generic polymorphic
  // element blows up into a union TypeScript refuses to represent.
  switch (as) {
    case "li":
      return <li ref={ref as React.RefObject<HTMLLIElement>} {...props} />;
    case "section":
      return <section ref={ref as React.RefObject<HTMLElement>} {...props} />;
    case "article":
      return <article ref={ref as React.RefObject<HTMLElement>} {...props} />;
    case "figure":
      return <figure ref={ref as React.RefObject<HTMLElement>} {...props} />;
    default:
      return <div ref={ref as React.RefObject<HTMLDivElement>} {...props} />;
  }
}
