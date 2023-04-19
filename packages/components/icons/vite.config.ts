import path, { resolve } from 'node:path'
import glob from 'fast-glob'
import { getComponentConfiguration } from '../../../config/index'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { name } = require(path.resolve(__dirname, 'package.json'))
const baseConfig = getComponentConfiguration(process.cwd(), name)
const icons = glob.sync(['src/icons/*.tsx'])

export default {
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: [...icons, 'src/index.ts'],
      fileName: (_, entryName) => {
        return entryName === 'index' ? `${entryName}.js` : `icons/${entryName}.js`
      },
      formats: ['es', 'cjs'],
    },
  },
}
