import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "./resume";
import path from "path";
import { mkdir, copyFile, rename } from "node:fs/promises";

const outputDir = path.resolve(__dirname, "..", "outputs");
const date = new Date().toISOString().slice(0, 10);
const outputPath = path.join(outputDir, `${date}-resume-cv-weylin-wagnon.pdf`);
const publishedPath = path.join(outputDir, "resume.pdf");

async function main() {
  console.log(`Generating resume PDF...`);
  await mkdir(outputDir, { recursive: true });
  await renderToFile(<Resume />, outputPath);
  console.log(`Saved to ${outputPath}`);
  await copyFile(outputPath, `${publishedPath}.tmp`);
  await rename(`${publishedPath}.tmp`, publishedPath);
  console.log(`Published to ${publishedPath}`);
}

main().catch((err) => {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
});
