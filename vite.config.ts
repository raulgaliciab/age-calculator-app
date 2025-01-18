import { defineConfig } from 'vite';
import htmlImport from '@ayatkyo/vite-plugin-html-import';

export default defineConfig({
  plugins: [
    htmlImport(),
  ],
});