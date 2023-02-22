import { pascalCase } from 'pascal-case'

export default ({ component, description }) => {
  const componentName = pascalCase(component)

  return `import { ArgsTable, Meta, Story } from '@storybook/addon-docs'
import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'
import { StoryHeading } from '@docs/helpers/StoryHeading'

import { ${componentName} } from '.'

import * as stories from './${componentName}.stories'

<Meta title="Components/Misc/${componentName}" component={${componentName}} />

# ${componentName}

${description}

<StoryHeading label="Install" />

\`\`\`
npm install @spark-ui/${component}
\`\`\`

<StoryHeading label="Import" />

\`\`\`
import { ${componentName} } from "@spark-ui/${component}"
\`\`\`

<StoryHeading label="Props" />

<ArgsTable of={${componentName}} />

<StoryHeading label="Variants" />

<Story name="default" story={stories.Default} />
`
}
