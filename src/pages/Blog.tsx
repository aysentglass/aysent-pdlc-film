import { Link } from "react-router";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useSeo } from "@/components/Seo";
import { BLOG_POSTS } from "@/lib/site";

export default function Blog() {
  useSeo(
    "Blog | Smart Film & PDLC Smart Glass Industry Insights — AYSENT SMART FILM",
    "Industry insights from a smart film manufacturer: PDLC technology guides, smart film vs smart glass comparisons, buying guides and application knowledge for B2B buyers."
  );

  return (
    <>
      <PageHero
        eyebrow="Industry Insights"
        title="Smart Film Insights"
        desc="Practical guides on PDLC technology, product selection and sourcing — written by the engineers behind the film."
      />

      <section className="bg-brand-light py-16 md:py-24">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8" gap={0.18}>
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group flex h-full flex-col bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    label={post.imageAlt}
                    size="1400×800"
                    ratio="aspect-[16/9]"
                    src={post.image}
                    className="rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-[#7A8A9A]">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-[#0B2A4A] md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-[#5A6B7C]">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 border-b-2 border-brand-accent pb-1 font-bold text-brand-accent transition-colors hover:text-brand"
                  >
                    Read More <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaSection
        title="Reading Is Good — Sampling Is Better"
        subtitle="Request a free A4 smart film sample and test the switching performance yourself. Ships worldwide in 3–5 days."
      />
    </>
  );
}
