import { Collapsible } from '@spark-ui/collapsible'
import { createSplitProps } from '@spark-ui/internal-utils'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItemContext'

export interface AccordionItemContentProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

const splitVisibilityProps = createSplitProps<{
  hidden?: boolean
  'data-state'?: string
}>()

export const ItemContent = forwardRef<HTMLDivElement, AccordionItemContentProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const accordion = useAccordionContext()
    const accordionItem = useAccordionItemContext()

    const localProps = {
      className: cx(
        'p-lg duration-50 transition-all text-body-1 text-on-surface',
        'data-[state=closed]:py-none',
        className
      ),
      asChild,
      ...props,
    }
    const contentProps = accordion.getItemContentProps({
      value: accordionItem.value,
      ...(accordionItem.disabled && { disabled: accordionItem.disabled }),
    })

    const [, itemContentProps] = splitVisibilityProps(contentProps, ['hidden', 'data-state'])

    const mergedProps = mergeProps(itemContentProps, localProps)

    return (
      <Collapsible.Content ref={ref} data-spark-component="accordion-item-content" {...mergedProps}>
        {children}
      </Collapsible.Content>
    )
  }
)

ItemContent.displayName = 'Accordion.ItemContent'
