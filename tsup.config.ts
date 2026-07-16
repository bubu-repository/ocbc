import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  outDir: "lib-dist",
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  minify: false,
  injectStyle: false,
});
