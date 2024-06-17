import { existsSync } from 'fs'

export async function loadConfig(configFileRoute, { logger }) {
  try {
    if (existsSync(configFileRoute)) {
      logger.info('ℹ️ Loading spark-ui custom configuration file')
      const { default: customConfig } = await import(configFileRoute)

      return customConfig
    } else {
      logger.warn('⚠️ No custom configuration file found')
      logger.info('ℹ️ Loading default configuration')

      return {}
    }
  } catch (error) {
    logger.error('💥 Something went wrong loading the custom configuration file')

    return {}
  }
}
