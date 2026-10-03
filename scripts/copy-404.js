import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const docsDir = path.resolve("docs");
const indexPath = path.join(publicDir, "index.html");
const fallbackPath = path.join(publicDir, "404.html");

if (fs.existsSync(indexPath)) {
  let htmlContent = fs.readFileSync(indexPath, "utf8");
  const timestamp = new Date().toISOString();
  // Append timestamp comment to force GitHub Pages cache update
  htmlContent = htmlContent.replace("</html>", `<!-- build-time: ${timestamp} --></html>`);
  fs.writeFileSync(indexPath, htmlContent, "utf8");
  fs.copyFileSync(indexPath, fallbackPath);
  console.log(`Successfully updated index.html & 404.html with build timestamp (${timestamp}).`);

  // Sync to docs/ directory for GitHub Pages main/docs source setting
  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.cpSync(publicDir, docsDir, { recursive: true });
  console.log(`Successfully synced build output to docs/ directory.`);
} else {
  console.error("index.html not found in .output/public!");
}


