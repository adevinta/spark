import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { type ComponentProps, forwardRef } from 'react'

export interface AccordionItemHeaderProps extends ComponentProps<'h3'> {
  asChild?: boolean
}

export const ItemHeader = forwardRef<HTMLHeadingElement, AccordionItemHeaderProps>(
  ({ asChild = false, children, className }, ref) => {
    const Component = asChild ? Slot : 'h3'

    return (
      <Component
        ref={ref}
        data-spark-component="accordion-item-header"
        className={cx('rounded-[inherit]', className)}
      >
        {children}
      </Component>
    )
  }
)

ItemHeader.displayName = 'Accordion.ItemHeader'
