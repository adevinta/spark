import { forwardRef, PropsWithChildren } from 'react'

import { BadgeItem, BadgeItemProps } from './BadgeItem'

export type BadgeProps = PropsWithChildren<Omit<BadgeItemProps, 'type'>>

export const Badge = forwardRef<HTMLElement, BadgeProps>(({ children, ...props }, ref) => {
  const isStandalone = !children

  return isStandalone ? (
    <BadgeItem ref={ref} type="standalone" {...props} />
  ) : (
    <div className="relative inline-flex">
      {children}
      <BadgeItem ref={ref} {...props} />
    </div>
  )
})

Badge.displayName = 'Badge'
