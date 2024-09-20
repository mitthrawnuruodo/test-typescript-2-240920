// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensure relative paths for assets in production
  build: {
    outDir: 'dist',  // Output directory for the build
  },
});