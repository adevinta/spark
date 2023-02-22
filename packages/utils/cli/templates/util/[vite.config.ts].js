export default () => `import { terser } from 'rollup-plugin-terser'
import dts from 'vite-plugin-dts'

export default {
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['node:path', 'node:fs'],
      plugins: [terser()],
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],
}
`
