// scripts/convert-to-webp.mjs
// 批量将 public/images 下的 JPG 转换为 WebP（质量 80），缩小体积约 30-50%。
// 用法: node scripts/convert-to-webp.mjs

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, "..", "public", "images");

const files = readdirSync(IMG_DIR).filter(
  (f) => /\.(jpg|jpeg)$/i.test(f) && !f.includes("副本")
);

let totalOriginal = 0;
let totalWebp = 0;

for (const file of files) {
  const input = join(IMG_DIR, file);
  const output = join(IMG_DIR, basename(file, extname(file)) + ".webp");
  const originalSize = statSync(input).size;

  try {
    const info = await sharp(input)
      .webp({ quality: 80, effort: 6 })
      .toFile(output);

    totalOriginal += originalSize;
    totalWebp += info.size;
    const saved = ((1 - info.size / originalSize) * 100).toFixed(1);
    console.log(
      `✓ ${file.padEnd(35)} ${(originalSize / 1024).toFixed(0).padStart(5)}KB → ${(info.size / 1024).toFixed(0).padStart(5)}KB  (节省 ${saved}%)`
    );
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log("\n─────────────────────────────────────────────");
console.log(
  `总计: ${(totalOriginal / 1024).toFixed(0)}KB → ${(totalWebp / 1024).toFixed(0)}KB  (节省 ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%)`
);
console.log(`\n提示: 转换完成后，请将代码中的 .jpg 引用替换为 .webp`);
