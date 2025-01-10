import { Label as LabelPrimitive, LabelProps as LabelPrimitiveProps } from '@radix-ui/react-label'
import { cx } from 'class-variance-authority'
import { Ref } from 'react'

export type LabelProps = LabelPrimitiveProps & {
  ref?: Ref<HTMLLabelElement>
}

export const Label = ({ className, ref, ...others }: LabelProps) => {
  return (
    <LabelPrimitive
      ref={ref}
      data-spark-component="label"
      className={cx('text-body-1', className)}
      {...others}
    />
  )
}

Label.displayName = 'Label'
