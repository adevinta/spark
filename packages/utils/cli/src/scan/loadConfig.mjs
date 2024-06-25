import process from 'node:process'

import { existsSync } from 'fs'
import merge from 'lodash.merge'
import path from 'path'

import * as defaultConfig from './config.mjs'

export async function loadConfig(configuration, { logger }) {
  try {
    const configFileRoute = path.join(process.cwd(), configuration || '.spark-ui.cjs')
    if (existsSync(configFileRoute)) {
      logger.info('ℹ️ Loading spark-ui custom configuration file')
      const { default: customConfig } = await import(configFileRoute)

      const config = {
        adoption: merge(defaultConfig, {
          ...customConfig.adoption,
          imports: customConfig.imports || defaultConfig.imports,
          extensions: customConfig.extensions || defaultConfig.extensions,
        }),
      }

      return config
    } else {
      if (configuration) {
        logger.error('⚠️ No custom configuration file found:', configFileRoute)
        process.exit(1)
      }
      logger.warning('⚠️ No custom configuration file found')
      logger.info('ℹ️ Loading default configuration')

      return { ...defaultConfig }
    }
  } catch (error) {
    logger.error('💥 Something went wrong loading the custom configuration file', error)

    return { ...defaultConfig }
  }
}
