import { forwardRef, HTMLAttributes, PropsWithRef } from 'react'

import { styles, type StylesProps } from './BadgeItem.styles'
import { DEFAULT_INTENT, DEFAULT_OVERFLOW_COUNT, DEFAULT_SIZE, DEFAULT_TYPE } from './config'

export interface BadgeItemProps extends PropsWithRef<HTMLAttributes<HTMLSpanElement>>, StylesProps {
  /**
   * Numeric value used as indicator inside the component.
   */
  count?: number
  /**
   * Maximum numeric value to be dispayed as a count value.
   */
  overflowCount?: number
  /**
   * Describes the way the component is displayed: relative to another element or just standalone.
   */
  type?: 'relative' | 'standalone'
}

export const BadgeItem = forwardRef<HTMLSpanElement, BadgeItemProps>(
  (
    {
      intent = DEFAULT_INTENT,
      size = DEFAULT_SIZE,
      type = DEFAULT_TYPE,
      count,
      overflowCount = DEFAULT_OVERFLOW_COUNT,
      className,
      ...others
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={styles({
          intent,
          size,
          type,
          className,
        })}
        {...others}
      >
        {count && count > overflowCount ? `${overflowCount}+` : count}
      </span>
    )
  }
)

BadgeItem.displayName = 'BadgeItem'
