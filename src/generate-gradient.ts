import sharp from "sharp";
import path from "path";

const width = 612; // LETTER width in points
const height = 1; // 1px tall, will be stretched

// Create raw pixel data for a horizontal gradient
const pixels = Buffer.alloc(width * 3); // RGB

const startColor = { r: 30, g: 27, b: 46 };  // #1E1B2E
const endColor = { r: 53, g: 43, b: 107 };    // #352B6B

for (let x = 0; x < width; x++) {
  const t = x / (width - 1);
  // Ease the transition slightly
  const ease = t * t * (3 - 2 * t); // smoothstep
  pixels[x * 3 + 0] = Math.round(startColor.r + (endColor.r - startColor.r) * ease);
  pixels[x * 3 + 1] = Math.round(startColor.g + (endColor.g - startColor.g) * ease);
  pixels[x * 3 + 2] = Math.round(startColor.b + (endColor.b - startColor.b) * ease);
}

const outputPath = path.join(__dirname, "assets", "header-gradient.png");

sharp(pixels, {
  raw: { width, height, channels: 3 },
})
  .png()
  .toFile(outputPath)
  .then(() => console.log(`Gradient saved to ${outputPath}`));
