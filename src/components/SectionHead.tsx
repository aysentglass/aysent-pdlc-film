import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  dark?: boolean;
}

const ease = [0.21, 0.65, 0.27, 0.99] as const;

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const wordRise = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.55, ease } },
};

/**
 * Safety net: force content visible after mount so a missed
 * IntersectionObserver callback never leaves the page blank.
 */
function useForcedVisible(ms = 1200) {
  const [forced, setForced] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForced(true), ms);
    return () => clearTimeout(t);
  }, [ms]);
  return forced;
}

/**
 * Large-format section header: eyebrow label + oversized title with a
 * word-by-word mask-rise animation on scroll into view.
 */
export default function SectionHead({ eyebrow, title, desc, align = "center", dark = false }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const words = title.split(" ");
  const forced = useForcedVisible();

  return (
    <div className={`flex max-w-3xl flex-col ${alignCls}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={forced ? { opacity: 1, y: 0 } : undefined}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] md:text-sm ${
            dark ? "text-[#7FB3E8]" : "text-brand-accent"
          }`}
        >
          <span className={`h-px w-8 ${dark ? "bg-[#7FB3E8]" : "bg-brand-accent"}`} aria-hidden="true" />
          {eyebrow}
          {align === "center" && <span className={`h-px w-8 ${dark ? "bg-[#7FB3E8]" : "bg-brand-accent"}`} aria-hidden="true" />}
        </motion.p>
      )}
      <motion.h2
        variants={wordContainer}
        initial="hidden"
        animate={forced ? "show" : undefined}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className={`mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-[#0B2A4A]"
        }`}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span variants={wordRise} className="inline-block will-change-transform">
              {w}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={forced ? { opacity: 1, y: 0 } : undefined}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-[#5A6B7C]"}`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
