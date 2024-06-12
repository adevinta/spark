import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItemContext'

export interface AccordionItemContentProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const ItemContent = forwardRef<HTMLDivElement, AccordionItemContentProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { getItemContentProps } = useAccordionContext()
    const { value, disabled } = useAccordionItemContext()

    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        {...mergeProps(getItemContentProps({ value, ...(disabled && { disabled }) }), {
          className: cx(
            'overflow-hidden p-lg text-body-1 text-on-surface',
            'data-[state=closed]:hidden',
            className
          ),
          ...props,
        })}
        data-spark-component="accordion-item-content"
      >
        {children}
      </Component>
    )
  }
)

ItemContent.displayName = 'Accordion.ItemContent'
