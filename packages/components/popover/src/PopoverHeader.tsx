import { cx } from 'class-variance-authority'
import { forwardRef, type ReactNode, useId, useLayoutEffect } from 'react'

import { usePopover } from './PopoverContext'

export interface HeaderProps {
  children: ReactNode
  className?: string
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const id = `:popover-header-${useId()}`
    const { setHeaderId } = usePopover()

    useLayoutEffect(() => {
      setHeaderId(id)

      return () => setHeaderId(null)
    }, [id, setHeaderId])

    return (
      <header id={id} ref={ref} className={cx('mb-md text-headline-2', className)} {...rest}>
        {children}
      </header>
    )
  }
)

Header.displayName = 'Popover.Header'
