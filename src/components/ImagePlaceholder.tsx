import { useMemo } from "react";
import { ImageIcon } from "lucide-react";

interface Props {
  label: string;
  size?: string; // e.g. "1200×800" — parsed for intrinsic width/height
  ratio?: string; // tailwind aspect class, e.g. "aspect-[4/3]", or "h-full"
  className?: string;
  dark?: boolean;
  /** real image path (e.g. /images/hero-on.webp); falls back to placeholder box */
  src?: string;
  /** set true for above-the-fold hero images to preload eagerly */
  priority?: boolean;
  /** responsive sizes attribute for srcset, e.g. "(max-width: 768px) 100vw, 50vw" */
  sizes?: string;
}

/** Parse "1200×800" or "1200x800" into { w, h }. */
function parseSize(size: string): { w: number; h: number } | null {
  const m = size.match(/(\d+)\s*[×xX]\s*(\d+)/);
  if (!m) return null;
  return { w: parseInt(m[1], 10), h: parseInt(m[2], 10) };
}

/**
 * Build a srcset string from a base image path.
 * Expects sibling files like hero-on-480w.webp, hero-on-768w.webp to exist.
 * Falls back gracefully if they don't.
 */
function buildSrcSet(src: string): string | undefined {
  const dot = src.lastIndexOf(".");
  if (dot === -1) return undefined;
  const base = src.slice(0, dot);
  const ext = src.slice(dot);
  // Only generate srcset for webp (our optimized format)
  if (ext.toLowerCase() !== ".webp") return undefined;
  return [`${base}-480w${ext} 480w`, `${base}-768w${ext} 768w`, `${src} 1200w`].join(", ");
}

/**
 * Image block: renders a real photo when `src` is provided, otherwise a
 * light gray placeholder box with description + suggested dimensions.
 * Uses native lazy loading, async decoding, intrinsic dimensions and
 * responsive srcset for performance.
 */
export default function ImagePlaceholder({
  label,
  size = "1200×800",
  ratio = "aspect-[3/2]",
  className = "",
  dark = false,
  src,
  priority = false,
  sizes,
}: Props) {
  const dims = useMemo(() => parseSize(size), [size]);
  const srcSet = useMemo(() => (src ? buildSrcSet(src) : undefined), [src]);

  if (src) {
    const isFull = ratio === "h-full";
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        alt={label}
        width={dims?.w}
        height={dims?.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`w-full object-cover ${isFull ? "h-full" : ratio} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border px-4 text-center ${
        dark
          ? "border-white/20 bg-white/10 text-white/80"
          : "border-[#D9E0E7] bg-[#E8EDF2] text-[#7A8A9A]"
      } ${ratio} ${className}`}
    >
      <ImageIcon className="h-8 w-8 opacity-70" strokeWidth={1.5} />
      <p className="text-sm font-medium leading-snug">{label}</p>
      <p className="text-xs opacity-70">Suggested size: {size}px</p>
    </div>
  );
}
