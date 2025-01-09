import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { type ComponentProps, RefObject } from 'react'

export interface AccordionItemHeaderProps extends ComponentProps<'h3'> {
  asChild?: boolean
  ref?: RefObject<HTMLHeadingElement>
}

export const ItemHeader = ({
  asChild = false,
  children,
  className,
  ref,
}: AccordionItemHeaderProps) => {
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

ItemHeader.displayName = 'Accordion.ItemHeader'
