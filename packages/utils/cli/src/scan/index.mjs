import * as process from 'node:process'

import { appendFileSync, existsSync } from 'fs'
import path from 'path'

import { scanCallback } from './scanCallback.mjs'
import { logger, scanDirectories } from './utils/index.mjs'

const DEFAULT_CONFIG = {
  adoption: {
    details: false,
    sort: 'count',
    imports: ['@spark-ui'],
    extensions: ['.tsx', '.ts'],
    directory: '.',
  },
}

export async function adoption(options = {}) {
  let config = DEFAULT_CONFIG

  const configFileRoute = path.join(process.cwd(), options.configuration || '.spark-ui.cjs')
  try {
    if (existsSync(configFileRoute)) {
      logger.info('ℹ️ Loading spark-ui custom configuration file')
      const { default: customConfig } = await import(
        path.join(process.cwd(), options.configuration)
      )
      config = structuredClone(customConfig, DEFAULT_CONFIG)
    } else {
      logger.warn('⚠️ No custom configuration file found')
      logger.info('ℹ️ Loading default configuration')
    }
  } catch (error) {
    logger.error('💥 Something went wrong loading the custom configuration file')
  }

  const extensions = config.adoption.extensions

  let importCount = 0
  const importResults = {}
  let importsUsed = {}
  let importsCount = {}
  config.adoption.imports.forEach(moduleName => {
    logger.info(`ℹ️ Scanning adoption for ${moduleName}`)
    const directoryPath = path.join(process.cwd(), config.adoption.directory)

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
      logger.warn(
        `⚠️ No files found with "${moduleName}" imports across directory ${directoryPath}.`
      )
    }
    importCount = response.importCount
  })

  // Sort importsUsed by alphabet
  if (config.adoption.sort === 'alphabetical') {
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
  } else if (config.adoption.sort === 'count') {
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
      { ...value, ...(config.adoption.details && { results: importResults[pkgName] }) },
    ])
  )

  if (options.output) {
    try {
      appendFileSync(`${options.output}`, JSON.stringify(result, null, 2))
    } catch (err) {
      logger.error(`💥 Error writing file: ${err}`)
    }
  } else {
    logger.info(JSON.stringify(result, null, 2))
  }
}
