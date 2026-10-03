import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const indexPath = path.join(publicDir, "index.html");
const fallbackPath = path.join(publicDir, "404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log("Successfully copied index.html to 404.html for GitHub Pages routing.");
} else {
  console.error("index.html not found in .output/public!");
}
