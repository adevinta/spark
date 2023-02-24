import { camelCase } from 'camel-case'

export default ({ name, description }) => {
  const hookName = camelCase(name)

  return `import { ArgsTable, Meta, Story } from '@storybook/addon-docs'
import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { StoryHeading } from '@docs/helpers/StoryHeading'

import { ${hookName} } from '.'

import * as stories from './${hookName}.stories'

<Meta title="Hooks/${hookName}" />

# ${hookName}

${description}

<StoryHeading label="Install" />

\`\`\`
npm install @spark-ui/${name}
\`\`\`

<StoryHeading label="Import" />

\`\`\`
import { ${hookName} } from "@spark-ui/${name}"
\`\`\`

<StoryHeading label="Usage" />

<ArgsTable of={${hookName}} />

\`\`\`jsx
import { ${hookName} } from "@spark-ui/${name}"

const Demo = () => {}
\`\`\`
`
}
