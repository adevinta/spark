import { type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren } from 'react'

export type TabsProps = ComponentPropsWithoutRef<'div'>

export const Tabs = forwardRef<HTMLDivElement, PropsWithChildren<TabsProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
