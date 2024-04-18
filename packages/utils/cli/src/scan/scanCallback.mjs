import extractImports from './utils/extract-imports.mjs'

export function scanCallback(f, moduleName, { importResults, importsUsed, importsCount }) {
  if (!f.fileContent) return

  const imports = extractImports(f.filePath, moduleName)

  Object.entries(imports).forEach(([key, importDeclarations]) => {
    const moduleName = key.split('/').splice(0, 2).join('/')
    importDeclarations.forEach(importDeclaration => {
      const statement = importDeclaration.getText()
      const defaultImport = importDeclaration.getDefaultImport()?.getText() || null
      const namedImports = importDeclaration.getNamedImports().map(n => n.getText())

      if (!importResults[moduleName]) {
        importResults[moduleName] = []
      }

      importResults[moduleName].push({
        path: f.filePath,
        statement,
        hasDefault: !!defaultImport,
        hasNamed: !!namedImports.length,
        defaultImport,
        namedImports,
      })

      if (!importsUsed[moduleName]) {
        importsUsed[moduleName] = {
          default: {},
          named: {},
          importsCount: 0,
        }
      }

      if (defaultImport) {
        importsUsed[moduleName].default[defaultImport] =
          importsUsed[moduleName].default[defaultImport] + 1 || 1
        importsUsed.importsCount = importsCount[defaultImport] + 1

        importsCount[defaultImport] = importsCount[defaultImport] + 1 || 1
      }

      if (namedImports.length) {
        namedImports.forEach(n => {
          importsUsed[moduleName].named[n] = importsUsed[moduleName].named[n] + 1 || 1
        })

        namedImports.forEach(n => {
          importsUsed[moduleName].importsCount = importsUsed[moduleName].importsCount + 1
          importsCount[n] = importsCount[n] + 1 || 1
        })
      }
    })
  })
}
