/**
 * Company facts, navigation IA and service copy.
 * Everything here is transcribed from www.kotsistravel.gr (Ιούνιος 2013 → 2018 content).
 */

export const site = {
  name: "KOTSIS TRAVEL",
  legalName: "KOTSIS TRAVEL SERVICES",
  tagline: "Γραφείο Γενικού Τουρισμού",
  founded: 1975,
  url: "https://www.kotsistravel.gr",
  description:
    "Γραφείο Γενικού Τουρισμού στην Ηγουμενίτσα από το 1975. Ακτοπλοϊκά & αεροπορικά εισιτήρια, ξενοδοχεία, κρουαζιέρες, οργανωμένες εκδρομές και οδικές μεταφορές με ιδιόκτητο στόλο.",
  keywords: [
    "τουριστικό πρακτορείο Ηγουμενίτσα",
    "ακτοπλοϊκά εισιτήρια Αδριατική",
    "αεροπορικά εισιτήρια",
    "κρουαζιέρες",
    "εκδρομές",
    "ενοικιάσεις λεωφορείων",
    "μεταφορές",
  ],
  email: "info@kotsistravel.gr",
  phone: "+30 26650 23053",
  phoneDisplay: "26650 23053",
  fax: "+30 26650 24963",
  faxDisplay: "26650 24963",
  social: {
    facebook: "https://www.facebook.com/Kotsis-Travel-469424759796963/",
    twitter: "https://twitter.com/Kotsis_Travel",
  },
} as const;

export const offices = [
  {
    id: "hq",
    label: "Κεντρικό Γραφείο",
    street: "Εθνικής Αντίστασης 140",
    city: "Ηγουμενίτσα",
    postcode: "46100",
    country: "Ελλάδα",
    hours: [
      { days: "Δευτέρα – Σάββατο", time: "09:00 – 14:30 & 17:00 – 21:00" },
      { days: "Κυριακή", time: "11:00 – 14:00" },
    ],
  },
  {
    id: "port",
    label: "Υποκατάστημα — Νέο Λιμάνι",
    street: "Ιονίου Πελάγους, Νέο Λιμάνι (έναντι Ο.Λ.ΗΓ.)",
    city: "Ηγουμενίτσα",
    postcode: "46100",
    country: "Ελλάδα",
    hours: [{ days: "Καθημερινά", time: "14:00 – 22:00" }],
  },
] as const;

export const credentials = [
  {
    label: "IATA",
    detail: "Μέλος της Διεθνούς Ένωσης Αερομεταφορών",
  },
  {
    label: "ISO 9001:2008",
    detail:
      "Σύστημα διαχείρισης ποιότητας — πιστοποιημένο από την LL-C για Γενικές Τουριστικές & Ταξιδιωτικές Υπηρεσίες – Μεταφορές",
  },
  {
    label: "ETOA",
    detail: "European Tourism Association",
  },
] as const;

export const banks = [
  {
    name: "Τράπεζα Πειραιώς",
    account: "54 0305 5591 020",
    iban: "GR30 0172 4030 0054 0305 5591 020",
    bic: "PIRBGRAA",
    holder: "KOTSIS SPIRIDON",
    logo: "/legacy/site/piraeus-bank_logo.png",
  },
  {
    name: "Alpha Bank",
    account: "430 00 23100 11548",
    iban: "GR72 0140 4300 4300 0231 0011 548",
    bic: "CRBAGRAA",
    holder: "KOTSIS SPYRIDON GRIGORIOU",
    logo: "/legacy/site/alpha-bank.png",
  },
  {
    name: "Eurobank",
    account: "0026.0115.01.0200381234",
    iban: "GR32 0260 1150 0000 1020 0381 234",
    bic: "EFGBGRAA",
    holder: "KOTSIS SPYRIDON GRIGORIOS",
    logo: "/legacy/site/EUROBANK.jpg",
  },
] as const;

/** The nine service lines described on the «Για Εμάς» page. */
export const services = [
  {
    slug: "aktoploika",
    href: "/aktoploika",
    kicker: "Αδριατική",
    title: "Ακτοπλοϊκά Εισιτήρια",
    blurb:
      "Κρατήσεις και εκδόσεις για όλες τις γραμμές της Αδριατικής — Ηγουμενίτσα, Πάτρα, Κέρκυρα προς Ανκόνα, Μπάρι, Βενετία και Τεργέστη.",
    icon: "ferry",
  },
  {
    slug: "aeroporika",
    href: "/aeroporika",
    kicker: "Παγκοσμίως",
    title: "Αεροπορικά Εισιτήρια",
    blurb:
      "Για οποιονδήποτε προορισμό στον κόσμο, σε μεμονωμένους ταξιδιώτες και ομαδικές μετακινήσεις, μέσω όλων των συνεργαζόμενων εταιρειών.",
    icon: "plane",
  },
  {
    slug: "xenodoxeia",
    href: "/xenodoxeia",
    kicker: "Διαμονή",
    title: "Ξενοδοχεία",
    blurb:
      "Μέσω του ελληνικού και διεθνούς δικτύου συνεργατών μας, εξαιρετικά χαμηλές τιμές σε ξενοδοχεία σε όλο τον κόσμο.",
    icon: "bed",
  },
  {
    slug: "krouazieres",
    href: "/krouazieres",
    kicker: "Θαλάσσιος τουρισμός",
    title: "Κρουαζιέρες",
    blurb:
      "Πολυήμερες κρουαζιέρες σε Μεσόγειο, Αιγαίο, Καραϊβική, Αλάσκα και Βόρεια Ευρώπη — καθώς και ναυλώσεις πολυτελών σκαφών.",
    icon: "ship",
  },
  {
    slug: "ekdromes",
    href: "/ekdromes",
    kicker: "Οργανωμένα",
    title: "Εκδρομές",
    blurb:
      "Οδικές και αεροπορικές εκδρομές σε Ελλάδα και εξωτερικό, με αναλυτικό πρόγραμμα ανά ημέρα και έμπειρους αρχηγούς.",
    icon: "route",
  },
  {
    slug: "metafores",
    href: "/metafores",
    kicker: "Ιδιόκτητος στόλος",
    title: "Οδικές Μεταφορές",
    blurb:
      "Οκτώ ιδιόκτητα υπερπολυτελή τουριστικά λεωφορεία και ταξί με γλωσσομαθείς οδηγούς, σε Ελλάδα και εξωτερικό.",
    icon: "bus",
  },
  {
    slug: "gamilia-taxidia",
    href: "/gamilia-taxidia",
    kicker: "Honeymoon",
    title: "Γαμήλια Ταξίδια",
    blurb:
      "Για το σημαντικότερο ταξίδι της ζωής σας — Μαλδίβες, Μπαλί, Σεϋχέλλες, Πολυνησία και τα ομορφότερα νησιά του κόσμου.",
    icon: "rings",
  },
  {
    slug: "proorismoi",
    href: "/proorismoi",
    kicker: "City breaks",
    title: "Προορισμοί & Πακέτα",
    blurb:
      "Ρώμη, Μιλάνο, Παρίσι, Λονδίνο, Βαρκελώνη, Πράγα, Βιέννη, Νέα Υόρκη, Ντουμπάι — με πτήση και διαμονή σε ένα πακέτο.",
    icon: "compass",
  },
  {
    slug: "synedria",
    href: "/ypiresies",
    kicker: "Corporate",
    title: "Συνέδρια & Ταξίδια Κινήτρων",
    blurb:
      "Εξειδικευμένο τμήμα για συνέδρια, σεμινάρια, εκθέσεις και ταξίδια κινήτρων, καθώς και ομαδικές εκδρομές ειδικού ενδιαφέροντος.",
    icon: "briefcase",
  },
] as const;

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  feature?: { label: string; href: string; note: string };
};

export const nav: NavItem[] = [
  {
    label: "Ακτοπλοϊκά",
    href: "/aktoploika",
    children: [
      { label: "Ελλάδα → Ιταλία", href: "/aktoploika/greece-italy", note: "Αναχωρήσεις προς Ανκόνα, Μπάρι, Βενετία" },
      { label: "Ιταλία → Ελλάδα", href: "/aktoploika/italy-greece", note: "Επιστροφές προς Ηγουμενίτσα & Πάτρα" },
      { label: "Λιμάνια Αδριατικής", href: "/aktoploika/ports", note: "Οδηγός για έξι λιμάνια" },
      { label: "Στόλος Αδριατικής", href: "/aktoploika/fleet", note: "Τεχνικά στοιχεία πλοίων" },
      { label: "Minoan Lines", href: "/aktoploika/minoan" },
      { label: "ANEK Lines", href: "/aktoploika/anek" },
      { label: "Superfast Ferries", href: "/aktoploika/superfast" },
      { label: "ANEK / Superfast", href: "/aktoploika/anek-superfast" },
      { label: "Grimaldi Lines", href: "/aktoploika/grimaldi" },
    ],
  },
  {
    label: "Αεροπορικά",
    href: "/aeroporika",
    children: [
      { label: "Πτήσεις από Κέρκυρα", href: "/aeroporika#korfu", note: "Τιμές ανά άτομο" },
      { label: "Συνεργαζόμενες εταιρείες", href: "/aeroporika#etaireies", note: "24 αεροπορικές" },
      { label: "Low cost εταιρείες", href: "/aeroporika#lowcost", note: "11 εταιρείες" },
    ],
  },
  {
    label: "Εκδρομές",
    href: "/ekdromes",
    children: [
      { label: "Οδικές εκδρομές", href: "/ekdromes#odikes", note: "12 προγράμματα" },
      { label: "Αεροπορικές εκδρομές", href: "/ekdromes#aeroporikes", note: "3 προγράμματα" },
    ],
  },
  {
    label: "Κρουαζιέρες",
    href: "/krouazieres",
    children: [
      { label: "Όλοι οι προορισμοί", href: "/krouazieres#proorismoi", note: "Καραϊβική, Αλάσκα, Βαλτική" },
      { label: "Έντυπα κρουαζιέρας", href: "/krouazieres#entypa", note: "Κατάλογοι εταιρειών" },
    ],
  },
  {
    label: "Ταξίδια",
    href: "/proorismoi",
    children: [
      { label: "Δημοφιλείς προορισμοί", href: "/proorismoi#poleis" },
      { label: "Πακέτα city break", href: "/proorismoi#paketa" },
      { label: "Γαμήλια ταξίδια", href: "/gamilia-taxidia" },
      { label: "Τα ομορφότερα νησιά", href: "/gamilia-taxidia#nisia" },
      { label: "Ξενοδοχεία", href: "/xenodoxeia" },
    ],
  },
  {
    label: "Μεταφορές",
    href: "/metafores",
  },
  {
    label: "Χρήσιμα",
    href: "/xrisima",
    children: [
      { label: "Πριν το ταξίδι", href: "/xrisima#before", note: "Διαβατήρια, βίζα, αποσκευές" },
      { label: "Πληροφορίες", href: "/xrisima#info", note: "Πρεσβείες, αεροδρόμια, λιμεναρχεία" },
      { label: "Συμβουλές", href: "/xrisima#advice", note: "Jet lag, συνάλλαγμα, φιλοδώρημα" },
      { label: "Συχνές ερωτήσεις", href: "/xrisima#faq" },
      { label: "Υπηρεσίες", href: "/ypiresies", note: "Σχολικές εκδρομές, VIP, μεταφορές" },
    ],
  },
  {
    label: "Το γραφείο",
    href: "/gia-emas",
    children: [
      { label: "Για εμάς", href: "/gia-emas", note: "Η ιστορία μας από το 1975" },
      { label: "Πιστοποιήσεις", href: "/gia-emas#pistopoiiseis" },
      { label: "Τραπεζικοί λογαριασμοί", href: "/gia-emas#trapezes" },
      { label: "Επικοινωνία", href: "/epikoinonia" },
    ],
  },
];

export const stats = [
  { value: "1975", label: "Έτος ίδρυσης", note: "Μισός αιώνας στον ελληνικό τουρισμό" },
  { value: "8", label: "Ιδιόκτητα πούλμαν", note: "Υπερπολυτελή τουριστικά λεωφορεία" },
  { value: "IATA", label: "Πιστοποιημένο μέλος", note: "Διεθνής Ένωση Αερομεταφορών" },
  { value: "2", label: "Γραφεία στην Ηγουμενίτσα", note: "Κέντρο πόλης & Νέο Λιμάνι" },
];
