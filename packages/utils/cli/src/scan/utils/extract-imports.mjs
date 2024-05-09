import { Project } from 'ts-morph'

export function extractImports(filePath, requestedModuleName) {
  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(filePath)

  const importStatements = {}

  const importNodes = sourceFile.getImportDeclarations()

  importNodes
    .filter(node => {
      const moduleName = node.getModuleSpecifierValue()

      return moduleName.includes(requestedModuleName)
    })
    .forEach(node => {
      const moduleName = node.getModuleSpecifierValue()
      if (!importStatements[moduleName]) {
        importStatements[moduleName] = []
      }
      importStatements[moduleName].push(node)
    })

  return importStatements
}

export default extractImports
