import fs from 'node:fs'

import chalk from 'chalk'
import fse from 'fs-extra'

export const log = msg => console.log(chalk.gray(msg)) // eslint-disable-line no-console

export const showError = (msg, foreignProgram) => {
  console.error(chalk.red(`✖ Error: ${msg}\n`))
  process.exit(1)
}

export const writeFile = ({ path, content }) =>
  fse
    .outputFile(path, content)
    .then(() => log(`Created ${path}`))
    .catch(() => showError(`Failed creating ${path}`))
