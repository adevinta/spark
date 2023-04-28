import { forwardRef, PropsWithChildren } from 'react'

import { BadgeItem, BadgeItemProps } from './BadgeItem'

export type BadgeProps = PropsWithChildren<BadgeItemProps>

export const Badge = forwardRef<HTMLDivElement | HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }, ref) => {
    const isStandalone = !children

    return isStandalone ? (
      <BadgeItem type="standalone" {...props} />
    ) : (
      <div ref={ref} className="relative flex">
        {children}
        <BadgeItem {...props} />
      </div>
    )
  }
)

Badge.displayName = 'Badge'
