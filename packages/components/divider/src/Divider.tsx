import { Root as Separator } from '@radix-ui/react-separator'
import { cx } from 'class-variance-authority'
import { forwardRef, HTMLAttributes, PropsWithRef, ReactElement, ReactNode } from 'react'

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
   * When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.
   */
  isDecorative?: boolean
  /**
   * Color scheme of the divider.
   */
  intent?: 'outline' | 'current'
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      asChild,
      className,
      isDecorative = false,
      children,
      orientation = 'horizontal',
      alignment = 'center',
      intent = 'outline',
      ...props
    },
    ref
  ) => {
    const isEmpty = asChild ? !(children?.props as { children: ReactNode })?.children : !children

    return (
      <Separator
        data-spark-component="divider"
        asChild={asChild}
        className={cx(dividerStyles({ isEmpty, orientation, alignment, intent }), className)}
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
