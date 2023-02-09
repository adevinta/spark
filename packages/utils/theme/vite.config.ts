import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const pkg = require(path.resolve(__dirname, './package.json'))

const deps = Object.keys(pkg.dependencies || {})
const devDeps = Object.keys(pkg.devDependencies || {})

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: 'index.mts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...deps, ...devDeps, 'path', 'fs'],
      preserveModules: false,
      plugins: [terser(), typescript({ cacheDir: './dist' })],
    },
  },
}
