import { credentials, offices, site } from "@/lib/site";

/**
 * Structured data. TravelAgency is the correct schema.org type here and it
 * inherits LocalBusiness, so the address/hours/contact block Google shows for
 * local results comes from the same node.
 */
export function OrganizationJsonLd() {
  const hq = offices[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    faxNumber: site.fax,
    foundingDate: String(site.founded),
    description: site.description,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.street,
      addressLocality: hq.city,
      postalCode: hq.postcode,
      addressCountry: "GR",
    },
    hasCredential: credentials.map((c) => c.label),
    sameAs: [site.social.facebook, site.social.twitter],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "14:00" },
    ],
  };
  return <Script data={data} />;
}

export function ArticleJsonLd({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description?: string;
  image?: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? `${site.url}${image}` : undefined,
    mainEntityOfPage: `${site.url}${url}`,
    inLanguage: "el",
    publisher: { "@id": `${site.url}/#organization` },
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url?: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Αρχική", url: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url ? `${site.url}${it.url}` : undefined,
    })),
  };
  return <Script data={data} />;
}

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
