import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type LabelRequiredIndicatorProps = ComponentPropsWithoutRef<'span'>

export const LabelRequiredIndicator = forwardRef<HTMLSpanElement, LabelRequiredIndicatorProps>(
  ({ className, children = '*', ...others }, ref) => {
    return (
      <span
        ref={ref}
        data-spark-component="label-required-indicator"
        role="presentation"
        aria-hidden="true"
        className={cx(className, 'text-caption text-on-surface/dim-3')}
        {...others}
      >
        {children}
      </span>
    )
  }
)

LabelRequiredIndicator.displayName = 'Label.RequiredIndicator'
