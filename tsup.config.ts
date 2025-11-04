import { defineConfig } from 'tsup';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@mui/material'],
  esbuildOptions(options) {
    // Ensure esbuild resolves path aliases
    options.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
