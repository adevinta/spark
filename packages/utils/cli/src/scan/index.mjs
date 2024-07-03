/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import * as process from 'node:process'

import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'

import { Logger } from '../core/index.mjs'
import * as defaultConfig from './config.mjs'
import { loadConfig } from './loadConfig.mjs'
import { scanCallback } from './scanCallback.mjs'
import { scanDirectories } from './utils/index.mjs'

export async function adoption(options = {}) {
  const { configuration, ...optionsConfig } = options

  const logger = new Logger({ verbose: optionsConfig.verbose })
  let config = await loadConfig(configuration, { logger })

  config = {
    adoption: {
      ...config.adoption,
      ...optionsConfig,
      imports: optionsConfig.imports || config.adoption.imports,
      extensions: optionsConfig.extensions || config.adoption.extensions,
    },
  }

  let importCount = 0
  const importResults = {}
  let importsUsed = {}
  let importsCount = {}

  const { details, directory, extensions, imports, sort, output } = config.adoption

  imports.forEach(moduleName => {
    logger.info(`ℹ️ Scanning adoption for ${moduleName}`)
    const directoryPath = path.join(process.cwd(), directory)

    const response = scanDirectories(directoryPath, moduleName, extensions, scanCallback, {
      importCount,
      importResults,
      importsUsed,
      importsCount,
    })
    if (importCount !== response.importCount) {
      logger.success(
        `🎉 Found ${response.importCount - importCount} imports with "${moduleName}" modules across directory ${directoryPath}.`
      )
    } else {
      logger.warning(
        `⚠️ No files found with "${moduleName}" imports across directory ${directoryPath}.`
      )
    }
    importCount = response.importCount
  })

  // Sort importsUsed by alphabet
  if (sort === 'alphabetical') {
    importsUsed = Object.fromEntries(
      Object.entries(importsUsed)
        .sort(([pkgNameA], [pkgNameB]) => pkgNameA.localeCompare(pkgNameB))
        .map(([pkgName, content]) => {
          return [
            pkgName,
            {
              default: Object.fromEntries(
                Object.entries(content.default).sort(([a], [b]) => a.localeCompare(b))
              ),
              named: Object.fromEntries(
                Object.entries(content.named).sort(([a], [b]) => a.localeCompare(b))
              ),
              importsCount: content.importsCount,
            },
          ]
        })
    )
  } else if (sort === 'count') {
    // Sort importsUsed by most used
    importsUsed = Object.fromEntries(
      Object.entries(importsUsed)
        .sort(([, contentA], [, contentB]) => contentB.importsCount - contentA.importsCount)
        .map(([pkgName, content]) => {
          return [
            pkgName,
            {
              default: Object.fromEntries(
                Object.entries(content.default).sort(([, a], [, b]) => b - a)
              ),
              named: Object.fromEntries(
                Object.entries(content.named).sort(([, a], [, b]) => b - a)
              ),
              importsCount: content.importsCount,
            },
          ]
        })
    )

    importsCount = Object.fromEntries(Object.entries(importsCount).sort(([, a], [, b]) => b - a))
  }

  const result = Object.fromEntries(
    Object.entries(importsUsed).map(([pkgName, value]) => [
      pkgName,
      { ...value, ...(details && { results: importResults[pkgName] }) },
    ])
  )

  if (output) {
    try {
      const { dir } = path.parse(path.join(process.cwd(), output))
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }
      writeFileSync(`${path.join(process.cwd(), output)}`, JSON.stringify(result, null, 2))
    } catch (error) {
      logger.error(`💥 Error writing file: ${error}`)
      process.exit(1)
    }
  } else {
    logger.force().info(JSON.stringify(result, null, 2))
    process.exit(0)
  }
}

export const config = { ...defaultConfig }
