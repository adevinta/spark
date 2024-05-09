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

  let response = {
    importCount,
    importResults,
    importsUsed,
    importsCount,
  }

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      response = scanDirectories(filePath, importName, extensions, scanningCallback, response)
    } else if (stats.isFile() && extensions.includes(path.extname(filePath))) {
      const f = fileContainsImport(filePath, importName)

      if (f) {
        response = scanningCallback(
          {
            filePath: f.filePath,
            fileContent: f.fileContent,
          },
          importName,
          response
        )
      }
    }
  }

  return response
}
