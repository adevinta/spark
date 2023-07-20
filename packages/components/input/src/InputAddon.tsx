import { Slot } from '@spark-ui/slot'
import { Children, type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren } from 'react'

import {
  inputAddonContainerStyles,
  inputAddonStyles,
  type InputAddonStylesProps,
} from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'disabled'> {
  placement: 'left' | 'right'
}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ asChild: asChildProp = true, className, placement, children, ...others }, ref) => {
    const { state, disabled } = useInputGroup()

    const isRawText = typeof children === 'string'
    const asChild = !!(isRawText ? false : asChildProp)
    const child = isRawText ? children : Children.only(children)
    const Component = asChild && !isRawText ? Slot : 'div'

    const getDesign = (): InputAddonStylesProps['design'] => {
      if (isRawText) return 'text'

      return asChild ? 'solid' : 'inline'
    }

    const design = getDesign()

    return (
      <div className={inputAddonContainerStyles({ disabled, placement })}>
        <Component
          ref={ref}
          className={inputAddonStyles({
            className,
            intent: state,
            disabled,
            asChild,
            design,
          })}
          {...(disabled && { tabIndex: -1 })}
          {...others}
        >
          {child}
        </Component>
      </div>
    )
  }
)

InputAddon.displayName = 'InputAddon'
