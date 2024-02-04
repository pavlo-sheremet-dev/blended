import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: '/src/components',
      styles: '/src/styles',
      tabs: '/src/tabs',
      apiService: '/src/apiService',
      hooks: '/src/hooks',
    },
  },
});
