import fs from 'fs'
import path from 'path'

import { fileContainsImport } from './file-contains-import.mjs'

export function scanDirectories(
  directoryPath,
  importName,
  extensions,
  scanningCallback,
  { importCount, importResults, importsUsed, importsCount }
) {
  const files = fs.readdirSync(directoryPath)

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      scanDirectories(filePath, importName, extensions, scanningCallback, {
        importCount,
        importResults,
        importsUsed,
        importsCount,
      })
    } else if (stats.isFile() && extensions.includes(path.extname(filePath))) {
      const f = fileContainsImport(filePath, importName)

      if (f) {
        scanningCallback(
          {
            filePath: f.filePath,
            fileContent: f.fileContent,
          },
          importName,
          {
            importCount,
            importResults,
            importsUsed,
            importsCount,
          }
        )
      }
    }
  }
}
