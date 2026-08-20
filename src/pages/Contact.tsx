import { Clock, Mail, MapPin, MapPinned, Phone } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useSeo } from "@/components/Seo";
import { ContactPageSchema, BreadcrumbSchema } from "@/components/Schema";
import { BRAND } from "@/lib/site";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Phone,
    title: "WhatsApp / Phone",
    value: BRAND.whatsapp,
    href: undefined,
  },
  {
    icon: MapPin,
    title: "Factory Address",
    value: BRAND.address,
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: BRAND.workingHours,
    href: undefined,
  },
];

export default function Contact() {
  useSeo(
    "Contact Us | Get a Free Smart Film Quote in 24 Hours — AYSENT SMART FILM",
    "Contact AYSENT SMART FILM for smart film quotations, samples and OEM/ODM projects. Email aaronliu@aysentglass.com or send the inquiry form — we reply within 24 hours."
  );

  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Project"
        desc={`Ready to source smart film from a direct factory? Send your inquiry below or reach us by email and WhatsApp — ${BRAND.responsePromise}`}
      />

      <section className="bg-brand-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1" gap={0.1}>
                {CONTACT_CARDS.map((c) => (
                  <StaggerItem key={c.title}>
                    <div className="flex items-start gap-5 border border-[#E2E8EE] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                        <c.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h2 className="text-lg font-extrabold tracking-tight text-[#0B2A4A]">{c.title}</h2>
                        {c.href ? (
                          <a href={c.href} className="mt-1 block font-semibold text-brand-accent transition-colors hover:text-brand">
                            {c.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-[#5A6B7C]">{c.value}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.3} className="mt-4 border border-[#E2E8EE] bg-white p-6">
                <h2 className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-[#0B2A4A]">
                  <MapPinned className="h-5 w-5 text-brand" /> Factory Location
                </h2>
                <div className="mt-4">
                  <ImagePlaceholder label="Factory Location Map" size="800×450" ratio="aspect-[16/9]" className="rounded-none" />
                </div>
              </Reveal>
            </div>

            {/* Full inquiry form */}
            <Reveal direction="left" delay={0.15} className="lg:col-span-3">
              <div id="quote" className="border border-[#E2E8EE] bg-white p-7 sm:p-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">Send Us Your Inquiry</h2>
                <p className="mt-3 leading-relaxed text-[#5A6B7C]">
                  Fields marked * are required. The more detail you share (dimensions, quantity, destination),
                  the faster and more accurate our quotation.
                </p>
                <div className="mt-8">
                  <InquiryForm withCountry />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
