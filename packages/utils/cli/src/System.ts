import fse from 'fs-extra'
import glob from 'glob'

import { Logger } from './Logger'

export class System {
  logger: Logger

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger
  }

  exit(message: string) {
    this.logger.error(`✖ Error: ${message}\n`)
    process.exit(1)
  }

  getBasePath() {
    return process.cwd()
  }

  getPackageJSON() {
    const basePath = this.getBasePath()

    const raw = fse.readFileSync(`${basePath}/package.json`).toString()

    return JSON.parse(raw)
  }

  isPackageCreated(name: string) {
    const base = this.getBasePath()
    const packageJSON = this.getPackageJSON()

    return packageJSON.workspaces.some((workspace: string) => {
      const packages = glob.sync(`${base}/${workspace}/`)

      return packages.some(path => path.endsWith(`/${name}/`))
    })
  }

  writeFile({ path, content }: { path: string; content: string }) {
    return fse
      .outputFile(path, content)
      .then(() => this.logger.info(`Created ${path}`))
      .catch(() => this.exit(`Failed creating ${path}`))
  }
}
