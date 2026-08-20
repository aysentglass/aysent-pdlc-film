import { useState } from "react";
import { Plus } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useSeo } from "@/components/Seo";
import { FaqSchema, BreadcrumbSchema } from "@/components/Schema";
import { FAQS } from "@/lib/site";

export default function Faq() {
  useSeo(
    "FAQ | MOQ, Samples, Lead Time, Warranty & Shipping — AYSENT SMART FILM",
    "Answers to common buyer questions about smart film sourcing: MOQ, free samples, 3–5 day sampling, 7–15 day mass production, warranty, customization, payment terms and worldwide shipping."
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <FaqSchema faqs={FAQS} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <PageHero
        eyebrow="Buyer FAQ"
        title="Frequently Asked Questions"
        desc="Everything overseas buyers usually ask before sourcing switchable privacy film from our factory — from MOQ and samples to shipping and after-sales support."
      />

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Stagger className="space-y-4" gap={0.06}>
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <StaggerItem key={faq.q}>
                  <div className={`overflow-hidden border bg-white transition-shadow ${open ? "border-brand shadow-lg" : "border-[#E2E8EE]"}`}>
                    <button
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={`hidden text-xl font-extrabold sm:block ${open ? "text-brand-accent" : "text-[#C9DAEB]"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-extrabold tracking-tight text-[#0B2A4A] md:text-xl">{faq.q}</span>
                      </span>
                      <Plus
                        className={`h-6 w-6 shrink-0 text-brand-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#EEF2F5] px-6 py-6 text-base leading-relaxed text-[#425363] md:px-8 md:pl-[4.5rem]">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CtaSection
        title="Still Have Questions?"
        subtitle="Send us your question or project details — our sales engineers will reply within 24 hours."
      />
    </>
  );
}
