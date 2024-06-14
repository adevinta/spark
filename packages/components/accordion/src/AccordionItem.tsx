import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef, type Ref } from 'react'

import { useAccordionContext } from './Accordion'
import { AccordionItemProvider } from './AccordionItemContext'

export interface AccordionItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string
  asChild?: boolean
  disabled?: boolean
}

export const Item = forwardRef(
  ({ children, ...props }: AccordionItemProps, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <AccordionItemProvider value={props.value} disabled={props.disabled}>
        <InnerItem ref={forwardedRef} {...props}>
          {children}
        </InnerItem>
      </AccordionItemProvider>
    )
  }
)

const InnerItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ asChild = false, className, children, disabled = false, value, ...props }, ref) => {
    const { getItemProps } = useAccordionContext()

    const Component = asChild ? Slot : 'div'

    const styles = cx(
      'relative border-sm border-outline',
      'first:rounded-t-lg last:rounded-b-lg',
      '[&:not(:last-child)]:border-b-none',

      className
    )

    return (
      <Component
        ref={ref}
        {...mergeProps(getItemProps({ value, ...(disabled && { disabled }) }), {
          className: styles,
          ...props,
        })}
        data-spark-component="accordion-item"
      >
        {children}
      </Component>
    )
  }
)

Item.displayName = 'Accordion.Item'
