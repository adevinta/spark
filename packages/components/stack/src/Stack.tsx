import { Slot } from '@spark-ui/slot'
import { type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren } from 'react'

import { type StackStyles, styles } from './Stack.styles'

export type StackProps = ComponentPropsWithoutRef<'div'> &
  StackStyles & {
    /**
     * Change the component to the HTML tag or custom component of the only child.
     */
    asChild?: boolean
  }

export const Stack = forwardRef<HTMLDivElement, PropsWithChildren<StackProps>>(
  (
    {
      asChild,
      direction = 'vertical',
      spacing = 'md',
      align = 'stretch',
      justify = 'normal',
      wrap = false,
      className,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={styles({ className, direction, spacing, align, justify, wrap })}
        {...props}
      />
    )
  }
)
