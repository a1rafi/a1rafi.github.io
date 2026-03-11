import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function resolveBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const isUserSite = repo?.endsWith(".github.io");
  if (process.env.GITHUB_PAGES && repo) {
    return isUserSite ? "/" : `/${repo}/`;
  }
  return "/";
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
});
