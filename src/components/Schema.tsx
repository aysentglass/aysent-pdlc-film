import { BRAND } from "@/lib/site";

const SITE_URL = "https://www.aysentglass.com";

/** Renders a JSON-LD structured data script tag. Safe for SSR. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — site-wide, included on every page. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    alternateName: "AYSENT",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "AYSENT SMART FILM is a professional PDLC smart film manufacturer in China, supplying switchable privacy film, self-adhesive smart film, laminated smart glass and control accessories worldwide.",
    email: BRAND.email,
    telephone: BRAND.phone,
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1728, Shanguo South Road, Jinghe Sub-district",
      addressLocality: "Tengzhou, Zaozhuang",
      addressRegion: "Shandong",
      postalCode: "277500",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.0912",
      longitude: "117.1547",
    },
    sameAs: [
      "https://www.aysentglass.com",
    ],
  };
  return <JsonLd data={data} />;
}

/** LocalBusiness / Manufacturer schema — critical for Bing and Yandex local search. */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/factory-building.webp`,
    description:
      "PDLC smart film manufacturer with 10+ years production experience. Factory-direct supply of switchable privacy film, self-adhesive smart film, laminated smart glass and accessories.",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1728, Shanguo South Road, Jinghe Sub-district",
      addressLocality: "Tengzhou, Zaozhuang",
      addressRegion: "Shandong",
      postalCode: "277500",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.0912",
      longitude: "117.1547",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PDLC Smart Film Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "PDLC Smart Film Roll" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Self-Adhesive Smart Film" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Switchable Laminated Glass" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Smart Film Accessories" } },
      ],
    },
  };
  return <JsonLd data={data} />;
}

/** WebSite schema — for homepage. */
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL,
    description: BRAND.tagline,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd data={data} />;
}

/** Product schema — for product detail pages, enhanced with ratings and properties. */
export function ProductSchema({
  name,
  description,
  image,
  slug,
  sku,
  brand = BRAND.name,
  category,
}: {
  name: string;
  description: string;
  image: string;
  slug: string;
  sku?: string;
  brand?: string;
  category?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_URL}${image}`,
    sku: sku || slug,
    mpn: slug,
    category: category || "PDLC Smart Film",
    brand: {
      "@type": "Brand",
      name: brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: BRAND.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "Worldwide",
        },
      },
    },
  };
  return <JsonLd data={data} />;
}

/** FAQPage schema — for FAQ page. */
export function FaqSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}

/** BlogPosting schema — for blog post pages (more specific than Article). */
export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  slug,
  author = BRAND.name,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  slug: string;
  author?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };
  return <JsonLd data={data} />;
}

/** BreadcrumbList schema — for any page with a breadcrumb trail. */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

/** CollectionPage schema — for product listing and blog listing pages. */
export function CollectionPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    inLanguage: "en",
    url: `${SITE_URL}${url}`,
  };
  return <JsonLd data={data} />;
}

/** AboutPage schema — for the About page. */
export function AboutPageSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${BRAND.name}`,
    description:
      "Learn about AYSENT SMART FILM, a PDLC smart film manufacturer with 10+ years of production experience in Shandong, China. 50,000 m² monthly capacity, CE/RoHS/FCC certified, exporting to 50+ countries.",
    inLanguage: "en",
    url: `${SITE_URL}/about`,
  };
  return <JsonLd data={data} />;
}

/** ContactPage schema — for the Contact page. */
export function ContactPageSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BRAND.name}`,
    description:
      "Contact AYSENT SMART FILM for a free quotation. WhatsApp +86-15163206207, email aaronliu@aysentglass.com. Response within 24 hours.",
    inLanguage: "en",
    url: `${SITE_URL}/contact`,
  };
  return <JsonLd data={data} />;
}
