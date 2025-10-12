import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.177.0/http/file_server.ts

<<<<<<< HEAD


  ,
";

serve(req => {
=======
serve((req) => {
>>>>>>> parent of 303ba8e (Revert "Upgrade Deno and clean up deployment code")
  return serveDir(req, {
    fsRoot: "dist",
  });
});
