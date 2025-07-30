import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'farm',
      formats: ['es'],
      fileName: () => 'game.js'
    },
    target: 'es2016',
    outDir: 'build',
    minify: false,
    rollupOptions: {
      external: []
    }
  }
});
