/**
 * Legacy URL handling.
 *
 * The 2012 Joomla site is still indexed and linked (~144 referring domains on
 * the homepage alone), so its URLs must not dead-end. `kotsis-seo-content/
 * redirect-map.csv` holds the full row-by-row disposition for all 1,002 legacy
 * URLs; the rules below are the pattern-level implementation of it.
 *
 * Targets point at the routes that exist *today*. When the SEO architecture in
 * kotsis-seo-content/content-map.md ships (/ferry-tickets/, /tours/, …), the
 * destinations here move with it — the sources stay the same.
 *
 * Order matters: Next matches top-down, so the /index.php catch-all is last.
 */
const legacyRedirects = [
  // Joomla section folders -> current sections
  ["/index.php/ακτοπλοϊκα/:path*", "/aktoploika"],
  ["/index.php/2011-08-04-23-47-02/:path*", "/aktoploika"],
  ["/index.php/2011-08-04-23-47-4/:path*", "/aktoploika"],
  ["/index.php/2013-03-31-11-03-19/:path*", "/krouazieres"],
  ["/index.php/typography/:path*", "/xenodoxeia"],
  ["/index.php/menu-types/:path*", "/aeroporika"],
  ["/index.php/menu-types-3/:path*", "/aeroporika"],
  ["/index.php/2013-03-20-11-44-35/hoenymoon_trips/:path*", "/gamilia-taxidia"],
  ["/index.php/2013-03-20-11-44-35/:path*", "/proorismoi"],
  ["/index.php/2012-03-07-02-54-47/flights_tours/:path*", "/ekdromes"],
  ["/index.php/2012-03-07-02-54-47/:path*", "/ekdromes"],
  ["/index.php/2012-03-07-02-56-35/:path*", "/metafores"],
  ["/index.php/2012-03-07-02-56-37/:path*", "/metafores"],
  ["/index.php/offset/:path*", "/xrisima"],
  ["/index.php/booking/:path*", "/epikoinonia"],
  ["/index.php/booking-3/:path*", "/epikoinonia"],
  ["/index.php/component/:path*", "/"],

  // Standalone legacy pages
  ["/index.php/contact-us.html", "/epikoinonia"],
  ["/index.php/για_εμας.html", "/gia-emas"],
  ["/index.php/2011-11-19-14-23-19.html", "/gia-emas"],
  ["/index.php/bank-accounts.html", "/gia-emas"],
  ["/index.php/terms-airtickets.html", "/aeroporika"],
  ["/index.php/terms-ferry.html", "/aktoploika"],
  ["/index.php/newsletter.html", "/epikoinonia"],
  ["/index.php/useful-links.html", "/xrisima"],
  ["/index.php/time-difference.html", "/xrisima"],
  ["/index.php/engine-sports.html", "/proorismoi"],
  ["/index.php/ευρωπαϊκός_αριθμός_έκτακτης_ανάγκης.html", "/xrisima"],

  // The route this rebuild renamed
  ["/contact", "/epikoinonia"],

  // Anything else under the old front controller
  ["/index.php/:path*", "/"],
  ["/index.php", "/"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Legacy photography is 600px wide at most — asking for larger variants
    // only wastes build time and produces upscaled, softer files.
    imageSizes: [96, 128, 192, 256, 320, 384],
    deviceSizes: [400, 600, 828, 1080],
    formats: ["image/webp"],
  },

  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
