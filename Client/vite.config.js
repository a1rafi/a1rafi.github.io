import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/admonymous": {
        target: "https://www.admonymous.co",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/admonymous/, ""),
      },
    },
  },
});
