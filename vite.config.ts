/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import browserslistToEsbuild from 'browserslist-to-esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    target: browserslistToEsbuild(),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: 'istanbul',
    },
  },
})
