import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
  try {
    console.log("Listing files in /:");
    for await (const dirEntry of Deno.readDir("/")) {
      console.log(dirEntry.name);
    }

    console.log("Listing files in /src:");
    for await (const dirEntry of Deno.readDir("/src")) {
      console.log(dirEntry.name);
    }

    console.log("Listing files in ./dist (if it exists):");
    try {
      for await (const dirEntry of Deno.readDir("./dist")) {
        console.log(dirEntry.name);
      }
    } catch (e) {
      console.log("Could not read ./dist:", e.message);
    }

    console.log("Listing files in /dist (if it exists):");
    try {
      for await (const dirEntry of Deno.readDir("/dist")) {
        console.log(dirEntry.name);
      }
    } catch (e) {
      console.log("Could not read /dist:", e.message);
    }
  } catch (e) {
    console.error("Error listing directories:", e);
  }

  return new Response("Debugging... check logs.");
});
