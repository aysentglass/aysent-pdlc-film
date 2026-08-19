import { ImageIcon } from "lucide-react";

interface Props {
  label: string;
  size?: string;
  ratio?: string; // tailwind aspect class, e.g. "aspect-[4/3]", or "h-full"
  className?: string;
  dark?: boolean;
  /** real image path (e.g. /images/hero-on.jpg); falls back to placeholder box */
  src?: string;
  /** set true for above-the-fold hero images to preload eagerly */
  priority?: boolean;
}

/**
 * Image block: renders a real photo when `src` is provided, otherwise a
 * light gray placeholder box with description + suggested dimensions.
 * Uses native lazy loading + async decoding for performance.
 */
export default function ImagePlaceholder({
  label,
  size = "1200×800",
  ratio = "aspect-[3/2]",
  className = "",
  dark = false,
  src,
  priority = false,
}: Props) {
  if (src) {
    const isFull = ratio === "h-full";
    return (
      <img
        src={src}
        alt={label}
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
