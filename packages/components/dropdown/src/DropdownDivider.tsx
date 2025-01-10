import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

interface DividerProps {
  className?: string
  ref?: RefObject<HTMLDivElement>
}

export const Divider = ({ className, ref: forwardedRef }: DividerProps) => {
  return <div ref={forwardedRef} className={cx('my-md border-b-sm border-outline', className)} />
}

Divider.displayName = 'Dropdown.Divider'
