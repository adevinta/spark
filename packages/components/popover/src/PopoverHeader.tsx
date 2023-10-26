import { useId } from '@radix-ui/react-id'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactNode, useLayoutEffect } from 'react'

import { usePopover } from './PopoverContext'

export interface HeaderProps {
  children: ReactNode
  className?: string
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const id = useId()
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
