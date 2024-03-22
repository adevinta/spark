import { Spinner } from '@spark-ui/spinner'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

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

    const ref = useMergeRefs(forwardedRef, downshiftRef)

    const isOpen = ctx.hasPopover ? ctx.isOpen : true

    return (
      <ul
        ref={ref}
        className={cx(
          className,
          'relative flex flex-col',
          isOpen ? 'block' : 'pointer-events-none opacity-0',
          ctx.hasPopover && 'p-lg'
        )}
        {...props}
        {...downshiftMenuProps}
        aria-busy={ctx.isLoading}
        data-spark-component="combobox-items"
      >
        {ctx.isLoading && <Spinner size="sm" className="absolute right-lg" />}
        {children}
      </ul>
    )
  }
)

Items.displayName = 'Combobox.Items'
