import { pascalCase } from 'pascal-case'

export default ({ component, description }) => {
  const componentName = pascalCase(component)

  return `import { ReactLiveBlock } from '@docs/helpers/ReactLiveBlock'

import { ${componentName} } from '../src'

export const Default = () => (
  <ReactLiveBlock scope={{ ${componentName} }}>
    <${componentName}>Hello World!</${componentName}>
  </ReactLiveBlock>
)
`
}
