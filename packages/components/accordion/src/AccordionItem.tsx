import { Collapsible } from '@spark-ui/collapsible'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useAccordionContext } from './Accordion'
import { AccordionItemProvider } from './AccordionItemContext'

export interface AccordionItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string
  asChild?: boolean
  disabled?: boolean
}

export const Item = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ asChild = false, className, children, disabled = false, value, ...props }, ref) => {
    const accordion = useAccordionContext()

    const localProps = {
      className: cx(
        'relative first:rounded-t-lg last:rounded-b-lg',
        '[&:not(:last-child)]:border-b-none',
        { 'border-sm border-outline': accordion.design === 'outlined' },
        className
      ),
      asChild,
      ...props,
    }

    const itemProps = accordion.getItemProps({ value, ...(disabled && { disabled }) })
    const mergedProps = mergeProps(itemProps, localProps)

    const item = accordion.getItemState({ value })
    const itemContentProps = accordion.getItemContentProps({ value })

    return (
      <AccordionItemProvider value={value} disabled={disabled}>
        <Collapsible
          ref={ref}
          open={item.expanded}
          data-spark-component="accordion-item"
          ids={{ content: itemContentProps.id }}
          {...mergedProps}
        >
          {children}
        </Collapsible>
      </AccordionItemProvider>
    )
  }
)

Item.displayName = 'Accordion.Item'
