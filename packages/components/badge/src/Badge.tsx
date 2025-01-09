import { PropsWithChildren, RefObject } from 'react'

import { BadgeItem, BadgeItemProps } from './BadgeItem'

export type BadgeProps = PropsWithChildren<Omit<BadgeItemProps, 'type'>> & {
  ref?: RefObject<HTMLElement>
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  const isStandalone = !children

  return isStandalone ? (
    <BadgeItem type="standalone" {...props} />
  ) : (
    <div className="relative inline-flex">
      {children}
      <BadgeItem {...props} />
    </div>
  )
}

Badge.displayName = 'Badge'
