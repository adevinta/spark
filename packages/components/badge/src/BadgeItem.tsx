import { forwardRef, HTMLAttributes, PropsWithRef } from 'react'

import { styles, type StylesProps } from './BadgeItem.styles'

const DEFAULT_OVERFLOW_COUNT = 99

export interface BadgeItemProps extends PropsWithRef<HTMLAttributes<HTMLSpanElement>>, StylesProps {
  /**
   * Numeric value used as indicator inside the component.
   */
  count?: number
  /**
   * Maximum numeric value to be dispayed as a count value.
   */
  overflowCount?: number
}

export const BadgeItem = forwardRef<HTMLSpanElement, BadgeItemProps>(
  (
    {
      intent = 'error',
      size = 'md',
      type = 'relative',
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
        {count > overflowCount ? `${overflowCount}+` : count}
      </span>
    )
  }
)

BadgeItem.displayName = 'BadgeItem'
