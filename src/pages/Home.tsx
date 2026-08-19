import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Factory,
  FlaskConical,
  Globe2,
  Layers,
  Settings,
} from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import SectionHead from "@/components/SectionHead";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ClipReveal, Marquee, ParallaxBand } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { ADVANTAGES, APPLICATIONS, PRODUCTS } from "@/lib/site";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  BadgeCheck,
  FlaskConical,
  Layers,
  Globe2,
  Settings,
};

const STATS = [
  { value: 10, suffix: "+", label: "Years of Manufacturing" },
  { value: 50000, suffix: " m²", label: "Monthly Film Capacity" },
  { value: 40, suffix: "+", label: "Export Countries" },
  { value: 500, suffix: "+", label: "Global B2B Clients" },
];

const CERTS = [
   { name: "CE",  image: "/images/cert-ce.webp", desc: "Compliant with European safety standards" },
  { name: "RoHS", image: "/images/cert-rohs.webp", desc: "Restriction of hazardous substances certified" },
  { name: "FCC",  image: "/images/cert-fcc.webp", desc: "Compliant with US electromagnetic interference & radio frequency standards" },
];

const OEM_STEPS = ["Requirements", "Sampling", "Confirmation", "Mass Production", "Delivery"];
const OEM_ITEMS = ["Size & Shape", "Film Color", "Voltage", "Control Method", "Logo & Packaging"];

const heroEase = [0.21, 0.65, 0.27, 0.99] as const;

/** Hero headline split into words for the staggered mask reveal. */
const TITLE_LINES: { words: string[]; accent?: boolean }[] = [
  { words: ["PDLC", "Smart", "Glass", "Film."] },
  { words: ["Privacy", "on", "Demand."], accent: true },
];

const MARQUEE_ITEMS = [
  "Smart Film Manufacturer",
  "PDLC Smart Glass Film",
  "Switchable Privacy Film",
  "Low MOQ · Rapid Sampling",
  "OEM / ODM Service",
  "Worldwide Shipping",
];

export default function Home() {
  useSeo(
    "Smart Film Manufacturer | PDLC Smart Glass Film Supplier — AYSENT SMART FILM",
    "AYSENT SMART FILM is a professional smart film manufacturer in China: PDLC smart glass film, self-adhesive switchable privacy film, laminated smart glass and accessories. Low MOQ, rapid prototyping, OEM/ODM and worldwide shipping."
  );

  // scroll-linked parallax for the hero comparison images
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  let wordIndex = -1;

  return (
    <>
      {/* 2. Full-screen Hero Banner */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* soft glow accent */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[#1E5A96]/25 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2 lg:px-8">
          <motion.div style={{ opacity: heroFade }}>
            <motion.p
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7FB3E8] md:text-sm"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: heroEase }}
            >
              <span className="h-px w-10 bg-[#7FB3E8]" aria-hidden="true" />
              Smart Film Manufacturer · 10 Years Factory
            </motion.p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              {TITLE_LINES.map((line) => (
                <span key={line.words.join("")} className={`block ${line.accent ? "text-[#9CC4EC]" : ""}`}>
                  {line.words.map((word) => {
                    wordIndex += 1;
                    const delay = 0.12 + wordIndex * 0.09;
                    return (
                      <span key={word} className="inline-block overflow-hidden pb-1 align-bottom">
                        <motion.span
                          className="inline-block will-change-transform"
                          initial={{ y: "115%", rotate: 4 }}
                          animate={{ y: 0, rotate: 0 }}
                          transition={{ duration: 0.85, delay, ease: heroEase }}
                        >
                          {word}
                        </motion.span>
                        <span className="inline-block">&nbsp;</span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>
            <motion.p
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: heroEase }}
            >
              Switchable privacy film and smart glass engineered for offices, hotels, villas,
              automotive and curtain wall projects — direct from the source factory, with low MOQ
              and worldwide delivery.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: heroEase }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-bold text-brand transition-all hover:-translate-y-0.5 hover:bg-[#EAF1F8] hover:shadow-xl"
              >
                View Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact#quote"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Get Free Quote
              </Link>
            </motion.div>
            {/* hero stats strip */}
            <motion.dl
              className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/15 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="min-w-0">
                  <dd className="text-xl font-extrabold tracking-tight text-[#9CC4EC] sm:text-3xl md:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1.5 text-[16px] leading-snug text-white/60 sm:text-xs md:text-sm">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </motion.div>
          {/* ON/OFF comparison — oversized with entrance + scroll parallax */}
          <div className="grid grid-cols-2 gap-5 lg:gap-7">
            <motion.div style={{ y: yLeft }} className="will-change-transform">
              <motion.div
                className="lg:translate-y-8"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: heroEase }}
              >
                <ImagePlaceholder dark ratio="aspect-[4/5]" label="PDLC smart film ON state — crystal clear office glass" size="1000×1400" className="lg:min-h-[34rem]" src="/images/hero-on.webp" priority />
                <p className="mt-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/80">ON · Clear</p>
              </motion.div>
            </motion.div>
            <motion.div style={{ y: yRight }} className="will-change-transform">
              <motion.div
                className="lg:-translate-y-8"
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.65, ease: heroEase }}
              >
                <ImagePlaceholder dark ratio="aspect-[4/5]" label="PDLC smart film OFF state — frosted privacy glass wall" size="1000×1400" className="lg:min-h-[34rem]" src="/images/hero-off.webp" priority />
                <p className="mt-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/80">OFF · Frosted</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* scrolling keyword strip */}
      <Marquee items={MARQUEE_ITEMS} />

      {/* 3. Core products */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead
              eyebrow="Product Lines"
              title="Four Product Lines. One Source Factory."
              desc="From roll film to finished smart glass panels and control electronics — engineered to work perfectly together."
            />
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" gap={0.14}>
            {PRODUCTS.map((p, i) => (
              <StaggerItem key={p.slug}>
                <article className="group flex h-full flex-col border-t-4 border-brand bg-white pt-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="px-6">
                    <span className="text-6xl font-extrabold text-[#E4EBF2] transition-colors duration-300 group-hover:text-brand-accent/30">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#0B2A4A]">{p.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A6B7C]">{p.short}</p>
                  </div>
                  <div className="mt-6 overflow-hidden">
                    <ImagePlaceholder
                      label={p.imageAlt}
                      size={p.imageSize}
                      ratio="aspect-[4/3]"
                      src={p.image}
                      className="shine rounded-none border-x-0 border-b-0 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <Link
                    to={`/products/${p.slug}`}
                    className="mt-auto inline-flex items-center justify-between gap-2 bg-brand-light px-6 py-4 text-sm font-bold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
                  >
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4. Six factory advantages */}
      <section className="bg-brand-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal direction="right">
                <SectionHead
                  align="left"
                  eyebrow="Why AYSENT"
                  title="Six Reasons Global Buyers Source From Us"
                  desc="Factory-direct advantages that de-risk your sourcing, shorten your lead times and protect your margins."
                />
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 text-base font-bold text-brand-accent transition-colors hover:text-brand"
                >
                  Tour Our Factory <ArrowRight className="h-5 w-5" />
                </Link>
              </Reveal>
            </div>
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2" gap={0.1}>
              {ADVANTAGES.map((a, i) => {
                const Icon = ICONS[a.icon] ?? Factory;
                return (
                  <StaggerItem key={a.title}>
                    <div className="group h-full bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                      <div className="flex items-start justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand text-white transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-4xl font-extrabold text-[#E4EBF2] transition-colors duration-300 group-hover:text-brand-accent/30">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#0B2A4A]">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5A6B7C]">{a.text}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {/* 5. Application gallery — oversized imagery */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                align="left"
                eyebrow="Applications"
                title="One Technology. Five Industries."
                desc="From office partitions to shopping mall curtain walls — see where switchable privacy film creates value."
              />
              <Link
                to="/applications"
                className="inline-flex items-center gap-2 border-b-2 border-brand-accent pb-1 text-base font-bold text-brand-accent transition-colors hover:text-brand"
              >
                View All Applications <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {APPLICATIONS.map((app, i) => (
              <Reveal
                key={app.slug}
                delay={i * 0.07}
                className={i === 0 ? "sm:col-span-2 lg:col-span-6" : "lg:col-span-3"}
              >
                <Link to={`/applications#${app.slug}`} className="group block">
                  <ClipReveal from={i % 2 === 0 ? "bottom" : "left"} className="overflow-hidden">
                    <ImagePlaceholder
                      label={app.imageAlt}
                      size={i === 0 ? "1920×820" : "1400×900"}
                      ratio={i === 0 ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10]"}
                      src={app.image}
                      className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </ClipReveal>
                  <div className="flex items-center justify-between border-b-2 border-[#E2E8EE] py-4 transition-colors group-hover:border-brand-accent">
                    <h3 className={`font-extrabold tracking-tight text-[#0B2A4A] ${i === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                      {app.name}
                    </h3>
                    <ArrowUpRight className="h-6 w-6 text-brand-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* full-bleed parallax statement band */}
      <ParallaxBand
        eyebrow="The Switchable Effect"
        title="Frosted to Transparent. In 0.1 Seconds."
        desc="One touch on a wall switch, remote or smartphone app — light, view and privacy on your terms."
        imageLabel="Full-width ON/OFF Switching Effect Photo"
        imageSize="1920×900"
        image="/images/band-switch.webp"
      />

      {/* 6. Factory showcase + giant animated stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark py-24 text-white md:py-32">
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
              eyebrow="Inside the Factory"
              title="Built for Scale. Proven in Numbers."
              desc="Automated coating, lamination and aging-test lines behind every roll of switchable privacy film we ship."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: "Coating Workshop", src: "/images/factory-coating.webp" },
              { label: "Lamination Production Line", src: "/images/factory-lamination.webp" },
              { label: "QC & Aging Test Equipment", src: "/images/factory-qc.webp" },
            ].map((item, i) => (
              <ClipReveal key={item.label} delay={i * 0.12} from={i === 1 ? "left" : "bottom"}>
                <ImagePlaceholder
                  dark
                  label={item.label}
                  size="1400×1000"
                  ratio="aspect-[4/3]"
                  src={item.src}
                  className="rounded-none"
                />
              </ClipReveal>
            ))}
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/15 pt-14 text-center lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} distance={28}>
                <div>
                  <dd className="text-5xl font-extrabold tracking-tight text-[#9CC4EC] md:text-7xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-3 text-sm text-white/60 md:text-base">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Certified Quality"
            title="Internationally Certified, Import-Ready"
            desc="Certifications that smooth your import process and end-customer approvals."
          />
          <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3" gap={0.15}>
            {CERTS.map((c) => (
              <StaggerItem key={c.name}>
                <div className="group h-full border border-[#E2E8EE] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="overflow-hidden">
                    <ImagePlaceholder
                      label={`${c.name} Certificate`}
                      size="800×1000"
                      ratio="aspect-[4/5]"
                      src={c.image}
                      className="shine transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-[#0B2A4A]">{c.name}</h3>
                  <p className="mt-2 text-sm text-[#5A6B7C]">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* full-bleed parallax band before OEM */}
      <ParallaxBand
        eyebrow="OEM & ODM Capability"
        title="From Your Drawing to Mass Production."
        desc="Custom sizes, colors, voltages, control systems and private-label packaging — engineered and manufactured under one roof."
        imageLabel="Full-width Custom Production & Packaging Photo"
        imageSize="1920×900"
        image="/images/band-oem.webp"
      />

      {/* 8. OEM / ODM */}
      <section className="bg-brand-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHead
              eyebrow="OEM & ODM"
              title="Your Brand. Our Factory."
              desc="Build your own line of switchable privacy film with a factory that handles everything in-house."
            />
          </Reveal>
          {/* Process — giant numerals */}
          <Stagger className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" gap={0.15}>
            {OEM_STEPS.map((step, i) => (
              <StaggerItem key={step}>
                <div className="border-t-2 border-brand pt-5">
                  <span className="text-6xl font-extrabold tracking-tight text-brand md:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-base font-extrabold tracking-tight text-[#0B2A4A] md:text-lg">{step}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          {/* Customizable items */}
          <Reveal delay={0.2}>
            <div className="mt-16 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A]">What We Can Customize</h3>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {OEM_ITEMS.map((item) => (
                      <li key={item} className="rounded-full bg-brand/10 px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact#quote"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl"
                >
                  Discuss Your Custom Project <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Bottom inquiry CTA */}
      <CtaSection />
    </>
  );
}
