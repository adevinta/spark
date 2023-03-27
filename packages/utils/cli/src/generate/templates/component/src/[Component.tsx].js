import { pascalCase } from 'pascal-case'

export default ({ name }) => {
  const componentName = pascalCase(name)

  return `import { forwardRef, ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type ${componentName}Props = ComponentPropsWithoutRef<'div'>

export const ${componentName} = forwardRef<HTMLDivElement, PropsWithChildren<${componentName}Props>>((props, ref) => {
  return <div ref={ref} {...props} />
})
`
}
