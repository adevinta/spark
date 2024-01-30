import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { cx } from 'class-variance-authority'
import { CSSProperties, forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
  className?: string
}

export const Items = forwardRef(
  ({ children, className, ...props }: ItemsProps, forwardedRef: Ref<HTMLUListElement>) => {
    const { isOpen, getMenuProps, hasPopover, setLastInteractionType } = useDropdownContext()

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
        /**
         * When used inside a Radix dialog/drawer, the focus trap behaviour of Radix prevent scrolling and hovering inside absolutely positioned elements in the dialog.
         * It does programatically in JS using the `style` attribute.
         *
         * Issue is known but there is no clear fix in sight: https://github.com/radix-ui/primitives/issues/1159
         *
         * A solution would be to make an abstraction of `Dialog.Overlay` instead of using the radix one, but that would mean managing body scroll freeze and scrollbar shifting ourselves.
         *
         */
        style={{ ...(props as { style: CSSProperties }).style, pointerEvents: undefined }}
        data-spark-component="dropdown-items"
      >
        {children}
      </ul>
    )
  }
)

Items.displayName = 'Dropdown.Items'
