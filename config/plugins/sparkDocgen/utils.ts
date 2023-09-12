import fs from 'fs'
import path from 'path'
import reactDocgenTS from 'react-docgen-typescript'

import { docgenConfig } from './constants'
import { type SparkDocgen } from './types'

const removeObjectKey = <T, K extends keyof T>(obj: T, key: K) =>
  (({ [key]: _, ...rest }) => rest)(obj)

export function getAllFilesInDirectory(dirPath: string, fileArray: string[] = []): string[] {
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

export function getDocgen(path: string | string[]): SparkDocgen {
  const docs = reactDocgenTS.parse(path, docgenConfig)

  return docs.reduce<SparkDocgen>((accum, doc) => {
    return {
      ...accum,
      [doc.displayName]: removeObjectKey(doc, 'filePath'),
    }
  }, {})
}

export function findPackageBasePath(filePath: string): string | null {
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

export const writeDocgen = (filePath: string, data: SparkDocgen): void => {
  const directory = path.dirname(filePath)

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}
