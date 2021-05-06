// vite.config.ts
import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import markdown, {Mode} from "vite-plugin-markdown";
var vite_config_default = defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    markdown({
      mode: [Mode.REACT]
    })
  ],
  build: {
    rollupOptions: {
      plugins: []
    }
  }
});
export {
  vite_config_default as default
};
