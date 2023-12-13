import { cx } from 'class-variance-authority'
import React, { ForwardedRef, forwardRef, ReactNode } from 'react'

interface HorizontalGroupProps {
  children: ReactNode
}

export const Group = forwardRef(
  ({ children }: HorizontalGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={cx(
          'flex h-sz-44',
          '[&>*:not(:first-child):not(:last-child)]:!rounded-none',
          // '[&>*:not(:first-child)]:ml-[-1px]',
          '[&>*:first-child]:!rounded-r-none',
          '[&>*:last-child]:!rounded-l-none'
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
