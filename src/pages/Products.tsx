import { Link } from "react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ClipReveal } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { CollectionPageSchema, BreadcrumbSchema } from "@/components/Schema";
import { PRODUCTS } from "@/lib/site";

export default function Products() {
  useSeo(
    "Products | PDLC Smart Film, Self-Adhesive Film & Smart Glass — AYSENT SMART FILM",
    "Explore AYSENT SMART FILM's product range: PDLC smart film rolls, self-adhesive switchable privacy film, switchable laminated glass and smart film accessories from a direct smart film manufacturer."
  );

  return (
    <>
      <CollectionPageSchema
        name="PDLC Smart Film Products"
        description="PDLC smart film rolls, self-adhesive switchable film, laminated smart glass and control accessories from AYSENT SMART FILM."
        url="/products"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />
      <PageHero
        eyebrow="Our Products"
        title="Smart Film Products"
        desc="As a direct smart film manufacturer, we supply four product lines covering roll film, retrofit film, laminated smart glass and control accessories — engineered to work perfectly together."
      />

      <section className="bg-brand-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.slug}
              className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ClipReveal from={i % 2 === 1 ? "right" : "left"} className="overflow-hidden">
                <ImagePlaceholder
                  label={p.imageAlt}
                  size="1400×900"
                  ratio="aspect-[16/10]"
                  src={p.image}
                  className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </ClipReveal>
              <Reveal direction={i % 2 === 1 ? "right" : "left"} delay={0.15}>
                <span className="text-7xl font-extrabold tracking-tight text-[#D7E2EC] md:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-5xl">{p.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#425363]">{p.short}</p>
                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 font-medium text-[#33475C]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products/${p.slug}`}
                  className="mt-9 inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl"
                >
                  View Details <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="Not Sure Which Product Fits Your Project?"
        subtitle="Send us your drawings or glass schedule — our engineers will recommend the most cost-effective configuration within 24 hours."
      />
    </>
  );
}
