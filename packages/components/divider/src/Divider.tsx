import { Root as Separator } from '@radix-ui/react-separator'
import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren, ReactElement } from 'react'

import { dividerStyles, type DividerStylesProps } from './Divider.styles'

export interface DividerProps extends PropsWithChildren<HTMLElement>, DividerStylesProps {
  asChild?: boolean
  children?: ReactElement
  orientation?: 'vertical' | 'horizontal'
  alignment?: 'start' | 'end' | 'center'
}

// export type DividerProps = ComponentPropsWithoutRef<'div'>

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ asChild, className, children, orientation, alignment, ...props }, ref) => {
    const isEmpty = asChild ? !children?.props?.children : !children

    return (
      <Separator
        asChild={asChild}
        className={cx(dividerStyles({ isEmpty, orientation, alignment }), className)}
        orientation={orientation}
        ref={ref}
        {...props}
      >
        {children}
      </Separator>
    )
  }
)
