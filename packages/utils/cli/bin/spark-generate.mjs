#!/usr/bin/env node

import * as prompt from '@clack/prompts'

import { TemplateGenerator } from '../src/generate/generators/index.mjs'
import { Logger, System } from '../src/core/index.mjs'
import { DescriptionValidator, NameValidator } from '../src/generate/validators/index.mjs'

const logger = new Logger({ verbose: true })
const system = new System({ logger })
const generator = new TemplateGenerator({ system })

export const run = async () => {
  const name = await prompt.text({
    message: 'Package name (must contain letters and dash symbols only):',
    initialValue: '',
    validate(value) {
      const validator = new NameValidator({ system })

      return validator.validate(value)
    },
  })

  if (prompt.isCancel(name)) {
    system.exit('Aborted package generation')
  }

  const type = await prompt.select({
    message: 'Choose a template:',
    initialValue: 'component',
    options: [
      {
        value: TemplateGenerator.TYPES.COMPONENT,
        label: 'Component',
        hint: 'TypeScript component package',
      },
      {
        value: TemplateGenerator.TYPES.HOOK,
        label: 'Hook',
        hint: 'TypeScript hook package',
      },
      {
        value: TemplateGenerator.TYPES.UTIL,
        label: 'Utility',
        hint: 'TypeScript utility package',
      },
    ],
  })

  if (prompt.isCancel(type)) {
    system.exit('Aborted package generation')
  }

  const description = await prompt.text({
    message: 'Describe your package (short description):',
    initialValue: '',
    validate(value) {
      const validator = new DescriptionValidator()

      return validator.validate(value)
    },
  })

  if (prompt.isCancel(description)) {
    system.exit('Aborted package generation')
  }

  generator.execute({ name, type, description })
}

run()
