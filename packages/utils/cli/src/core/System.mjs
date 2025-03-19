import { mkdir, readFileSync, writeFile } from 'node:fs'
import { dirname } from 'node:path'
import { promisify } from 'node:util'

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
    const raw = readFileSync(`${basePath}/package.json`).toString()

    return JSON.parse(raw)
  }

  isPackageCreated(name) {
    const base = this.getBasePath()
    const packageJSON = this.getPackageJSON()

    return packageJSON.workspaces.some(workspace => {
      try {
        const packages = readFileSync(`${base}/${workspace}`, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => `${base}/${workspace}/${dirent.name}/`)

        return packages.some(path => path.endsWith(`/${name}/`))
      } catch {
        return false
      }
    })
  }

  async writeFile({ path, content }) {
    try {
      await promisify(mkdir)(dirname(path), { recursive: true })
      await promisify(writeFile)(path, content)
      this.logger.info(`Created ${path}`)
    } catch {
      this.exit(`Failed creating ${path}`)
    }
  }
}
