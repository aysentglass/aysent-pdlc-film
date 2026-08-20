import { Link, Navigate, useParams } from "react-router";
import { CalendarDays, CheckCircle2, ChevronRight, Clock } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaSection from "@/components/CtaSection";
import { Reveal } from "@/components/motion/Reveal";
import { ClipReveal } from "@/components/motion/Premium";
import { useSeo } from "@/components/Seo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";
import { BLOG_POSTS } from "@/lib/site";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSeo(
    post ? `${post.title} — AYSENT SMART FILM` : "Blog — AYSENT SMART FILM",
    post?.excerpt ?? ""
  );

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        slug={post.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <nav aria-label="Breadcrumb" className="border-b border-[#E2E8EE] bg-brand-light">
        <ol className="mx-auto flex max-w-4xl items-center gap-1.5 px-4 py-3.5 text-sm text-[#5A6B7C] sm:px-6 lg:px-8">
          <li><Link to="/" className="hover:text-brand-accent">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li><Link to="/blog" className="hover:text-brand-accent">Blog</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li className="max-w-[220px] truncate font-medium text-[#1B2A3A] sm:max-w-none" aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <article className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header>
            <Reveal distance={24}>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
                Industry Insights
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B2A4A] md:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#7A8A9A]">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{post.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
                <span>By AYSENT SMART FILM Engineering Team</span>
              </div>
            </Reveal>
            <ClipReveal from="bottom" className="group mt-10 overflow-hidden">
              <ImagePlaceholder label={post.imageAlt} size="1400×800" ratio="aspect-[16/9]" src={post.image} className="shine rounded-none transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            </ClipReveal>
          </header>

          <div className="mt-12 space-y-10">
            {post.sections.map((section, i) => (
              <Reveal key={i} distance={28}>
                <section>
                {section.heading && (
                  <h2 className="mb-4 border-l-4 border-brand-accent pl-4 text-2xl font-extrabold tracking-tight text-[#0B2A4A] md:text-3xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="mb-5 text-lg leading-relaxed text-[#425363]">{p}</p>
                ))}
                {section.list && (
                  <ul className="my-5 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg text-[#425363]">
                        <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-brand-accent" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.tail?.map((p, j) => (
                  <p key={j} className="mt-5 text-lg leading-relaxed text-[#425363]">{p}</p>
                ))}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal distance={32} className="mt-14 bg-brand p-8 text-white sm:p-10">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Source Smart Film Directly from the Factory</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-white/75">
              AYSENT SMART FILM manufactures PDLC smart film, self-adhesive switchable privacy film and
              laminated smart glass in-house — with low MOQ, free samples, OEM/ODM customization and
              worldwide shipping.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to="/products" className="rounded-md border-2 border-white/50 px-6 py-3.5 font-bold text-white transition-colors hover:border-white hover:bg-white/10">
                Browse Products
              </Link>
              <Link to="/contact#quote" className="rounded-md bg-white px-6 py-3.5 font-bold text-brand transition-colors hover:bg-[#EAF1F8]">
                Get Free Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <CtaSection
        title="Ready to Discuss Your Project?"
        subtitle="Send your requirements now — quotation and sample offer within 24 hours."
      />
    </>
  );
}
