import { cx } from 'class-variance-authority'
import { forwardRef, type Ref } from 'react'

interface DividerProps {
  className?: string
}

export const Divider = forwardRef(
  ({ className }: DividerProps, forwardedRef: Ref<HTMLDivElement>) => {
    return <div ref={forwardedRef} className={cx('my-md border-b-sm border-outline', className)} />
  }
)

Divider.displayName = 'Dropdown.Divider'
