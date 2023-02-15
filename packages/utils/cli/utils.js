import fs from 'node:fs'

import chalk from 'chalk'
import fse from 'fs-extra'

export const log = {
  success: msg => console.log(chalk.green(msg)), // eslint-disable-line no-console
  error: msg => console.log(chalk.red(msg)), // eslint-disable-line no-console
  info: msg => console.log(chalk.yellow(msg)), // eslint-disable-line no-console
  warning: msg => console.log(chalk.orange(msg)), // eslint-disable-line no-console
}

export const showError = (msg, foreignProgram) => {
  log.error(`✖ Error: ${msg}\n`)
  process.exit(1)
}

export const writeFile = ({ path, content }) =>
  fse
    .outputFile(path, content)
    .then(() => log.info(`Created ${path}`))
    .catch(() => showError(`Failed creating ${path}`))
