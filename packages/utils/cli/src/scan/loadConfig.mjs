import { existsSync } from 'fs'
import merge from 'lodash.merge'

import * as defaultConfig from './config.mjs'

export async function loadConfig(configFileRoute, { logger }) {
  try {
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
      logger.warn('⚠️ No custom configuration file found')
      logger.info('ℹ️ Loading default configuration')

      return { ...defaultConfig }
    }
  } catch (error) {
    logger.error('💥 Something went wrong loading the custom configuration file')

    return { ...defaultConfig }
  }
}
