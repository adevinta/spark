import { forwardRef, HTMLAttributes, PropsWithRef } from 'react'

import { styles, type StylesProps } from './BadgeItem.styles'
import {
  DEFAULT_INTENT,
  DEFAULT_LABELS,
  DEFAULT_OVERFLOW_COUNT,
  DEFAULT_SIZE,
  DEFAULT_TYPE,
} from './config'

interface AccessibilityLabel {
  noCount?: string
  singleCount?: string
  pluralCount?: string
  moreThanOverflowCount?: string
}

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
   * Object containing custom labels for accessibility purposes than can be set for each count case.
   */
  label?: AccessibilityLabel
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
      label = DEFAULT_LABELS,
      className,
      ...others
    },
    ref
  ) => {
    const hasOverflow = count && count > overflowCount
    const regularCountLabel =
      count && count > 1 ? label.pluralCount?.replace('%COUNT%', `${count}`) : label.singleCount
    const countLabel = hasOverflow
      ? label.moreThanOverflowCount?.replace('%OVERFLOW_COUNT%', `${overflowCount}`)
      : regularCountLabel

    return (
      <span
        ref={ref}
        data-spark-component="badge"
        aria-label={count ? countLabel : label.noCount}
        role="status"
        className={styles({
          intent,
          size,
          type,
          className,
        })}
        {...others}
      >
        {hasOverflow ? `${overflowCount}+` : count}
      </span>
    )
  }
)

BadgeItem.displayName = 'BadgeItem'
