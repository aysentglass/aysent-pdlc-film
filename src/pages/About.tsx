import { BadgeCheck, Globe2, Ship } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ClipReveal, ParallaxBand } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { AboutPageSchema, BreadcrumbSchema } from "@/components/Schema";

const PRODUCTION_LINES = [
  { name: "Precision Coating Line", image: "/images/factory-coating.webp", desc: "Automated ITO coating and liquid-crystal filling lines ensure uniform film thickness and consistent optical performance across every roll." },
  { name: "Lamination Line", image: "/images/factory-lamination.webp", desc: "Clean-room EVA/PVB lamination bonds PDLC film between tempered glass panels for safety-rated switchable laminated glass." },
  { name: "Precision Cutting", image: "/images/factory-cutting.webp", desc: "CNC cutting and laser trimming deliver custom sizes with clean edges and accurate bus-bar placement." },
  { name: "Aging & Reliability Test", image: "/images/factory-qc.webp", desc: "Every batch passes 72-hour continuous switching tests, high/low temperature cycles and humidity aging before packing." },
];

const STATS = [
  { value: 10, suffix: "+", label: "Years in Smart Film Manufacturing" },
  { value: 50000, suffix: " m²", label: "Monthly Film Capacity" },
  { value: 200, suffix: "+", label: "Factory Employees" },
  { value: 40, suffix: "+", label: "Export Countries" },
  { value: 500, suffix: "+", label: "B2B Clients Served" },
];

const CERTS = ["ISO9001", "CE", "RoHS"];

const MARKETS = [
  { region: "Europe & North America", desc: "Distributors, glass processors and contractors in Germany, the UK, the US, Canada and 20+ other markets." },
  { region: "Middle East", desc: "Hotel, villa and commercial projects across the UAE, Saudi Arabia, Qatar and neighboring countries." },
  { region: "Southeast Asia", desc: "Fast-growing partnerships with installers and project buyers in Singapore, Malaysia, Thailand and Vietnam." },
];

export default function About() {
  useSeo(
    "About Us | 10-Year Smart Film Manufacturer & Factory — AYSENT SMART FILM",
    "AYSENT SMART FILM is an ISO9001, CE and RoHS certified smart film manufacturer with 10 years of experience, 50,000 m² monthly capacity and exports to 40+ countries under FOB/CIF/EXW terms."
  );

  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About Us"
        title="A Decade of Focus on Smart Film"
        desc="A source smart film manufacturer in Shandong, China — engineering and producing reliable PDLC smart film, switchable privacy film and smart glass for B2B buyers worldwide."
      />

      {/* Factory intro + giant stats */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ClipReveal from="left" className="overflow-hidden">
              <ImagePlaceholder label="Factory Building & Workshop Overview Photo" size="1400×1000" ratio="aspect-[16/11]" src="/images/factory-building.webp" className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            </ClipReveal>
            <Reveal direction="left" delay={0.15}>
              <SectionHead
                align="left"
                eyebrow="Who We Are"
                title="One Factory. The Full Chain."
              />
              <p className="mt-6 text-lg leading-relaxed text-[#425363]">
                Founded as a specialist PDLC film factory, AYSENT SMART FILM has grown into a full-chain
                manufacturer covering film coating, self-adhesive processing, glass lamination and control
                electronics. Our engineers work side by side with overseas buyers on OEM/ODM projects —
                from custom voltages and dimming control to private-label packaging.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#425363]">
                Because everything is made under one roof, we control quality at every step, keep lead
                times short and pass factory-direct pricing on to you.
              </p>
            </Reveal>
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t-2 border-brand pt-14 text-center sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} distance={28}>
                <div>
                  <dd className="text-4xl font-extrabold tracking-tight text-brand md:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2.5 text-sm text-[#5A6B7C]">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* full-bleed parallax statement band */}
      <ParallaxBand
        eyebrow="Our Commitment"
        title="Quality You Can Audit. Capacity You Can Scale."
        desc="Every roll of film passes 72-hour continuous switching tests before it leaves our factory — verified quality, batch after batch."
        imageLabel="Full-width Factory Production Floor Photo"
        imageSize="1920×900"
        image="/images/band-factory.jpg"
      />

      {/* Production lines */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Workshop"
            title="Workshop & Production Lines"
            desc="Every process in-house — from coating to final aging tests."
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
            {PRODUCTION_LINES.map((line, i) => (
              <StaggerItem key={line.name}>
                <div className="group h-full bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="overflow-hidden">
                    <ImagePlaceholder
                      label={`${line.name} Photo`}
                      size="1000×700"
                      ratio="aspect-[16/10]"
                      src={line.image}
                      className="shine rounded-none transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-[#C9DAEB] transition-colors group-hover:text-brand-accent/40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-extrabold tracking-tight text-[#0B2A4A]">{line.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6B7C]">{line.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead
              eyebrow="Certified Quality"
              title="Certifications"
              desc="Our quality system and products are certified for international markets. Full certificates and test reports are available on request."
            />
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3" gap={0.12}>
            {CERTS.map((c) => (
              <StaggerItem key={c}>
                <div className="flex h-full items-center gap-5 border border-[#E2E8EE] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <BadgeCheck className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-[#0B2A4A]">{c} Certified</h3>
                  <p className="text-sm text-[#5A6B7C]">
                    {c === "ISO9001" && "Quality management system"}
                    {c === "CE" && "European safety conformity"}
                    {c === "RoHS" && "Hazardous substances free"}
                  </p>
                </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Export experience */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark py-16 text-white md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead
              dark
              eyebrow="Global Reach"
              title="Export Experience & Trade Terms"
            />
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" gap={0.12}>
            {MARKETS.map((m) => (
              <StaggerItem key={m.region}>
                <div className="h-full bg-white/5 p-7 ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/10">
                  <Globe2 className="h-8 w-8 text-[#9CC4EC]" />
                  <h3 className="mt-4 text-xl font-extrabold tracking-tight">{m.region}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 flex flex-wrap items-center gap-4 bg-white/5 p-7 ring-1 ring-white/15">
            <Ship className="h-7 w-7 shrink-0 text-[#9CC4EC]" />
            <p className="leading-relaxed text-white/80">
              <span className="font-bold text-white">Trade terms:</span> FOB Guangzhou / Shenzhen · CIF / CFR · EXW
              &nbsp;|&nbsp; <span className="font-bold text-white">Logistics:</span> Sea freight · Air freight · Express (DHL/FedEx/UPS)
              &nbsp;|&nbsp; <span className="font-bold text-white">Documents:</span> Packing list, invoice, CO, CE/RoHS certificates
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Want to Visit or Audit Our Factory?"
        subtitle="We welcome factory audits and video calls. Contact us to schedule a visit or request our full company profile and certificates."
      />
    </>
  );
}
