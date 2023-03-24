import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type PortalProps = ComponentPropsWithoutRef<'div'>

export function Portal(props: PropsWithChildren<PortalProps>) {
  return <div {...props} />
}
