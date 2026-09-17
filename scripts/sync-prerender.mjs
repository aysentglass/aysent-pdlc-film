// sync-prerender.mjs
// Automatically syncs blog post metadata from src/lib/site.ts into scripts/prerender.mjs.
// Run before every build (via package.json "prebuild" hook) so you only edit site.ts.
//
// Usage: node scripts/sync-prerender.mjs

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const siteTsPath = join(root, "src", "lib", "site.ts");
const prerenderPath = join(root, "scripts", "prerender.mjs");

// ---- 1. Read site.ts and extract blog posts ----
// Normalize CRLF -> LF so markers work on both Windows and Unix.
const siteTs = readFileSync(siteTsPath, "utf-8").replace(/\r\n/g, "\n");

// Isolate the BLOG_POSTS array block to avoid matching products/advantages.
// BLOG_POSTS is immediately followed by NAV_ITEMS in site.ts.
const blogStartMarker = "export const BLOG_POSTS: BlogPost[] = [";
const blogEndMarker = "\n];\n\nexport const NAV_ITEMS";
const blogStartIdx = siteTs.indexOf(blogStartMarker);
const blogEndIdx = siteTs.indexOf(blogEndMarker, blogStartIdx);

if (blogStartIdx === -1 || blogEndIdx === -1) {
  console.error("[sync-prerender] ERROR: Could not locate BLOG_POSTS block in site.ts. Aborting.");
  process.exit(1);
}

const blogBlock = siteTs.substring(blogStartIdx, blogEndIdx);

// Match each blog post's slug, title, excerpt, image in order.
// site.ts structure is consistent: slug -> title -> excerpt -> date -> readTime -> image
const blogRegex =
  /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?excerpt:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;

const posts = [];
let match;
while ((match = blogRegex.exec(blogBlock)) !== null) {
  const [, slug, title, excerpt, image] = match;
  posts.push({ slug, title, excerpt, image });
}

if (posts.length === 0) {
  console.error("[sync-prerender] ERROR: No blog posts found in site.ts. Aborting.");
  process.exit(1);
}

console.log(`[sync-prerender] Found ${posts.length} blog posts in site.ts:`);
posts.forEach((p) => console.log(`  - ${p.slug}`));

// ---- 2. Build the new array/object contents ----
const slugsContent = posts.map((p) => `  "${p.slug}",`).join("\n");

const titlesContent = posts
  .map((p) => `  "${p.slug}": "${p.title.replace(/"/g, '\\"')}",`)
  .join("\n");

const descsContent = posts
  .map((p) => `  "${p.slug}":\n    "${p.excerpt.replace(/"/g, '\\"')}",`)
  .join("\n");

const imagesContent = posts
  .map((p) => `  "${p.slug}": "https://www.aysentglass.com${p.image}",`)
  .join("\n");

// ---- 3. Read prerender.mjs and replace the four blocks ----
let prerender = readFileSync(prerenderPath, "utf-8").replace(/\r\n/g, "\n");

function replaceBlock(content, varName, openChar, closeChar, newContent) {
  // Match: const VAR = { or [ ... } or ];
  const pattern = new RegExp(
    `const ${varName} = (\\${openChar})[\\s\\S]*?(\\${closeChar});`,
    "g"
  );
  const replacement = `const ${varName} = ${openChar}\n${newContent}\n${closeChar};`;
  return content.replace(pattern, replacement);
}

prerender = replaceBlock(prerender, "BLOG_SLUGS", "[", "]", slugsContent);
prerender = replaceBlock(prerender, "BLOG_TITLES", "{", "}", titlesContent);
prerender = replaceBlock(prerender, "BLOG_DESCS", "{", "}", descsContent);
prerender = replaceBlock(prerender, "BLOG_IMAGES", "{", "}", imagesContent);

// ---- 4. Write back ----
writeFileSync(prerenderPath, prerender, "utf-8");
console.log(`[sync-prerender] SUCCESS: Updated prerender.mjs with ${posts.length} blog posts.`);
