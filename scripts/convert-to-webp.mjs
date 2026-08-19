// scripts/convert-to-webp.mjs
// 批量将 public/images 下的 JPG 转换为 WebP，并生成多尺寸响应式版本。
// 用法: node scripts/convert-to-webp.mjs

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, "..", "public", "images");

// 响应式尺寸（宽度），高度按比例自动计算
const RESPONSIVE_WIDTHS = [480, 768];

const files = readdirSync(IMG_DIR).filter(
  (f) => /\.(jpg|jpeg)$/i.test(f) && !f.includes("副本")
);

let totalOriginal = 0;
let totalWebp = 0;

for (const file of files) {
  const input = join(IMG_DIR, file);
  const baseName = basename(file, extname(file));
  const output = join(IMG_DIR, baseName + ".webp");
  const originalSize = statSync(input).size;

  try {
    // 1. 原始尺寸 WebP（质量 80）
    const info = await sharp(input)
      .webp({ quality: 80, effort: 6 })
      .toFile(output);

    // 只有 WebP 比 JPG 小才保留，否则删除
    if (info.size >= originalSize) {
      // 尝试更低质量
      const lowQuality = await sharp(input)
        .webp({ quality: 60, effort: 6 })
        .toBuffer();
      if (lowQuality.length < originalSize) {
        const { writeFileSync } = await import("fs");
        writeFileSync(output, lowQuality);
        totalOriginal += originalSize;
        totalWebp += lowQuality.length;
        console.log(
          `✓ ${file.padEnd(35)} ${(originalSize / 1024).toFixed(0).padStart(5)}KB → ${(lowQuality.length / 1024).toFixed(0).padStart(5)}KB (q60, 节省 ${((1 - lowQuality.length / originalSize) * 100).toFixed(1)}%)`
        );
      } else {
        // 仍然更大，删除 WebP，保留 JPG
        const { unlinkSync } = await import("fs");
        unlinkSync(output);
        console.log(`✗ ${file.padEnd(35)} WebP 更大，保留 JPG`);
        continue;
      }
    } else {
      totalOriginal += originalSize;
      totalWebp += info.size;
      console.log(
        `✓ ${file.padEnd(35)} ${(originalSize / 1024).toFixed(0).padStart(5)}KB → ${(info.size / 1024).toFixed(0).padStart(5)}KB (q80, 节省 ${((1 - info.size / originalSize) * 100).toFixed(1)}%)`
      );
    }

    // 2. 生成响应式小尺寸版本（480w, 768w）
    const metadata = await sharp(input).metadata();
    for (const width of RESPONSIVE_WIDTHS) {
      if (metadata.width && metadata.width > width) {
        const resizedOutput = join(IMG_DIR, `${baseName}-${width}w.webp`);
        await sharp(input)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 75, effort: 5 })
          .toFile(resizedOutput);
      }
    }
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log("\n─────────────────────────────────────────────");
console.log(
  `原始 JPG 总计: ${(totalOriginal / 1024).toFixed(0)}KB → WebP 总计: ${(totalWebp / 1024).toFixed(0)}KB  (节省 ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%)`
);
console.log(`\n已生成响应式尺寸: 480w, 768w（用于 srcset）`);
