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

const BLOG_SLUGS = [
  "what-is-pdlc-smart-film",
  "smart-film-vs-smart-glass",
  "how-to-install-self-adhesive-smart-film",
  "pdlc-smart-film-cost-pricing-guide",
];

const BLOG_TITLES = {
  "what-is-pdlc-smart-film": "What Is PDLC Smart Film? Working Principle, Benefits & Buying Guide — AYSENT",
  "smart-film-vs-smart-glass": "Smart Film vs Smart Glass: Cost, Installation & Use Cases Compared — AYSENT",
  "how-to-install-self-adhesive-smart-film": "How to Install Self-Adhesive Smart Film: Step-by-Step Guide — AYSENT",
  "pdlc-smart-film-cost-pricing-guide": "PDLC Smart Film Cost & Pricing Guide: Budget Breakdown — AYSENT",
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
};

function buildAllRoutes() {
  const routes = [...STATIC_ROUTES];
  for (const slug of PRODUCT_SLUGS) {
    routes.push({
      path: `/products/${slug}`,
      title: PRODUCT_TITLES[slug],
      description: PRODUCT_DESCS[slug],
    });
  }
  for (const slug of BLOG_SLUGS) {
    routes.push({
      path: `/blog/${slug}`,
      title: BLOG_TITLES[slug],
      description: BLOG_DESCS[slug],
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

  console.log(`[prerender] Rendering ${routes.length} routes...`);

  for (const route of routes) {
    try {
      const appHtml = render(route.path);

      // Inject rendered app into the root div using precise string positioning
      // (regex fails because skeleton contains nested </div> tags)
      const rootOpen = "<div id=\"root\">";
      const rootStart = template.indexOf(rootOpen);
      const scriptStart = template.indexOf("<script type=\"module\"", rootStart);
      // Find the </div> immediately before the script tag
      const closingDiv = template.lastIndexOf("</div>", scriptStart);
      let html =
        template.substring(0, rootStart + rootOpen.length) +
        appHtml +
        template.substring(closingDiv);

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
