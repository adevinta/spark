import { forwardRef, PropsWithChildren } from 'react'

import { BadgeItem, BadgeItemProps } from './BadgeItem'

export type BadgeProps = PropsWithChildren<Omit<BadgeItemProps, 'type'>>

export const Badge = forwardRef<HTMLElement, BadgeProps>(({ children, ...props }) => {
  const isStandalone = !children

  return isStandalone ? (
    <BadgeItem type="standalone" {...props} />
  ) : (
    <div className="relative flex">
      {children}
      <BadgeItem {...props} />
    </div>
  )
})

Badge.displayName = 'Badge'
