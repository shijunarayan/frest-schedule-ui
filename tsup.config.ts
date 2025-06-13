import { defineConfig } from "tsup";
import tsconfigPaths from "tsconfig-paths";

tsconfigPaths.register();

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
});
