import { forwardRef, PropsWithChildren } from 'react'

import { BadgeItem, BadgeItemProps } from './BadgeItem'

export interface BadgeProps extends PropsWithChildren<Omit<BadgeItemProps, 'type'>> {
  /**
   * Classname definition for the component wrapper. Not applying for standalone badges,
   * only for those that have children.
   */
  wrapperClassName?: string
}

export const Badge = forwardRef<HTMLElement, BadgeProps>(
  ({ children, wrapperClassName, ...props }, ref) => {
    const isStandalone = !children
    const baseClassName = 'relative flex'
    const className = wrapperClassName ? `${baseClassName} ${wrapperClassName}` : baseClassName

    return isStandalone ? (
      <BadgeItem ref={ref} type="standalone" {...props} />
    ) : (
      <div className={className}>
        {children}
        <BadgeItem ref={ref} {...props} />
      </div>
    )
  }
)

Badge.displayName = 'Badge'
