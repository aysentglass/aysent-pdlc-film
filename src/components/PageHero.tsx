import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  desc?: string;
}

const ease = [0.21, 0.65, 0.27, 0.99] as const;

/** Oversized dark page hero for inner pages — big type, big presence. */
export default function PageHero({ eyebrow, title, desc }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
      {/* subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#1E5A96]/25 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {eyebrow && (
          <motion.p
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#7FB3E8] md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="h-px w-10 bg-[#7FB3E8]" aria-hidden="true" />
            {eyebrow}
          </motion.p>
        )}
        <span className="mt-5 block overflow-hidden">
          <motion.h1
            className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
          >
            {title}
          </motion.h1>
        </span>
        {desc && (
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  );
}
