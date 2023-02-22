import { System } from '../System'
import { Validator } from './Validator'

export class NameValidator implements Validator<string> {
  system: System

  constructor({ system }: { system: System }) {
    this.system = system
  }

  validate(name: string) {
    if (!name) {
      return 'Package name must me defined'
    }

    if (!/^[a-z-]*$/.test(name)) {
      return 'Name name must contain letters and dash symbols only (ex: "my-package")'
    }

    if (this.system.isPackageCreated(name)) {
      return 'A package with that name already exists. Either delete it manually or use another name.'
    }

    return undefined
  }
}
