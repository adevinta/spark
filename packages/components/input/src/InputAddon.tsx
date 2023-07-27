import { Slot } from '@spark-ui/slot'
import { Children, type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren } from 'react'

import { inputAddonStyles, type InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'disabled'> {}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ asChild: asChildProp, className, children, ...others }, ref) => {
    const { state, disabled, readOnly } = useInputGroup()

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
      <Component
        ref={ref}
        className={inputAddonStyles({
          className,
          intent: state,
          disabled,
          readOnly,
          asChild,
          design,
        })}
        {...(disabled && { tabIndex: -1 })}
        {...others}
      >
        {child}
      </Component>
    )
  }
)

InputAddon.displayName = 'InputGroup.Addon'
