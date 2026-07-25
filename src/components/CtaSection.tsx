import { Clock, Mail } from "lucide-react";
import InquiryForm from "./InquiryForm";
import { Reveal } from "./motion/Reveal";
import { BRAND } from "@/lib/site";

interface Props {
  title?: string;
  subtitle?: string;
  productName?: string;
}

/** Deep-blue inquiry conversion block reused across pages. */
export default function CtaSection({
  title = "Get a Free Quote for Your Project",
  subtitle = "Tell us your product requirements — our sales engineers will reply with a detailed quotation within 24 hours.",
  productName,
}: Props) {
  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right" className="text-white">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7FB3E8] md:text-sm">
            <span className="h-px w-10 bg-[#7FB3E8]" aria-hidden="true" />
            Start Your Order
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">{subtitle}</p>
          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
                <Mail className="h-5 w-5 text-[#9CC4EC]" />
              </span>
              <div>
                <p className="font-semibold">Email Us Directly</p>
                <a href={`mailto:${BRAND.email}`} className="text-white/70 transition-colors hover:text-white">
                  {BRAND.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
                <Clock className="h-5 w-5 text-[#9CC4EC]" />
              </span>
              <div>
                <p className="font-semibold">24-Hour Response</p>
                <p className="text-white/70">{BRAND.responsePromise}</p>
              </div>
            </li>
          </ul>
        </Reveal>
        <Reveal direction="left" delay={0.15} className="rounded-lg bg-white/5 p-5 ring-1 ring-white/15 backdrop-blur-sm sm:p-7">
          <InquiryForm dark productName={productName} />
        </Reveal>
      </div>
    </section>
  );
}
