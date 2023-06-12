import { Label as LabelPrimitive, LabelProps as LabelPrimitiveProps } from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export type LabelProps = LabelPrimitiveProps

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...others }, ref) => {
  return (
    <LabelPrimitive
      ref={ref}
      data-spark-component="label"
      className={cx('text-body-1', className)}
      {...others}
    />
  )
})
