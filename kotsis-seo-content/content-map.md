# Content map — kotsistravel.gr

The canonical architecture for the Next.js rebuild: **52 Greek pages**, replacing
1,002 legacy Joomla URLs.

## Why 52 and not 1,002

The legacy export contains 1,002 rows. Deduplicated, that is **198 distinct
articles** — Joomla/K2 served every article under every category path it belonged
to. Article `k331` alone appears under 24 URLs.

| Legacy bucket | Rows | Disposition |
|---|---:|---|
| `component/mailto` endpoints | 177 | 410 |
| Print views (`tmpl=component&print=1`) | 177 | 410 |
| K2 article URLs (198 unique articles) | 489 | MERGE+301 into cluster hubs |
| `component/k2` duplicates | 31 | MERGE+301 |
| Pagination (`start=`, `limitstart=`) | 21 | 301 to parent hub |
| Homepage variants | 13 | 301 to `/` |
| Category / static pages | 53 | 301 to new canonical |
| Auth endpoints | 1 | 410 |

Final: **145 × 301, 494 × MERGE+301, 363 × 410**. See `redirect-map.csv`.

### Two caveats about the source data

1. **The crawl failed.** All 1,002 rows report `Connection Refused` — it ran
   against `kotsistravel.gr` without `www`. There is no title, H1, status or word
   count data in the export; only the `Address` column is usable.
2. **338 rows lost their Greek.** Path segments were exported as literal `?`
   characters (`/index.php/??????????/…` = `/index.php/ακτοπλοϊκα/…`). These were
   recovered by the numeric article id, which survives in most paths and is what
   Joomla actually routes on, and otherwise matched against a fresh crawl of the
   live sitemap.

## Priority definitions

- **P0** — revenue or entity critical. Build first, keep permanently current.
- **P1** — primary commercial cluster pages.
- **P2** — supporting commercial and informational pages.
- **P3** — utility and legal. Not expected to rank.

## Canonical page list

### Core

| URL | Primary keyword | Intent | Priority | Source content |
|---|---|---|---|---|
| `/` | ταξιδιωτικό γραφείο ηγουμενίτσα | Commercial / local | P0 | About page, service list |
| `/about/` | kotsis travel | Brand / entity | P1 | «Για Εμάς» (c149), staff page |
| `/certifications/` | πιστοποιήσεις ταξιδιωτικού γραφείου | Trust | P2 | ISO 9001:2008 (LL-C), IATA, ETOA |
| `/contact/` | kotsis travel επικοινωνία | Local / navigational | P0 | Contact page, both offices |

### Ferry cluster — the growth thesis

Highest opportunity on the site. Greek volume with **KD 0** across every route
query, plus strong German, Turkish and Italian demand.

| URL | Primary keyword | Vol | KD | Priority | Source content |
|---|---|---:|---:|---|---|
| `/ferry-tickets/` | ακτοπλοϊκά εισιτήρια | 76,000 | 65 | P0 | Ferry section root |
| `/ferries/greece-italy/` | ακτοπλοϊκά για ιταλία | 90 | 0 | P0 | `departures_from_greece_to_italy` |
| `/ferries/italy-greece/` | ιταλία ελλάδα πλοίο | — | 0 | P1 | `departures_from_italy_to_greece` |
| `/ferries/igoumenitsa-brindisi/` | ηγουμενίτσα μπρίντιζι | 600 | 0 | P0 | New — no legacy page exists |
| `/ferries/igoumenitsa-bari/` | ηγουμενίτσα μπάρι | 150 | 0 | P0 | New — no legacy page exists |
| `/ferries/igoumenitsa-ancona/` | ηγουμενίτσα ανκόνα | 100 | 0 | P0 | New — no legacy page exists |
| `/ferries/adriatic-ports/` | λιμάνια αδριατικής | — | — | P1 | `adriatic_ports` (6 ports, real copy) |
| `/ferries/companies/` | ακτοπλοϊκές εταιρείες αδριατικής | — | — | P1 | `adriatic_fleet` + 5 company pages |
| `/ferries/companies/minoan-lines/` | minoan lines ηγουμενίτσα | — | — | P2 | `minoan_lines` |
| `/ferries/companies/grimaldi-lines/` | grimaldi lines ηγουμενίτσα | — | — | P2 | `grimaldi_lines` |
| `/ferries/companies/superfast-ferries/` | superfast ferries ανκόνα | — | — | P2 | `superfast_ferries`, `anek_lines`, `anek_superfast` |

The three route pages are **new**. The legacy site never had a page per route —
it had one flat timetable table. That is precisely why the KD is 0.

### Flights

| URL | Primary keyword | Vol | KD | Priority | Source content |
|---|---|---:|---:|---|---|
| `/air-tickets/` | αεροπορικά εισιτήρια | 92,000 | 71 | P1 | Flights section |
| `/air-tickets/from-corfu/` | αεροπορικά εισιτήρια κέρκυρα | 20 | — | P2 | `flights-from-corfu` (c80), 6 priced routes |
| `/air-tickets/from-preveza/` | πτήσεις από πρέβεζα | — | — | P2 | `from-preveza` (c79) |
| `/air-tickets/from-thessaloniki/` | πτήσεις από θεσσαλονίκη | 250 | 0 | P2 | `destinations-from-thessaloniki` (c120) |
| `/air-tickets/airlines/` | συνεργαζόμενες αεροπορικές εταιρείες | — | — | P2 | **35 airline articles merged** (24 + 11 low cost) |

`/air-tickets/` is a cluster hub, not a Skyscanner competitor. 182 legacy URLs
consolidate into `/air-tickets/airlines/`.

### Accommodation, car hire, packages

| URL | Primary keyword | Vol | KD | Priority | Source content |
|---|---|---:|---:|---|---|
| `/hotels/` | κρατήσεις ξενοδοχείων | — | — | P1 | **58 legacy URLs merged** (`top_10_*` listicles) |
| `/car-rental/` | ενοικίαση αυτοκινήτου | — | — | P2 | `car_rentals` |
| `/holiday-packages/` | πακέτα διακοπών | 250 | 33 | P1 | `atomika_taksidia`, package articles |

The `top_10_*` hotel listicles are thin, undated and mostly 500 on the live server.
They merge rather than migrate.

### Tours, travel, cruises

| URL | Primary keyword | Vol | KD | Priority | Source content |
|---|---|---:|---:|---|---|
| `/tours/` | οργανωμένες εκδρομές | 30 | — | P1 | Tours hub |
| `/tours/road-trips/` | οδικές εκδρομές | — | — | P1 | 16 tours with full itineraries; 9 with price tables |
| `/tours/air-trips/` | αεροπορικές εκδρομές | — | — | P2 | 3 air tours |
| `/honeymoon/` | γαμήλια ταξίδια | 70 | — | P1 | 19 honeymoon + 10 island articles |
| `/destinations/` | ταξιδιωτικοί προορισμοί | — | — | P2 | 10 city guides (Rome, Milan, Paris, …) |
| `/cruises/` | κρουαζιέρες | 500 | 23 | P1 | Cruise hub; 55 legacy URLs merged |
| `/cruises/mediterranean/` | κρουαζιέρα μεσόγειος | — | — | P2 | `kroyazieres_mesogeios` |
| `/cruises/aegean/` | κρουαζιέρα αιγαίο | — | — | P2 | `krouazieres_aigaio` |
| `/cruises/caribbean/` | κρουαζιέρα καραϊβική | 50 | — | P2 | 3 Caribbean articles |
| `/cruises/alaska/` | κρουαζιέρα αλάσκα | — | — | P2 | 5 Alaska articles |
| `/cruises/northern-europe/` | κρουαζιέρα βόρεια ευρώπη | — | — | P2 | Norwegian fjords, Baltic capitals |
| `/cruises/exotic/` | εξωτικές κρουαζιέρες | — | — | P2 | `exotic_cruises` |

The legacy cruise section leaned on PDF brochures. Cruise pages must be HTML and
internally linked.

### B2B and insurance

| URL | Primary keyword | Vol | KD | Priority | Source content |
|---|---|---:|---:|---|---|
| `/school-trips/` | σχολικές εκδρομές | 20 | 0 | P1 | `school-trips` (c107) |
| `/business-travel/` | επαγγελματικά ταξίδια | 30 | — | P1 | `business-travel` (c117) |
| `/vip-travel/` | vip ταξίδια | — | — | P2 | `vip-travel` (c116) |
| `/travel-insurance/` | ταξιδιωτική ασφάλιση | 400 | 0 | P0 | `travel-insurance` (c81) |

`/travel-insurance/` is P0 despite modest volume: KD 0, ~2,000 traffic potential,
and it attaches naturally to every ferry and flight booking.

### Travel guides

| URL | Primary keyword | Priority | Source content |
|---|---|---|---|
| `/travel-guides/` | ταξιδιωτικές πληροφορίες | P2 | Guides hub |
| `/travel-guides/passports-visas/` | διαβατήρια και βίζα | P2 | c74, c84, c96 |
| `/travel-guides/baggage/` | αποσκευές αεροπλάνο | P2 | c77 (6,300 chars) |
| `/travel-guides/european-health-insurance-card/` | ευρωπαϊκή κάρτα ασφάλισης | P1 | c92 — legacy already ranks weakly |
| `/travel-guides/vaccinations/` | εμβολιασμοί ταξίδι | P3 | c89 |
| `/travel-guides/accessible-travel/` | αμεα και ταξίδι | P3 | c97 |
| `/travel-guides/when-to-book-flights/` | πότε να κλείσω αεροπορικά | P2 | c91 |
| `/travel-guides/money-abroad/` | συνάλλαγμα ταξίδι | P2 | c93, c103, c106 merged |
| `/travel-guides/travel-by-car/` | ταξίδι με αυτοκίνητο στο εξωτερικό | P1 | c99 (9,200 chars) — feeds the ferry cluster |

`/travel-guides/travel-by-car/` matters commercially: everyone driving to Italy
needs a ferry with a vehicle.

### Help and legal

| URL | Priority | Notes |
|---|---|---|
| `/faq/` | P2 | Genuine help hub — not an SEO question dump |
| `/terms/air-tickets/` | P3 | Legal |
| `/terms/ferry-tickets/` | P3 | Legal |
| `/payment-information/` | P3 | Bank accounts, card payment |

## Excluded from this domain

Coaches, fleet, transfers and ground transport stay on **kotsis.travel**. The 12
legacy URLs under `2012-03-07-02-56-3x` (`coach_bus_rentals`, `our_fleet`) plus
the transfer articles redirect cross-domain.

The current Next.js app has a `/metafores` route built from that content. It
should be removed when this architecture ships, and its inbound links pointed at
`kotsis.travel`, to avoid the two domains competing.

## Content sourced vs newly written

| Status | Pages | Notes |
|---|---:|---|
| Legacy content available | 34 | Rewritten, not copied — 2013 schedules and 2018 fares must not resurface |
| Written from scratch | 18 | All 3 ferry route pages, most hubs, all legal |

171 legacy articles hold usable text. 63 more return HTTP 500 on the live server
and 15 redirect to the homepage — that content is gone and must be rewritten.

## Dynamic data boundary

These must never be hard-coded in evergreen copy — they come from the booking
engine at request time:

- ferry departure times, durations, vessel assignments
- ferry, flight, hotel and cruise prices and availability
- tour departure dates and per-person prices
- airline route maps and baggage allowances

Evergreen copy states the *structure* ("η γραμμή εξυπηρετείται από …, με διάρκεια
που διαφέρει ανά πλοίο και εποχή") and defers the numbers to live data.

## Related files

- `keyword-research.md` — clusters with volume and difficulty
- `redirect-map.csv` — all 1,002 rows
- `internal-link-map.md` — hub/spoke model
- `hreflang-map.csv` — 10-language URL matrix
- `schema-plan.md` — JSON-LD per template
- `technical-seo-nextjs.md` — implementation spec
- `migration-checklist.md` — launch verification
