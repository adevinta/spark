import { useId } from '@radix-ui/react-id'
import {
  Progress as ProgressPrimitive,
  ProgressProps as ProgressPrimitiveProps,
} from '@radix-ui/react-progress'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef, PropsWithChildren, useMemo, useState } from 'react'

import { ProgressContext } from './ProgressContext'

export type ProgressProps = ProgressPrimitiveProps

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive>,
  PropsWithChildren<ProgressProps>
>(({ id: idProp, className, value: valueProp, 'aria-label': ariaLabel, ...others }, ref) => {
  const id = useId(idProp)
  const [labelId, setLabelId] = useState<string | undefined>()
  const value = valueProp ?? 0
  const labeledby = [ariaLabel ? id : undefined, labelId].filter(Boolean).join(' ') || undefined

  const current = useMemo(() => {
    return { onLabelId: setLabelId, value }
  }, [value, setLabelId])

  return (
    <ProgressContext.Provider data-spark-component="progress" value={current}>
      <ProgressPrimitive
        ref={ref}
        className={cx('flex flex-col gap-sm', className)}
        id={id}
        value={value}
        aria-label={ariaLabel}
        aria-labelledby={labeledby}
        {...others}
      />
    </ProgressContext.Provider>
  )
})

Progress.displayName = 'Progress'
