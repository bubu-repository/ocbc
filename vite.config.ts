import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is the Vercel deploy target for the repo: a small demo site that
// renders the component library live. The library itself builds separately
// via `npm run build:lib` (tsup) into lib-dist/, so the two builds never
// write to the same output directory.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
