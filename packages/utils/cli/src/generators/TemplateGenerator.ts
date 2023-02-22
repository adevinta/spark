import { join } from 'node:path'

import glob from 'glob'

import { System } from '../System.js'

export class TemplateGenerator {
  system: System
  template = ''

  constructor({ system }: { system: System }) {
    this.system = system
  }

  parsePath({ path }: { path: string; name: string }) {
    return path
  }

  computeDest({ name }: { name: string }) {
    const basePath = this.system.getBasePath()

    return `${basePath}/packages/utils/${name}`
  }

  computePaths() {
    const template = this.template
    const pattern = join(__dirname, `../templates/${template}/**/*.js`)

    return new Promise<string[]>((resolve, reject) => {
      glob(pattern, async (error, paths) => {
        if (error) {
          return reject(error)
        }

        resolve(paths)
      })
    })
  }

  async execute({ name, description }: { name: string; description: string }) {
    const dest = this.computeDest({ name })
    const paths = await this.computePaths()

    const promises = paths.map(path =>
      import(path).then(module => ({
        path: this.parsePath({
          path: path.replace(/(.*)\/templates\/(.+)\//, dest).replaceAll(/\[|\]|\.js$/g, ''),
          name,
        }),
        content: module.default({
          component: name,
          description,
        }),
      }))
    )

    const files = await Promise.all(promises)

    return Promise.all(files.map(file => this.system.writeFile(file)))
  }
}
