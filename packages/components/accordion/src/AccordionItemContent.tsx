import { Collapsible } from '@spark-ui/collapsible'
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
    const accordion = useAccordionContext()
    const accordionItem = useAccordionItemContext()

    const localProps = {
      className: cx('p-lg text-body-1 text-on-surface', className),
      asChild,
      ...props,
    }
    const contentProps = accordion.getItemContentProps({
      value: accordionItem.value,
      ...(accordionItem.disabled && { disabled: accordionItem.disabled }),
    })
    const mergedProps = mergeProps(contentProps, localProps)

    return (
      <Collapsible.Content ref={ref} data-spark-component="accordion-item-content" {...mergedProps}>
        {children}
      </Collapsible.Content>
    )
  }
)

ItemContent.displayName = 'Accordion.ItemContent'
