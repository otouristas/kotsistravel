import articlesJson from "@/content/articles.json";
import ferryJson from "@/content/ferry.json";

/** Structured body blocks, preserved from the legacy CMS markup. */
export type TextBlock = { t: "h" | "p"; x: string; em?: boolean };
export type ListBlock = { t: "list"; items: string[]; ordered?: boolean };
export type TableBlock = { t: "table"; rows: string[][] };
export type Block = TextBlock | ListBlock | TableBlock;

/** Ferry pages were captured with the earlier shape and use `t: "h3" | "p" | "li"`. */
export type FerryBlock = { t: string; x: string } | TableBlock;

export type Sibling = { slug: string; title: string; category: Category };

export type ArticleMeta = {
  published?: string;
  modified?: string;
  k2category?: string;
  hits?: number;
  prev?: Sibling;
  next?: Sibling;
};

export type TourDay = { n: number; title: string; text: string };

export type Departures = {
  head: string[];
  /** Canonical key per column: tour | days | departures | twin | single | child | hotel | taxes | notes */
  keys: (string | null)[];
  rows: Record<string, string>[];
};

export type Tour = {
  subtitle: string;
  badges: string[];
  days: TourDay[];
  includes: string[];
  excludes: string[];
  notes: string[];
  departures: Departures | null;
  priceFrom: number | null;
  duration: number;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: Category;
  intro: string;
  image: string;
  gallery: string[];
  price: string;
  blocks: Block[];
  meta?: ArticleMeta;
  tour?: Tour;
  source: string;
};

export type FerryPage = {
  slug: string;
  title: string;
  blocks: FerryBlock[];
  images: string[];
  source: string;
};

export type Category =
  | "airlines"
  | "airlines-lowcost"
  | "flights-corfu"
  | "tours-road"
  | "tours-air"
  | "cruises"
  | "cruise-brochures"
  | "destinations"
  | "islands"
  | "honeymoon"
  | "packages"
  | "before"
  | "info"
  | "advice"
  | "faq"
  | "services"
  | "airports"
  | "hotels"
  | "air-offers";

export const articles = articlesJson as Article[];
export const ferryPages = ferryJson as FerryPage[];

/** Which top-level route renders a given category's detail pages. */
export const sectionOf: Record<Category, string> = {
  airlines: "aeroporika",
  "airlines-lowcost": "aeroporika",
  "flights-corfu": "aeroporika",
  "tours-road": "ekdromes",
  "tours-air": "ekdromes",
  cruises: "krouazieres",
  "cruise-brochures": "krouazieres",
  destinations: "proorismoi",
  packages: "proorismoi",
  islands: "gamilia-taxidia",
  honeymoon: "gamilia-taxidia",
  before: "xrisima",
  info: "xrisima",
  advice: "xrisima",
  faq: "xrisima",
  services: "ypiresies",
  airports: "aeroporika",
  "air-offers": "aeroporika",
  hotels: "xenodoxeia",
};

export const categoryLabel: Record<Category, string> = {
  airlines: "Συνεργαζόμενες εταιρείες",
  "airlines-lowcost": "Low cost εταιρείες",
  "flights-corfu": "Πτήσεις από Κέρκυρα",
  "tours-road": "Οδικές εκδρομές",
  "tours-air": "Αεροπορικές εκδρομές",
  cruises: "Κρουαζιέρες",
  "cruise-brochures": "Έντυπα κρουαζιέρας",
  destinations: "Δημοφιλείς προορισμοί",
  packages: "Πακέτα",
  islands: "Τα ομορφότερα νησιά",
  honeymoon: "Γαμήλια & εξωτικά",
  before: "Πριν το ταξίδι",
  info: "Πληροφορίες",
  advice: "Συμβουλές",
  faq: "Συχνές ερωτήσεις",
  services: "Υπηρεσίες",
  airports: "Προορισμοί ανά αεροδρόμιο",
  "air-offers": "Προσφορές αεροπορικών",
  hotels: "Ξενοδοχεία",
};

export function byCategory(...cats: Category[]): Article[] {
  return articles.filter((a) => cats.includes(a.category));
}

export function bySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function hrefOf(a: Article): string {
  return `/${sectionOf[a.category]}/${a.slug}`;
}

export function ferryBySlug(slug: string): FerryPage | undefined {
  return ferryPages.find((p) => p.slug === slug);
}

/** Articles in a section, excluding one, for the "read next" rail. */
export function related(a: Article, limit = 3): Article[] {
  const sameCat = articles.filter((x) => x.category === a.category && x.id !== a.id);
  const sameSection = articles.filter(
    (x) => sectionOf[x.category] === sectionOf[a.category] && x.category !== a.category,
  );
  return [...sameCat, ...sameSection].slice(0, limit);
}

export const isText = (b: Block): b is TextBlock => b.t === "h" || b.t === "p";
export const isList = (b: Block): b is ListBlock => b.t === "list";
export const isTable = (b: Block): b is TableBlock => b.t === "table";

/** Word count of an article body — used to show reading effort on long guides. */
export function readingMinutes(a: Article): number {
  const words = a.blocks.reduce((n, b) => {
    if (isText(b)) return n + b.x.split(/\s+/).length;
    if (isList(b)) return n + b.items.join(" ").split(/\s+/).length;
    if (isTable(b)) return n + b.rows.flat().join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 220));
}

/**
 * Real <h> tags now survive the scrape, so this only has to promote the
 * paragraphs the legacy editors styled as headings instead of marking up.
 */
export function structure(blocks: Block[]): Block[] {
  return blocks.map((b) => {
    if (!isText(b)) return b;
    const x = b.x.trim();
    if (b.t === "h") return b;
    const isDay = /^\d+η\s+(?:η)?μέρα\s*[::]/i.test(x);
    const isShout =
      x.length < 90 && x === x.toUpperCase() && /[Α-ΩA-Z]/.test(x) && !/[.!?]$/.test(x);
    const isLabelled =
      /^(Τι περιλαμβάνεται|Τι δεν περιλαμβάνεται|Σημειώσεις|Στοιχεία Πλοίου|ΠΡΟΟΡΙΣΜΟΣ|Περιλαμβάνονται)/i.test(x);
    return isDay || isShout || isLabelled ? { ...b, t: "h" as const } : b;
  });
}

/**
 * A usable meta description: the first paragraph with real prose in it.
 * `intro` is the first block, which after the structured re-scrape is often a
 * short heading rather than a sentence.
 */
export function descriptionOf(a: Article, max = 165): string {
  if (a.tour?.subtitle) {
    const extra = [
      a.tour.duration ? `${a.tour.duration} ημέρες` : "",
      a.tour.priceFrom ? `από ${a.tour.priceFrom}€ το άτομο` : "",
    ].filter(Boolean).join(", ");
    return `${a.tour.subtitle}${extra ? ` — ${extra}.` : "."}`.slice(0, max);
  }
  const prose = a.blocks.find((b) => isText(b) && b.t === "p" && b.x.length > 60) as
    | TextBlock
    | undefined;
  const source = (prose?.x ?? a.intro ?? "").trim();
  // Pure reference pages (port and airport directories) carry only tables.
  const fallback = `${a.title} — ${categoryLabel[a.category]} από την KOTSIS TRAVEL, Γραφείο Γενικού Τουρισμού στην Ηγουμενίτσα από το 1975.`;
  const text = source.length >= 40 ? source : fallback;
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/** Tours that carry a modelled itinerary get the dedicated template. */
export function isTour(a: Article): boolean {
  return Boolean(a.tour && (a.tour.days.length > 0 || a.tour.departures));
}
