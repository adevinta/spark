import { useId } from '@radix-ui/react-id'
import { forwardRef, ReactNode, useLayoutEffect } from 'react'

import { usePopover } from './PopoverContext'

export interface HeaderProps {
  children: ReactNode
  className?: string
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, ...rest }) => {
    const id = useId()
    const { setHeaderId } = usePopover()

    useLayoutEffect(() => {
      setHeaderId(id)

      return () => setHeaderId(null)
    }, [])

    return (
      <header id={id} className="mb-md text-headline-2" {...rest}>
        {children}
      </header>
    )
  }
)

Header.displayName = 'Popover.Header'
