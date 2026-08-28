// Pre-render all routes to static HTML for better SEO and faster first paint.
// Run after `vite build`: node scripts/prerender.mjs
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const ssrDir = join(root, ".ssr-tmp");

// ---- Route definitions with SEO metadata ----
// Each entry: path, title, description (for static HTML <head>)
const STATIC_ROUTES = [
  {
    path: "/",
    title: "PDLC Smart Film Manufacturer | PDLC Smart Glass Film Supplier — AYSENT",
    description:
      "AYSENT SMART FILM is a professional PDLC smart film manufacturer in China: PDLC smart glass film, self-adhesive switchable privacy film, laminated smart glass and accessories. Low MOQ, rapid prototyping, OEM/ODM and worldwide shipping.",
  },
  {
    path: "/products",
    title: "PDLC Smart Film Products | Switchable Privacy Film & Smart Glass — AYSENT",
    description:
      "Browse AYSENT's full product range: PDLC smart film roll, self-adhesive switchable film, switchable laminated smart glass and control accessories. Direct factory pricing, low MOQ, custom sizes.",
  },
  {
    path: "/applications",
    title: "Smart Film Applications | Office, Hotel, Villa, Automotive & Mall — AYSENT",
    description:
      "Explore PDLC smart film applications: office partitions, hotel bathrooms, villa windows, automotive sunroofs and shopping mall curtain walls. Project case studies and solution guides.",
  },
  {
    path: "/about",
    title: "About AYSENT SMART FILM | PDLC Smart Film Factory in China",
    description:
      "AYSENT SMART FILM is a PDLC smart film manufacturer with 10 years of production experience in Shandong, China. 50,000 m² monthly capacity, CE/RoHS certified, exporting to 40+ countries.",
  },
  {
    path: "/faq",
    title: "FAQ | PDLC Smart Film Pricing, MOQ, Installation & Warranty — AYSENT",
    description:
      "Frequently asked questions about PDLC smart film: minimum order quantity, sample policy, lead time, installation guide, warranty, customization, payment terms and shipping.",
  },
  {
    path: "/blog",
    title: "Blog | PDLC Smart Film Guides, Comparisons & Industry Insights — AYSENT",
    description:
      "PDLC smart film blog: buying guides, installation tutorials, cost breakdowns, smart film vs smart glass comparisons and industry insights from a direct manufacturer.",
  },
  {
    path: "/contact",
    title: "Contact AYSENT SMART FILM | Get a Free PDLC Film Quote",
    description:
      "Contact AYSENT SMART FILM for a free quotation on PDLC smart film, self-adhesive switchable film and laminated smart glass. WhatsApp +86-15163206207, email aaronliu@aysentglass.com. Response within 24 hours.",
  },
];

// Dynamic routes — generated from data files
const PRODUCT_SLUGS = [
  "pdlc-smart-film",
  "self-adhesive-smart-film",
  "switchable-laminated-glass",
  "smart-film-accessories",
];

const PRODUCT_TITLES = {
  "pdlc-smart-film": "PDLC Smart Film | Roll-Form Switchable Privacy Film Manufacturer — AYSENT",
  "self-adhesive-smart-film": "Self-Adhesive Smart Film | Peel-and-Stick Switchable Privacy Film — AYSENT",
  "switchable-laminated-glass": "Switchable Laminated Glass | Ready-to-Install Smart Glass Panels — AYSENT",
  "smart-film-accessories": "Smart Film Accessories | Transformers, Remotes & Control Systems — AYSENT",
};

const PRODUCT_DESCS = {
  "pdlc-smart-film":
    "Roll-form PDLC smart film that switches from frosted to transparent in 0.1 seconds. Transmittance up to 82%, widths up to 1800mm, low MOQ. Direct from AYSENT factory.",
  "self-adhesive-smart-film":
    "Peel-and-stick switchable privacy film that retrofits directly onto existing glass. No glass replacement needed, ideal for renovation projects. Free samples available.",
  "switchable-laminated-glass":
    "Ready-to-install switchable laminated smart glass panels. PDLC film laminated between safety glass for facades, partitions and curtain walls. Custom sizes and shapes.",
  "smart-film-accessories":
    "Complete range of smart film accessories: power transformers (36V/48V/60V), remote controls, Wi-Fi app modules, dimming controllers and professional installation tool kits.",
};

const PRODUCT_IMAGES = {
  "pdlc-smart-film": "https://www.aysentglass.com/images/product-pdlc.webp",
  "self-adhesive-smart-film": "https://www.aysentglass.com/images/product-adhesive.webp",
  "switchable-laminated-glass": "https://www.aysentglass.com/images/product-laminated.webp",
  "smart-film-accessories": "https://www.aysentglass.com/images/product-accessories.webp",
};

const BLOG_IMAGES = {
  "what-is-pdlc-smart-film": "https://www.aysentglass.com/images/blog-pdlc.webp",
  "smart-film-vs-smart-glass": "https://www.aysentglass.com/images/blog-compare.webp",
  "how-to-install-self-adhesive-smart-film": "https://www.aysentglass.com/images/blog-pdlc.webp",
  "pdlc-smart-film-cost-pricing-guide": "https://www.aysentglass.com/images/blog-compare.webp",
  "pdlc-smart-film-installation-cost": "https://www.aysentglass.com/images/blog-pdlc.webp",
  "smart-film-for-office-partitions": "https://www.aysentglass.com/images/app-office.webp",
  "switchable-glass-projection-screen": "https://www.aysentglass.com/images/blog-pdlc.webp",
  "pdlc-film-lifespan": "https://www.aysentglass.com/images/blog-compare.webp",
  "self-adhesive-vs-laminated-pdlc-film": "https://www.aysentglass.com/images/blog-compare.webp",
  "smart-film-for-hotel-bathrooms": "https://www.aysentglass.com/images/app-hotel.webp",
};

const BLOG_SLUGS = [
  "what-is-pdlc-smart-film",
  "smart-film-vs-smart-glass",
  "how-to-install-self-adhesive-smart-film",
  "pdlc-smart-film-cost-pricing-guide",
  "pdlc-smart-film-installation-cost",
  "smart-film-for-office-partitions",
  "switchable-glass-projection-screen",
  "pdlc-film-lifespan",
  "self-adhesive-vs-laminated-pdlc-film",
  "smart-film-for-hotel-bathrooms",
];

const BLOG_TITLES = {
  "what-is-pdlc-smart-film": "What Is PDLC Smart Film? Working Principle, Benefits & Buying Guide — AYSENT",
  "smart-film-vs-smart-glass": "Smart Film vs Smart Glass: Cost, Installation & Use Cases Compared — AYSENT",
  "how-to-install-self-adhesive-smart-film": "How to Install Self-Adhesive Smart Film: Step-by-Step Guide — AYSENT",
  "pdlc-smart-film-cost-pricing-guide": "PDLC Smart Film Cost & Pricing Guide: Budget Breakdown — AYSENT",
  "pdlc-smart-film-installation-cost": "PDLC Smart Film Installation Cost: Complete 2026 Guide — AYSENT",
  "smart-film-for-office-partitions": "Smart Film for Office Partitions: Design & Spec Guide — AYSENT",
  "switchable-glass-projection-screen": "Switchable Glass as Projection Screen: Complete Guide — AYSENT",
  "pdlc-film-lifespan": "PDLC Film Lifespan: How Long Does Smart Film Last? — AYSENT",
  "self-adhesive-vs-laminated-pdlc-film": "Self-Adhesive vs Laminated PDLC Film: Which to Choose? — AYSENT",
  "smart-film-for-hotel-bathrooms": "Smart Film for Hotel Bathrooms: Privacy & Design Guide — AYSENT",
};

const BLOG_DESCS = {
  "what-is-pdlc-smart-film":
    "Complete introduction to PDLC smart glass film: how it switches from frosted to transparent, key specs, applications and what to check before buying from a manufacturer.",
  "smart-film-vs-smart-glass":
    "Compare cost, installation, durability and use cases of self-adhesive switchable film versus laminated switchable glass to choose the right privacy solution.",
  "how-to-install-self-adhesive-smart-film":
    "Step-by-step installation guide for self-adhesive PDLC switchable film: tools needed, six steps from measuring to wiring, common mistakes to avoid.",
  "pdlc-smart-film-cost-pricing-guide":
    "Understand PDLC smart film pricing: film grade, size, control system, installation and shipping. Compare costs against smart glass and curtains, plus five budget-saving tips.",
  "pdlc-smart-film-installation-cost":
    "Detailed breakdown of PDLC smart film installation costs in 2026: material pricing, labor rates by region, transformer and control costs, hidden fees, and money-saving tips.",
  "smart-film-for-office-partitions":
    "Everything architects and facility managers need to know about specifying PDLC smart film for office partitions: design considerations, technical specs, privacy compliance and cost.",
  "switchable-glass-projection-screen":
    "How PDLC switchable glass works as a rear-projection screen: brightness, resolution, viewing angles, projector specs, installation tips, and creative applications.",
  "pdlc-film-lifespan":
    "A detailed look at PDLC smart film lifespan: rated hours, real-world longevity, factors that shorten or extend life, warranty coverage, and when to replace your film.",
  "self-adhesive-vs-laminated-pdlc-film":
    "Detailed comparison of self-adhesive PDLC film versus factory-laminated switchable glass: cost, durability, installation, ideal applications, and a decision framework.",
  "smart-film-for-hotel-bathrooms":
    "Why hotels are switching to PDLC smart film for bathroom privacy: guest experience, design flexibility, energy savings, installation tips, and ROI analysis for hotel owners.",
};

function buildAllRoutes() {
  const routes = [...STATIC_ROUTES];
  for (const slug of PRODUCT_SLUGS) {
    routes.push({
      path: `/products/${slug}`,
      title: PRODUCT_TITLES[slug],
      description: PRODUCT_DESCS[slug],
      image: PRODUCT_IMAGES[slug],
    });
  }
  for (const slug of BLOG_SLUGS) {
    routes.push({
      path: `/blog/${slug}`,
      title: BLOG_TITLES[slug],
      description: BLOG_DESCS[slug],
      image: BLOG_IMAGES[slug],
    });
  }
  return routes;
}

async function main() {
  console.log("[prerender] Building SSR entry...");

  // Build SSR bundle
  await build({
    root,
    mode: "production",
    ssr: {
      noExternal: ["react-router", "react-router-dom", "framer-motion", "lucide-react"],
    },
    build: {
      ssr: join(root, "src/entry-server.tsx"),
      outDir: ssrDir,
      rollupOptions: {
        output: {
          format: "esm",
        },
      },
      // Override client-side manualChunks for SSR build
      minify: false,
    },
    logLevel: "warn",
    configFile: false,
    plugins: [react()],
    resolve: {
      alias: {
        "@": join(root, "src"),
      },
    },
  });

  console.log("[prerender] Loading SSR module...");
  const ssrEntryUrl = pathToFileURL(join(ssrDir, "entry-server.js")).href + "?t=" + Date.now();
  const { render } = await import(ssrEntryUrl);

  const template = readFileSync(join(distDir, "index.html"), "utf-8");
  const routes = buildAllRoutes();

  // Inline CSS to eliminate render-blocking request
  let baseHtml = template;
  const cssMatch = template.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
  if (cssMatch) {
    const cssPath = cssMatch[1].replace(/^\//, "");
    const cssFile = join(distDir, cssPath);
    if (existsSync(cssFile)) {
      const cssContent = readFileSync(cssFile, "utf-8");
      baseHtml = template.replace(
        cssMatch[0],
        `<style>${cssContent}</style>`
      );
      console.log(`[prerender] Inlined CSS (${Math.round(cssContent.length / 1024)} KB)`);
    }
  }

  console.log(`[prerender] Rendering ${routes.length} routes...`);

  for (const route of routes) {
    try {
      const appHtml = render(route.path);

      // Inject rendered app into the root div using precise string positioning
      // (regex fails because skeleton contains nested </div> tags)
      const rootOpen = "<div id=\"root\">";
      const rootStart = baseHtml.indexOf(rootOpen);
      const scriptStart = baseHtml.indexOf("<script type=\"module\"", rootStart);
      // Find the </div> immediately before the script tag
      const closingDiv = baseHtml.lastIndexOf("</div>", scriptStart);
      let html =
        baseHtml.substring(0, rootStart + rootOpen.length) +
        appHtml +
        baseHtml.substring(closingDiv);

      // Set page title
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);

      // Set meta description (replace existing or add after title)
      if (/<meta name="description"[^>]*>/.test(html)) {
        html = html.replace(
          /<meta name="description"[^>]*>/,
          `<meta name="description" content="${route.description}" />`
        );
      } else {
        html = html.replace(
          /<\/title>/,
          `</title>\n    <meta name="description" content="${route.description}" />`
        );
      }

      // Set robots meta
      if (/<meta name="robots"[^>]*>/.test(html)) {
        html = html.replace(
          /<meta name="robots"[^>]*>/,
          `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
        );
      }

      // Add canonical link
      const canonical = `https://www.aysentglass.com${route.path === "/" ? "/" : route.path}`;
      if (!/<link rel="canonical"/.test(html)) {
        html = html.replace(
          /<\/title>/,
          `</title>\n    <link rel="canonical" href="${canonical}" />`
        );
      } else {
        html = html.replace(
          /<link rel="canonical"[^>]*>/,
          `<link rel="canonical" href="${canonical}" />`
        );
      }

      // Open Graph tags
      const ogImage = route.image || "https://www.aysentglass.com/images/hero-on.webp";
      html = html.replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="${route.title}" />`
      );
      html = html.replace(
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${route.description}" />`
      );
      html = html.replace(
        /<meta property="og:url"[^>]*>/,
        `<meta property="og:url" content="${canonical}" />`
      );
      html = html.replace(
        /<meta property="og:image"[^>]*>/,
        `<meta property="og:image" content="${ogImage}" />`
      );

      // Twitter Card tags
      html = html.replace(
        /<meta name="twitter:title"[^>]*>/,
        `<meta name="twitter:title" content="${route.title}" />`
      );
      html = html.replace(
        /<meta name="twitter:description"[^>]*>/,
        `<meta name="twitter:description" content="${route.description}" />`
      );
      html = html.replace(
        /<meta name="twitter:image"[^>]*>/,
        `<meta name="twitter:image" content="${ogImage}" />`
      );

      // Determine output path
      const outPath =
        route.path === "/"
          ? join(distDir, "index.html")
          : join(distDir, route.path, "index.html");

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, "utf-8");
      console.log(`  ✓ ${route.path} -> ${outPath.replace(root, "")}`);
    } catch (err) {
      console.error(`  ✗ ${route.path}: ${err.message}`);
    }
  }

  // Clean up SSR temp dir
  if (existsSync(ssrDir)) {
    rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log(`[prerender] Done. ${routes.length} routes pre-rendered.`);
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
