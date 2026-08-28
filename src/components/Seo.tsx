import { useEffect } from "react";

const SITE_URL = "https://www.aysentglass.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-on.webp`;

interface SeoOptions {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
}

/**
 * Sets per-page document title, meta description, OG, Twitter, canonical and robots tags.
 * Supports both legacy (title, description) and new ({ title, description, image, type, noindex }) signatures.
 */
export function useSeo(titleOrOpts: string | SeoOptions, description?: string) {
  const opts: SeoOptions =
    typeof titleOrOpts === "string"
      ? { title: titleOrOpts, description: description || "" }
      : titleOrOpts;

  const { title, description: desc, image, type = "website", noindex = false } = opts;

  useEffect(() => {
    const url = `${SITE_URL}${window.location.pathname}`;
    const ogImage = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE;

    // 1. Title
    document.title = title;

    // 2. Meta description
    setMeta("name", "description", desc);

    // 3. Robots meta — max-image-preview:large improves rich results in Google/Bing/Yandex
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 4. Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // 5. Open Graph tags (Facebook, LinkedIn, VK, Yandex)
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name", "AYSENT SMART FILM");
    setMeta("property", "og:locale", "en_US");

    // 6. Twitter Card tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", ogImage);

    // 7. Article-specific tags
    if (type === "article") {
      setMeta("property", "article:author", "AYSENT SMART FILM");
      setMeta("property", "article:publisher", SITE_URL);
    }
  }, [title, desc, image, type, noindex]);
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}
