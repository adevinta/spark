import { System } from '../../core/index.mjs'
import { Validator } from './Validator.mjs'

export class NameValidator extends Validator {
  system

  constructor({ system }) {
    super()
    this.system = system
  }

  validate(name) {
    if (!name) {
      return 'Package name must me defined'
    }

    if (!/^[a-z-]*$/.test(name)) {
      return 'Name name must contain letters and dash symbols only (ex: "my-package")'
    }

    if (this.system.isPackageCreated(name)) {
      return 'A package with that name already exists. Either delete it manually or use another name.'
    }
  }
}
