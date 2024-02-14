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
    const { isOpen, getMenuProps, hasPopover, setLastInteractionType } = useComboboxContext()

    const { ref: downshiftRef, ...downshiftMenuProps } = getMenuProps({
      onMouseMove: () => {
        setLastInteractionType('mouse')
      },
    })

    const ref = useMergeRefs(forwardedRef, downshiftRef)

    return (
      <ul
        ref={ref}
        className={cx(
          className,
          'flex flex-col',
          isOpen ? 'block' : 'pointer-events-none opacity-0',
          hasPopover && 'p-lg'
        )}
        {...props}
        {...downshiftMenuProps}
        data-spark-component="combobox-items"
      >
        {children}
      </ul>
    )
  }
)

Items.displayName = 'Combobox.Items'
