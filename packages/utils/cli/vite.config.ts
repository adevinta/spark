import path from 'path'
import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

const pkg = require(path.resolve(__dirname, './package.json'))

const deps = Object.keys(pkg.dependencies || {})
const devDeps = Object.keys(pkg.devDependencies || {})

export default {
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...deps, ...devDeps, 'node:path', 'node:fs', 'node:url'],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],
}
