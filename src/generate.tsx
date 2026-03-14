import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { Resume } from "./resume";
import path from "path";

const outputDir = path.resolve(__dirname, "..", "outputs");
const date = new Date().toISOString().slice(0, 10);
const outputPath = path.join(outputDir, `${date}-resume.pdf`);

async function main() {
  console.log(`Generating resume PDF...`);
  await renderToFile(<Resume />, outputPath);
  console.log(`Saved to ${outputPath}`);
}

main().catch((err) => {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
});
