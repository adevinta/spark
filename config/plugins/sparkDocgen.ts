import fs from 'fs'
import path from 'path'
import reactDocgenTS from 'react-docgen-typescript'
import { OutputOptions } from 'rollup'

type PackageDocgen = Omit<reactDocgenTS.ComponentDoc, 'filePath'>
type SparkDocgen = Record<string, PackageDocgen>

/**
 * Some Spark packages are heavy to parse and their docgen might not provide any valuable data.
 */
const IGNORED_PACKAGES = ['@spark-ui/icons']

const removeObjectKey = <T, K extends keyof T>(obj: T, key: K) =>
  (({ [key]: _, ...rest }) => rest)(obj)

function getAllFilesInDirectory(dirPath: string, fileArray: string[] = []): string[] {
  const files: string[] = fs.readdirSync(dirPath)

  files.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      getAllFilesInDirectory(filePath, fileArray)
    } else {
      const excludePatterns = /\.(test|styles|stories)\.[^.]+$/
      if (
        stats.isFile() &&
        (file.endsWith('.ts') || file.endsWith('.tsx')) &&
        !excludePatterns.test(file)
      ) {
        fileArray.push(filePath)
      }
    }
  })

  return fileArray
}

function getDocgen(path: string | string[]): SparkDocgen {
  const docs = reactDocgenTS.parse(path, {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    propFilter: prop => {
      const prohibitedPropsRegexesNew = [/\/node_modules\/@types\/react\/.*.d.ts/]

      if (prop.declarations && prop.declarations?.length > 0) {
        const isProhibitedProps = prop.declarations.some(declaration =>
          prohibitedPropsRegexesNew.some(regex => regex.test(declaration.fileName))
        )

        return !isProhibitedProps
      }

      return true
    },
  })

  return docs.reduce<SparkDocgen>((accum, doc) => {
    return {
      ...accum,
      [doc.displayName]: removeObjectKey(doc, 'filePath'),
    }
  }, {})
}

function findPackageBasePath(filePath: string): string | null {
  let currentDir = path.dirname(filePath)

  while (currentDir !== '/') {
    const packageJsonPath = path.join(currentDir, 'package.json')

    if (fs.existsSync(packageJsonPath)) {
      return currentDir
    }

    currentDir = path.dirname(currentDir)
  }

  return null
}

const writeDocgen = (filePath: string, data: SparkDocgen): void => {
  const directory = path.dirname(filePath)

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

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

      const files = getAllFilesInDirectory(`${rootFolder}/src`)
      const docs = getDocgen(files)

      console.log(`[vite:spark-docgen] ${name}`)

      writeDocgen(docgenPath, docs)
    },
  }
}
