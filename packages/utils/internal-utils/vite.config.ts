import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'
import browserslistToEsbuild from 'browserslist-to-esbuild'

const pkg = require('./package.json')
const peerDeps = Object.keys(pkg.peerDependencies || {})

export default {
  build: {
    target: browserslistToEsbuild(),
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['node:path', 'node:fs', ...peerDeps],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],
}
