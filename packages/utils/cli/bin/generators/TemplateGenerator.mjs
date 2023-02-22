import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import glob from 'glob'
import { pascalCase } from 'pascal-case'
import { camelCase } from 'camel-case'

import { System } from '../core/index.mjs'
import { Generator } from './Generator.mjs'

export class TemplateGenerator extends Generator {
  static TYPES = {
    COMPONENT: 'component',
    HOOK: 'hook',
    UTIL: 'util',
  }

  static CONTEXTS = {
    [TemplateGenerator.TYPES.COMPONENT]: 'components',
    [TemplateGenerator.TYPES.HOOK]: 'components',
    [TemplateGenerator.TYPES.UTIL]: 'utils',
  }

  constructor({ system }) {
    super()
    this.system = system
  }

  getDest({ type, name }) {
    const basePath = this.system.getBasePath()
    const context = TemplateGenerator.CONTEXTS[type]

    return `${basePath}/packages/${context}/${name}`
  }

  getTemplatePaths({ type }) {
    const pattern = fileURLToPath(new URL(`../../templates/${type}/**/*.js`, import.meta.url))

    return new Promise((resolve, reject) => {
      glob(pattern, async (error, paths) => {
        if (error) {
          return reject(error)
        }

        resolve(paths)
      })
    })
  }

  getTemplatePath({ path, name, type, dest }) {
    const parsed = path
      .replace(/(.*)\/templates\/([a-z-]+)\//, `${dest}/`)
      .replaceAll(/\[|\]|\.js$/g, '')

    if (type === TemplateGenerator.TYPES.COMPONENT) {
      return parsed.replace('Component', pascalCase(name))
    }

    if (type === TemplateGenerator.TYPES.HOOK) {
      return parsed.replace('name', camelCase(name))
    }

    return parsed
  }

  async execute({ type, name, description }) {
    const dest = this.getDest({ type, name })
    const paths = await this.getTemplatePaths({ type })

    const promises = paths.map(path =>
      import(path).then(module => ({
        path: this.getTemplatePath({ path, name, type, dest }),
        content: module.default({
          name,
          description,
        }),
      }))
    )

    const files = await Promise.all(promises)

    return Promise.all(files.map(file => this.system.writeFile(file)))
  }
}
