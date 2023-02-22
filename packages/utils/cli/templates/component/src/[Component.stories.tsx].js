import { pascalCase } from 'pascal-case'

export default ({ name, description }) => {
  const componentName = pascalCase(name)

  return `import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { ${componentName} } from '.'

export const Default = () => (
  <ReactLiveBlock scope={{ ${componentName} }}>
    <${componentName}>Hello World!</${componentName}>
  </ReactLiveBlock>
)
`
}
