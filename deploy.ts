import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.177.0/http/file_server.ts";

serve(async (req) => {
  console.log(`Request: ${req.method} ${req.url}`);

  try {
    const response = await serveDir(req, {
      fsRoot: "dist",
      urlRoot: "",
    });

    if (response.status === 404) {
      console.log(`Got 404, serving index.html instead.`);
      const index = await Deno.readFile("./dist/index.html");
      return new Response(index, {
        status: 200,
        headers: {
          "content-type": "text/html",
        },
      });
    }

    return response;
  } catch (error) {
    console.error("Error serving request:", error);
    return new Response("Internal server error", { status: 500 });
  }
});
