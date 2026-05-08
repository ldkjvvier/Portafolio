import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  base: 'https://ldkjvvier.github.io/Portafolio',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@splinetool/runtime')) {
            return 'spline';
          }

          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react';
          }
        }
      }
    }
  }
});
