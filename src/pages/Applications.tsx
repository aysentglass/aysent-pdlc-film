import { Link } from "react-router";
import { ArrowUpRight, Lightbulb, TriangleAlert } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ClipReveal } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { APPLICATIONS, PRODUCTS } from "@/lib/site";

export default function Applications() {
  useSeo(
    "Smart Film Applications | Office, Hotel, Villa, Automotive & Curtain Wall — AYSENT SMART FILM",
    "See how switchable privacy film and smart glass solve real problems in office partitions, hotels, villas, automotive and shopping mall curtain walls — with recommended products for each scenario."
  );

  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Where Smart Film Creates Value"
        desc="One technology, five industries. Explore how switchable privacy film solves real problems in each scenario — and which product fits best."
      />

      {APPLICATIONS.map((app, idx) => {
        const recs = PRODUCTS.filter((p) => app.products.includes(p.slug));
        const flip = idx % 2 === 1;
        return (
          <section
            key={app.slug}
            id={app.slug}
            className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-brand-light"}`}
          >
            <div
              className={`group mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${
                flip ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ClipReveal from={flip ? "right" : "left"} className="overflow-hidden">
                <ImagePlaceholder
                  label={app.imageAlt}
                  size="1400×950"
                  ratio="aspect-[16/10]"
                  src={app.image}
                  className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </ClipReveal>
              <Reveal direction={flip ? "right" : "left"} delay={0.15}>
                <span className="text-7xl font-extrabold tracking-tight text-[#D7E2EC] md:text-8xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-5xl">{app.name}</h2>
                <div className="mt-7 border-l-4 border-amber-400 bg-amber-50 p-5">
                  <p className="flex items-center gap-2 font-bold text-amber-800">
                    <TriangleAlert className="h-5 w-5" /> The Challenge
                  </p>
                  <p className="mt-2 leading-relaxed text-[#5A5030]">{app.pain}</p>
                </div>
                <div className="mt-4 border-l-4 border-brand-accent bg-[#EEF4FA] p-5">
                  <p className="flex items-center gap-2 font-bold text-brand">
                    <Lightbulb className="h-5 w-5" /> Our Solution
                  </p>
                  <p className="mt-2 leading-relaxed text-[#33475C]">{app.solution}</p>
                </div>
                <div className="mt-7">
                  <p className="font-bold text-[#0B2A4A]">Recommended Products</p>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {recs.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/products/${p.slug}`}
                          className="inline-flex items-center gap-1.5 border-2 border-brand/25 bg-white px-5 py-2.5 text-sm font-bold text-brand transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg"
                        >
                          {p.name} <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaSection
        title="Have a Project in One of These Scenarios?"
        subtitle="Send us your project details and glass schedule — we will propose the right product, wiring plan and quotation within 24 hours."
      />
    </>
  );
}
