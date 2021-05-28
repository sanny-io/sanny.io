import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import markdown, { Mode } from 'vite-plugin-markdown';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    markdown({
      mode: [Mode.REACT],
    }),
  ],

  build: {
    assetsInlineLimit: 0,
  }
})
