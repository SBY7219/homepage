import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const manifestPath = "web/generated-files.json";

export async function publishStaticFiles({ root, output, files, check = false }) {
  const published = [...new Set(files)].sort();
  for (const filename of published) {
    if (!filename || path.posix.isAbsolute(filename) || filename.includes("\\") ||
        filename.split("/").some(part => part === ".." || part === "." || !part)) {
      throw new Error(`Invalid generated path: ${filename}`);
    }
  }
  const manifestFile = path.join(root, manifestPath);
  const previous = await readFile(manifestFile, "utf8").then(JSON.parse).catch(error => {
    if (error.code === "ENOENT") return { files: [] };
    throw error;
  });
  const removed = previous.files.filter(filename => !published.includes(filename));
  if (removed.length) {
    throw new Error(`Generated files no longer have a source. Review their removal before publishing:\n${removed.join("\n")}`);
  }
  const contents = await Promise.all(published.map(filename => readFile(path.join(output, filename))));
  const changed = [];
  for (const [index, filename] of published.entries()) {
    const destination = path.join(root, filename);
    const current = await readFile(destination).catch(error => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (current?.equals(contents[index])) continue;
    changed.push(filename);
    if (!check) {
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, contents[index]);
    }
  }
  const manifest = `${JSON.stringify({ version: 1, files: published }, null, 2)}\n`;
  const currentManifest = await readFile(manifestFile, "utf8").catch(error => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (check) {
    if (changed.length || currentManifest !== manifest) {
      throw new Error(`Published static files are out of date. Run pnpm --dir web build.\n${changed.join("\n")}`);
    }
    console.log(`Published static files are current (${published.length} files).`);
  } else {
    await mkdir(path.dirname(manifestFile), { recursive: true });
    await writeFile(manifestFile, manifest);
    console.log(`Updated ${changed.length} generated files in the repository; ${published.length} files are ready for static publishing.`);
  }
  return { changed, files: published };
}
