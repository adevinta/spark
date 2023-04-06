import { pascalCase } from 'pascal-case'

export default ({ name, description }) => {
  const componentName = pascalCase(name)

  return `import { Meta, Canvas } from '@storybook/addon-docs'
import { ArgTypes } from '@storybook/blocks';

import { ${componentName} } from '.'

import * as stories from './${componentName}.stories'

<Meta of={stories} />

# ${componentName}

${description}

## Install

\`\`\`
npm install @spark-ui/${name}
\`\`\`

## Import

\`\`\`
import { ${componentName} } from "@spark-ui/${name}"
\`\`\`

## Props

<ArgTypes of={${componentName}} />

## Variants
<Canvas of={stories.Default} />
`
}
