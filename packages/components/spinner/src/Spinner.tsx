import { VisuallyHidden } from '@spark-ui/visuall-hidden'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { spinnerVariants, SpinnerVariantsProps } from './Spinner.variants'

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'>, SpinnerVariantsProps {
  label?: string
}

export const Spinner = forwardRef<HTMLDivElement, PropsWithChildren<SpinnerProps>>(
  ({ className, size, intent, label, ...others }, ref) => {
    return (
      <div ref={ref} className={spinnerVariants({ className, size, intent })} {...others}>
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </div>
    )
  }
)
