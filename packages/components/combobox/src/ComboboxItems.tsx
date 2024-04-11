import { Spinner } from '@spark-ui/spinner'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref, useLayoutEffect, useRef } from 'react'

import { useComboboxContext } from './ComboboxContext'

interface ItemsProps {
  children: ReactNode
  className?: string
}

export const Items = forwardRef(
  ({ children, className, ...props }: ItemsProps, forwardedRef: Ref<HTMLUListElement>) => {
    const ctx = useComboboxContext()

    const { ref: downshiftRef, ...downshiftMenuProps } = ctx.getMenuProps({
      onMouseMove: () => {
        ctx.setLastInteractionType('mouse')
      },
    })

    const innerRef = useRef<HTMLElement>(null)

    const ref = useMergeRefs(forwardedRef, downshiftRef, innerRef)

    const isOpen = ctx.hasPopover ? ctx.isOpen : true

    useLayoutEffect(() => {
      if (!ctx.hasPopover) return

      if (innerRef.current?.parentElement) {
        innerRef.current.parentElement.style.pointerEvents = isOpen ? '' : 'none'
      }
    }, [isOpen, ctx.hasPopover])

    return (
      <ul
        ref={ref}
        className={cx(
          className,
          'flex flex-col',
          isOpen ? 'block' : 'pointer-events-none invisible opacity-0',
          ctx.hasPopover && 'p-lg',
          ctx.isLoading && 'items-center overflow-y-auto'
        )}
        {...props}
        {...downshiftMenuProps}
        aria-busy={ctx.isLoading}
        data-spark-component="combobox-items"
      >
        {ctx.isLoading ? <Spinner size="sm" /> : children}
      </ul>
    )
  }
)

Items.displayName = 'Combobox.Items'
