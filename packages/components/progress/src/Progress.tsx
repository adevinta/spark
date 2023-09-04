import {
  Progress as ProgressPrimitive,
  ProgressProps as ProgressPrimitiveProps,
} from '@radix-ui/react-progress'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef, PropsWithChildren, useMemo, useState } from 'react'

import { ProgressBar } from './ProgressBar'
import { ProgressContext } from './ProgressContext'

export interface ProgressProps extends ProgressPrimitiveProps {
  isIndeterminate?: boolean
}

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive>,
  PropsWithChildren<ProgressProps>
>(
  (
    {
      className,
      value: valueProp,
      max = 100,
      isIndeterminate = false,
      children = <ProgressBar />,
      ...others
    },
    ref
  ) => {
    const [labelId, setLabelId] = useState<string>()

    const value = useMemo(() => {
      return { value: valueProp ?? 0, max, isIndeterminate, onLabelId: setLabelId }
    }, [max, valueProp, isIndeterminate, setLabelId])

    return (
      <ProgressContext.Provider data-spark-component="progress" value={value}>
        <ProgressPrimitive
          ref={ref}
          className={cx('flex flex-col gap-sm', className)}
          value={valueProp}
          aria-labelledby={labelId}
          max={max}
          {...others}
        >
          {children}
        </ProgressPrimitive>
      </ProgressContext.Provider>
    )
  }
)

Progress.displayName = 'Progress'