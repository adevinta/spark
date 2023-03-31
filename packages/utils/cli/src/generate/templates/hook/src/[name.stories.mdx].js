import { camelCase } from 'camel-case'

export default ({ name, description }) => {
  const hookName = camelCase(name)

  return `import { ArgsTable, Meta, Story } from '@storybook/addon-docs'
import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { ${hookName} } from '.'

import * as stories from './${hookName}.stories'

<Meta title="Hooks/${hookName}" />

# ${hookName}

${description}

## Install

\`\`\`
npm install @spark-ui/${name}
\`\`\`

## Import

\`\`\`
import { ${hookName} } from "@spark-ui/${name}"
\`\`\`

## Usage

<ArgsTable of={${hookName}} />

\`\`\`jsx
import { ${hookName} } from "@spark-ui/${name}"

const Demo = () => {}
\`\`\`
`
}
