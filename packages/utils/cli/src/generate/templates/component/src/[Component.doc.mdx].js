import { pascalCase } from 'pascal-case'

export default ({ name, description }) => {
  const componentName = pascalCase(name)

  return `import { ArgsTable, Meta, Story, Canvas } from '@storybook/addon-docs'

import { ${componentName} } from '.'

import * as stories from './${componentName}.stories'

<Meta of={stories} />

# ${componentName}

${description}

## Install

\`\`\`sh
npm install @spark-ui/${name}
\`\`\`

## Import

\`\`\`tsx
import { ${componentName} } from "@spark-ui/${name}"
\`\`\`

## Props

<ArgsTable of={${componentName}} />

## Variants

<Canvas>
  <Story of={stories.Default} />
</Canvas>
`
}
