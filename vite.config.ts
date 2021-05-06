import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import markdown, { Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    markdown({
      mode: [Mode.REACT],
    }),
  ],

  build: {
    rollupOptions: {
      plugins: [

      ]
    }
  }
})
