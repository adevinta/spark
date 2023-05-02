/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import browserslistToEsbuild from 'browserslist-to-esbuild'

const NOT_VALID_COMPONENTS_PATTERN = 'bar'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@spark-ui/icons'],
  },
  plugins: [tsconfigPaths(), react()],
  build: {
    target: browserslistToEsbuild(),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
    exclude: [...configDefaults.exclude, `**/components/${NOT_VALID_COMPONENTS_PATTERN}/**`],
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: 'istanbul',
      exclude: ['**/packages/**/*.doc.mdx', '**/packages/**/*.stories.tsx'],
      reportsDirectory: 'dist/coverage',
      reporter: [['lcovonly', {}], ['json', { file: 'coverage.json' }], ['html'], ['text']],
    },
  },
})
