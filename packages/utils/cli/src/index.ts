import * as prompt from '@clack/prompts'

import { ComponentGenerator } from './generators/ComponentGenerator'
import { TemplateGenerator } from './generators/TemplateGenerator'
import { VanillaGenerator } from './generators/VanillaGenerator'
import { Logger } from './Logger'
import { System } from './System'
import { DescriptionValidator, NameValidator } from './validators'

export const TEMPLATE_TYPES = {
  COMPONENT: 'component',
  HOOK: 'hook',
  VANILLA: 'vanilla',
}

const logger = new Logger()
const system = new System({ logger })

const getGenerator = (template: string): TemplateGenerator => {
  if (template === TEMPLATE_TYPES.COMPONENT) {
    return new ComponentGenerator({ system })
  }

  return new VanillaGenerator({ system })
}

export const generate = ({
  name,
  description,
  template,
}: {
  name: string
  description: string
  template: string
}) => {
  const generator = getGenerator(template)

  generator.execute({ name, description })
}

export const template = async () => {
  const name = (await prompt.text({
    message: 'Package name (must contain letters and dash symbols only):',
    initialValue: '',
    validate(value) {
      const validator = new NameValidator({ system })

      return validator.validate(value)
    },
  })) as string

  if (prompt.isCancel(name)) {
    system.exit('Aborted package generation')
  }

  const template = (await prompt.select({
    message: 'Chose a template:',
    initialValue: 'component',
    options: [
      {
        value: TEMPLATE_TYPES.COMPONENT,
        label: 'Component',
        hint: 'Typescript dummy component with some tests, stories and config files',
      },
      {
        value: TEMPLATE_TYPES.HOOK,
        label: 'Hook',
        hint: 'Typescript hook with some tests, stories and config files',
      },
      {
        value: TEMPLATE_TYPES.VANILLA,
        label: 'Vanilla',
        hint: 'Typescript hook with some tests, stories and config files',
      },
    ],
  })) as string

  if (prompt.isCancel(template)) {
    system.exit('Aborted package generation')
  }

  const description = (await prompt.text({
    message: 'Describe your package (short description):',
    initialValue: '',
    validate(value) {
      const validator = new DescriptionValidator()

      return validator.validate(value)
    },
  })) as string

  if (prompt.isCancel(description)) {
    system.exit('Aborted package generation')
  }

  generate({ name, description, template })
}
