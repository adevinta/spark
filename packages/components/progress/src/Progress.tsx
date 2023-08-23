import { useId } from '@radix-ui/react-id'
import {
  Progress as ProgressPrimitive,
  ProgressProps as ProgressPrimitiveProps,
} from '@radix-ui/react-progress'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef, PropsWithChildren, useMemo, useState } from 'react'

import { ProgressContext } from './ProgressContext'

export interface ProgressProps extends ProgressPrimitiveProps {
  isIndeterminate?: boolean
}

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive>,
  PropsWithChildren<ProgressProps>
>(
  (
    { id: idProp, className, value: valueProp, max = 100, isIndeterminate = false, ...others },
    ref
  ) => {
    const id = useId(idProp)
    const [labelId, setLabelId] = useState<string | undefined>()

    const value = useMemo(() => {
      return { value: valueProp ?? 0, max, isIndeterminate, onLabelId: setLabelId }
    }, [max, valueProp, isIndeterminate, setLabelId])

    return (
      <ProgressContext.Provider data-spark-component="progress" value={value}>
        <ProgressPrimitive
          ref={ref}
          className={cx('flex flex-col gap-sm', className)}
          id={id}
          value={valueProp}
          aria-labelledby={labelId}
          max={max}
          {...others}
        />
      </ProgressContext.Provider>
    )
  }
)

Progress.displayName = 'Progress'
