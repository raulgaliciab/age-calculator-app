import { defineConfig } from 'vite';
import raw from 'vite-raw-plugin';

export default defineConfig({
  plugins: [
    raw({
      fileRegex: /\.html$/, // Procesa solo archivos .html como strings
    }),
  ],
});
