import fs from 'fs'
import { OutputOptions } from 'rollup'

import { findPackageBasePath, getAllFilesInDirectory, getDocgen, writeDocgen } from './utils'

/**
 * Some Spark packages are heavy to parse and their docgen might not provide any valuable data.
 */
const IGNORED_PACKAGES = ['@spark-ui/icons']

export default function sparkDocgen() {
  return {
    name: 'spark-docgen',
    writeBundle({ name, dir }: OutputOptions) {
      if (!name || !dir) return

      const rootFolder = findPackageBasePath(dir)
      const docgenPath = `${dir}/public/docgen.json`

      if (IGNORED_PACKAGES.includes(name)) return

      /**
       * Spark packages are built twice (esm and cjs).
       * This condition ensure we don't parse the docgen twice.
       */
      if (fs.existsSync(docgenPath)) return

      const sourceFiles = getAllFilesInDirectory(`${rootFolder}/src`)
      const docs = getDocgen(sourceFiles)

      console.log(`[vite:spark-docgen] ${name}`)

      writeDocgen(docgenPath, docs)
    },
  }
}
