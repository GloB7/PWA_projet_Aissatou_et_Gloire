
// vite.config.js
/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CreateStyled } from '@emotion/styled';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/globalStyles";`,
      },
    },
  },
  /*resolve: {
    alias: {
      react: require.resolve('react'),
    },
  }, 
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
}); */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CreateStyled } from '@emotion/styled';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/globalStyles";`,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
