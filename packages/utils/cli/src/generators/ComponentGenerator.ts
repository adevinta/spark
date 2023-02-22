import { pascalCase } from 'pascal-case'

import { System } from '../System.js'
import { TemplateGenerator } from './TemplateGenerator.js'

export class ComponentGenerator extends TemplateGenerator {
  constructor({ system }: { system: System }) {
    super({ system })
    this.template = 'component'
  }

  parsePath({ path, name }: { path: string; name: string }) {
    return path.replace('Component', pascalCase(name))
  }
}
