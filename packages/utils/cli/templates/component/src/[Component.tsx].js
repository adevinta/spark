import { pascalCase } from 'pascal-case'

export default ({ name }) => {
  const componentName = pascalCase(name)

  return `import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type ${componentName}Props = ComponentPropsWithoutRef<'div'>

export function ${componentName}(props: PropsWithChildren<${componentName}Props>) {
  return <div {...props} />
}
`
}
