import { Slot } from '@spark-ui/slot'
import { Children, type ComponentPropsWithoutRef, type PropsWithChildren, RefObject } from 'react'

import { inputAddonStyles, type InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'disabled'> {
  ref?: RefObject<HTMLDivElement>
}

export const InputAddon = ({
  asChild: asChildProp,
  className,
  children,
  ref,
  ...others
}: PropsWithChildren<InputAddonProps>) => {
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

InputAddon.displayName = 'InputGroup.Addon'
