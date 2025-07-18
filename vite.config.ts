import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@tic', replacement: path.resolve(__dirname, 'tic') },

    ]
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Dark Fortress',
      formats: ['es'],
      fileName: () => 'game.js'
    },
    target: 'es2015',
    outDir: 'build',
    minify: false,
    rollupOptions: {
      external: []
    }
  }
});
