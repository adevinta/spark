import { Validator } from './Validator'

export class DescriptionValidator implements Validator<string> {
  validate(description: string) {
    if (!description) {
      return 'You package must have a description'
    }

    if (description.length < 10) {
      return 'Description is too short (minimum is 10 chars)'
    }

    return undefined
  }
}
