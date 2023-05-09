import { Label as LabelPrimitive } from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...others }, ref) => {
  return <LabelPrimitive ref={ref} className={cx('text-body-1', className)} {...others} />
})
