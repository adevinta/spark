import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type InputIconProps = ComponentPropsWithoutRef<'div'>

export const InputIcon = forwardRef<HTMLDivElement, PropsWithChildren<InputIconProps>>(
  ({ className, children, ...others }, ref) => {
    return <div ref={ref} {...others} />
  }
)

InputIcon.displayName = 'InputIcon'
