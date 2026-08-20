import { Link, Navigate, useParams } from "react-router";
import { ArrowUpRight, CheckCircle2, ChevronRight, MessageSquareQuote } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import SectionHead from "@/components/SectionHead";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ClipReveal, ParallaxBand } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { ProductSchema, BreadcrumbSchema } from "@/components/Schema";
import { APPLICATIONS, PRODUCTS } from "@/lib/site";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);

  useSeo(
    product
      ? `${product.name} | Switchable Privacy Film Manufacturer — AYSENT SMART FILM`
      : "Product — AYSENT SMART FILM",
    product ? `${product.short} Factory-direct supply from AYSENT SMART FILM with low MOQ, OEM/ODM customization and worldwide shipping.` : ""
  );

  if (!product) return <Navigate to="/products" replace />;

  const relatedApps = APPLICATIONS.filter((a) => a.products.includes(product.slug));

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.overview}
        image={product.image}
        slug={product.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-[#E2E8EE] bg-brand-light">
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3.5 text-sm text-[#5A6B7C] sm:px-6 lg:px-8">
          <li><Link to="/" className="hover:text-brand-accent">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li><Link to="/products" className="hover:text-brand-accent">Products</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li className="font-medium text-[#1B2A3A]" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Main image + overview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ClipReveal from="left" className="group overflow-hidden">
            <ImagePlaceholder label={product.imageAlt} size="1400×1000" ratio="aspect-[16/11]" src={product.image} className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          </ClipReveal>
          <Reveal direction="left" delay={0.15}>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent md:text-sm">
              <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
              Product Details
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B2A4A] md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#425363]">{product.overview}</p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 font-medium text-[#33475C]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl"
            >
              <MessageSquareQuote className="h-5 w-5" />
              Request a Quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* Spec table */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead align="left" eyebrow="Data Sheet" title="Technical Specifications" />
          </Reveal>
          <Reveal delay={0.1} className="mt-10 overflow-x-auto border border-[#E2E8EE] bg-white">
            <table className="w-full min-w-[560px] text-left">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <th scope="row" className="w-1/3 border-b border-[#EEF2F5] px-6 py-5 text-base font-bold text-[#0B2A4A]">
                      {s.label}
                    </th>
                    <td className="border-b border-[#EEF2F5] px-6 py-5 text-base text-[#425363]">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-4 text-sm text-[#7A8A9A]">
            * Specifications are for standard products; custom parameters available under OEM/ODM service.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead align="left" eyebrow="Why It Performs" title="Key Features" />
          <Stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2" gap={0.1}>
            {product.features.map((f, i) => (
              <StaggerItem key={f}>
                <div className="flex h-full items-start gap-4 border border-[#E2E8EE] bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-3xl font-extrabold text-[#C9DAEB]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed text-[#425363]">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* full-bleed parallax statement band */}
      <ParallaxBand
        eyebrow={product.name}
        title="Engineered for Real Projects."
        desc={product.short}
        imageLabel={`${product.name} — Full-width Project Photo`}
        imageSize="1920×900"
        image={product.bandImage ?? product.image}
      />

      {/* Applications */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead align="left" eyebrow="Where It Works" title="Typical Applications" />
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {product.applications.map((a) => (
              <li key={a} className="rounded-full border border-brand/25 bg-white px-5 py-2.5 text-sm font-bold text-brand">
                {a}
              </li>
            ))}
          </ul>
          {relatedApps.length > 0 && (
            <Stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.12}>
              {relatedApps.map((app) => (
                <StaggerItem key={app.slug}>
                  <Link to={`/applications#${app.slug}`} className="group block">
                    <div className="overflow-hidden">
                      <ImagePlaceholder
                        label={app.imageAlt}
                        size="1000×700"
                        ratio="aspect-[16/10]"
                        src={app.image}
                        className="rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between border-b-2 border-[#D7E2EC] py-3.5 transition-colors group-hover:border-brand-accent">
                      <p className="font-extrabold tracking-tight text-[#0B2A4A]">{app.name}</p>
                      <ArrowUpRight className="h-5 w-5 text-brand-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Bottom inquiry */}
      <CtaSection
        title={`Get a Quote for ${product.name}`}
        subtitle="Share your dimensions, quantity and destination port — receive a detailed quotation and free sample offer within 24 hours."
        productName={product.name}
      />
    </>
  );
}
