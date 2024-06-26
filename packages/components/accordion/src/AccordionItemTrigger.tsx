import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItemContext'

export interface AccordionItemTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
}

export const ItemTrigger = forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
  ({ asChild = false, children, className, ...props }, ref) => {
    const { getItemTriggerProps } = useAccordionContext()
    const { value, disabled } = useAccordionItemContext()

    const Component = asChild ? Slot : 'button'

    const localProps = {
      ...props,
      className: cx(
        'relative flex gap-lg justify-between items-center min-h-sz-48',
        'w-full px-lg py-md text-left text-headline-2 text-on-surface rounded-[inherit] data-[state=open]:rounded-b-none',
        'hover:enabled:bg-surface-hovered focus:bg-surface-hovered',
        'focus-visible:u-ring focus-visible:outline-none focus-visible:z-raised',
        'disabled:opacity-dim-3 disabled:cursor-not-allowed',
        className
      ),
    }

    const mergedProps = mergeProps(
      getItemTriggerProps({ value, ...(disabled && { disabled }) }),
      localProps
    )

    const isOpen = !!mergedProps['aria-expanded']

    return (
      <Component ref={ref} data-spark-component="accordion-item-trigger" {...mergedProps}>
        <div className="flex items-center gap-lg">{children}</div>
        <Icon
          intent="neutral"
          className={cx('shrink-0 rotate-0 duration-100 ease-in motion-reduce:transition-none', {
            'rotate-180': isOpen,
          })}
          size="sm"
        >
          <ArrowHorizontalDown />
        </Icon>
      </Component>
    )
  }
)

ItemTrigger.displayName = 'Accordion.ItemTrigger'
