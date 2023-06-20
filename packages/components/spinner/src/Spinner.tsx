import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { spinnerStyles, SpinnerStylesProps } from './Spinner.styles'

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'>, SpinnerStylesProps {
  label?: string
}

export const Spinner = forwardRef<HTMLDivElement, PropsWithChildren<SpinnerProps>>(
  (
    { className, size = 'current', intent = 'current', label, isBackgroundVisible, ...others },
    ref
  ) => {
    return (
      <div
        role="status"
        data-spark-component="spinner"
        ref={ref}
        className={spinnerStyles({ className, size, intent, isBackgroundVisible })}
        {...others}
      >
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </div>
    )
  }
)
