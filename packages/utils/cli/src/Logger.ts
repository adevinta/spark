import chalk from 'chalk'

export class Logger {
  success(message: string) {
    console.log(chalk.green(message))
  }

  error(message: string) {
    console.log(chalk.red(message))
  }

  info(message: string) {
    console.log(chalk.yellow(message))
  }

  warning(message: string) {
    console.log(chalk.green(message))
  }
}
