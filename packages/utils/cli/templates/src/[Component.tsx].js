import { pascalCase } from 'pascal-case'

export default ({ component }) => {
  const componentName = pascalCase(component)

  return `import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type ${componentName}Props = ComponentPropsWithoutRef<'div'>

export function ${componentName}(props: PropsWithChildren<${componentName}Props>) {
  return <div {...props} />
}
`
}
