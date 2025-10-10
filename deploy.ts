import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.177.0/http/file_server.ts";

serve(async (req) => {
  console.log(`Request: ${req.method} ${req.url}`);

  try {
    // Check if dist directory exists
    const distInfo = await Deno.stat("dist").catch(() => null);
    if (!distInfo) {
      console.error("dist directory not found!");
      return new Response("Build files not found", { status: 500 });
    }

    const response = await serveDir(req, {
      fsRoot: "dist",
      showDirListing: true,
    });

    console.log(`Response status: ${response.status}`);
    return response;
  } catch (error) {
    console.error("Error serving request:", error);
    return new Response("Internal server error", { status: 500 });
  }
});
