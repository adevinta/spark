import { System } from '../System.js'
import { TemplateGenerator } from './TemplateGenerator.js'

export class VanillaGenerator extends TemplateGenerator {
  constructor({ system }: { system: System }) {
    super({ system })
    this.template = 'vanilla'
  }
}
