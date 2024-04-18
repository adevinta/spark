import fs from 'fs'

/**
 * Check if a file contains an import from a given import name.
 * @param filePath The path to the file to check.
 * @param importName The name of the import to check for.
 * @returns Whether the file contains an import from the given import name.
 */
export function fileContainsImport(filePath, importName) {
  const fileContent = fs.readFileSync(filePath, 'utf8')

  if (new RegExp(`import.*from\\s+["']${importName}.*["']`, 'm').test(fileContent)) {
    return { filePath, fileContent }
  }

  return { filePath }
}
