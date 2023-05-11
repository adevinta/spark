import { forwardRef, HTMLAttributes, PropsWithRef } from 'react'

import { styles, type StylesProps } from './BadgeItem.styles'
import { DEFAULT_INTENT, DEFAULT_OVERFLOW_COUNT, DEFAULT_SIZE, DEFAULT_TYPE } from './config'

export interface BadgeItemProps
  extends PropsWithRef<Omit<HTMLAttributes<HTMLSpanElement>, 'aria-label'>>,
    StylesProps {
  /**
   * Numeric value used as indicator inside the component.
   */
  count?: number
  /**
   * Maximum numeric value to be dispayed as a count value.
   */
  overflowCount?: number
  /**
   * A custom label for accessibility purposes. It can also be defined as a builder function
   * to handle dynamic inner data to create a custom label.
   */
  'aria-label'?:
    | string
    | (({ count, overflowCount }: { count?: number; overflowCount?: number }) => string)
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
      'aria-label': label,
      className,
      ...others
    },
    ref
  ) => {
    const hasOverflow = count && count > overflowCount
    const ariaLabel = typeof label === 'function' ? label({ count, overflowCount }) : label
    const props = { ...others, 'aria-label': ariaLabel }

    return (
      <span
        ref={ref}
        data-spark-component="badge"
        role="status"
        className={styles({
          intent,
          size,
          type,
          className,
        })}
        {...props}
      >
        {hasOverflow ? `${overflowCount}+` : count}
      </span>
    )
  }
)

BadgeItem.displayName = 'BadgeItem'
