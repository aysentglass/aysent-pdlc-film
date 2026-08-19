import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal } from "./Reveal";

/** Same safety net as in Reveal.tsx — force content visible after mount. */
function useForcedVisible(ms = 1600) {
  const [forced, setForced] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForced(true), ms);
    return () => clearTimeout(t);
  }, [ms]);
  return forced;
}

/* ---------- Curtain-wipe reveal for large images ---------- */

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** wipe direction of the reveal curtain */
  from?: "bottom" | "left" | "right";
}

export function ClipReveal({ children, className, delay = 0, from = "bottom" }: ClipRevealProps) {
  // Use transform (compositor-friendly) instead of clipPath to avoid paint work.
  // Parent must have overflow-hidden (callers already do).
  const start = {
    bottom: { y: "100%" },
    left: { x: "-100%" },
    right: { x: "100%" },
  }[from];

  const forced = useForcedVisible();

  return (
    <motion.div
      className={className}
      initial={{ ...start, opacity: 0.6 }}
      animate={forced ? { x: 0, y: 0, opacity: 1 } : undefined}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.65, 0.05, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Full-bleed parallax image band with giant statement ---------- */

interface ParallaxBandProps {
  imageLabel: string;
  imageSize?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  /** real photo path; falls back to placeholder when omitted */
  image?: string;
}

export function ParallaxBand({ imageLabel, imageSize = "1920×900", eyebrow, title, desc, image }: ParallaxBandProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-dark text-white">
      {/* parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-x-0 -inset-y-[14%]">
        <ImagePlaceholder
          dark
          label={imageLabel}
          size={imageSize}
          ratio="h-full"
          src={image}
          className="h-full w-full rounded-none border-0 bg-[#122A45] opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/35 to-brand-dark/75" aria-hidden="true" />

      {/* statement */}
      <div className="relative mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 md:py-44 lg:px-8">
        {eyebrow && (
          <Reveal distance={20}>
            <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#9CC4EC] md:text-sm">
              <span className="h-px w-10 bg-[#9CC4EC]" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-10 bg-[#9CC4EC]" aria-hidden="true" />
            </p>
          </Reveal>
        )}
        <Reveal delay={0.12} distance={48}>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
            {title}
          </h2>
        </Reveal>
        {desc && (
          <Reveal delay={0.24} distance={32}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{desc}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- Infinite scrolling keyword strip ---------- */

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-brand-dark py-5" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-sm font-bold uppercase tracking-[0.3em] text-white/45"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E5A96]" />
          </span>
        ))}
      </div>
    </div>
  );
}
