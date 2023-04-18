import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { spinnerVariants, SpinnerVariantsProps } from './Spinner.variants'

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'>, SpinnerVariantsProps {
  label?: string
}

export const Spinner = forwardRef<HTMLDivElement, PropsWithChildren<SpinnerProps>>(
  ({ className, size, intent, label, isBackgroundVisible, ...others }, ref) => {
    return (
      <div
        data-spark-component="spinner"
        ref={ref}
        className={spinnerVariants({ className, size, intent, isBackgroundVisible })}
        {...others}
      >
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </div>
    )
  }
)
