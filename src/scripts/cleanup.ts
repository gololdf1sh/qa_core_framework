import fs from "node:fs/promises";
import path from "node:path";

const PROJECT_ROOT = process.cwd();
const DIRS = ["test-results", "playwright-report", "blob-report", "allure-results"];

function assertInsideRoot(targetPath: string) {
  const rel = path.relative(PROJECT_ROOT, targetPath);
  if (rel.startsWith("..") || (path.isAbsolute(rel) === false && rel.includes(".."))) {
    throw new Error(`Refusing to delete outside project root: ${targetPath}`);
  }
}

async function main() {
  console.log(`Project root: ${PROJECT_ROOT}`);

  for (const dir of DIRS) {
    const target = path.join(PROJECT_ROOT, dir);
    assertInsideRoot(target);

    try {
      await fs.rm(target, { recursive: true, force: true });
      console.log(`Removed: ${target}`);
    } catch (e) {
      console.log(`Skip/Failed: ${target}`, e);
    }
  }

  console.log("Cleaned up done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
