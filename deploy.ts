import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts";
import {
  join,
  dirname,
  fromFileUrl,
  extname,
} from "https://deno.land/std@0.177.0/path/mod.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));
const distDir = join(__dirname, "dist");

console.log("Script directory:", __dirname);
console.log("Dist directory:", distDir);

serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const filePath = join(distDir, pathname === "/" ? "index.html" : pathname);

  console.log("Request for:", pathname);
  console.log("Serving file from:", filePath);

  try {
    const fileInfo = await Deno.stat(filePath);
    if (fileInfo.isFile) {
      console.log("File found. Serving:", filePath);
      return await serveFile(req, filePath);
    }
  } catch (e) {
    console.error("Error stating file:", e);
    if (e instanceof Deno.errors.NotFound) {
      // If file not found, and it's a navigation event (no extension), serve index.html
      if (!extname(pathname)) {
        console.log("File not found, serving index.html for navigation.");
        const indexPath = join(distDir, "index.html");
        return await serveFile(req, indexPath);
      }
    }
  }

  // For assets that are not found, return 404
  console.log("File not found, returning 404.");
  return new Response("Not Found", { status: 404 });
});
