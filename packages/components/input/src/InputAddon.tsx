import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type InputAddonProps = ComponentPropsWithoutRef<'div'>

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ className, ...others }, ref) => {
    return <div ref={ref} className={cx(className, 'flex items-center')} {...others} />
  }
)

InputAddon.displayName = 'InputAddon'
