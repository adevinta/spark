import { Root as Separator } from '@radix-ui/react-separator'
import { cx } from 'class-variance-authority'
import { forwardRef, HTMLAttributes, PropsWithRef, ReactElement } from 'react'

import { dividerStyles, type DividerStylesProps } from './Divider.styles'

export interface DividerProps
  extends PropsWithRef<HTMLAttributes<HTMLDivElement>>,
    Omit<DividerStylesProps, 'isEmpty'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  children?: ReactElement
  /**
   * The orientation of the inner content.
   */
  alignment?: 'start' | 'end' | 'center'
  /**
   * The orientation of the separator.
   */
  orientation?: 'vertical' | 'horizontal'
  /**
   *
   */
  design?: 'filled' | 'dashed' | 'dotted'
  /**
   * When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.
   */
  isDecorative?: boolean
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      asChild,
      className,
      isDecorative = false,
      design = 'filled',
      children,
      orientation = 'horizontal',
      alignment = 'center',
      intent = 'current',
      ...props
    },
    ref
  ) => {
    const isEmpty = asChild ? !children?.props?.children : !children

    return (
      <Separator
        asChild={asChild}
        className={cx(
          dividerStyles({ isEmpty, orientation, alignment, design, intent }),
          className
        )}
        orientation={orientation}
        ref={ref}
        decorative={isDecorative}
        {...props}
      >
        {children}
      </Separator>
    )
  }
)
