import { Validator } from './Validator.mjs'

export class DescriptionValidator extends Validator {
  validate(description) {
    if (!description) {
      return 'You package must have a description'
    }

    if (description.length < 10) {
      return 'Description is too short (minimum is 10 chars)'
    }

    return undefined
  }
}
