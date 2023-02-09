import { createRequire } from 'node:module'

import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

const require = createRequire(import.meta.url)

const pkg = require('../package.json')
const deps = Object.keys(pkg.dependencies || {})
const devDeps = Object.keys(pkg.devDependencies || {})

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...deps, ...devDeps],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      /** To avoid bundling types into a package/components folder inside of dist */
      entryRoot: './src',
    }),
    react({
      jsxRuntime: 'classic',
    }),
  ],
}
