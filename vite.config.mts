import { defineConfig } from "npm:vite@^6.0.0";
import react from "npm:@vitejs/plugin-react@^4.3.0";

import "npm:react@^18.2.0";
import "npm:react-dom@^18.2.0/client";
import "npm:react-router-dom";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
