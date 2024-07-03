import chalk from 'chalk'

export class Logger {
  #force = false

  constructor({ verbose } = {}) {
    this.verbose = verbose

    if (typeof Logger.instance === 'object') {
      return Logger.instance
    }

    Logger.instance = this

    return this
  }

  #log({ type = v => v, force, verbose }, ...args) {
    if (force || verbose) {
      console.log(type(...args)) // eslint-disable-line no-console
    }
    this.#force = false
  }

  force() {
    this.#force = true

    return this
  }

  error(...args) {
    this.#log({ type: chalk.red, force: this.#force, verbose: this.verbose }, ...args)
  }

  warning(...args) {
    this.#log({ type: chalk.yellow, force: this.#force, verbose: this.verbose }, ...args)
  }

  info(...args) {
    this.#log({ type: chalk.cyan, force: this.#force, verbose: this.verbose }, ...args)
  }

  success(...args) {
    this.#log({ type: chalk.green, force: this.#force, verbose: this.verbose }, ...args)
  }

  break() {
    this.#log({ type: chalk.green, force: this.#force, verbose: this.verbose }, '')
  }
}
