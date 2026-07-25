import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

/* ---------- Scroll reveal wrapper ---------- */

interface RevealProps {
  children: ReactNode;
  /** extra delay in seconds */
  delay?: number;
  /** direction the block slides in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  /** px distance of the slide */
  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  distance = 40,
}: RevealProps) {
  const offsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.27, 0.99] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger container / item ---------- */

export function Stagger({
  children,
  className,
  gap = 0.12,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.21, 0.65, 0.27, 0.99] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated counter ---------- */

interface CounterProps {
  /** numeric part, e.g. 50, 40, 10, 500 */
  value: number;
  /** suffix shown after the number, e.g. "+", " m²" */
  suffix?: string;
  className?: string;
}

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2.2, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString("en-US");
      }
    });
    return unsub;
  }, [spring]);

  return (
    <span className={`whitespace-nowrap ${className ?? ""}`}>
      <span ref={ref}>0</span>
      {suffix && <span className="text-[0.5em] font-bold">{suffix}</span>}
    </span>
  );
}

/* ---------- Slow zoom image on scroll into view ---------- */

export function ZoomOnView({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.16, 0.6, 0.28, 1] }}
    >
      {children}
    </motion.div>
  );
}
