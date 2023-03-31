import { pascalCase } from 'pascal-case'

export default ({ name, description }) => {
  const componentName = pascalCase(name)

  return `import { ArgsTable, Meta, Story, Canvas } from '@storybook/addon-docs'
import { StoryHeading } from '@docs/helpers/StoryHeading'

import { ${componentName} } from '.'

import * as stories from './${componentName}.stories'

<Meta of={stories} />

# ${componentName}

${description}

<StoryHeading label="Install" />

\`\`\`sh
npm install @spark-ui/${name}
\`\`\`

<StoryHeading label="Import" />

\`\`\`tsx
import { ${componentName} } from "@spark-ui/${name}"
\`\`\`

<StoryHeading label="Props" />

<ArgsTable of={${componentName}} />

<StoryHeading label="Variants" />

<Canvas>
  <Story of={stories.Default} />
</Canvas>
`
}
