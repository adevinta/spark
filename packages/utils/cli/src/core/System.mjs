import fse from 'fs-extra'
import glob from 'glob'

export class System {
  logger

  constructor({ logger }) {
    this.logger = logger
  }

  exit(message) {
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

  isPackageCreated(name) {
    const base = this.getBasePath()
    const packageJSON = this.getPackageJSON()

    return packageJSON.workspaces.some(workspace => {
      const packages = glob.sync(`${base}/${workspace}/`)

      return packages.some(path => path.endsWith(`/${name}/`))
    })
  }

  writeFile({ path, content }) {
    return fse
      .outputFile(path, content)
      .then(() => this.logger.info(`Created ${path}`))
      .catch(() => this.exit(`Failed creating ${path}`))
  }
}
