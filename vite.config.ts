import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ckeditor5({ theme: import.meta.resolve("@ckeditor/ckeditor5-theme-lark") }),
  ],
  server: {
    port: 8000,
  },
});
