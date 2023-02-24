/* eslint-disable no-console */
import chalk from 'chalk'

export class Logger {
  success(message) {
    console.log(chalk.green(message))
  }

  error(message) {
    console.log(chalk.red(message))
  }

  info(message) {
    console.log(chalk.yellow(message))
  }

  warning(message) {
    console.log(chalk.green(message))
  }
}
