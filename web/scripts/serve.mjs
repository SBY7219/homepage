import { createReadStream, watch } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { buildSite, output, root } from "./build.mjs";

const port = Number(process.env.PORT ?? 3002);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("PORT must be a valid TCP port");
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".xml": "application/xml", ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".pdf": "application/pdf", ".woff2": "font/woff2",
  ".woff": "font/woff", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".zip": "application/zip",
};
await buildSite();
const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    let filename = path.resolve(output, `.${decodeURIComponent(url.pathname)}`);
    if (!filename.startsWith(output + path.sep) && filename !== output) {
      response.writeHead(403).end();
      return;
    }
    let info = await stat(filename).catch(() => null);
    if (!info && !path.extname(filename)) {
      filename += ".html";
      info = await stat(filename);
    }
    if (info?.isDirectory()) {
      filename = path.join(filename, "index.html");
      info = await stat(filename);
    }
    if (!info?.isFile()) throw new Error("Not found");
    response.writeHead(200, { "Content-Type": types[path.extname(filename)] ?? "application/octet-stream",
      "Content-Length": info.size, "Cache-Control": "no-store" });
    if (request.method === "HEAD") response.end();
    else createReadStream(filename).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});
server.listen(port, "127.0.0.1", () => console.log(`Preview: http://127.0.0.1:${port}`));

if (!process.argv.includes("--no-watch")) {
  let timer;
  let rebuilding = false;
  let pending = false;
  async function rebuild() {
    pending = true;
    if (rebuilding) return;
    rebuilding = true;
    while (pending) {
      pending = false;
      try { await buildSite(); } catch (error) { console.error(error.message); }
    }
    rebuilding = false;
  }
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(rebuild, 180);
  }
  watch(path.join(root, "web"), { recursive: true }, schedule);
  watch(root, (_event, filename) => {
    if (filename && (/\.(html|css|xml)$/.test(filename) || filename === "CNAME")) schedule();
  });
}
