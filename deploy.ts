import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts";
import { join, extname } from "https://deno.land/std@0.177.0/path/mod.ts";

// In Deno Deploy, the project files are in /src
const distDir = "/src/dist";

serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const filePath = join(distDir, pathname === "/" ? "index.html" : pathname);

  try {
    const fileInfo = await Deno.stat(filePath);
    if (fileInfo.isFile) {
      return await serveFile(req, filePath);
    }
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      // If file not found, and it's a navigation event (no extension), serve index.html
      if (!extname(pathname)) {
        const indexPath = join(distDir, "index.html");
        return await serveFile(req, indexPath);
      }
    }
  }

  // For assets that are not found, return 404
  return new Response("Not Found", { status: 404 });
});
